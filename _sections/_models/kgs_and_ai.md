**MOVE THIS to "models/surveillance" - the cognitive style of search, why chatbots inevitable and an intrinsic part of the plan, and the broader conversation of the surveillance mindset**

Scraps:
- Role of knowledge graphs in explainable AI: {% cite lecueRoleKnowledgeGraphs2020 %}
- Explicit algo + KG model - entity oriented search: {% cite balogEntityOrientedSearch2018 %} 
	- Microsoft re: academic graph with chat-based search: {% cite sinhaOverviewMicrosoftAcademic2015 %}
- cognitive expectations of search
	- 2002 RDF Core WG talking about whether we want things to work like google or not... {% cite sticklerReMonotonicityWas2002 %} - https://lists.w3.org/Archives/Public/w3c-rdfcore-wg/2002Sep/0276.html
- agents vs. platforms:
	- where are all the agents? we were supposed to have web robots by now!? {% cite ciorteaDecadeHindsightMissing2019 %}
	- they're doign business stuff! {% cite mcburneyAgentsAreAll2007 %}

Tim BL actually really wanted to be able to talk to the computers, he specifically imagined chatbots working on top of the semantic web: https://www.w3.org/DesignIssues/Evolution.html

The 'one bar' search paradigm is powerful and inculcates a very specific expectation of use...  (expectations from search results)

the problem is that it naturally sacrifices all the extra query structure inherent in any "advanced search" interface. 

But even an "advanced search" interface is the wrong metaphor, because (depending) those still give the expectation that, were you to parameterize your search correctly, you would receive a list of all matching results. So even if ordered by some anonymous "relevance" parameter, one could see "all" of something.

One-bar search sacrifices more than that and gives an expectation that getting exhaustive answers is not possible, no matter how hard one were to search, and that 'best enough' with some ranking is the best one can ask for. The ranking then takes on a different character, rather than ordering some finite list, it defines the contents of the list. So algorithmic search as we know it.

That relates to the initial goal of semantic web, to be able to give additional parameters/handles/structuring information to the web so that it was possible to do those kinds of "advanced searches" on your own, without needing a search engine. 

What is lost in the single bar search has to be made up for in some way, so that falls on the ability to parse semantic meaning in the search query, as well as inject context from surveillance data. 

Chatbots then are a means of expanding that context, specifically in such a way that the "local neighborhood" of some decision tree were being presented to you in plain language. But rather than, again, an indexical cognitive pattern where you expect to see everything, your being constrained to a particular 'neighborhood' of the graph space and how you are steered then becomes the product.

So chatbot search is a very natural match for the knowledge graphs that already parameterize the search and compute semantic meaning in the query. 

Thus the criticism that LLM's don't "know anything" won't be true for long - they will be part of a joint system that decodes the search query, constructs a context, and then queries databases of structured data. (cite google paper to this effect)

Think broader than search engines though, the pernicious and dangerous part here is that we could merge several classes of platform and surveillance harm: individual surveillance could merge with medical and public information and insurance information and the rest in an interoperable interchange format so that the data brokering economy woudl effectively explode. Imagine the splintering of infinitely many platforms that each owned some subset of the data, each platform holder owning all of them and slicing them off to you and pocketing the costs.

merged with research and reference data, they could literally make a graph of all information and supplant libraries, etc. for all information from news to government to personal.

---

- KGs + AI are gonna try and do "explainable AI" - {% cite janowiczNeuralsymbolicIntegrationSemantic2020 renLegoLatentExecutionguided2021 %}
	- Microsoft: KGs necessary for chatbots - "the LLMs don't *know anything* {% cite huEmpoweringLanguageModels2022 %}. Google: {% cite renLegoLatentExecutionguided2021 %}
	- AI is the future of KGs - {% cite chaudhriKnowledgeGraphsIntroduction2022 %}
	
> "Second, there is a clear recognition that KG representations are a central ingredient to achieving the compositional behavior in AI systems."
- They want to integrate these with your personal knowledge graph: Google alredy owns all your calendar/etc. data, now they want you to take notes in a way that can be more easily mined: {% cite balogPersonalKnowledgeGraphs2019a %}. Under the guise of convenience - "update my location across all my apps"

- The evolution into chatbots
	- These companies want to be able to provide some interface to this graph without revealing it, chatbots are effectively a way to launder knowledge graphs into some information-consumer facing interface that lets them traverse the graph with natural language. Eg. you can hold the context of the graph in mind when doing subsequent searches
	- They want to make the processes of curating their graphs more interactive! A new kind of information serfdom - presumably google wants you to tell it when its information box is incorrect!?
	- Relationship between graphs and surveillance technologies: {% cite iliadisSeerSeenSurveying2022 %}
- And the broader universe of surveillance
	- Policing: {% cite brayneBigDataSurveillance2017 braynePredictSurveilData2020 %}
	- NSF graph describes military applications by the boatload
- The fundamental contradiction of platform capitalism