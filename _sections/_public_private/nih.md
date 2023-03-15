### NIH: The Biomedical Translator

<div class="note">
**Note:**

This section is reproduced from, focuses, and expands on "[Linked Data or Surveillance Capitalism?](https://jon-e.net/infrastructure/#linked-data-or-surveillance-capitalism)" from {% cite saundersDecentralizedInfrastructureNeuro2022 %}.
</div>

The NIH's Biomedical Data Translator[^translator] project was initially described in its 2016 Strategic Plan for Data Science as a means of translating between biomedical data formats:

> Through its Biomedical Data Translator program, the National Center for Advancing Translational Sciences (NCATS) is supporting research to develop ways to connect conventionally separated data types to one another to make them more useful for researchers and the public. {% cite NIHStrategicPlan2018 %}

The original [funding statement from 2016](https://web.archive.org/web/20210709100523/https://ncats.nih.gov/news/releases/2016/feasibility-assessment-translator) is similarly humble, and press releases [through 2017](https://web.archive.org/web/20210709171335/https://ncats.nih.gov/pubs/features/translator) also speak mostly in terms of querying the data -- though some ambition begins to creep in. By 2019, the vision for the project had shifted from *translating* between data types into the realm of heterogeneous linkages in some meta-level system for linking and *reasoning* over them. 

In their piece "Toward a Universal Biomedical Translator," then in a feasibility assessment phase, the members of the Translator Consortium assert that universal translation between biomedical data is impossible[^impossibledata]{% cite consortiumUniversalBiomedicalData2019 %}. The impossibility they saw was not that of conflicting political demands on the structure of organization (as per {% cite bowkerSortingThingsOut1999 %}), but of the sheer numeracy of the data and vocabularies needed to describe them. The risk posed by a lack of a universal "language" was not being able to index all possible data, rather than inaccuracy or inequity.

Undaunted by their stated belief in the impossibility of a universalizing ontology, the Consortium arguably created one in their [biolink](https://biolink.github.io/biolink-model/docs/) model {% cite bruskiewichBiolinkBiolinkmodel2021 unniBiolinkModelUniversal2022 %}. Biolink consists of a hierarchy of basic classes: eg. a [BiologicalEntity](https://biolink.github.io/biolink-model/docs/BiologicalEntity.html) like a [Gene](https://biolink.github.io/biolink-model/docs/Gene.html), or a [ChemicalEntity](https://biolink.github.io/biolink-model/docs/ChemicalEntity.html) like a [Drug](https://biolink.github.io/biolink-model/docs/Drug.html). Classes can then linked by any number of properties, or "Slots," like a therapeutic procedure that [treats](https://biolink.github.io/biolink-model/docs/treats.html) a disease. 

<div class="draft-text">
Biolink is a sort of meta-ontology.... 

The resolution of the impossibility of universalizing knowledge graph was to bring them into a more permissive meta-ontology and then apply the magic of algorithms to them.

Combine this and following paragraph
</div>

The translator does not attempt to respond to the needs of researchers or labs who might want to link their raw data splayed out across flash drives and file structures whose chaos borders on whimsy. Instead, the Translator operates at the level of "knowledge," or "generally accepted, universal assertions derived from the accumulation of information" {% cite fechoProgressUniversalBiomedical2022 %}. Rather than translating *between data types*, the meaning of "translation" shifted to meaning *"translating data into knowledge"* {% cite consortiumUniversalBiomedicalData2019 %}. 

To feed the Translator, Biolink sits "on top of" a [collection of database APIs](http://www.smart-api.info/registry) that serve structured biomedical data, each called a "knowledge source." Individual APIs [declare](https://github.com/NCATSTranslator/ReasonerAPI) that they are able to provide data for a particular set of classes or slots, like [drugs that affect genetic expression](http://www.smart-api.info/ui/adf20dd6ff23dfe18e8e012bde686e31), and are then made browsable from the [SmartAPI Knowledge Graph](http://www.smart-api.info/portal/translator/metakg). Queries to individual APIs do not return "raw" data, but return assertions of fact in the parlance of the Biolink model: this procedure treats that disease, etc. 

Because individual researchers do not typically represent their data in the form of factual assertions, knowledge sources are constrained to "highly curated biomedical databases" or other aggregated systems. The NIH RePORTER tool [gives an overview](https://reporter.nih.gov/search/DShVUhB_ZUq0X5UWFjy5WQ/projects?shared=true) of the way these knowledge sources are prepared when none already exist for a given Biolink class or predicate: automated [text mining](https://reporter.nih.gov/project-details/10548337) tools and a series of [domain-specific data provider](https://reporter.nih.gov/project-details/10056962) projects, rather than via tools provided to researchers.

The collection of knowledge sources, linked to nodes and edges in the Biolink model, are designed to be queried as a graph. To answer a query like "what drug treats this disease?" the translator considers the graph of entities linked to the disease: what symptoms does the disease have? what genes are linked to those symptoms? which drugs act on those genes? and so on {% cite renaissancecomputinginstituterenciBiomedicalDataTranslator2022 %}. The form of the Translator as a graph-based question answering machine bounds its application as a platform for researchers to guide their research and clinicians to guide their care {% cite hailuNIHfundedProjectAims2019 %}, rather than a tool for linking data *in situ*.

---

*still integrating prior piece*

Personalized Medicine:
- detecting MS indicators, good example of how off-target information can propagate through the graph (and in this case be explained post-hoc) {% cite nelsonEmbeddingElectronicHealth2021 %}

<div class="draft-text">
The point here is mostly that we are trying to work through several layers of abstraction, jumping to the 'database of everything' rather than making systems that allow people to make local sense of the information they need to. that we launder basic information through 'big data' techniques in a way that is intended to "extract and summarize" rather than be a means of expression and sensemaking.

Eg. SPOKE {% cite morrisScalablePrecisionMedicine2023 %}. Rather than trying to like understand stuff, we just plug in all the data from a ton of APIs and knowledge will emerge.

Separable critiques:
- rather than having the scientific discourse happen in these graphs so the context is just al the discussion and whatnot that goes into understanding conflicting results, the goal is to "extract" and "clean" them so each paper is just some assertion of a fact. cf. data feminism and obsession with cleanliness {% cite dignazioDataFeminism2020 %}
- focus on prediction and algorithmic sensemaking rather than human sensemaking
- tech is wrong: platformatized information cant' actually realize the kind of community input that some platforms claim to want -> interacts with scientific publishing incentives
- personalized medicine & surveillance. 
</div>


