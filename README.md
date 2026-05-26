# Ketogenic Neurology Sites

Static websites for:

- `ketoneurology.com` - international English site
- `ketoneurologie.ch` - Swiss site with German as the default homepage, plus French and Italian language versions

The sites are generated from shared content and citations in `src/content.mjs`.

## Commands

```bash
npm run build
npm run serve:intl
npm run serve:swiss
```

The generated deployment roots are:

- `dist/ketoneurology.com`
- `dist/ketoneurologie.ch`

The generated pages use relative internal links, so they can also be opened directly from the filesystem for local review.

## Content Note

The copy is written for education and evidence curation. It deliberately avoids individual medical advice and presents ketogenic therapies as condition-specific, with epilepsy separated from emerging or investigational indications.
