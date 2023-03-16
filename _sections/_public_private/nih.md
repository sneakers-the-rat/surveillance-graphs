### NIH: The Biomedical Translator

<div class="note">
**Note:**

This section is reproduced from, focuses, and expands on "[Linked Data or Surveillance Capitalism?](https://jon-e.net/infrastructure/#linked-data-or-surveillance-capitalism)" from {% cite saundersDecentralizedInfrastructureNeuro2022 %}.
</div>

The NIH's Biomedical Data Translator[^translator] project was initially described in its 2016 Strategic Plan for Data Science as a means of translating between biomedical data formats:

> Through its Biomedical Data Translator program, the National Center for Advancing Translational Sciences (NCATS) is supporting research to develop ways to connect conventionally separated data types to one another to make them more useful for researchers and the public. {% cite NIHStrategicPlan2018 %}

The original [funding statement from 2016](https://web.archive.org/web/20210709100523/https://ncats.nih.gov/news/releases/2016/feasibility-assessment-translator) is similarly humble, and press releases [through 2017](https://web.archive.org/web/20210709171335/https://ncats.nih.gov/pubs/features/translator) also speak mostly in terms of querying the data -- though some ambition begins to creep in. By 2019, the vision for the project had shifted from *translating* between data types into the realm of heterogeneous linkages in some meta-level system for linking and *reasoning* over them. 

In their piece "Toward a Universal Biomedical Translator," then in a feasibility assessment phase, the members of the Translator Consortium assert that universal translation between biomedical data is impossible[^impossibledata]{% cite consortiumUniversalBiomedicalData2019 %}. The impossibility they saw was not that of conflicting political demands on the structure of organization (as per {% cite bowkerSortingThingsOut1999 %}), but of the sheer numeracy of the data and vocabularies needed to describe them. The risk posed by a lack of a universal "language" was not being able to index all possible data, rather than inaccuracy or inequity[^babel].

Undaunted by their stated belief in the impossibility of a universalizing ontology, the Consortium created one in their [biolink](https://biolink.github.io/biolink-model/docs/) model[^biolinkpaper] {% cite bruskiewichBiolinkBiolinkmodel2021 unniBiolinkModelUniversal2022 %}. Biolink consists of a hierarchy of basic classes: eg. a [BiologicalEntity](https://biolink.github.io/biolink-model/docs/BiologicalEntity.html) like a [Gene](https://biolink.github.io/biolink-model/docs/Gene.html), or a [ChemicalEntity](https://biolink.github.io/biolink-model/docs/ChemicalEntity.html) like a [Drug](https://biolink.github.io/biolink-model/docs/Drug.html). Classes can then linked by any number of properties, or "Slots[^slots]," like a therapeutic procedure that [treats](https://biolink.github.io/biolink-model/docs/treats.html) a disease. Revisiting the lessons of the early Semantic Web, as a universalizing ontology it seems to be experiencing a bit of sprawl. At a healthy 965 classes and properties, one can forgive them for re-defining classes like a [Publication](https://biolink.github.io/biolink-model/docs/Publication.html) that are ably defined elsewhere in more specific ontologies --- biology has a way of invading the rest of life rather than staying cleanly isolated in its discipline.

Biolink was designed to be a sort of "meta ontology," or a means of mapping different domain-specific biomedical ontologies onto a common vocabulary[^tooling]. 


of course, as a universalizing ontology, they encountered all the usual problems:
- sprawl: why are we modeling publications now? isn't there like... the most commonly used ontology for that?

To feed the Translator, Biolink sits "on top of" a [collection of database APIs](http://www.smart-api.info/registry) that serve structured biomedical data, each called a "knowledge source." Individual APIs [declare](https://github.com/NCATSTranslator/ReasonerAPI) that they are able to provide data for a particular set of classes or slots, like [drugs that affect genetic expression](http://www.smart-api.info/ui/adf20dd6ff23dfe18e8e012bde686e31), and are then made browsable from the [SmartAPI Knowledge Graph](http://www.smart-api.info/portal/translator/metakg). Queries to individual APIs do not return "raw" data, but return assertions of fact in the parlance of the Biolink model: this procedure treats that disease, etc. 

The translator does not attempt to respond to the needs of researchers or labs who might want to link their raw data splayed out across flash drives and file structures whose chaos borders on whimsy. Instead, the Translator operates at the level of "knowledge," or "generally accepted, universal assertions derived from the accumulation of information" {% cite fechoProgressUniversalBiomedical2022 %}. Rather than translating *between data types*, the meaning of "translation" shifted to meaning *"translating data into knowledge"* {% cite consortiumUniversalBiomedicalData2019 %}. 



Because individual researchers do not typically represent their data in the form of factual assertions, knowledge sources are constrained to "highly curated biomedical databases" or other aggregated systems. The NIH RePORTER tool [gives an overview](https://reporter.nih.gov/search/DShVUhB_ZUq0X5UWFjy5WQ/projects?shared=true) of the way these knowledge sources are prepared when none already exist for a given Biolink class or predicate: automated [text mining](https://reporter.nih.gov/project-details/10548337) tools and a series of [domain-specific data provider](https://reporter.nih.gov/project-details/10056962) projects, rather than via tools provided to researchers. 

The collection of knowledge sources, linked to nodes and edges in the Biolink model, are designed to be queried as a graph. To answer a query like "what drug treats this disease?" the translator considers the graph of entities linked to the disease: what symptoms does the disease have? what genes are linked to those symptoms? which drugs act on those genes? and so on {% cite renaissancecomputinginstituterenciBiomedicalDataTranslator2022 %}. The form of the Translator as a graph-based question answering machine bounds its application as a platform for researchers to guide their research and clinicians to guide their care {% cite hailuNIHfundedProjectAims2019 %}, rather than a tool for linking data *in situ*.

---

*still integrating prior piece, past this mark, i'm just getting some draft text down and so it's very uh unfinished*

- centralized ontology building re: structure of biolink and data repositories.
- queries that are mostly wrong

---




The way this seems to pan out in practice after experimenting with their available online demos and in their published literature is that a number of different teams are working in parallel


---



Personalized Medicine:
- detecting MS indicators, good example of how off-target information can propagate through the graph (and in this case be explained post-hoc) {% cite nelsonEmbeddingElectronicHealth2021 %}

ROBOKOP
- it's wrong a lot!
- genes associated with gender dysphoria:
	- ITSN2 incorrectly identified in a paper about attachment patterns and personality: https://pubmed.ncbi.nlm.nih.gov/28210932/
	- HSD17B3 incorrectly identified as HSD17B13: https://www.nature.com/articles/nrurol.2012.182
	- 5a-RD2 incorrectly identified as DHRS11 from same paper
	- Incorrectly identifies POMC in https://www.frontiersin.org/articles/10.3389/fendo.2019.00751/full
	- incorrectly identified OPN1SW in https://pubmed.ncbi.nlm.nih.gov/30843609/

<div class="draft-text">
The point here is mostly that we are trying to work through several layers of abstraction, jumping to the 'database of everything' rather than making systems that allow people to make local sense of the information they need to. that we launder basic information through 'big data' techniques in a way that is intended to "extract and summarize" rather than be a means of expression and sensemaking.

Eg. SPOKE {% cite morrisScalablePrecisionMedicine2023 %}. Rather than trying to like understand stuff, we just plug in all the data from a ton of APIs and knowledge will emerge.

Emphases:
- who gets to make the ontologies? forming a bunch of groups to make domain-specific ontologies without necessarily intending them to be living. both expensive and misdirected labor
- who gets to do the editing and curation? probably dispersed among the platforms, right? but then who owns that information?
- it probably won't really work! at most it basically amounts to a fancy search engine!
	- how do you represent conditional links? this isn't something the graph can solve! eg. if a drug increases the activity of some protein given some context, and decreases it in another context, does the graph just count up the number of papers that describe that and add those as edges? if the input data doesn't represent those constraints, there's no way to recover it no matter how smart your algorithms are!
- it really does require personal medical data to work! eg. to know whether you treat gender dysphoria with E or T you have to at least know AGAB or transition goals. that's the whole conceit of precision medicine - that a lot of the reason that we haven't been able to cure some of the more complicated diseases is that they have lots of etiologies or are idiopathic or whatnot. eg {% cite nelsonIntegratingBiomedicalResearch2019 nelsonEmbeddingElectronicHealth2021 %}
- remember to still be fair to the positives! It would be good to have something like this! the problem is that it doesn't really matter what it's intended for, but that the labor is being done in such a way that we are basically teeing up biomedical knowledge to be re-captured by cloud corporations. Who will be willing and able to integrate their data with these ontologies? probably not a lot of basic researchers, who will be interacting with it through a bunch of various platforms and whatnot. 
- big data corpos are already in on it!
	- IBM: {% cite chenIBMWatsonHow2016 %}
	- Microsoft: {% cite sinhaOverviewMicrosoftAcademic2015 %}

Separable critiques:
- rather than having the scientific discourse happen in these graphs so the context is just al the discussion and whatnot that goes into understanding conflicting results, the goal is to "extract" and "clean" them so each paper is just some assertion of a fact. cf. data feminism and obsession with cleanliness {% cite dignazioDataFeminism2020 %}
- focus on prediction and algorithmic sensemaking rather than human sensemaking
- tech is wrong: platformatized information cant' actually realize the kind of community input that some platforms claim to want -> interacts with scientific publishing incentives
- personalized medicine & surveillance. 
- the hollow middle, right? like why is it so hard for me to even find all the ontologies that have been made by the biomedical translator project? why are most of the API endpoints in arax dead *already* - it hasn't even launched! why aren't there the tools for me to actually *use the information* in a way that wasn't specifically designed for in the platform? by focusng the design into these API-based data sources with platforms strapped on top of them, the project is limited to *only exactly what the developers could imagine and are capable of doing* rather than fulfullig the initial definition (find cite) of what "platforms" meant - an enabling technology that allows an expansive space of use that goes beyond the creators and enables and empowers people!
</div>


