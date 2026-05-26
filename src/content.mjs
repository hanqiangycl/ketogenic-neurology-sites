export const reviewDates = {
  en: "May 26, 2026",
  de: "26. Mai 2026",
  fr: "26 mai 2026",
  it: "26 maggio 2026"
};

export const conditionOrder = [
  "epilepsy",
  "alzheimers",
  "ms",
  "parkinsons",
  "brainCancers",
  "stroke"
];

export const sources = {
  "epilepsy-nice": {
    title: "NICE evidence review: Ketogenic diets for drug-resistant epilepsy",
    publication: "National Institute for Health and Care Excellence, 2022",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK591161/"
  },
  "epilepsy-cochrane": {
    title: "Ketogenic diets for drug-resistant epilepsy",
    publication: "Cochrane Database of Systematic Reviews, 2020",
    url: "https://pubmed.ncbi.nlm.nih.gov/32588435/"
  },
  "epilepsy-child-guideline": {
    title: "Optimal clinical management of children receiving dietary therapies for epilepsy",
    publication: "Epilepsia Open, 2018",
    url: "https://pubmed.ncbi.nlm.nih.gov/29881797/"
  },
  "epilepsy-adult-guideline": {
    title: "International recommendations for adults treated with ketogenic diet therapies",
    publication: "Neurology Clinical Practice, 2021",
    url: "https://pubmed.ncbi.nlm.nih.gov/34840865/"
  },
  "epilepsy-kiwe": {
    title: "Classic ketogenic diet versus further antiseizure medicine in infants with drug-resistant epilepsy",
    publication: "The Lancet Neurology, 2023",
    url: "https://pubmed.ncbi.nlm.nih.gov/37977712/"
  },
  "epilepsy-asm-reduction": {
    title: "Ketogenic diet therapy leads to antiseizure medication reduction in children and adults with drug-resistant epilepsy",
    publication: "CNS Neuroscience & Therapeutics, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/39021297/"
  },
  "epilepsy-micronutrients": {
    title: "The ketogenic diet and potential micronutrient risks in drug-resistant epilepsy management",
    publication: "Nutrients, 2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/41978131/"
  },
  "alzheimers-keto-pilot": {
    title: "Randomized crossover trial of a modified ketogenic diet in Alzheimer's disease",
    publication: "Alzheimer's Research & Therapy, 2021",
    url: "https://pubmed.ncbi.nlm.nih.gov/33622392/"
  },
  "alzheimers-meta": {
    title: "Medium-chain triglycerides for the symptomatic treatment of dementia-related diseases",
    publication: "Journal of Nutrition and Metabolism, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/38715705/"
  },
  "alzheimers-lipid-signature": {
    title: "Consuming a modified Mediterranean ketogenic diet reverses the peripheral lipid signature of Alzheimer's disease in humans",
    publication: "Alzheimer's & Dementia, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/39779882/"
  },
  "alzheimers-approaches-review": {
    title: "Ketogenic approaches for the treatment of Alzheimer's disease",
    publication: "Current Opinion in Clinical Nutrition and Metabolic Care, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/39422952/"
  },
  "alzheimers-progression-review": {
    title: "The impact of the ketogenic diet on Alzheimer's disease progression",
    publication: "Nutrients, 2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/41593839/"
  },
  "alzheimers-mct-mouse": {
    title: "Medium-chain triglycerides improve cognition and systemic metabolism in mouse models of Alzheimer's disease",
    publication: "Molecular Neurodegeneration, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/40794774/"
  },
  "ms-network-meta": {
    title: "Dietary interventions in multiple sclerosis: a network meta-analysis",
    publication: "PubMed record, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/36257717/"
  },
  "ms-nams": {
    title: "Fasting, ketogenic, and anti-inflammatory diets in multiple sclerosis: final results of the NAMS trial",
    publication: "Neurological Research and Practice, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/40836308/"
  },
  "ms-phase-ii": {
    title: "Phase II study of ketogenic diets in relapsing multiple sclerosis",
    publication: "Journal of Neurology, Neurosurgery & Psychiatry, 2022",
    url: "https://pubmed.ncbi.nlm.nih.gov/35418509/"
  },
  "ms-nfl": {
    title: "Serum neurofilament light chain in relapsing multiple sclerosis patients on a ketogenic diet",
    publication: "Multiple Sclerosis Journal, 2023",
    url: "https://pubmed.ncbi.nlm.nih.gov/36996634/"
  },
  "ms-sleep": {
    title: "Impact of a ketogenic diet on sleep quality in people with relapsing multiple sclerosis",
    publication: "Multiple Sclerosis and Related Disorders, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/39208520/"
  },
  "ms-systematic-meta": {
    title: "Ketogenic diet in modulating inflammation in multiple sclerosis: systematic review and meta-analysis",
    publication: "Nutrients, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/41067991/"
  },
  "ms-adjunct-review": {
    title: "Exploring the ketogenic diet as adjunctive therapy in multiple sclerosis",
    publication: "Nutrients, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/41370101/"
  },
  "parkinsons-rct": {
    title: "Low-fat versus ketogenic diet in Parkinson's disease: a randomized pilot trial",
    publication: "Movement Disorders, 2018",
    url: "https://pubmed.ncbi.nlm.nih.gov/30098269/"
  },
  "parkinsons-feasibility": {
    title: "Ketogenic intervention with MCT supplementation in Parkinson's disease",
    publication: "BMC Neurology, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/38561682/"
  },
  "parkinsons-mediterranean-keto": {
    title: "Randomized safety and feasibility crossover trial of two Mediterranean-ketogenic interventions in Parkinson's disease",
    publication: "Frontiers in Nutrition, 2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/41637153/"
  },
  "parkinsons-critical-review": {
    title: "Ketogenic interventions in mild cognitive impairment, Alzheimer's disease, and Parkinson's disease",
    publication: "Frontiers in Neurology, 2023",
    url: "https://pubmed.ncbi.nlm.nih.gov/36846143/"
  },
  "parkinsons-longitudinal": {
    title: "Impact of a keto diet on symptoms of Parkinson's disease, biomarkers, depression, anxiety and quality of life",
    publication: "Neurological Sciences, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/38869924/"
  },
  "parkinsons-nutritional-ketosis": {
    title: "Nutritional ketosis in Parkinson's disease: remaining questions and insights",
    publication: "Current Nutrition Reports, 2021",
    url: "https://pubmed.ncbi.nlm.nih.gov/34235637/"
  },
  "brain-cancers-review": {
    title: "Systematic review and clinical insights: ketogenic diet in glioblastoma cancer neuroscience",
    publication: "Journal of Personalized Medicine, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/39338183/"
  },
  "brain-cancers-framework": {
    title: "Clinical framework for ketogenic metabolic therapy in glioblastoma",
    publication: "PubMed record, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/39639257/"
  },
  "brain-cancers-meta-2026": {
    title: "Efficacy and safety of ketogenic diet in glioblastoma: updated systematic review and meta-analysis",
    publication: "Neurological Sciences, 2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/42032215/"
  },
  "brain-cancers-phase-1": {
    title: "Phase 1 safety and feasibility trial of a ketogenic diet plus standard of care for newly diagnosed glioblastoma",
    publication: "Neuro-Oncology Advances, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/40595067/"
  },
  "brain-cancers-clinical-trials-review": {
    title: "Ketogenic metabolic therapy as an adjuvant to standard care in glioblastoma: systematic review of clinical trials",
    publication: "Nutrients, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/41379280/"
  },
  "brain-cancers-high-grade-pilot": {
    title: "Ketogenic diet therapy for high-grade gliomas combined with standard treatment using an angiogenesis inhibitor",
    publication: "Nutrients, 2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/41727338/"
  },
  "stroke-bhb": {
    title: "Ketogenic diet and ketone bodies against ischemic injury",
    publication: "International Journal of Molecular Sciences, 2023",
    url: "https://pubmed.ncbi.nlm.nih.gov/36768899/"
  },
  "stroke-enteral": {
    title: "Inducing ketogenesis via an enteral formulation in acute brain injury",
    publication: "Critical Care, 2020",
    url: "https://pubmed.ncbi.nlm.nih.gov/32098578/"
  },
  "stroke-brain-health": {
    title: "Ketogenic diet and brain health: cerebrovascular mechanisms, neuroprotection, and translational implications",
    publication: "Nutrients, 2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/41978141/"
  },
  "stroke-glymphatic": {
    title: "Beta-hydroxybutyrate improves glymphatic system function and alleviates cerebral edema after ischemic stroke",
    publication: "Journal of Neuroinflammation, 2025",
    url: "https://pubmed.ncbi.nlm.nih.gov/41535708/"
  },
  "stroke-omics": {
    title: "Brain transcriptome, microbiome and metabolome in ketogenic diet and experimental stroke",
    publication: "Nutrients, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/39378970/"
  },
  "stroke-photothrombosis": {
    title: "Beta-hydroxybutyrate mitigates sensorimotor and cognitive impairments in photothrombosis-induced ischemic stroke",
    publication: "Nutrients, 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/38891898/"
  }
};

export const locales = {
  en: {
    code: "en",
    name: "English",
    htmlLang: "en",
    siteName: "Ketoneurology",
    domain: "ketoneurology.com",
    homePath: "/",
    nav: {
      conditions: "Conditions",
      evidence: "Evidence",
      about: "About",
      contact: "Contact",
      disclaimer: "Disclaimer",
      swissSite: "Swiss site",
      internationalSite: "International site",
      menu: "Menu"
    },
    shared: {
      reviewLabel: "Evidence review",
      evidenceStatus: "Evidence status",
      scientificRationale: "Scientific rationale",
      researchSnapshot: "Research snapshot",
      clinicalFrame: "Clinical frame",
      openQuestions: "Open questions",
      selectedEvidence: "Selected evidence",
      conditionPages: "Condition pages",
      readPage: "Read page",
      lastUpdated: "Last reviewed",
      notAdvice: "Educational evidence curation. No individual medical advice.",
      currentEvidence: "Current evidence",
      aboutProject: "About this project",
      disclaimerTitle: "Medical disclaimer",
      referencesTitle: "References and source notes",
      allConditions: "All condition pages"
    },
    hero: {
      eyebrow: "Ketogenic science for neurology",
      title: "Ketogenic Metabolism and Neurological Disease",
      lead: "A clinically cautious, research-led guide to ketogenic diet therapy and ketone metabolism across epilepsy, neurodegeneration, neuroimmunology, neuro-oncology, and stroke.",
      primary: "Explore conditions",
      secondary: "Read disclaimer"
    },
    home: {
      introTitle: "Evidence before enthusiasm",
      intro: "Ketogenic therapies can mean very different things depending on the condition: an established supervised therapy in selected drug-resistant epilepsy, an emerging research question in dementia and movement disorders, and an investigational metabolic strategy in brain cancer and stroke.",
      evidenceMap: "The pages below separate mechanisms, clinical data, uncertainty, and practical cautions so the science can be read without turning it into personal treatment advice."
    },
    about: {
      title: "About",
      body: "I am a neurology resident (Assistenzärztin) passionate about the science behind dietary and lifestyle interventions in chronic neurological diseases. This project is my curated map of current evidence, mechanisms, and unanswered questions in ketogenic neurology.",
      second: "The aim is to make the research readable for clinicians, researchers, patients, and curious families while preserving the boundary between education and individual medical care."
    },
    contact: {
      title: "Contact",
      lead: "For research-related questions, collaborations, speaking requests, or corrections to the evidence library, please get in touch by email.",
      emailLabel: "Email",
      email: "contact@ketoneurology.com",
      note: "Please do not send urgent medical questions or personal clinical details. I cannot provide individual medical advice through this website."
    },
    disclaimer: {
      short: "I collate current scientific evidence but do not provide individual medical advice.",
      body: "The information on this website is for education and evidence curation only. It is not a diagnosis, treatment plan, nutrition prescription, or substitute for medical care. Ketogenic diets and ketone supplements can interact with medical conditions, medications, pregnancy, cancer therapy, diabetes treatment, lipid disorders, eating disorder history, kidney or liver disease, and nutritional risk. Any dietary therapy for a neurological disease should be discussed with qualified clinicians and dietitians who know the individual case.",
      emergency: "For acute neurological symptoms such as stroke signs, new seizures, severe confusion, or sudden weakness, seek emergency medical care immediately."
    },
    evidence: {
      title: "Evidence Library",
      lead: "A selected bibliography for the condition pages. The site emphasizes human clinical evidence where it exists, then clearly marks feasibility, mechanistic, or preclinical work.",
      note: "This is a curated starting point, not a systematic review."
    },
    notFound: {
      title: "Page not found",
      lead: "The page may have moved. Start from the condition overview."
    },
    conditions: {
      epilepsy: {
        label: "Epilepsy",
        slug: "epilepsy",
        status: "Established in selected drug-resistant epilepsy",
        short: "The clearest neurological indication for supervised ketogenic dietary therapy.",
        standfirst: "In epilepsy, ketogenic diet therapy is not a wellness trend. It is a structured medical therapy with the strongest evidence in drug-resistant epilepsy, especially in children and selected adults.",
        mechanisms: [
          "Therapeutic ketosis changes brain fuel availability and may influence neurotransmission, mitochondrial function, oxidative stress, inflammation, and seizure thresholds.",
          "Classical ketogenic, modified Atkins, MCT, and low glycaemic index approaches differ in restrictiveness, tolerability, and monitoring needs."
        ],
        research: [
          "Guidelines and systematic reviews support considering ketogenic dietary therapies when appropriate antiseizure medicines have not provided adequate seizure control.",
          "The evidence base is strongest in paediatric epilepsy syndromes, but adult services increasingly use modified protocols when specialist support is available."
        ],
        clinical: [
          "This belongs in a specialist pathway with dietetic education, medication review, laboratory monitoring, and a plan for side effects.",
          "Diet should not replace emergency seizure plans or clinician-led changes to antiseizure medication."
        ],
        questions: [
          "Which adults benefit most, and how can adherence be made realistic outside highly specialized centres?",
          "Can biomarkers predict seizure response, tolerability, and longer-term cardiometabolic effects?"
        ],
        sources: ["epilepsy-cochrane", "epilepsy-child-guideline", "epilepsy-adult-guideline", "epilepsy-kiwe", "epilepsy-asm-reduction", "epilepsy-micronutrients"]
      },
      alzheimers: {
        label: "Alzheimer's",
        slug: "alzheimers",
        status: "Emerging clinical evidence",
        short: "Research asks whether ketones can support brain energy metabolism in cognitive decline.",
        standfirst: "Alzheimer's disease is associated with impaired cerebral glucose metabolism. Ketones may provide an alternative fuel signal, but clinical evidence remains early and heterogeneous.",
        mechanisms: [
          "Ketone bodies may partially bypass impaired glucose utilization and may also influence mitochondrial function, oxidative stress, inflammation, and synaptic signalling.",
          "Interventions studied include ketogenic diets, MCT oil, ketone esters, and other exogenous ketone strategies, each with different adherence and safety profiles."
        ],
        research: [
          "Small clinical trials and reviews report cognitive or functional signals in some participants, but sample sizes, duration, outcome measures, and genetic factors vary.",
          "The field still needs larger trials that distinguish symptomatic support from disease modification."
        ],
        clinical: [
          "Older adults with cognitive impairment are vulnerable to weight loss, medication complexity, and nutritional deficiency, so unsupervised restrictive diets can be risky.",
          "Ketogenic strategies should not be presented as a proven dementia treatment."
        ],
        questions: [
          "Which disease stage, APOE genotype, metabolic profile, or cognitive phenotype is most likely to respond?",
          "Can benefits be achieved with less restrictive ketone strategies that preserve nutrition and quality of life?"
        ],
        sources: ["alzheimers-keto-pilot", "alzheimers-meta", "alzheimers-lipid-signature", "alzheimers-approaches-review", "alzheimers-progression-review", "alzheimers-mct-mouse"]
      },
      ms: {
        label: "MS",
        slug: "multiple-sclerosis",
        status: "Emerging supportive evidence",
        short: "Diet research in MS is active, but ketogenic diets are not disease-modifying therapy.",
        standfirst: "Multiple sclerosis involves immune activity, neurodegeneration, fatigue, and metabolic stress. Ketogenic diet studies are exploring symptoms, quality of life, and metabolic markers rather than replacing disease-modifying therapy.",
        mechanisms: [
          "Ketogenic diets may affect insulin sensitivity, adiposity, fatigue pathways, oxidative stress, and inflammatory signalling.",
          "Any dietary effect is layered on top of immunological disease biology, rehabilitation, sleep, mood, and medication."
        ],
        research: [
          "Recent diet trials and meta-analyses suggest feasibility and possible benefits for fatigue, quality of life, body composition, and metabolic markers.",
          "Evidence is not sufficient to claim prevention of relapses, MRI activity, or disability progression."
        ],
        clinical: [
          "Dietary work can be part of a broader lifestyle plan, but disease-modifying treatment decisions remain neurological decisions.",
          "Monitoring matters when patients have weight loss, lipid changes, bowel symptoms, pregnancy plans, or high training loads."
        ],
        questions: [
          "Which dietary pattern is most sustainable in relapsing and progressive MS?",
          "Can trials connect patient-reported benefits with MRI, immunological, and neurofilament outcomes?"
        ],
        sources: ["ms-nams", "ms-phase-ii", "ms-network-meta", "ms-nfl", "ms-sleep", "ms-systematic-meta", "ms-adjunct-review"]
      },
      parkinsons: {
        label: "Parkinson's",
        slug: "parkinsons",
        status: "Pilot and feasibility evidence",
        short: "A growing research area focused on energy metabolism and non-motor symptoms.",
        standfirst: "Parkinson's disease research is testing whether ketone metabolism can influence mitochondrial stress, neuroinflammation, and non-motor symptoms. The signal is interesting, but not yet definitive.",
        mechanisms: [
          "Ketones may influence mitochondrial efficiency, oxidative stress, inflammation, and neuronal signalling relevant to Parkinsonian biology.",
          "Diet also changes weight, gut function, protein timing, and medication absorption, which can all matter in Parkinson's care."
        ],
        research: [
          "Small randomized and feasibility studies have compared ketogenic approaches with other diets and reported signals in non-motor symptoms or metabolic measures.",
          "Current evidence is too small and short to establish disease modification or broad clinical recommendations."
        ],
        clinical: [
          "Constipation, frailty, unintentional weight loss, orthostatic symptoms, and levodopa timing make supervision especially important.",
          "Dietary changes should be coordinated with the treating neurology team."
        ],
        questions: [
          "Are reported non-motor improvements driven by ketosis, weight change, glycaemic change, microbiome effects, or placebo/context effects?",
          "Can longer trials measure motor progression, cognition, sleep, autonomic symptoms, and tolerability together?"
        ],
        sources: ["parkinsons-rct", "parkinsons-feasibility", "parkinsons-mediterranean-keto", "parkinsons-critical-review", "parkinsons-longitudinal", "parkinsons-nutritional-ketosis"]
      },
      brainCancers: {
        label: "Brain cancers",
        slug: "brain-cancers",
        status: "Adjunctive and investigational",
        short: "Metabolic therapy research is active, especially in glioblastoma, but survival benefit is unproven.",
        standfirst: "Brain cancer research asks whether ketogenic metabolic therapy can stress tumour metabolism while supporting normal brain energy use. It remains adjunctive and investigational.",
        mechanisms: [
          "The rationale draws on altered tumour glucose metabolism, insulin and IGF signalling, mitochondrial stress, inflammation, and the brain's ability to use ketones.",
          "Tumour biology is heterogeneous, so a single metabolic strategy is unlikely to apply equally across diagnoses."
        ],
        research: [
          "Glioblastoma studies suggest ketogenic therapy can be feasible in selected patients alongside standard oncology care, but trials remain small.",
          "There is no established evidence that ketogenic diet alone improves survival, and it must not delay surgery, radiotherapy, chemotherapy, steroids, or trial care."
        ],
        clinical: [
          "Cancer patients may face cachexia, steroid-induced hyperglycaemia, nausea, dysphagia, seizures, and treatment-related fatigue, all of which change nutrition risk.",
          "Any ketogenic strategy in brain cancer should be oncology-led and dietitian-supervised."
        ],
        questions: [
          "Which tumour genotypes, imaging markers, or metabolic phenotypes identify patients worth studying?",
          "How can trials separate ketosis, calorie intake, weight change, and standard treatment effects?"
        ],
        sources: ["brain-cancers-meta-2026", "brain-cancers-phase-1", "brain-cancers-clinical-trials-review", "brain-cancers-high-grade-pilot", "brain-cancers-review", "brain-cancers-framework"]
      },
      stroke: {
        label: "Stroke",
        slug: "stroke",
        status: "Preclinical and feasibility evidence",
        short: "Ketone biology is promising in models, but stroke care is emergency medicine first.",
        standfirst: "Stroke is time-critical. Ketone metabolism is being studied for neuroprotection and recovery biology, but human evidence is not yet a basis for self-treatment.",
        mechanisms: [
          "In experimental models, beta-hydroxybutyrate may influence oxidative stress, mitochondrial function, inflammation, blood-brain barrier biology, and cell survival pathways.",
          "Clinical translation is complex because stroke subtype, timing, reperfusion therapy, swallowing safety, and rehabilitation needs vary widely."
        ],
        research: [
          "Human work is mostly feasibility or adjacent acute brain injury research, not definitive stroke treatment evidence.",
          "The most important proven interventions remain emergency recognition, reperfusion where appropriate, secondary prevention, rehabilitation, and nutrition support."
        ],
        clinical: [
          "Do not attempt fasting or restrictive ketogenic diets during suspected or acute stroke outside a clinical protocol.",
          "After stroke, nutrition planning should prioritize swallow safety, adequate protein and energy, vascular risk management, and individual comorbidities."
        ],
        questions: [
          "Can ketone interventions be tested safely at the right time window after ischemic or haemorrhagic stroke?",
          "Which outcomes should matter most: infarct biology, cognition, fatigue, motor recovery, or vascular risk?"
        ],
        sources: ["stroke-brain-health", "stroke-bhb", "stroke-glymphatic", "stroke-omics", "stroke-photothrombosis", "stroke-enteral"]
      }
    }
  },
  de: {
    code: "de",
    name: "Deutsch",
    htmlLang: "de-CH",
    siteName: "KetoNeurologie.ch",
    domain: "ketoneurologie.ch",
    homePath: "/de/",
    nav: {
      conditions: "Krankheitsbilder",
      evidence: "Evidenz",
      about: "Über mich",
      contact: "Kontakt",
      disclaimer: "Hinweis",
      swissSite: "Schweizer Seite",
      internationalSite: "Internationale Seite",
      menu: "Menü"
    },
    shared: {
      reviewLabel: "Evidenzstand",
      evidenceStatus: "Einordnung",
      scientificRationale: "Wissenschaftliche Rationale",
      researchSnapshot: "Forschungsstand",
      clinicalFrame: "Klinische Einordnung",
      openQuestions: "Offene Fragen",
      selectedEvidence: "Ausgewählte Evidenz",
      conditionPages: "Krankheitsbilder",
      readPage: "Seite öffnen",
      lastUpdated: "Zuletzt geprüft",
      notAdvice: "Evidenzsammlung zu Bildungszwecken. Keine individuelle medizinische Beratung.",
      currentEvidence: "Aktuelle Evidenz",
      aboutProject: "Über dieses Projekt",
      disclaimerTitle: "Medizinischer Hinweis",
      referencesTitle: "Referenzen und Quellen",
      allConditions: "Alle Krankheitsbilder"
    },
    hero: {
      eyebrow: "Ketogene Wissenschaft in der Neurologie",
      title: "Ketogener Stoffwechsel und neurologische Erkrankungen",
      lead: "Eine klinisch vorsichtige, forschungsorientierte Übersicht zu ketogener Ernährungstherapie und Ketonkörpern bei Epilepsie, Neurodegeneration, Neuroimmunologie, Neuroonkologie und Schlaganfall.",
      primary: "Krankheitsbilder ansehen",
      secondary: "Hinweis lesen"
    },
    home: {
      introTitle: "Evidenz vor Begeisterung",
      intro: "Ketogene Therapien bedeuten je nach Erkrankung Unterschiedliches: etablierte, überwachte Therapie bei ausgewählter therapieresistenter Epilepsie, frühe Forschung bei Demenz und Bewegungsstörungen sowie experimentelle metabolische Strategie bei Hirntumoren und Schlaganfall.",
      evidenceMap: "Die Seiten trennen Mechanismen, klinische Daten, Unsicherheiten und praktische Vorsichtspunkte, damit die Forschung lesbar bleibt, ohne daraus eine persönliche Therapieempfehlung zu machen."
    },
    about: {
      title: "Über mich",
      body: "Ich bin Assistenzärztin in Neurologie und begeistert von der Wissenschaft hinter Ernährungs- und Lebensstilinterventionen bei chronischen neurologischen Erkrankungen. Dieses Projekt ist meine kuratierte Übersicht über aktuelle Evidenz, Mechanismen und offene Fragen in der ketogenen Neurologie.",
      second: "Ziel ist, Forschung für Ärztinnen, Forschende, Patientinnen und Angehörige verständlich zu machen und gleichzeitig klar zwischen Bildung und individueller medizinischer Betreuung zu unterscheiden."
    },
    contact: {
      title: "Kontakt",
      lead: "Für wissenschaftliche Fragen, Kooperationen, Vortragsanfragen oder Korrekturen zur Evidenzbibliothek können Sie mich per E-Mail kontaktieren.",
      emailLabel: "E-Mail",
      email: "contact@ketoneurologie.ch",
      note: "Bitte senden Sie keine dringenden medizinischen Fragen oder persönlichen klinischen Details. Über diese Website kann ich keine individuelle medizinische Beratung anbieten."
    },
    disclaimer: {
      short: "Ich sammle aktuelle wissenschaftliche Evidenz, biete aber keine individuelle medizinische Beratung an.",
      body: "Die Informationen auf dieser Website dienen der Bildung und Evidenzsammlung. Sie sind keine Diagnose, kein Therapieplan, keine Ernährungsverordnung und kein Ersatz für medizinische Betreuung. Ketogene Diäten und Ketonsupplemente können mit Erkrankungen, Medikamenten, Schwangerschaft, Krebstherapien, Diabetesbehandlung, Fettstoffwechselstörungen, Essstörungsvorgeschichte, Nieren- oder Lebererkrankungen und Mangelernährungsrisiken interagieren. Jede Ernährungstherapie bei einer neurologischen Erkrankung sollte mit qualifizierten Ärztinnen, Ärzten und Ernährungsfachpersonen besprochen werden, die den individuellen Fall kennen.",
      emergency: "Bei akuten neurologischen Symptomen wie Schlaganfallzeichen, neuen Anfällen, schwerer Verwirrtheit oder plötzlicher Schwäche sofort medizinische Notfallhilfe suchen."
    },
    evidence: {
      title: "Evidenzbibliothek",
      lead: "Eine ausgewählte Bibliografie für die Krankheitsseiten. Im Fokus steht humane klinische Evidenz, wo sie existiert; Machbarkeits-, mechanistische oder präklinische Arbeiten werden entsprechend eingeordnet.",
      note: "Dies ist ein kuratierter Einstieg, keine systematische Übersichtsarbeit."
    },
    notFound: {
      title: "Seite nicht gefunden",
      lead: "Die Seite wurde möglicherweise verschoben. Starten Sie bei der Übersicht."
    },
    conditions: {
      epilepsy: {
        label: "Epilepsie",
        slug: "epilepsie",
        status: "Etabliert bei ausgewählter therapieresistenter Epilepsie",
        short: "Die klarste neurologische Indikation für überwachte ketogene Ernährungstherapie.",
        standfirst: "Bei Epilepsie ist ketogene Ernährungstherapie kein Wellness-Trend, sondern eine strukturierte medizinische Therapie mit der stärksten Evidenz bei therapieresistenter Epilepsie, besonders bei Kindern und ausgewählten Erwachsenen.",
        mechanisms: [
          "Therapeutische Ketose verändert die Energieverfügbarkeit im Gehirn und kann Neurotransmission, mitochondriale Funktion, oxidativen Stress, Entzündung und Anfallsschwellen beeinflussen.",
          "Klassische ketogene Diät, modifizierte Atkins-Diät, MCT-Diät und niedrig-glykämische Ansätze unterscheiden sich in Strenge, Verträglichkeit und Monitoring."
        ],
        research: [
          "Leitlinien und systematische Reviews unterstützen die Erwägung ketogener Ernährungstherapien, wenn geeignete Anfallsmedikamente keine ausreichende Kontrolle erreichen.",
          "Die Evidenz ist bei pädiatrischen Epilepsiesyndromen am stärksten; erwachsene Patientinnen und Patienten werden zunehmend mit modifizierten Protokollen betreut."
        ],
        clinical: [
          "Die Therapie gehört in einen spezialisierten Behandlungspfad mit Ernährungsberatung, Medikamentenreview, Laborkontrollen und Nebenwirkungsmanagement.",
          "Sie ersetzt weder Notfallpläne noch ärztlich geführte Anpassungen der Anfallsmedikation."
        ],
        questions: [
          "Welche Erwachsenen profitieren am meisten, und wie kann Adhärenz im Alltag realistisch bleiben?",
          "Können Biomarker Ansprechen, Verträglichkeit und längerfristige kardiometabolische Effekte vorhersagen?"
        ],
        sources: ["epilepsy-cochrane", "epilepsy-child-guideline", "epilepsy-adult-guideline", "epilepsy-kiwe", "epilepsy-asm-reduction", "epilepsy-micronutrients"]
      },
      alzheimers: {
        label: "Alzheimer",
        slug: "alzheimer",
        status: "Frühe klinische Evidenz",
        short: "Forschung zur Frage, ob Ketone den Energiestoffwechsel des Gehirns bei kognitivem Abbau unterstützen können.",
        standfirst: "Bei Alzheimer ist der zerebrale Glukosestoffwechsel beeinträchtigt. Ketone könnten alternative Energiesignale liefern, doch die klinische Evidenz ist weiterhin früh und heterogen.",
        mechanisms: [
          "Ketonkörper können beeinträchtigte Glukosenutzung teilweise umgehen und mitochondriale Funktion, oxidativen Stress, Entzündung und synaptische Signalwege beeinflussen.",
          "Untersucht werden ketogene Diäten, MCT-Öl, Ketonester und andere exogene Ketonstrategien mit sehr unterschiedlicher Alltagstauglichkeit."
        ],
        research: [
          "Kleine klinische Studien und Reviews berichten bei einigen Teilnehmenden kognitive oder funktionelle Signale, aber Studiengrösse, Dauer, Endpunkte und genetische Faktoren variieren.",
          "Grössere Studien müssen klären, ob es um symptomatische Unterstützung oder Krankheitsmodifikation geht."
        ],
        clinical: [
          "Ältere Menschen mit kognitiver Störung sind anfällig für Gewichtsverlust, Medikamentenkomplexität und Mangelernährung.",
          "Ketogene Strategien sollten nicht als bewiesene Demenztherapie dargestellt werden."
        ],
        questions: [
          "Welche Krankheitsphase, welcher APOE-Status oder welches metabolische Profil spricht am ehesten an?",
          "Lassen sich mögliche Vorteile mit weniger restriktiven Strategien erreichen, die Ernährung und Lebensqualität schützen?"
        ],
        sources: ["alzheimers-keto-pilot", "alzheimers-meta", "alzheimers-lipid-signature", "alzheimers-approaches-review", "alzheimers-progression-review", "alzheimers-mct-mouse"]
      },
      ms: {
        label: "Multiple Sklerose",
        slug: "multiple-sklerose",
        status: "Frühe unterstützende Evidenz",
        short: "Ernährungsforschung bei MS ist aktiv, ersetzt aber keine krankheitsmodifizierende Therapie.",
        standfirst: "Multiple Sklerose umfasst Immunaktivität, Neurodegeneration, Fatigue und metabolischen Stress. Ketogene Studien prüfen Symptome, Lebensqualität und Stoffwechselmarker, nicht den Ersatz krankheitsmodifizierender Therapie.",
        mechanisms: [
          "Ketogene Ernährung kann Insulinsensitivität, Körperzusammensetzung, Fatigue-Pfade, oxidativen Stress und Entzündungssignale beeinflussen.",
          "Jeder Ernährungseffekt steht neben Immunbiologie, Rehabilitation, Schlaf, Stimmung und Medikation."
        ],
        research: [
          "Aktuelle Studien und Meta-Analysen zeigen Machbarkeit und mögliche Vorteile bei Fatigue, Lebensqualität, Körperzusammensetzung und metabolischen Markern.",
          "Die Evidenz reicht nicht aus, um weniger Schübe, weniger MRT-Aktivität oder langsamere Behinderungsprogression zu behaupten."
        ],
        clinical: [
          "Ernährung kann Teil eines breiteren Lebensstilplans sein; Entscheidungen zu krankheitsmodifizierenden Therapien bleiben neurologische Entscheidungen.",
          "Monitoring ist wichtig bei Gewichtsverlust, Lipidveränderungen, Darmbeschwerden, Schwangerschaftsplänen oder hoher Trainingsbelastung."
        ],
        questions: [
          "Welches Ernährungsmuster ist bei schubförmiger und progredienter MS nachhaltig?",
          "Können Studien subjektive Verbesserungen mit MRT-, Immun- und Neurofilamentdaten verbinden?"
        ],
        sources: ["ms-nams", "ms-phase-ii", "ms-network-meta", "ms-nfl", "ms-sleep", "ms-systematic-meta", "ms-adjunct-review"]
      },
      parkinsons: {
        label: "Parkinson",
        slug: "parkinson",
        status: "Pilot- und Machbarkeitsevidenz",
        short: "Ein wachsendes Forschungsfeld zu Energiestoffwechsel und nicht-motorischen Symptomen.",
        standfirst: "Bei Parkinson wird untersucht, ob Ketonstoffwechsel mitochondriale Belastung, Neuroinflammation und nicht-motorische Symptome beeinflussen kann. Das Signal ist interessant, aber nicht endgültig.",
        mechanisms: [
          "Ketone können mitochondriale Effizienz, oxidativen Stress, Entzündung und neuronale Signalwege beeinflussen.",
          "Ernährung verändert auch Gewicht, Darmfunktion, Proteintiming und Medikamentenaufnahme, was in der Parkinsonbehandlung relevant ist."
        ],
        research: [
          "Kleine randomisierte und Machbarkeitsstudien vergleichen ketogene Ansätze mit anderen Diäten und berichten Signale bei nicht-motorischen Symptomen oder Stoffwechselparametern.",
          "Die Daten sind zu klein und zu kurz, um Krankheitsmodifikation oder breite Empfehlungen abzuleiten."
        ],
        clinical: [
          "Obstipation, Frailty, unbeabsichtigter Gewichtsverlust, orthostatische Symptome und Levodopa-Timing erfordern besondere Vorsicht.",
          "Ernährungsänderungen sollten mit dem behandelnden neurologischen Team koordiniert werden."
        ],
        questions: [
          "Sind berichtete nicht-motorische Verbesserungen auf Ketose, Gewichtsveränderung, Blutzucker, Mikrobiom oder Kontext/Placebo zurückzuführen?",
          "Können längere Studien motorische Progression, Kognition, Schlaf, autonome Symptome und Verträglichkeit gemeinsam messen?"
        ],
        sources: ["parkinsons-rct", "parkinsons-feasibility", "parkinsons-mediterranean-keto", "parkinsons-critical-review", "parkinsons-longitudinal", "parkinsons-nutritional-ketosis"]
      },
      brainCancers: {
        label: "Hirntumoren",
        slug: "hirntumoren",
        status: "Adjuvant und experimentell",
        short: "Metabolische Therapieforschung ist aktiv, besonders beim Glioblastom; ein Überlebensvorteil ist nicht bewiesen.",
        standfirst: "Die Hirntumorforschung fragt, ob ketogene metabolische Therapie den Tumorstoffwechsel belasten und gleichzeitig den normalen Hirnstoffwechsel unterstützen kann. Sie bleibt adjuvant und experimentell.",
        mechanisms: [
          "Die Rationale beruht auf verändertem Glukosestoffwechsel von Tumoren, Insulin- und IGF-Signalen, mitochondrialem Stress, Entzündung und der Ketonnutzung des Gehirns.",
          "Tumorbiologie ist heterogen; eine einzige metabolische Strategie wird nicht für alle Diagnosen gleich passen."
        ],
        research: [
          "Glioblastomstudien deuten an, dass ketogene Therapie bei ausgewählten Patientinnen und Patienten zusätzlich zur Standardonkologie machbar sein kann.",
          "Es gibt keinen gesicherten Nachweis, dass ketogene Ernährung allein das Überleben verbessert; Operation, Radio-/Chemotherapie, Steroide oder Studienbehandlung dürfen nicht verzögert werden."
        ],
        clinical: [
          "Krebspatientinnen und -patienten können Kachexie, steroidbedingte Hyperglykämie, Übelkeit, Dysphagie, Anfälle und therapiebedingte Fatigue haben.",
          "Ketogene Strategien bei Hirntumoren sollten onkologisch geführt und ernährungstherapeutisch begleitet werden."
        ],
        questions: [
          "Welche Tumorgenetik, Bildgebungsmarker oder metabolischen Phänotypen identifizieren geeignete Studiengruppen?",
          "Wie lassen sich Ketose, Kalorienaufnahme, Gewichtsveränderung und Standardtherapieeffekte sauber trennen?"
        ],
        sources: ["brain-cancers-meta-2026", "brain-cancers-phase-1", "brain-cancers-clinical-trials-review", "brain-cancers-high-grade-pilot", "brain-cancers-review", "brain-cancers-framework"]
      },
      stroke: {
        label: "Schlaganfall",
        slug: "schlaganfall",
        status: "Präklinische und Machbarkeitsevidenz",
        short: "Ketonbiologie ist in Modellen vielversprechend; Schlaganfall bleibt zuerst Notfallmedizin.",
        standfirst: "Schlaganfall ist zeitkritisch. Ketonstoffwechsel wird für Neuroprotektion und Erholungsbiologie erforscht, ist aber keine Grundlage für Selbstbehandlung.",
        mechanisms: [
          "In experimentellen Modellen kann Beta-Hydroxybutyrat oxidativen Stress, mitochondriale Funktion, Entzündung, Blut-Hirn-Schranke und Überlebenspfade von Zellen beeinflussen.",
          "Die klinische Übertragung ist komplex, weil Subtyp, Zeitpunkt, Reperfusion, Schlucksicherheit und Rehabilitation stark variieren."
        ],
        research: [
          "Humane Arbeiten sind überwiegend Machbarkeitsstudien oder Forschung zu akuter Hirnschädigung, nicht definitive Schlaganfalltherapie.",
          "Wichtig bleiben bewiesene Massnahmen: Notfallerkennung, Reperfusion wenn geeignet, Sekundärprävention, Rehabilitation und Ernährungssupport."
        ],
        clinical: [
          "Bei Verdacht auf oder während akutem Schlaganfall keine Fasten- oder restriktive ketogene Diät ausserhalb eines Studienprotokolls beginnen.",
          "Nach Schlaganfall stehen Schlucksicherheit, ausreichende Protein- und Energiezufuhr, vaskuläre Risikofaktoren und Begleiterkrankungen im Vordergrund."
        ],
        questions: [
          "Können Ketoninterventionen im richtigen Zeitfenster nach ischämischem oder hämorrhagischem Schlaganfall sicher getestet werden?",
          "Welche Endpunkte zählen am meisten: Infarktbiologie, Kognition, Fatigue, motorische Erholung oder vaskuläres Risiko?"
        ],
        sources: ["stroke-brain-health", "stroke-bhb", "stroke-glymphatic", "stroke-omics", "stroke-photothrombosis", "stroke-enteral"]
      }
    }
  },
  fr: {
    code: "fr",
    name: "Français",
    htmlLang: "fr-CH",
    siteName: "KetoNeurologie.ch",
    domain: "ketoneurologie.ch",
    homePath: "/fr/",
    nav: {
      conditions: "Pathologies",
      evidence: "Données",
      about: "À propos",
      contact: "Contact",
      disclaimer: "Avertissement",
      swissSite: "Site suisse",
      internationalSite: "Site international",
      menu: "Menu"
    },
    shared: {
      reviewLabel: "État des données",
      evidenceStatus: "Niveau de preuve",
      scientificRationale: "Rationnel scientifique",
      researchSnapshot: "État de la recherche",
      clinicalFrame: "Cadre clinique",
      openQuestions: "Questions ouvertes",
      selectedEvidence: "Données sélectionnées",
      conditionPages: "Pathologies",
      readPage: "Lire la page",
      lastUpdated: "Dernière revue",
      notAdvice: "Synthèse éducative des données. Pas de conseil médical individuel.",
      currentEvidence: "Données actuelles",
      aboutProject: "À propos du projet",
      disclaimerTitle: "Avertissement médical",
      referencesTitle: "Références et notes de source",
      allConditions: "Toutes les pathologies"
    },
    hero: {
      eyebrow: "Science cétogène en neurologie",
      title: "Métabolisme cétogène et maladies neurologiques",
      lead: "Une synthèse prudente et orientée recherche sur les thérapies cétogènes et le métabolisme des cétones dans l'épilepsie, la neurodégénérescence, la neuro-immunologie, la neuro-oncologie et l'AVC.",
      primary: "Explorer les pathologies",
      secondary: "Lire l'avertissement"
    },
    home: {
      introTitle: "Les données avant l'enthousiasme",
      intro: "Les thérapies cétogènes n'ont pas le même sens selon la maladie: traitement supervisé et établi dans certaines épilepsies pharmacorésistantes, question de recherche précoce dans la démence et les troubles du mouvement, stratégie métabolique expérimentale dans les tumeurs cérébrales et l'AVC.",
      evidenceMap: "Les pages séparent mécanismes, données cliniques, incertitudes et précautions pratiques afin de rendre la recherche lisible sans la transformer en conseil thérapeutique personnel."
    },
    about: {
      title: "À propos",
      body: "Je suis médecin assistante en neurologie (Assistenzärztin) et passionnée par la science des interventions nutritionnelles et de mode de vie dans les maladies neurologiques chroniques. Ce projet est ma carte critique des données actuelles, des mécanismes et des questions ouvertes en neurologie cétogène.",
      second: "L'objectif est de rendre la recherche lisible pour les cliniciens, les chercheurs, les patientes, les patients et les proches, tout en gardant une frontière claire entre information et prise en charge individuelle."
    },
    contact: {
      title: "Contact",
      lead: "Pour des questions scientifiques, collaborations, invitations à intervenir ou corrections de la bibliothèque de données, vous pouvez me contacter par e-mail.",
      emailLabel: "E-mail",
      email: "contact@ketoneurologie.ch",
      note: "Merci de ne pas envoyer de questions médicales urgentes ni de détails cliniques personnels. Je ne peux pas fournir de conseil médical individuel via ce site."
    },
    disclaimer: {
      short: "Je rassemble les données scientifiques actuelles, mais je ne fournis pas de conseil médical individuel.",
      body: "Les informations de ce site sont destinées à l'éducation et à la synthèse des données. Elles ne constituent ni diagnostic, ni plan de traitement, ni prescription nutritionnelle, ni substitut aux soins médicaux. Les régimes cétogènes et suppléments de cétones peuvent interagir avec des maladies, médicaments, grossesse, traitements oncologiques, diabète, troubles lipidiques, antécédents de troubles alimentaires, maladies rénales ou hépatiques et risques nutritionnels. Toute thérapie alimentaire pour une maladie neurologique doit être discutée avec des médecins et diététiciennes qualifiés connaissant le cas individuel.",
      emergency: "En cas de symptômes neurologiques aigus tels que signes d'AVC, nouvelles crises, confusion sévère ou faiblesse soudaine, il faut consulter les urgences immédiatement."
    },
    evidence: {
      title: "Bibliothèque de données",
      lead: "Une bibliographie sélectionnée pour les pages par pathologie. Le site privilégie les données cliniques humaines lorsqu'elles existent, puis distingue clairement les travaux de faisabilité, mécanistiques ou précliniques.",
      note: "Il s'agit d'un point de départ curaté, pas d'une revue systématique."
    },
    notFound: {
      title: "Page introuvable",
      lead: "La page a peut-être changé d'adresse. Revenir à l'aperçu."
    },
    conditions: {
      epilepsy: {
        label: "Épilepsie",
        slug: "epilepsie",
        status: "Établi dans certaines épilepsies pharmacorésistantes",
        short: "L'indication neurologique la plus claire pour une thérapie alimentaire cétogène supervisée.",
        standfirst: "Dans l'épilepsie, la thérapie cétogène n'est pas une tendance bien-être. C'est un traitement médical structuré, avec les données les plus fortes dans l'épilepsie pharmacorésistante, surtout chez l'enfant et certains adultes.",
        mechanisms: [
          "La cétose thérapeutique modifie la disponibilité énergétique cérébrale et peut influencer neurotransmission, mitochondries, stress oxydatif, inflammation et seuil épileptique.",
          "Régime cétogène classique, Atkins modifié, MCT et approches à index glycémique bas diffèrent par leur intensité, leur tolérance et leur surveillance."
        ],
        research: [
          "Les recommandations et revues systématiques soutiennent l'évaluation de ces thérapies lorsque les médicaments antiépileptiques adaptés ne contrôlent pas suffisamment les crises.",
          "Les données sont plus solides en pédiatrie, mais des protocoles modifiés existent aussi chez certains adultes avec une équipe spécialisée."
        ],
        clinical: [
          "La mise en place appartient à une filière spécialisée avec éducation diététique, revue des traitements, bilans biologiques et gestion des effets indésirables.",
          "Le régime ne remplace ni les plans d'urgence ni les modifications de traitement décidées par le neurologue."
        ],
        questions: [
          "Quels adultes bénéficient le plus, et comment rendre l'adhésion réaliste hors centres très spécialisés?",
          "Des biomarqueurs peuvent-ils prédire réponse, tolérance et effets cardiométaboliques à long terme?"
        ],
        sources: ["epilepsy-cochrane", "epilepsy-child-guideline", "epilepsy-adult-guideline", "epilepsy-kiwe", "epilepsy-asm-reduction", "epilepsy-micronutrients"]
      },
      alzheimers: {
        label: "Alzheimer",
        slug: "alzheimer",
        status: "Données cliniques émergentes",
        short: "La recherche explore si les cétones peuvent soutenir le métabolisme énergétique du cerveau dans le déclin cognitif.",
        standfirst: "La maladie d'Alzheimer est associée à une altération du métabolisme cérébral du glucose. Les cétones pourraient offrir un carburant alternatif, mais les données cliniques restent précoces et hétérogènes.",
        mechanisms: [
          "Les corps cétoniques peuvent contourner partiellement l'utilisation réduite du glucose et influencer mitochondries, stress oxydatif, inflammation et signalisation synaptique.",
          "Les interventions étudiées comprennent régimes cétogènes, huile MCT, esters de cétones et autres stratégies exogènes."
        ],
        research: [
          "De petits essais et revues rapportent des signaux cognitifs ou fonctionnels chez certains participants, avec une grande variabilité de taille, durée, critères et facteurs génétiques.",
          "Des essais plus grands doivent distinguer soutien symptomatique et modification de la maladie."
        ],
        clinical: [
          "Les personnes âgées avec troubles cognitifs sont vulnérables à la perte de poids, aux interactions médicamenteuses et aux carences.",
          "Les stratégies cétogènes ne doivent pas être présentées comme traitement prouvé de la démence."
        ],
        questions: [
          "Quel stade, génotype APOE, profil métabolique ou phénotype cognitif répond le mieux?",
          "Peut-on obtenir des bénéfices avec des stratégies moins restrictives protégeant nutrition et qualité de vie?"
        ],
        sources: ["alzheimers-keto-pilot", "alzheimers-meta", "alzheimers-lipid-signature", "alzheimers-approaches-review", "alzheimers-progression-review", "alzheimers-mct-mouse"]
      },
      ms: {
        label: "Sclérose en plaques",
        slug: "sclerose-en-plaques",
        status: "Données de soutien émergentes",
        short: "La recherche nutritionnelle est active, mais le régime cétogène ne remplace pas un traitement de fond.",
        standfirst: "La sclérose en plaques implique inflammation, neurodégénérescence, fatigue et stress métabolique. Les études cétogènes explorent symptômes, qualité de vie et marqueurs métaboliques plutôt que le remplacement des traitements de fond.",
        mechanisms: [
          "Un régime cétogène peut influencer sensibilité à l'insuline, composition corporelle, fatigue, stress oxydatif et signalisation inflammatoire.",
          "Tout effet alimentaire s'ajoute à l'immunologie, à la rééducation, au sommeil, à l'humeur et aux traitements."
        ],
        research: [
          "Des essais récents et méta-analyses suggèrent faisabilité et bénéfices possibles sur fatigue, qualité de vie, composition corporelle et marqueurs métaboliques.",
          "Les données ne suffisent pas pour affirmer une réduction des poussées, de l'activité IRM ou de la progression du handicap."
        ],
        clinical: [
          "L'alimentation peut faire partie d'un plan de mode de vie, mais les décisions sur les traitements de fond restent neurologiques.",
          "La surveillance est importante en cas de perte de poids, troubles lipidiques, symptômes digestifs, projet de grossesse ou forte charge sportive."
        ],
        questions: [
          "Quel modèle alimentaire est durable dans les formes rémittentes et progressives?",
          "Les essais peuvent-ils relier les bénéfices rapportés aux données IRM, immunologiques et neurofilaments?"
        ],
        sources: ["ms-nams", "ms-phase-ii", "ms-network-meta", "ms-nfl", "ms-sleep", "ms-systematic-meta", "ms-adjunct-review"]
      },
      parkinsons: {
        label: "Parkinson",
        slug: "parkinson",
        status: "Données pilotes et de faisabilité",
        short: "Un champ de recherche en croissance autour du métabolisme énergétique et des symptômes non moteurs.",
        standfirst: "Dans la maladie de Parkinson, la recherche teste si le métabolisme des cétones peut influencer stress mitochondrial, neuroinflammation et symptômes non moteurs. Le signal est intéressant, mais non définitif.",
        mechanisms: [
          "Les cétones peuvent influencer efficacité mitochondriale, stress oxydatif, inflammation et signalisation neuronale.",
          "Le régime modifie aussi poids, transit, timing des protéines et absorption médicamenteuse, éléments importants dans Parkinson."
        ],
        research: [
          "De petits essais randomisés et études de faisabilité ont comparé approches cétogènes et autres régimes, avec des signaux sur symptômes non moteurs ou marqueurs métaboliques.",
          "Les données sont trop limitées et trop courtes pour établir une modification de la maladie ou des recommandations larges."
        ],
        clinical: [
          "Constipation, fragilité, perte de poids involontaire, hypotension orthostatique et timing de la lévodopa nécessitent une supervision.",
          "Les changements alimentaires doivent être coordonnés avec l'équipe neurologique."
        ],
        questions: [
          "Les améliorations non motrices reflètent-elles la cétose, le poids, la glycémie, le microbiome ou des effets de contexte?",
          "Des essais plus longs peuvent-ils mesurer progression motrice, cognition, sommeil, symptômes autonomes et tolérance ensemble?"
        ],
        sources: ["parkinsons-rct", "parkinsons-feasibility", "parkinsons-mediterranean-keto", "parkinsons-critical-review", "parkinsons-longitudinal", "parkinsons-nutritional-ketosis"]
      },
      brainCancers: {
        label: "Cancers du cerveau",
        slug: "cancers-du-cerveau",
        status: "Adjuvant et expérimental",
        short: "La thérapie métabolique est étudiée, surtout dans le glioblastome, mais le bénéfice de survie n'est pas prouvé.",
        standfirst: "La recherche en neuro-oncologie demande si une thérapie métabolique cétogène peut stresser le métabolisme tumoral tout en soutenant le cerveau normal. Elle reste adjuvante et expérimentale.",
        mechanisms: [
          "Le rationnel repose sur le métabolisme glucidique tumoral, les signaux insuline/IGF, le stress mitochondrial, l'inflammation et l'utilisation cérébrale des cétones.",
          "La biologie tumorale est hétérogène; une stratégie unique ne conviendra pas à toutes les tumeurs."
        ],
        research: [
          "Les études dans le glioblastome suggèrent une faisabilité chez certains patients en complément des soins oncologiques standards.",
          "Il n'existe pas de preuve établie qu'un régime cétogène seul améliore la survie; il ne doit pas retarder chirurgie, radio-chimiothérapie, corticoïdes ou inclusion en essai."
        ],
        clinical: [
          "Les patients peuvent présenter cachexie, hyperglycémie sous corticoïdes, nausées, dysphagie, crises et fatigue liée aux traitements.",
          "Toute stratégie cétogène doit être conduite avec l'oncologie et une diététique spécialisée."
        ],
        questions: [
          "Quels génotypes tumoraux, marqueurs d'imagerie ou phénotypes métaboliques identifieraient les bons groupes d'étude?",
          "Comment séparer cétose, apport calorique, variation pondérale et effets des traitements standards?"
        ],
        sources: ["brain-cancers-meta-2026", "brain-cancers-phase-1", "brain-cancers-clinical-trials-review", "brain-cancers-high-grade-pilot", "brain-cancers-review", "brain-cancers-framework"]
      },
      stroke: {
        label: "AVC",
        slug: "avc",
        status: "Données précliniques et de faisabilité",
        short: "La biologie des cétones est prometteuse dans les modèles; l'AVC reste d'abord une urgence médicale.",
        standfirst: "L'AVC est une urgence dépendante du temps. Le métabolisme des cétones est étudié pour la neuroprotection et la récupération, mais les données humaines ne justifient pas l'autotraitement.",
        mechanisms: [
          "Dans les modèles expérimentaux, le bêta-hydroxybutyrate peut influencer stress oxydatif, mitochondries, inflammation, barrière hémato-encéphalique et survie cellulaire.",
          "La translation clinique est complexe: type d'AVC, fenêtre temporelle, reperfusion, déglutition et rééducation varient beaucoup."
        ],
        research: [
          "Les travaux humains sont surtout de faisabilité ou concernent des lésions cérébrales aiguës voisines, pas un traitement définitif de l'AVC.",
          "Les interventions prouvées restent la reconnaissance urgente, la reperfusion si indiquée, la prévention secondaire, la rééducation et le soutien nutritionnel."
        ],
        clinical: [
          "Ne pas commencer de jeûne ou régime cétogène restrictif pendant un AVC suspecté ou aigu hors protocole de recherche.",
          "Après AVC, la priorité nutritionnelle est la sécurité de déglutition, l'apport protéino-énergétique, les facteurs de risque vasculaire et les comorbidités."
        ],
        questions: [
          "Peut-on tester des interventions cétoniques dans la bonne fenêtre après AVC ischémique ou hémorragique?",
          "Quels critères comptent le plus: biologie de l'infarctus, cognition, fatigue, récupération motrice ou risque vasculaire?"
        ],
        sources: ["stroke-brain-health", "stroke-bhb", "stroke-glymphatic", "stroke-omics", "stroke-photothrombosis", "stroke-enteral"]
      }
    }
  },
  it: {
    code: "it",
    name: "Italiano",
    htmlLang: "it-CH",
    siteName: "KetoNeurologie.ch",
    domain: "ketoneurologie.ch",
    homePath: "/it/",
    nav: {
      conditions: "Patologie",
      evidence: "Evidenze",
      about: "Chi sono",
      contact: "Contatto",
      disclaimer: "Avvertenza",
      swissSite: "Sito svizzero",
      internationalSite: "Sito internazionale",
      menu: "Menu"
    },
    shared: {
      reviewLabel: "Stato delle evidenze",
      evidenceStatus: "Livello di evidenza",
      scientificRationale: "Razionale scientifico",
      researchSnapshot: "Stato della ricerca",
      clinicalFrame: "Inquadramento clinico",
      openQuestions: "Domande aperte",
      selectedEvidence: "Evidenze selezionate",
      conditionPages: "Patologie",
      readPage: "Leggi la pagina",
      lastUpdated: "Ultima revisione",
      notAdvice: "Sintesi educativa delle evidenze. Nessun consiglio medico individuale.",
      currentEvidence: "Evidenze attuali",
      aboutProject: "Informazioni sul progetto",
      disclaimerTitle: "Avvertenza medica",
      referencesTitle: "Riferimenti e note sulle fonti",
      allConditions: "Tutte le patologie"
    },
    hero: {
      eyebrow: "Scienza chetogenica in neurologia",
      title: "Metabolismo chetogenico e malattie neurologiche",
      lead: "Una guida prudente e basata sulla ricerca alle terapie chetogeniche e al metabolismo dei chetoni in epilessia, neurodegenerazione, neuroimmunologia, neuro-oncologia e ictus.",
      primary: "Esplora le patologie",
      secondary: "Leggi l'avvertenza"
    },
    home: {
      introTitle: "Prima le evidenze, poi l'entusiasmo",
      intro: "Le terapie chetogeniche significano cose diverse a seconda della patologia: terapia supervisionata e consolidata in alcune epilessie farmacoresistenti, domanda di ricerca nella demenza e nei disturbi del movimento, strategia metabolica sperimentale nei tumori cerebrali e nell'ictus.",
      evidenceMap: "Le pagine separano meccanismi, dati clinici, incertezze e cautele pratiche, così la ricerca resta leggibile senza trasformarsi in consiglio terapeutico personale."
    },
    about: {
      title: "Chi sono",
      body: "Sono una medica assistente in neurologia (Assistenzärztin) e sono appassionata della scienza dietro gli interventi nutrizionali e di stile di vita nelle malattie neurologiche croniche. Questo progetto è la mia mappa ragionata delle evidenze attuali, dei meccanismi e delle domande aperte nella neurologia chetogenica.",
      second: "L'obiettivo è rendere la ricerca comprensibile per clinici, ricercatori, pazienti e familiari, mantenendo chiaro il confine tra informazione e assistenza medica individuale."
    },
    contact: {
      title: "Contatto",
      lead: "Per domande scientifiche, collaborazioni, inviti a parlare o correzioni alla biblioteca delle evidenze, potete contattarmi via e-mail.",
      emailLabel: "E-mail",
      email: "contact@ketoneurologie.ch",
      note: "Si prega di non inviare domande mediche urgenti o dettagli clinici personali. Non posso fornire consigli medici individuali tramite questo sito."
    },
    disclaimer: {
      short: "Raccolgo le evidenze scientifiche attuali, ma non fornisco consigli medici individuali.",
      body: "Le informazioni di questo sito sono destinate all'educazione e alla sintesi delle evidenze. Non sono una diagnosi, un piano terapeutico, una prescrizione nutrizionale o un sostituto delle cure mediche. Diete chetogeniche e supplementi di chetoni possono interagire con malattie, farmaci, gravidanza, terapie oncologiche, trattamento del diabete, disturbi lipidici, storia di disturbi alimentari, malattie renali o epatiche e rischio nutrizionale. Qualsiasi terapia dietetica per una malattia neurologica va discussa con medici e dietisti qualificati che conoscano il caso individuale.",
      emergency: "Per sintomi neurologici acuti come segni di ictus, nuove crisi, confusione grave o debolezza improvvisa, rivolgersi immediatamente all'emergenza."
    },
    evidence: {
      title: "Biblioteca delle evidenze",
      lead: "Una bibliografia selezionata per le pagine sulle patologie. Il sito privilegia le evidenze cliniche umane quando esistono e distingue chiaramente studi di fattibilità, meccanicistici o preclinici.",
      note: "È un punto di partenza curato, non una revisione sistematica."
    },
    notFound: {
      title: "Pagina non trovata",
      lead: "La pagina potrebbe essere stata spostata. Torna alla panoramica."
    },
    conditions: {
      epilepsy: {
        label: "Epilessia",
        slug: "epilessia",
        status: "Consolidata in alcune epilessie farmacoresistenti",
        short: "L'indicazione neurologica più chiara per una terapia dietetica chetogenica supervisionata.",
        standfirst: "Nell'epilessia, la terapia chetogenica non è una moda del benessere. È una terapia medica strutturata con evidenze più solide nell'epilessia farmacoresistente, soprattutto nei bambini e in alcuni adulti.",
        mechanisms: [
          "La chetosi terapeutica modifica la disponibilità energetica cerebrale e può influenzare neurotrasmissione, funzione mitocondriale, stress ossidativo, infiammazione e soglia epilettica.",
          "Dieta chetogenica classica, Atkins modificata, MCT e approcci a basso indice glicemico differiscono per intensità, tollerabilità e monitoraggio."
        ],
        research: [
          "Linee guida e revisioni sistematiche supportano la valutazione di queste terapie quando i farmaci anticrisi appropriati non garantiscono un controllo sufficiente.",
          "Le evidenze sono più forti nelle sindromi epilettiche pediatriche, ma in alcuni adulti si usano protocolli modificati con supporto specialistico."
        ],
        clinical: [
          "Serve un percorso specialistico con educazione dietetica, revisione farmacologica, controlli di laboratorio e gestione degli effetti indesiderati.",
          "La dieta non sostituisce piani di emergenza o modifiche dei farmaci guidate dal medico."
        ],
        questions: [
          "Quali adulti traggono maggior beneficio e come rendere l'aderenza realistica fuori dai centri specializzati?",
          "I biomarcatori possono predire risposta, tollerabilità ed effetti cardiometabolici a lungo termine?"
        ],
        sources: ["epilepsy-cochrane", "epilepsy-child-guideline", "epilepsy-adult-guideline", "epilepsy-kiwe", "epilepsy-asm-reduction", "epilepsy-micronutrients"]
      },
      alzheimers: {
        label: "Alzheimer",
        slug: "alzheimer",
        status: "Evidenze cliniche emergenti",
        short: "La ricerca esplora se i chetoni possano sostenere il metabolismo energetico cerebrale nel declino cognitivo.",
        standfirst: "La malattia di Alzheimer è associata a ridotto metabolismo cerebrale del glucosio. I chetoni potrebbero offrire un carburante alternativo, ma le evidenze cliniche sono ancora iniziali ed eterogenee.",
        mechanisms: [
          "I corpi chetonici possono aggirare in parte la ridotta utilizzazione del glucosio e influenzare mitocondri, stress ossidativo, infiammazione e segnalazione sinaptica.",
          "Sono stati studiati diete chetogeniche, olio MCT, esteri chetonici e altre strategie esogene, con profili di aderenza e sicurezza diversi."
        ],
        research: [
          "Piccoli studi clinici e revisioni riportano segnali cognitivi o funzionali in alcuni partecipanti, ma dimensione, durata, outcome e genetica variano.",
          "Servono studi più grandi per distinguere supporto sintomatico e modifica della malattia."
        ],
        clinical: [
          "Gli anziani con deficit cognitivo sono vulnerabili a perdita di peso, complessità farmacologica e carenze nutrizionali.",
          "Le strategie chetogeniche non vanno presentate come trattamento dimostrato per la demenza."
        ],
        questions: [
          "Quale stadio di malattia, genotipo APOE, profilo metabolico o fenotipo cognitivo risponde meglio?",
          "Si possono ottenere benefici con strategie meno restrittive che proteggano nutrizione e qualità di vita?"
        ],
        sources: ["alzheimers-keto-pilot", "alzheimers-meta", "alzheimers-lipid-signature", "alzheimers-approaches-review", "alzheimers-progression-review", "alzheimers-mct-mouse"]
      },
      ms: {
        label: "Sclerosi multipla",
        slug: "sclerosi-multipla",
        status: "Evidenze di supporto emergenti",
        short: "La ricerca nutrizionale nella SM è attiva, ma la dieta chetogenica non è terapia modificante la malattia.",
        standfirst: "La sclerosi multipla comprende attività immunitaria, neurodegenerazione, fatica e stress metabolico. Gli studi chetogenici esplorano sintomi, qualità di vita e marker metabolici, non la sostituzione delle terapie modificanti.",
        mechanisms: [
          "La dieta chetogenica può influenzare sensibilità insulinica, composizione corporea, vie della fatica, stress ossidativo e segnali infiammatori.",
          "Ogni effetto dietetico si aggiunge a immunologia, riabilitazione, sonno, umore e farmaci."
        ],
        research: [
          "Studi recenti e meta-analisi suggeriscono fattibilità e possibili benefici su fatica, qualità di vita, composizione corporea e marker metabolici.",
          "Le evidenze non bastano per affermare riduzione di ricadute, attività RM o progressione della disabilità."
        ],
        clinical: [
          "La dieta può far parte di un piano di stile di vita; le decisioni sulle terapie modificanti restano neurologiche.",
          "Il monitoraggio è importante in caso di perdita di peso, alterazioni lipidiche, sintomi intestinali, gravidanza programmata o elevato carico sportivo."
        ],
        questions: [
          "Quale schema alimentare è sostenibile nella SM recidivante e progressiva?",
          "Gli studi possono collegare i benefici riferiti dai pazienti con RM, immunologia e neurofilamenti?"
        ],
        sources: ["ms-nams", "ms-phase-ii", "ms-network-meta", "ms-nfl", "ms-sleep", "ms-systematic-meta", "ms-adjunct-review"]
      },
      parkinsons: {
        label: "Parkinson",
        slug: "parkinson",
        status: "Evidenze pilota e di fattibilità",
        short: "Un'area di ricerca in crescita su metabolismo energetico e sintomi non motori.",
        standfirst: "Nella malattia di Parkinson si studia se il metabolismo dei chetoni possa influenzare stress mitocondriale, neuroinfiammazione e sintomi non motori. Il segnale è interessante, ma non definitivo.",
        mechanisms: [
          "I chetoni possono influenzare efficienza mitocondriale, stress ossidativo, infiammazione e segnalazione neuronale.",
          "La dieta modifica anche peso, intestino, timing proteico e assorbimento dei farmaci, aspetti rilevanti nella cura del Parkinson."
        ],
        research: [
          "Piccoli studi randomizzati e di fattibilità hanno confrontato approcci chetogenici con altre diete e riportato segnali su sintomi non motori o misure metaboliche.",
          "Le evidenze sono troppo piccole e brevi per stabilire modifica della malattia o raccomandazioni generali."
        ],
        clinical: [
          "Stipsi, fragilità, perdita di peso involontaria, sintomi ortostatici e timing della levodopa richiedono particolare supervisione.",
          "Le modifiche alimentari dovrebbero essere coordinate con il team neurologico curante."
        ],
        questions: [
          "I miglioramenti non motori dipendono da chetosi, peso, glicemia, microbioma o effetti di contesto?",
          "Studi più lunghi possono misurare insieme progressione motoria, cognizione, sonno, sintomi autonomici e tollerabilità?"
        ],
        sources: ["parkinsons-rct", "parkinsons-feasibility", "parkinsons-mediterranean-keto", "parkinsons-critical-review", "parkinsons-longitudinal", "parkinsons-nutritional-ketosis"]
      },
      brainCancers: {
        label: "Tumori cerebrali",
        slug: "tumori-cerebrali",
        status: "Adiuvante e sperimentale",
        short: "La terapia metabolica è studiata, soprattutto nel glioblastoma, ma il beneficio sulla sopravvivenza non è dimostrato.",
        standfirst: "La ricerca sui tumori cerebrali chiede se una terapia metabolica chetogenica possa stressare il metabolismo tumorale sostenendo il cervello normale. Rimane adiuvante e sperimentale.",
        mechanisms: [
          "Il razionale include metabolismo tumorale del glucosio, segnalazione insulina/IGF, stress mitocondriale, infiammazione e capacità del cervello di usare chetoni.",
          "La biologia tumorale è eterogenea, quindi una sola strategia metabolica non può valere per tutte le diagnosi."
        ],
        research: [
          "Gli studi nel glioblastoma suggeriscono fattibilità in pazienti selezionati insieme alle cure oncologiche standard.",
          "Non esiste prova consolidata che la dieta chetogenica da sola migliori la sopravvivenza; non deve ritardare chirurgia, radioterapia, chemioterapia, steroidi o studi clinici."
        ],
        clinical: [
          "I pazienti oncologici possono avere cachessia, iperglicemia da steroidi, nausea, disfagia, crisi e fatica da trattamento.",
          "Ogni strategia chetogenica nei tumori cerebrali deve essere guidata dall'oncologia e supervisionata da dietisti."
        ],
        questions: [
          "Quali genotipi tumorali, marker di imaging o fenotipi metabolici identificano i pazienti da studiare?",
          "Come separare chetosi, apporto calorico, variazione di peso ed effetti delle terapie standard?"
        ],
        sources: ["brain-cancers-meta-2026", "brain-cancers-phase-1", "brain-cancers-clinical-trials-review", "brain-cancers-high-grade-pilot", "brain-cancers-review", "brain-cancers-framework"]
      },
      stroke: {
        label: "Ictus",
        slug: "ictus",
        status: "Evidenze precliniche e di fattibilità",
        short: "La biologia dei chetoni è promettente nei modelli; l'ictus resta prima di tutto emergenza medica.",
        standfirst: "L'ictus è tempo-dipendente. Il metabolismo dei chetoni è studiato per neuroprotezione e recupero, ma le evidenze umane non supportano l'autotrattamento.",
        mechanisms: [
          "Nei modelli sperimentali il beta-idrossibutirrato può influenzare stress ossidativo, mitocondri, infiammazione, barriera emato-encefalica e sopravvivenza cellulare.",
          "La traduzione clinica è complessa perché sottotipo, timing, riperfusione, sicurezza della deglutizione e riabilitazione variano molto."
        ],
        research: [
          "Il lavoro umano è soprattutto di fattibilità o su lesioni cerebrali acute correlate, non trattamento definitivo dell'ictus.",
          "Restano centrali gli interventi provati: riconoscimento urgente, riperfusione quando indicata, prevenzione secondaria, riabilitazione e supporto nutrizionale."
        ],
        clinical: [
          "Non iniziare digiuno o dieta chetogenica restrittiva durante sospetto ictus o ictus acuto fuori da un protocollo di ricerca.",
          "Dopo ictus, la nutrizione deve priorizzare sicurezza della deglutizione, proteine ed energia adeguate, rischio vascolare e comorbidità."
        ],
        questions: [
          "Gli interventi chetonici possono essere testati in sicurezza nella finestra giusta dopo ictus ischemico o emorragico?",
          "Quali outcome contano di più: biologia dell'infarto, cognizione, fatica, recupero motorio o rischio vascolare?"
        ],
        sources: ["stroke-brain-health", "stroke-bhb", "stroke-glymphatic", "stroke-omics", "stroke-photothrombosis", "stroke-enteral"]
      }
    }
  }
};

export const siteBuilds = [
  {
    id: "international",
    domain: "ketoneurology.com",
    output: "ketoneurology.com",
    locales: ["en"],
    canonicalBase: "https://ketoneurology.com"
  },
  {
    id: "swiss",
    domain: "ketoneurologie.ch",
    output: "ketoneurologie.ch",
    locales: ["de", "fr", "it"],
    canonicalBase: "https://ketoneurologie.ch"
  }
];
