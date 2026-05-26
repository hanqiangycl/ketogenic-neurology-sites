import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, extname, join, posix as posixPath, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { conditionOrder, locales, reviewDates, siteBuilds, sources } from "./content.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distRoot = join(root, "dist");
const publicDir = join(root, "public");
const sharedStyles = await readFile(join(__dirname, "styles.css"), "utf8");
const sharedScript = await readFile(join(__dirname, "site.js"), "utf8");

const pageKinds = {
  home: "home",
  condition: "condition",
  about: "about",
  contact: "contact",
  evidence: "evidence",
  disclaimer: "disclaimer"
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtml(value) {
  return String(value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function localeBase(locale) {
  return locale.code === "en" ? "" : `/${locale.code}`;
}

function pathFor(locale, kind, conditionKey) {
  const base = localeBase(locale);
  if (kind === pageKinds.home) return `${base || ""}/`;
  if (kind === pageKinds.about) return `${base}/about/`;
  if (kind === pageKinds.contact) return `${base}/contact/`;
  if (kind === pageKinds.evidence) return `${base}/evidence/`;
  if (kind === pageKinds.disclaimer) return `${base}/disclaimer/`;
  if (kind === pageKinds.condition) {
    return `${base}/${locale.conditions[conditionKey].slug}/`;
  }
  return `${base}/`;
}

function localFilePathFor(pagePath) {
  return pagePath.endsWith("/") ? `${pagePath}index.html` : pagePath;
}

function localHref(fromPagePath, targetPath) {
  if (/^(https?:|mailto:|tel:)/.test(targetPath) || targetPath.startsWith("#")) return targetPath;
  if (!targetPath.startsWith("/")) return targetPath;

  const fromDir = posixPath.dirname(localFilePathFor(fromPagePath));
  const targetFile = targetPath.endsWith("/") ? `${targetPath}index.html` : targetPath;
  const href = posixPath.relative(fromDir, targetFile);
  return href || posixPath.basename(targetFile);
}

function outputFileFor(siteRoot, pagePath) {
  if (pagePath === "/") return join(siteRoot, "index.html");
  return join(siteRoot, pagePath.replace(/^\//, ""), "index.html");
}

function linkFor(locale, kind, conditionKey) {
  return pathFor(locale, kind, conditionKey);
}

function hrefFor(fromPagePath, locale, kind, conditionKey) {
  return localHref(fromPagePath, linkFor(locale, kind, conditionKey));
}

function canonicalFor(site, locale, kind, conditionKey) {
  return `${site.canonicalBase}${pathFor(locale, kind, conditionKey)}`;
}

function conditionList(locale) {
  return conditionOrder.map((key) => locale.conditions[key]);
}

function listItems(items) {
  return `<ul class="evidence-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function sourceLinks(condition) {
  return condition.sources
    .map((sourceKey) => {
      const source = sources[sourceKey];
      return `
        <li>
          <a href="${source.url}">${escapeHtml(source.title)}</a>
          <span>${escapeHtml(source.publication)}</span>
        </li>`;
    })
    .join("");
}

function alternateLinks(site, kind, conditionKey) {
  const links = site.locales.map((code) => {
    const locale = locales[code];
    return `<link rel="alternate" hreflang="${locale.htmlLang}" href="${canonicalFor(site, locale, kind, conditionKey)}">`;
  });

  const fallbackLocale = locales[site.locales[0]];
  links.push(`<link rel="alternate" hreflang="x-default" href="${canonicalFor(site, fallbackLocale, kind, conditionKey)}">`);
  return links.join("\n    ");
}

function conditionNav(locale, currentPath) {
  return conditionOrder
    .map((key) => {
      const condition = locale.conditions[key];
      return `<a href="${hrefFor(currentPath, locale, pageKinds.condition, key)}">${escapeHtml(condition.label)}</a>`;
    })
    .join("");
}

function languageLinks(site, locale, kind, conditionKey, currentPath) {
  if (site.locales.length <= 1) return "";

  return `
    <div class="language-links" aria-label="Language">
      ${site.locales
        .map((code) => {
          const target = locales[code];
          const active = target.code === locale.code ? " aria-current=\"true\"" : "";
          return `<a${active} href="${hrefFor(currentPath, target, kind, conditionKey)}">${escapeHtml(target.name)}</a>`;
        })
        .join("")}
    </div>`;
}

function domainLink(site, locale) {
  if (site.id === "international") {
    return `<a class="domain-link" href="https://ketoneurologie.ch/de/">${escapeHtml(locale.nav.swissSite)}</a>`;
  }
  return `<a class="domain-link" href="https://ketoneurology.com/">${escapeHtml(locale.nav.internationalSite)}</a>`;
}

function header(site, locale, kind, conditionKey, currentPath) {
  return `
    <header class="site-header">
      <a class="brand" href="${hrefFor(currentPath, locale, pageKinds.home)}" aria-label="${escapeHtml(locale.siteName)} home">
        <span class="brand-mark" aria-hidden="true">K</span>
        <span>
          <strong>${escapeHtml(locale.siteName)}</strong>
          <small>${escapeHtml(locale.shared.notAdvice)}</small>
        </span>
      </a>
      <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-label="${escapeHtml(locale.nav.menu)}">
        <span aria-hidden="true"></span>
      </button>
      <nav class="main-nav" data-nav data-open="false" aria-label="Primary">
        <details class="condition-menu">
          <summary>${escapeHtml(locale.nav.conditions)}</summary>
          <div class="condition-menu-panel">${conditionNav(locale, currentPath)}</div>
        </details>
        <a href="${hrefFor(currentPath, locale, pageKinds.evidence)}">${escapeHtml(locale.nav.evidence)}</a>
        <a href="${hrefFor(currentPath, locale, pageKinds.about)}">${escapeHtml(locale.nav.about)}</a>
        <a href="${hrefFor(currentPath, locale, pageKinds.contact)}">${escapeHtml(locale.nav.contact)}</a>
        <a href="${hrefFor(currentPath, locale, pageKinds.disclaimer)}">${escapeHtml(locale.nav.disclaimer)}</a>
        ${domainLink(site, locale)}
        ${languageLinks(site, locale, kind, conditionKey, currentPath)}
      </nav>
    </header>`;
}

function footer(locale, currentPath) {
  return `
    <footer class="site-footer">
      <div>
        <strong>${escapeHtml(locale.siteName)}</strong>
        <p>${escapeHtml(locale.disclaimer.short)}</p>
      </div>
      <div>
        <span>${escapeHtml(locale.shared.lastUpdated)}: ${escapeHtml(reviewDates[locale.code])}</span>
        <a href="${hrefFor(currentPath, locale, pageKinds.contact)}">${escapeHtml(locale.nav.contact)}</a>
        <a href="${hrefFor(currentPath, locale, pageKinds.disclaimer)}">${escapeHtml(locale.shared.disclaimerTitle)}</a>
      </div>
    </footer>`;
}

function layout({ site, locale, kind, conditionKey, title, description, body, schema, pagePathOverride }) {
  const canonicalPath = pathFor(locale, kind, conditionKey);
  const pagePath = pagePathOverride ?? canonicalPath;
  const canonical = canonicalFor(site, locale, kind, conditionKey);
  const fullTitle = title.includes(locale.siteName) ? title : `${title} | ${locale.siteName}`;

  return `<!doctype html>
<html lang="${locale.htmlLang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonical}">
    ${alternateLinks(site, kind, conditionKey)}
    <meta property="og:title" content="${escapeHtml(fullTitle)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${site.canonicalBase}/assets/ketone-neurology-hero.png">
    <link rel="stylesheet" href="${localHref(pagePath, "/assets/styles.css")}">
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <a class="skip-link" href="#content">Skip to content</a>
    ${header(site, locale, kind, conditionKey, pagePath)}
    <main id="content">
      ${body}
    </main>
    ${footer(locale, pagePath)}
    <script src="${localHref(pagePath, "/assets/site.js")}" defer></script>
  </body>
</html>`;
}

function baseSchema(site, locale, kind, conditionKey, title, description) {
  return {
    "@context": "https://schema.org",
    "@type": kind === pageKinds.condition ? "MedicalWebPage" : "WebPage",
    name: title,
    description,
    url: canonicalFor(site, locale, kind, conditionKey),
    inLanguage: locale.htmlLang,
    publisher: {
      "@type": "Organization",
      name: locale.siteName,
      url: site.canonicalBase
    },
    medicalAudience: kind === pageKinds.condition ? "Clinician, researcher, patient education" : undefined,
    about: kind === pageKinds.condition ? locale.conditions[conditionKey].label : locale.siteName
  };
}

function hero(locale, currentPath) {
  return `
    <section class="hero" style="--hero-image: url('${localHref(currentPath, "/assets/ketone-neurology-hero.png")}')">
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(locale.hero.eyebrow)}</p>
        <h1>${escapeHtml(locale.hero.title)}</h1>
        <p>${escapeHtml(locale.hero.lead)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#conditions">${escapeHtml(locale.hero.primary)}</a>
          <a class="button secondary" href="${hrefFor(currentPath, locale, pageKinds.disclaimer)}">${escapeHtml(locale.hero.secondary)}</a>
        </div>
      </div>
    </section>`;
}

function conditionCards(locale, currentPath) {
  return conditionOrder
    .map((key) => {
      const condition = locale.conditions[key];
      return `
        <article class="condition-card">
          <span>${escapeHtml(condition.status)}</span>
          <h3>${escapeHtml(condition.label)}</h3>
          <p>${escapeHtml(condition.short)}</p>
          <a href="${hrefFor(currentPath, locale, pageKinds.condition, key)}">${escapeHtml(locale.shared.readPage)}</a>
        </article>`;
    })
    .join("");
}

function disclaimerBand(locale, currentPath) {
  return `
    <section class="notice-band">
      <div>
        <p class="eyebrow">${escapeHtml(locale.shared.disclaimerTitle)}</p>
        <h2>${escapeHtml(locale.disclaimer.short)}</h2>
        <p>${escapeHtml(locale.disclaimer.body)}</p>
      </div>
      <a class="button tertiary" href="${hrefFor(currentPath, locale, pageKinds.disclaimer)}">${escapeHtml(locale.nav.disclaimer)}</a>
    </section>`;
}

function homePage(site, locale, pagePathOverride) {
  const currentPath = pagePathOverride ?? pathFor(locale, pageKinds.home);
  const title = locale.hero.title;
  const description = locale.hero.lead;
  const body = `
    ${hero(locale, currentPath)}
    <section class="intro-section">
      <div>
        <p class="eyebrow">${escapeHtml(locale.shared.currentEvidence)}</p>
        <h2>${escapeHtml(locale.home.introTitle)}</h2>
      </div>
      <div>
        <p>${escapeHtml(locale.home.intro)}</p>
        <p>${escapeHtml(locale.home.evidenceMap)}</p>
      </div>
    </section>
    <section class="condition-grid-section" id="conditions">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(locale.shared.reviewLabel)}</p>
        <h2>${escapeHtml(locale.shared.conditionPages)}</h2>
      </div>
      <div class="condition-grid">${conditionCards(locale, currentPath)}</div>
    </section>
    <section class="about-band">
      <div>
        <p class="eyebrow">${escapeHtml(locale.shared.aboutProject)}</p>
        <h2>${escapeHtml(locale.about.title)}</h2>
      </div>
      <div>
        <p>${escapeHtml(locale.about.body)}</p>
        <p>${escapeHtml(locale.about.second)}</p>
      </div>
    </section>
    ${disclaimerBand(locale, currentPath)}`;

  return layout({
    site,
    locale,
    kind: pageKinds.home,
    title,
    description,
    body,
    schema: baseSchema(site, locale, pageKinds.home, undefined, title, description),
    pagePathOverride
  });
}

function conditionPage(site, locale, key) {
  const currentPath = pathFor(locale, pageKinds.condition, key);
  const condition = locale.conditions[key];
  const title = condition.label;
  const description = `${condition.short} ${condition.standfirst}`;
  const otherCards = conditionOrder
    .filter((item) => item !== key)
    .map((item) => {
      const related = locale.conditions[item];
      return `<a href="${hrefFor(currentPath, locale, pageKinds.condition, item)}">${escapeHtml(related.label)}</a>`;
    })
    .join("");

  const body = `
    <section class="page-hero condition-hero">
      <div>
        <p class="eyebrow">${escapeHtml(locale.shared.evidenceStatus)}</p>
        <h1>${escapeHtml(condition.label)}</h1>
        <p>${escapeHtml(condition.standfirst)}</p>
      </div>
      <aside>
        <span>${escapeHtml(locale.shared.reviewLabel)}</span>
        <strong>${escapeHtml(condition.status)}</strong>
        <small>${escapeHtml(locale.shared.lastUpdated)}: ${escapeHtml(reviewDates[locale.code])}</small>
      </aside>
    </section>
    <section class="condition-layout">
      <article class="condition-content">
        <section class="content-block">
          <h2>${escapeHtml(locale.shared.scientificRationale)}</h2>
          ${listItems(condition.mechanisms)}
        </section>
        <section class="content-block">
          <h2>${escapeHtml(locale.shared.researchSnapshot)}</h2>
          ${listItems(condition.research)}
        </section>
        <section class="content-block">
          <h2>${escapeHtml(locale.shared.clinicalFrame)}</h2>
          ${listItems(condition.clinical)}
        </section>
        <section class="content-block">
          <h2>${escapeHtml(locale.shared.openQuestions)}</h2>
          ${listItems(condition.questions)}
        </section>
        <section class="references-block">
          <h2>${escapeHtml(locale.shared.selectedEvidence)}</h2>
          <ol>${sourceLinks(condition)}</ol>
        </section>
      </article>
      <aside class="side-panel">
        <div>
          <h2>${escapeHtml(locale.shared.allConditions)}</h2>
          <nav>${otherCards}</nav>
        </div>
        <div>
          <h2>${escapeHtml(locale.shared.disclaimerTitle)}</h2>
          <p>${escapeHtml(locale.disclaimer.short)}</p>
          <a href="${hrefFor(currentPath, locale, pageKinds.disclaimer)}">${escapeHtml(locale.nav.disclaimer)}</a>
        </div>
      </aside>
    </section>`;

  return layout({
    site,
    locale,
    kind: pageKinds.condition,
    conditionKey: key,
    title,
    description: stripHtml(description).slice(0, 240),
    body,
    schema: baseSchema(site, locale, pageKinds.condition, key, title, description)
  });
}

function aboutPage(site, locale) {
  const currentPath = pathFor(locale, pageKinds.about);
  const title = locale.about.title;
  const description = locale.about.body;
  const body = `
    <section class="page-hero">
      <div>
        <p class="eyebrow">${escapeHtml(locale.shared.aboutProject)}</p>
        <h1>${escapeHtml(locale.about.title)}</h1>
        <p>${escapeHtml(locale.about.body)}</p>
      </div>
    </section>
    <section class="text-section">
      <p>${escapeHtml(locale.about.second)}</p>
      <p>${escapeHtml(locale.disclaimer.short)}</p>
    </section>
    <section class="condition-grid-section">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(locale.shared.conditionPages)}</p>
        <h2>${escapeHtml(locale.shared.currentEvidence)}</h2>
      </div>
      <div class="condition-grid">${conditionCards(locale, currentPath)}</div>
    </section>`;

  return layout({
    site,
    locale,
    kind: pageKinds.about,
    title,
    description,
    body,
    schema: baseSchema(site, locale, pageKinds.about, undefined, title, description)
  });
}

function disclaimerPage(site, locale) {
  const currentPath = pathFor(locale, pageKinds.disclaimer);
  const title = locale.shared.disclaimerTitle;
  const description = locale.disclaimer.short;
  const body = `
    <section class="page-hero">
      <div>
        <p class="eyebrow">${escapeHtml(locale.nav.disclaimer)}</p>
        <h1>${escapeHtml(locale.shared.disclaimerTitle)}</h1>
        <p>${escapeHtml(locale.disclaimer.short)}</p>
      </div>
    </section>
    <section class="text-section">
      <p>${escapeHtml(locale.disclaimer.body)}</p>
      <p><strong>${escapeHtml(locale.disclaimer.emergency)}</strong></p>
      <p>${escapeHtml(locale.shared.lastUpdated)}: ${escapeHtml(reviewDates[locale.code])}</p>
    </section>`;

  return layout({
    site,
    locale,
    kind: pageKinds.disclaimer,
    title,
    description,
    body,
    schema: baseSchema(site, locale, pageKinds.disclaimer, undefined, title, description)
  });
}

function contactPage(site, locale) {
  const title = locale.contact.title;
  const description = locale.contact.lead;
  const body = `
    <section class="page-hero">
      <div>
        <p class="eyebrow">${escapeHtml(locale.nav.contact)}</p>
        <h1>${escapeHtml(locale.contact.title)}</h1>
        <p>${escapeHtml(locale.contact.lead)}</p>
      </div>
    </section>
    <section class="text-section contact-section">
      <p><strong>${escapeHtml(locale.contact.emailLabel)}:</strong> <a href="mailto:${escapeHtml(locale.contact.email)}">${escapeHtml(locale.contact.email)}</a></p>
      <p>${escapeHtml(locale.contact.note)}</p>
      <p>${escapeHtml(locale.disclaimer.short)}</p>
    </section>`;

  return layout({
    site,
    locale,
    kind: pageKinds.contact,
    title,
    description,
    body,
    schema: baseSchema(site, locale, pageKinds.contact, undefined, title, description)
  });
}

function evidencePage(site, locale) {
  const currentPath = pathFor(locale, pageKinds.evidence);
  const title = locale.evidence.title;
  const description = locale.evidence.lead;
  const groups = conditionOrder
    .map((key) => {
      const condition = locale.conditions[key];
      return `
        <section class="reference-group">
          <h2><a href="${hrefFor(currentPath, locale, pageKinds.condition, key)}">${escapeHtml(condition.label)}</a></h2>
          <p>${escapeHtml(condition.status)}</p>
          <ol>${sourceLinks(condition)}</ol>
        </section>`;
    })
    .join("");

  const body = `
    <section class="page-hero">
      <div>
        <p class="eyebrow">${escapeHtml(locale.shared.referencesTitle)}</p>
        <h1>${escapeHtml(locale.evidence.title)}</h1>
        <p>${escapeHtml(locale.evidence.lead)}</p>
      </div>
    </section>
    <section class="text-section">
      <p>${escapeHtml(locale.evidence.note)}</p>
    </section>
    <section class="references-library">${groups}</section>`;

  return layout({
    site,
    locale,
    kind: pageKinds.evidence,
    title,
    description,
    body,
    schema: baseSchema(site, locale, pageKinds.evidence, undefined, title, description)
  });
}

function notFoundPage(site, locale) {
  const currentPath = "/404.html";
  const title = locale.notFound.title;
  const description = locale.notFound.lead;
  const body = `
    <section class="page-hero">
      <div>
        <p class="eyebrow">404</p>
        <h1>${escapeHtml(locale.notFound.title)}</h1>
        <p>${escapeHtml(locale.notFound.lead)}</p>
        <a class="button primary" href="${hrefFor(currentPath, locale, pageKinds.home)}">${escapeHtml(locale.shared.conditionPages)}</a>
      </div>
    </section>`;

  return layout({
    site,
    locale,
    kind: pageKinds.home,
    title,
    description,
    body,
    schema: baseSchema(site, locale, pageKinds.home, undefined, title, description),
    pagePathOverride: currentPath
  });
}

function swissLanguageSelector(site) {
  const currentPath = "/";
  const de = locales.de;
  const description = "Schweizer Website zu ketogener Ernährung und Neurologie in Deutsch, Français und Italiano.";
  const languageCards = site.locales
    .map((code) => {
      const locale = locales[code];
      return `
        <a class="language-card" href="${hrefFor(currentPath, locale, pageKinds.home)}">
          <span>${escapeHtml(locale.name)}</span>
          <strong>${escapeHtml(locale.hero.title)}</strong>
          <small>${escapeHtml(locale.disclaimer.short)}</small>
        </a>`;
    })
    .join("");

  return `<!doctype html>
<html lang="de-CH">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KetoNeurologie.ch</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${site.canonicalBase}/">
    <link rel="alternate" hreflang="de-CH" href="${site.canonicalBase}/de/">
    <link rel="alternate" hreflang="fr-CH" href="${site.canonicalBase}/fr/">
    <link rel="alternate" hreflang="it-CH" href="${site.canonicalBase}/it/">
    <link rel="stylesheet" href="${localHref(currentPath, "/assets/styles.css")}">
  </head>
  <body>
    ${header(site, de, pageKinds.home, undefined, currentPath)}
    <main id="content">
      <section class="hero" style="--hero-image: url('${localHref(currentPath, "/assets/ketone-neurology-hero.png")}')">
        <div class="hero-content">
          <p class="eyebrow">KetoNeurologie.ch</p>
          <h1>Ketogene Neurologie in der Schweiz</h1>
          <p>Deutsch, Français oder Italiano wählen.</p>
        </div>
      </section>
      <section class="language-selector">${languageCards}</section>
      ${disclaimerBand(de, currentPath)}
    </main>
    ${footer(de, currentPath)}
    <script src="${localHref(currentPath, "/assets/site.js")}" defer></script>
  </body>
</html>`;
}

async function writePage(siteRoot, pagePath, html) {
  const filePath = outputFileFor(siteRoot, pagePath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, html);
}

async function copyPublicAssets(siteRoot) {
  const target = join(siteRoot, "assets");
  await mkdir(target, { recursive: true });
  if (existsSync(join(publicDir, "assets"))) {
    await cp(join(publicDir, "assets"), target, { recursive: true });
  }
  await writeFile(join(target, "styles.css"), sharedStyles);
  await writeFile(join(target, "site.js"), sharedScript);
}

async function writeRobotsAndSitemap(site, siteRoot, pages) {
  await writeFile(join(siteRoot, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.canonicalBase}/sitemap.xml\n`);
  await writeFile(join(siteRoot, "CNAME"), `${site.domain}\n`);
  await writeFile(join(siteRoot, ".nojekyll"), "");
  const urls = pages
    .map((page) => `  <url><loc>${site.canonicalBase}${page}</loc></url>`)
    .join("\n");
  await writeFile(
    join(siteRoot, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
}

async function buildSite(site) {
  const siteRoot = join(distRoot, site.output);
  await mkdir(siteRoot, { recursive: true });
  await copyPublicAssets(siteRoot);

  const pages = [];
  for (const code of site.locales) {
    const locale = locales[code];
    const homePath = pathFor(locale, pageKinds.home);
    await writePage(siteRoot, homePath, homePage(site, locale));
    pages.push(homePath);

    for (const key of conditionOrder) {
      const pagePath = pathFor(locale, pageKinds.condition, key);
      await writePage(siteRoot, pagePath, conditionPage(site, locale, key));
      pages.push(pagePath);
    }

    for (const kind of [pageKinds.about, pageKinds.contact, pageKinds.evidence, pageKinds.disclaimer]) {
      const pagePath = pathFor(locale, kind);
      const html = kind === pageKinds.about ? aboutPage(site, locale) : kind === pageKinds.contact ? contactPage(site, locale) : kind === pageKinds.evidence ? evidencePage(site, locale) : disclaimerPage(site, locale);
      await writePage(siteRoot, pagePath, html);
      pages.push(pagePath);
    }
  }

  if (site.id === "swiss") {
    await writePage(siteRoot, "/", homePage(site, locales.de, "/"));
    pages.push("/");
  }

  const fallbackLocale = locales[site.locales[0]];
  await writeFile(join(siteRoot, "404.html"), notFoundPage(site, fallbackLocale));
  await writeRobotsAndSitemap(site, siteRoot, [...new Set(pages)].sort());

  const allFiles = await readdir(siteRoot, { recursive: true });
  const htmlCount = allFiles.filter((file) => extname(file) === ".html").length;
  console.log(`${site.domain}: wrote ${htmlCount} HTML files to ${relative(root, siteRoot)}`);
}

await rm(distRoot, { recursive: true, force: true });
await mkdir(distRoot, { recursive: true });

for (const site of siteBuilds) {
  await buildSite(site);
}
