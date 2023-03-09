A reader that I am constructing as a straw man for the sake of argument might ask: if the problem is information conglomerates stockpiling a massive quantity of proprietary data and renting use of it, isn't "open data" the answer? And to that reader I would gently shake my head and say a qualified "no."

"Openness," including open source, open standards, and open data, is a subtle tool that can be used both to dissolve and reinforce economic and political power {% cite bowkerSortingThingsOut1999 %}.

Free and open source software, with its noble (and decidedly non-monolithic {% cite liuFreedomIsnFree2018 %}) goal of creating an ecosystem of free[^freesoftware] software, is a means by which large information companies can harvest the commons and outsource labor costs {% cite warkHackerManifesto2004 goldsmithOriginalSinFree2019 hallidayOpenSourceNot2018 hunterReclaimingComputingCommons2016 hornPostOpenSource2020 %}. There are countless examples of FOSS developers maintaing software widely used by companies making billions of dollars for little or no compensation - eg. [core-js](https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md) {% cite pushkarevWhatNext2023 %}, [OpenSSL](https://veridicalsystems.com/blog/of-money-responsibility-and-pride/index.html) {% cite marquessSpeedsFeedsMoney2014 %}, leftpad {% cite gallagherRagequitCoderUnpublished2016 %}, [PLC4X](https://github.com/chrisdutz/blog/blob/main/plc4x/free-trial-expired.adoc) {% cite dutzYourFreeTrial2022 %} and so on. When an information company releases or supports an open source project it is rarely an act of altruism. The effect is to prevent another company from profiting from a proprietary version of that technology, signal virtue, drive recruitment, and create a centralized point to concentrate donated labor. Microsoft, a famously [good actor](https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish) in software, took this several steps further with GitHub, VSCode, and later Copilot, capturing a large chunk of the software development *process* in order to trick programmers to be the "[humans in the loop](https://twitter.com/json_dirs/status/1410897161277956097)" refining the neural network to write code and dilute their labor power {% cite butterickGitHubCopilotInvestigation2022 butterickGitHubCopilotLitigation2022 olearyVSCodeWhat2022 VSCodiumOpenSource %}.

"[Peer production](https://en.wikipedia.org/wiki/Peer_production)" models, a more generic term for public collaboration that includes FOSS, has similar discontents. The term "crowdsource" quite literally describes a patronizing means of harvesting free labor via some typically gamified platform (in the context of "open science," see {% cite mirowskiFutureOpenScience2018 %}, and in the semantic web see {% cite allhutterWorkingOntologistsHighQuality2019 %}). Wikipedia is perhaps the most well-known example of peer production[^wikipedia], and it too struggles with its position as a resource to be harvested by information conglomerates. In 2015, the increasing prevalence of Google's information boxes caused a substantial decline in wikipedia pageviews {% cite UserTalkJimbo2015 hinkisGoogleSteals5502015  %} as its information was harvested into Google's knowledge graph, and a "will she, won't she" search engine arguably intended to avoid dependence on Google was at the heart of its 2014-2016 leadership crisis {% cite whiteWikimediaTimelineEvents2016 buetlerSearchDestroyKnowledge2016 %}. After shuttering Freebase, Google has donated a substantial amount of money to kickstart its successor {% cite pellissiertanonFreebaseWikidataGreat2016 %} Wikidata, presumably as a means of crowdsourcing the curation of its knowledge graph {% cite wikimediameta-wikiGoogleMeta GoogleStakeWikidata2019 vrandecicWikidataFreeCollaborative2014 %}.

"Open" standards are yet another fraught domain of openness. For an example within academia, the seemingly-open Digital Object Identifier (DOI) system was concocted as a means for [publishers to retain control of indexing research](https://jon-e.net/infrastructure/#seemingly-prosocial-protocols-can-be-used-by-industries-to-preem) (see sec. 3.1.1 in {% cite saundersDecentralizedInfrastructureNeuro2022 %}). The nonprofit standards body [NISO](https://www.niso.org)'s standards for indicating journal article versions {% cite nisoRP82008JournalArticle2008 %} and licensing {% cite nisoRP222021AccessLicense2021 %} are used by publishers to enforce their intellectual property monopolies and programmatically scour the web to prevent free access to publicly funded information {% cite carpenterNewArticleSharing2021 %}.

Schema.org, a standard intended to be the generic interchange ontology of the web, is another emblem of enclosure of the semantic web. Its introduction at the SemTech 2011 conference was cause for a rare point of agreement between the then-warring maintainers of RDFa and Microformats: "folks, it's wrong for Google to dictate vocabularies, let's not lose sight of that" {% cite SemTech2011BOF2011 %}. Though ostensibly open, its structure and emphases have been roundly criticized as representing a eurocentric bias towards describing commercially valuable information (eg. {% cite iliadisOneSchemaRule2023 %}). It encourages website maintainers to embed Schema.org annotations in their pages in exchange for a boost in search rankings --- which google then embeds in its infoboxes, driving down page views. More fundamentally it cements the notion that Linked Data is something that we are only intended to use to make our information more available to some search engine crawler rather than make use of for ourselves: "In general, the design decisions place more of the burden on consumers of the markup" {% cite guhaSchemaOrgEvolution2015 %}. It encodes the notion that there should be one "neutral" means of representing information for one (or a few) global search engines to understand, rather than for local negotiation over meaning and location. According to the transcribed Q&A after its 2011 announcement, the Google representatives characterized the creation of authoring tools like those created to make creative use of HTML more accessible as a potential "alternative path," but then dismissed the notion of improved tooling as "impossible" {% cite hawkeNotesSessionSemTech2011 %}. 

**ending this section**
- So what emerges is that some combination of standardization and proprietariness is necessary to concentrate free labor while also preserving the core of the business model
	- Some gradient between totally public information and then the 'secret sauce' that gets added in the form or proprietary data as well as compute
- Statements from info giants that what they need now is some way of coordinating knowledge graphs between each other
- So this is how we should attempt to understand two efforts funded by the US federal government to create knowledge graph infrastructures...

---




The combination of data at different shades of openness that 

Whether "open knowledge graphs" are good or not is at best an incomplete question. We must also ask, at least:

- What *parts* of the graph are open? Are we able tocompletely manipulate everything including their basic ontologies? to fork and repurpose them? 
- Can we *use* them? Do we have the resources to perform the queries and compute on the data ourselves, or do we need to rely on some cloud service for that? Who controls the cloud service?
- Who *owns* them? Are they yet another vector for surveillance data, where our interaction with the graph is logged and resold?




General principle of platformatization doing odd things with proprietariness - eg. the DOI was to facilitate extraction, not alleviate it. Information conglomerates exploit and EEE open source all the time. There is a basic dichotomy between "the code" or "the data" and the means by which it is possible to make use of it. In KGs specifically there is a certain amount of computation that is necessary within the networks, so even if the data is all public, the system can effectively be proprietary if it is impossible to use or one needs really sophisticated proprietary algorithms to make sense of it


Broad principles
- Strategic use of "openness" when it facilitates greater market control and to prevent someone else from capturing a particular element of the technology.	
	- Same thing as with the DOI: the linking agreements were killing us! Get some barrier to commerce out of the way (ontology discontinuity) so that the commerce can intensify, not so that it can abate
	- re: crowdsourcing semantics: {% cite allhutterWorkingOntologistsHighQuality2019 %}
- Need to create a larger space of shared 'public data' that the companies can then add their 'private data' to: . 
- peer production is similar
	- include wikipedia example, how they hated when google just was siphoning off traffic from them so they do it in a more different way.
	- Yes, wikidata exists, but it's extremely carefully managed with the intention of creating "facts" that don't embarass google {% cite chahOKGoogleWhat2018 %}

> In a case like IBM clients, who build their own custom knowledge graphs, the clients are not expected to tell the graph about basic knowledge. For example, a cancer researcher is not going to teach the knowledge graph that skin is a form of tissue, or that St. Jude is a hospital in Memphis, Tennessee. This is known as “general knowledge,” captured in a general knowledge graph. The next level of information is knowledge that is well known to anybody in the domain—for example, carcinoma is a form of cancer or NHL more often stands for nonHodgkin lymphoma than National Hockey League in some contexts it may still mean that—say, in the patient record of an NHL player). The client should need to input only the private and confidential knowledge or any knowledge that the system does not yet know. Isolation, federation, and online updates of the base and domain layers are some of the major issues that surface because of this requirement. 
>
> [...]
> 
> **The natural question from our discussion in this article is whether different knowledge graphs can someday share certain core elements, such as descriptions of people, places, and similar entities.** {% cite noyIndustryscaleKnowledgeGraphs2019 %}

> Peter Mika: A natural next step for Knowledge Graphs is to extend beyond the boundaries of organisations, connecting data assets of companies along business value chains. This process is still at an early stage, and there is a need for trade associations or industry-specific standards organisations to step in, especially when it comes to developing shared entity identifier schemes. {% cite panExploitingLinkedData2017 %}

"Director of Semantic Search, Yahoo Lab"

> With a large-scale knowledge graph, developers can build high-dimensional representations of entities and relations. The resulting embeddings will greatly benefit many machine-learning, NLP, and AI tasks as sources of features and constraints, and can form the basis for more sophisticated inferences and ways to curate training data. {% cite noyIndustryscaleKnowledgeGraphs2019 %}

When Freebase was closed, its graph was (partially) integrated into Wikidata {% cite pellissiertanonFreebaseWikidataGreat2016 WikidataWikiProjectFreebase %}, which is the dominant collaborative public knowledge graph today. 

---

Linked Open Data Vs. Knowledge Graphs - KGs are products! LOD is a messy and wily ball of data!

The pattern of capturing public infrastructure 

Dividing publicly curated knowledge like facutla information that anyone can know along with privately available knowledge eg. that that is available to anyone vs. private surveillance data - it's good to have the public information be complete, you a) own the compute to make use of it and b) can merge it with your private surveillance information in order to ~ unlock new products ~ . 

Also you can't ignore the sheer dominance of literally owning the hardware that it all runs on... which also structures the nature of these projects.

All the public stuff is great, but they don't have a good mechanism for how to collaborate on private contents of graphs, so that's why the government graphs are so worrying in particular

- Open source data, proprietary compute.
	- eg. wikidata, github copilot, pattern of corporations exploiting open source 
	- The transition of freebase as an autonomous knowledge graph to one owned by google, shut down, and then a lot of that labor transitioned to wikidata: {% cite pellissiertanonFreebaseWikidataGreat2016 chahOKGoogleWhat2018 %}