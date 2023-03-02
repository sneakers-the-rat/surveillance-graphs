Through their cloud of corporate jargon, knowledge graphs are relatively straightforward to define {% cite chaudhriKnowledgeGraphsIntroduction2022 hitzlerReviewSemanticWeb2021 yanRetrospectiveKnowledgeGraphs2018 %} (though see {% cite ehrlingerDefinitionKnowledgeGraphs2016 %}): **directed, labeled graphs** consisting of *nodes* corresponding to entities like a person, dataset, location, etc. and *edges* that describe their relationship[^triplets]. Knowledge graphs typically make use of some controlled **ontology** that provide a specific set of terms and how they are to be used, and "types" that give a given entity an expected set of *properties* denoted by edges with a particular set of labels from the ontology. For example, the schema.org [Person](https://schema.org/Person) type would be applied to a node, and then have a set of labeled edges like `gender` or `email` that link to other nodes that contain the values of the properties. 

Why does such a seemingly ordinary data structure deserve particular attention in an always-more-fraught landscape of digital technology? The story of knowledge graphs is the story of the enclosure of the wild and open web into a series of surveillance-backed platforms. They provide an underexplored lens onto the present and future of digital infrastructure as planned by information conglomerates --- and serve as a liberatory kernel that hints at how we might chart a different course.


- The evolution into chatbots
	- These companies want to be able to provide some interface to this graph without revealing it, chatbots are effectively a way to launder knowledge graphs into some information-consumer facing interface that lets them traverse the graph with natural language. Eg. you can hold the context of the graph in mind when doing subsequent searches
	- They want to make the processes of curating their graphs more interactive! A new kind of information serfdom - presumably google wants you to tell it when its information box is incorrect!?
	- Relationship between graphs and surveillance technologies: {% cite iliadisSeerSeenSurveying2022 %}
- And the broader universe of surveillance
	- Policing: {% cite brayneBigDataSurveillance2017 braynePredictSurveilData2020 %}
	- NSF graph describes military applications by the boatload
- The fundamental contradiction of platform capitalism
- Open source data, proprietary compute.
	- eg. wikidata, github copilot, pattern of corporations exploiting open source 
	- The transition of freebase as an autonomous knowledge graph to one owned by google, shut down, and then a lot of that labor transitioned to wikidata: {% cite pellissiertanonFreebaseWikidataGreat2016 chahOKGoogleWhat2018 %}

	> While Palantir may claim otherwise, we believe there is enough evidence in these patents to suggest that Palantir has an internal knowledge base or knowledge graph for labeling entities in the world, along with their attributes and relationships, and that these occluded resources are not fully released to users, but that users are subject to them in using the products. {% cite iliadisSeerSeenSurveying2022 %}


---