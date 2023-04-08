---
layout: post
title:  "Outline"
subtitle: "Scraps to maybe incorporate later???"
author: "Jonny Saunders"
navigation: false
canonical_url: "https://jon-e.net/surveillance-graphs/scraps.html"
---
## Summary

The Knowledge Graph Of Everything is a colonial surveillance project

Who is the universal knowledge graph for?

Surveillance capitalism dreams of a universal knowledge graph: In defense of vulgar infrastructures

An extension of "Linked Data or Surveillance Capitalism" in the infrastructure piece - arguing that infrastructure is not neutral and the kinds of knowledge graph infrastructure being built by the NSF and NIH is potentially harmful and not likely to resolve fundamental infrastructural deficits

What does the cloud want? The cloud dreams of lakes and a network of everything. imagining the futures of data infrastructure.

Surveillance capitalism is the dominant economic model, and so when a federal government intends to direct its research organizations to build new data infrastructures, we should take note. This piece is about how the cloud, as an assemblage of property relations and systematic logics structures and sets the horizon of what we can imagine our data infrastructure to be. Its vision of the future for our data is a graph of everything, where they host and graciously provide access to a universalized surveillance apparatus. Their future has autonomous reasoning agents sifting through endless lakes of data in order to provide us with the miraculous insight that holds us back from a seemingly immediately-realizable future where all poverty and climate change is solved. If only we have the right *insights.* Where we get data lakes to sift through with AI chatbot-like interfaces, they get to restructure and provide platforms/dashboards on the graph of everything as an infinity of new profit extraction mechanisms. It won't work for any of the lofty goals we intend for it, but it doesn't have to in order to fulfill its role as a profit-generating platform (see cognitive expectations of search)

Who owns the graph? Who *really* owns the graph?

In defense of vulgar linked data, where we dispense with the notion of a unified graph of everything as a colonial project, and instead re-imagine the future of our data as vernacular, local, oriented around the power of expression rather than the power of consumption. Data in their view is as a natural resource to be mined, extracted, and made sense of - it is "something out there" to be captured and harnessed. To be brought in line with the universal order of things. 

## Notes

- Application to medical data: {% cite shiraiApplyingPersonalKnowledge2021 %}


### Open Knowledge Network Roadmap

- Driven by AI and need for lots of data to munch
- Criminal justice information
	- You can't just strap data onto an oppressive system and cure it - the system will use the data according to its existing (white supremacist) structure
- Access by anyone (Group K)
	- Federated graphs, being able to start up additional nodes good
	- "A graph owner can request to join the CKN"
	- Good discussions on need to have authorship associated with knowledge graph entries
	- Need for policies that govern graph use/modification
	- Use of decentralized identifiers/cryptographic signatures/hashes/etc.
- Biomedical
	- SPOKE
	- https://www.matebioservices.com/science
	- the failure of the public/private partnership model and the inevitability of platform capture


### Extended Universe

- What about the trans database that TX built? Is that something we want our basic infrastructure to support?
	- The spirit of HIPPA - the p is for portability
- The extended universe of health technologies/wearables/etc.
	- The implied technologies and platforms from the rest of the projects in the NSF portfolio
- The general structure of slicing up the giant graph of everything and selling us some chunks of it + some proprietary compute on top 



> With a large-scale knowledge graph, developers can build high-dimensional representations of entities and relations. The resulting embeddings will greatly benefit many machine-learning, NLP, and AI tasks as sources of features and constraints, and can form the basis for more sophisticated inferences and ways to curate training data. {% cite noyIndustryscaleKnowledgeGraphs2019 %}

When Freebase was closed, its graph was (partially) integrated into Wikidata {% cite pellissiertanonFreebaseWikidataGreat2016 WikidataWikiProjectFreebase %}, which is the dominant collaborative public knowledge graph today. 


- Yes, wikidata exists, but it's extremely carefully managed with the intention of creating "facts" that don't embarass google {% cite chahOKGoogleWhat2018 %}

# Quotes

> Big Dick Data is a formal, academic term that we, the authors, have coined to denote big data projects that are characterized by masculinist, totalizing fantasies of world domination as enacted through data capture and analysis. Big Dick Data projects ignore context, fetishize size, and inflate their technical and scientific capabilities.4 In GDELT’s case, the question is whether we should take its claims of big data at face value or whether the Big Dick Data is trying to trick funding organizations into giving the project massive amounts of research funding. (We have seen this trick work many times before.) {% cite dignazioDataFeminism2020 %}

# KG-LLM outline


- more details on how kgs + llms work
	- enter personal assistants! {% cite adolphsBoostingSearchEngines2022 chaudhriKnowledgeGraphsIntroduction2022 %}
		- introduction of google assistant {% cite pichaiBuildingNextEvolution2016 sGoogle2016Keynote2016 %}
		- Microsoft v. google
			- {% cite kurianNextGenerationAI2023 %}
		- Microsoft is angling for the enterprise side
			> But Copilot doesn’t just supercharge individual productivity. It creates a new knowledge model for every organization — harnessing the massive reservoir of data and insights that lies largely inaccessible and untapped today.  https://blogs.microsoft.com/blog/2023/03/16/introducing-microsoft-365-copilot-your-copilot-for-work/
	- And thery're very aware of the issues with trust & multiple search modalities
		- researching how to maintain trust: "This has led many practitioners and researchers alike to imagine a near future where voice assistants can be used in increasingly complex ways, including supporting healthcare tasks [41, 55], giving mental health advice [52, 66], and high stakes decision-making [17]." {% cite mercurioMixedMethodsApproachUnderstanding2023 %}
- Impacts
	- concentrating power
 		- killing social information system, enclosing the public organization of information into a private interaction with your assistant.
		- while simultaneously injecting themselves into every web service - if everyone is renting chatGPT, then every service is a deeply detailed surveillance platform.
		- concentrating in the hands of a few tech giants under the guise of 'safety'
			- {% cite cohenHelpfulSearchTools2021 %} - google as arbiter of true information
				- So, only we are able to use these tools both because we are the only ones that have the compute, but also because we are the only ones who have enough 'factual information' to actually make them work safely.
	- re: broader KG network
		- OKN is Specifically trying to get the chatbots up to speed: {% cite bigdatainteragencyworkinggroupOpenKnowledgeNetwork2018 %}
		> "These direct answers bring us some of the way towards our vision of domain expert advice; however, they are limited by the size of the graph, which only represents a fraction of the information contained in the Web corpus, and the inability to provide nuanced answers (by definition, answers are limited to factoids)." {% cite metzlerRethinkingSearchMaking2021 %}
		- Data laundering - "how do i beat my competitor" or providing insurance risk rankings doesn't nee to reveal the sources of the data, it can instead be "synthesized" by a series of models which also give it plausible deniability
			- federated learning is just data laundering: yeah your data doesn't leave your phone, but it updates weights in a model that do.
		- it's just a chatbot after all! fallibility as a *feature*
	- a new kind of data market
		- Federated learning
			- Why would a standard data interchange format be useful? 
			- When you can't acquire the data, you still want a piece of the action! {% cite sadilekPrivacyfirstHealthResearch2021 %}
		- Think broader than search engines though, the pernicious and dangerous part here is that we could merge several classes of platform and surveillance harm: individual surveillance could merge with medical and public information and insurance information and the rest in an interoperable interchange format so that the data brokering economy woudl effectively explode. Imagine the splintering of infinitely many platforms that each owned some subset of the data, each platform holder owning all of them and slicing them off to you and pocketing the costs.
		- merged with research and reference data, they could literally make a graph of all information and supplant libraries, etc. for all information from news to government to personal.