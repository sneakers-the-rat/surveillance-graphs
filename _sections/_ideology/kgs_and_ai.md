## The Near Future of Surveillance Capitalism: Knowledge Graphs Get Chatbots.

Given that positive caricature of the Cloud Orthodoxy, what is the future it imagines, and why is the addition of chatbots to knowledge graphs of central importance?

The construction of search --- particularly single-bar search a la google --- as the primary means of information retrieval on the web is not epiphenomenal to its history or structure. The problem that search addresses is an overload of information: if there were only 5 websites, search would be unnecessary. Before Google, search engines were littered with categories and rich with "advanced search" parameters common in other, more constrained search contexts to specify coordinates in the overload. The single bar search paradigm[^pagerank] is simply *more convenient* than rifling through categories or preparing structured queries. Its convenience, of course, naturally trades off with the amount of information present in a query, and thus the ability to specify precisely what you're after.

Imprecision in search, when calibrated correctly, is a *feature* not a bug. The cognitive expectation of indexical or "advanced" search in a finite database is that it is possible to "reach the bottom" of it --- given my query, if something was here I would be able to find it. Conversely, it would be very obvious if a result that *didn't* match your query was included in the results. It is by, perhaps counterintuitively, cultivating the expectation of imprecision that it becomes possible to embed ads or other sponsored content in results[^enshittification]. It's a delicate dance: if you are presented with exactly the correct link at the top of a page of results, you don't spend enough time in the feed to be advertised to. If the results are too low quality, searchers might look elsewhere.

To make up for the lack of search detail from single-bar search, Google and others use whatever additional contextual information they can. This is one way of characterizing PageRank[^underspecified] - in the absence of some differentiating information in the query like "pages from x site" or "written by y" which the searcher may not even know beforehand, PageRank uses the information latent in the link structure of the web to infer "page quality." Surveillance also fits the bill nicely --- in addition to gathering a product to sell in the form of targeted ad space, comprehensive user profiling provides a great deal of context for underspecified searches[^mitchell]. 

The semantic structure of natural language queries is another means of recovering expressiveness in single bar search, and here knowledge graphs begin to re-enter the story. Many queries can be modeled as a graph: eg. a search for "lead singers of concerts in German cities started in the 19th century" can be framed as a query over a graph that first needs to select a number of nodes with a [`City`](https://schema.org/City) type with `containedInPlace` or `containsPlace` links to or from the `Germany` node, respectively, and an [`inception`](https://www.wikidata.org/wiki/Property:P571) property between 1800 and 1900, then find the concerts that are happening within those cities, then their bands, their lead singers, and so on. Using this graph structure for search requires parsing the query into its component "entities" and then mapping those into a structured knowledge graph {% cite liUnderstandingSemanticStructure2010 reisingerFineGrainedClassLabel2011 pascaWhatYouSeek2007 %}. Entity matching is hard for a number of reasons, eg. natural language is strongly ambiguous at the level of individual words: does "jaguar" refer to the animal or the car? Am I asking for cities or concerts that started in the 19th century? The extended structure of the knowledge graph gives some basis for matching given the context of the query --- If I'm asking about how many doors it has, I'm probably talking about a car, most concerts don't last more than 100 years, etc. The extended context of the graph also allows the search engine to make use of information that might never appear in the same place, eg. concert event pages typically don't have information about the founding of the city they are in.

Of course, to *use* a knowledge graph one must first *have* a knowledge graph. Google and other search-adjacent researchers were writing about the need for extracting factual information from the web (eg. {% cite halevyUnreasonableEffectivenessData2009 pascaTurningWebText2008 pascaWeaklysupervisedDiscoveryNamed2007 pascaOrganizingSearchingWorld2007 pascaOrganizingSearchingWorld2006 pascaAcquisitionCategorizedNamed2004 %}) around the same time Freebase and other Semantic Web technologies began to mutate into the era of Linked Data and become usable. The deepening entanglements and arguable capture of the semantic web follow shortly thereafter. 

The development of large language models (LLMs) is also intertwined with this line of question answering research. Language and knowledge graphs alike have the unfortunate quality of having long-range dependencies between terms, where eg. in language one needs to use contextual information sometimes separated by many paragraphs to understand any given term. Enter Google's research on Transformer architectures for neural networks {% cite vaswaniAttentionAllYou2017 %}, which spawned their BERT model {% cite devlinBERTPretrainingDeep2019 %} --- which is used in their search products to parse natural language queries and match them to entities in their Knowledge Graph {% cite nayakUnderstandingSearchesBetter2019 %}.


- changing goals of what search is (knowledge boxes, AMP)
	- enter personal assistants! {% cite adolphsBoostingSearchEngines2022 %}
	- chatbots are interfaces to kgs: {% cite adolphsReasonFirstThen2021 huebscherZeroShotRetrievalSearch2022 %}
	> All in all, our findings suggest that it might be beneficial to slow down the race towards the biggest model and instead shift attention towards finding more effective ways to use models, including but not limited to, better prompting or increasing inference-time compute.
	> 
	> The deterioration of search results for multi-hop questions highlights the importance of a better approach to interacting with the Internet. This is particularly challenging for the general-purpose and powerful, yet black-box, search engines, where gradient-based learning is infeasible due to the discrete bottleneck introduced by working directly with words. We expect that “learning to search” approaches could boost performance of the overall system [22, 10, 11], where complex queries could be decomposed into simpler sub-queries, akin to approaches in question decomposition [40, 41]. While these tasks have not yet been tackled with LSLMs and few-shot prompting, we believe that it would be a reasonable first approach
	>
	> - google {% cite lazaridouInternetaugmentedLanguageModels2022 %}
	- chatbots do continued searches: {% cite konzelmannChattingYourGoogle2018 %}
	- chatbots do everything: {% cite mialonAugmentedLanguageModels2023a %}
	- directly through latent space: {% cite adolphsDecodingNeuralRetriever2022 %}
	- researching how to maintain trust: "This has led many practitioners and researchers alike to imagine a near future where voice assistants can be used in increasingly complex ways, including supporting healthcare tasks [41, 55], giving mental health advice [52, 66], and high stakes decision-making [17]." {% cite mercurioMixedMethodsApproachUnderstanding2023 %}
	- {% cite pichaiBuildingNextEvolution2016 sGoogle2016Keynote2016 %}
- To be concise:
	- Yes the LLMs are generating statistical garbage,
	- but look across the aisle at the OTHER TECH that search engines develop: search
	- that necessarily involves mapping natural language to concepts and using that to constrain the results of information
	- so it's not an argument about whether these things can "reason on their own" - they're not even supposed to. They're just a translation layer between natural language and a knowledge graph
	- u better believe they will be able to constrain the output of a model based on parsing its output and comparing it to search engine query on matched entities.
- then enter the multimodal learning bots, and that's just a recipe for polyvalent surveillance.
- they are not genius level AI, but that's a feature
- they are not sentient, but that's also a feature

> Here’s a common situation. It’s a Friday night. I’m sure many of you can relate to it. Back home, and I want to take my family to a movie. You know, you normally pull out your phone, research movies, look at the reviews, find shows nearby, and try to book a ticket. We want to be there in these moments helping you.
> 
> So you should be able to ask Google, “What’s playing tonight?” and by the way, today, if you ask that question, we do return movie results, but we want to go a step further. We want to understand your context and maybe suggest three relevant movies which you would like nearby. I should be able to look at it and maybe tell Google, “We want to bring the kids this time.” and then if that’s the case, Google should refine the answer and suggest family-friendly options. And maybe even ask me, “Would you like four tickets to any of these?” And if I say, “Sure, let’s do Jungle Book,” it should go ahead and get the tickets and have them ready waiting for me when I need it.
> 
> As you can see, I engaged in a conversation with Google and it helped me get things done in my context. And by the way, this is just one version of the conversation. This could have gone many, many, different ways. For example, when Google returned the results, I could have asked, “Is jungle book any good?” And Google could have given me the reviews and maybe even shown me a trailer. And by the way, I saw the movie, it’s terrific. And hope you get to see it as well.
> 
> Every single conversation is different. Every single context is different. And we are working hard to do this for billions of conversations, for billions of users around the world, for everyone. We think of the assistant as an ambient experience that extends across devices. I think computing is poised to evolve beyond just phones. It will be in the context of a user’s daily life. It will be on their phones, devices they wear, in their cars, and even in their living rooms. For example, if you’re in one of the hundred different android auto models and you’re driving and you say, “Let’s have curry tonight,” we know the Warriors are on tonight and Steph Curry is playing but you know, all you’re looking for is food, and we should be smart, order that food and let you know when it is ready, and maybe even have it waiting for you at your home.
> 
> Talking about your home, we’ve already built many, many products for your home. Today, we have sold over 25 million Chromecast devices. So we’ve been thinking hard about how to bring this vision of Google Assistant into your home. Credit to the team at Amazon for creating a lot of excitement in this space, we’ve been thinking about our own unique approach and we are getting ready to launch something later this year. To give you a preview, I’m going to invite Mario from the Chromecast team. 
>
> Thanks, Erik. As you heard earlier, the Google Assistant is an ongoing dialogue between you and Google that helps you get things done in your world. It’s also designed as an ambient experience. It’s there for you whenever you need it. And in messaging that really means bringing the Google Assistant right into your conversation with friends. So I’m going to show you how the Assistant can help in Amit’s and Joy’s conversation.
> 
> So they’re planning a dinner and Joy now says she would like Italian food. The Assistant intelligently recognizes that they could use some tips for Italian restaurants nearby and you can see its proactive suggestions at the bottom of the screen there. Tapping this brings up restaurant cards that everyone in the chat can see. These are powered by Google’s Knowledge Graph which means that Allo can help with all kinds of information in the real world. So there’s some back and forth about which restaurant to go to. And it looks like they’re leaning towards Cucina at 7 o’clock.
> 
> So what we’re seeing here — what we’re seeing here is completely new. In the past, Amit would have had to leave the chat to do a Google search, return with some restaurant options, switch back again to share the options, go out again to make the reservation at OpenTable and then come back in to share the details with the rest of the group.
>
> Okay. So you just saw how the Google Assistant can be really helpful in groups. You can also have a one-on-one chat with Google. What we’re seeing now is Amit’s contact list and Google’s appearing at the top there. So let’s jump in and have a chat.
> 
> Just like with any other conversation, this one picks up right where you left off and the Assistant will remember things like your name and even tell you how it’s feeling. So let’s try something more interesting. Amit’s a big Real Madrid fan and he wants to know how they got on in their last match. So he asks the Assistant: did my team win? It looks like they did. They won their — yeah. Some Real Madrid fans out there. Cool. And so they won their last match on Saturday. Let’s see when they are playing next. That’s pretty cool. They are through the Champion’s League final at the end of the month. We can keep going like this and find more news about the team just by tapping on the suggestions there.
{% cite sGoogle2016Keynote2016 %}

- KGs & personal assistants can prompt you through information: {% cite maChallengesSupportingExploratory2020a %}

Rather than treating searches as traditional keyword queries 

>  The utility of a search stems from its straightforwardness and the immense reduction of complexity it affords. Search engines flatten a complex topology of networked contents into an ordered list fitting the user's ongoing task and intentions.
> 
> Not unlike a library or archival catalogue, the results page both orders and locates knowledge resources, yet it breaks away from stable classifications and the importance of categories as the basis of such order
>
> Even if the SERP and the matching online resources are served as separate webpages, it is difficult to draw a definitive line between them. The boundary between the SERP and target pages is fluid
> {% cite kallinikosAmbivalentOntologyDigital2013 %}

- parsing semantics is the next stage, but some fundamental problems: ambiguous subjects, etc.
- enter chatbots: chatbots are a means of expanding context
	- Chatbots steering KGs: {% cite renLegoLatentExecutionguided2021 %} (from google)
	- Specifically layering KGs in between LLMS: {% cite huEmpoweringLanguageModels2022 %} (from microsoft)
- but it gets deeper!now the goal is to rethink search away from directing you to other resources, but provide the information directly. 
	- these are entertwined with the dreams for personal assistants et al.
	- home assistants have not worked before because they sort of sucked and just were search engines... but if they can sort of prompt you and talk back to you and people legit start asking them everything as people are doing with chatGPT then that sort of changes the game right?

- These are all done 'behind the scenes' because the ideology of the Cloud Service Provider is that things are hard and the role of the platform is to provide convenience. 

**Outline**:
- Criticisms of 'but the LLMs are just making up plausible sounding text' are correct for now, but discount the plans to integrate these LLMs with structured information in knowledge graphs. {% cite shahSituatingSearch2022 %}
	- They rightly criticize them for responding to imagined needs instead of actual needs, but these statements like "The very fact that ranking is a critical component of this paradigm is a symptom of the retrieval system providing users a selection of potential answers, which induces a rather significant cognitive burden on the user." {% cite metzlerRethinkingSearchMaking2021 %} are directly illustrative of the ideology that drives these technologies.
	- bender at al adn the google engineers are simply speaking a different language: Bender and co are describing people that are smart and curious and have their own goals. Google ppl are describing the homogenous user that wants to minimize cognitive burden at all costs when interacting with the platform.
	- they also completely miss the "explicit knowledge bases" part!!!
- relate to beginning of section: this changes the calculus for advertising - rather than advertising en route to some information, you get to embed the advertising into the answer itself. Third parties effectively disappear - this is Amp time 1000

> "These direct answers bring us some of the way towards our vision of domain expert advice; however, they are limited by the size of the graph, which only represents a fraction of the information contained in the Web corpus, and the inability to provide nuanced answers (by definition, answers are limited to factoids)." {% cite metzlerRethinkingSearchMaking2021 %}

Only we can keep the models safe!!!

> "Aside from intentional misuse, there are many domains where large language models should be deployed only with great care, or not at all. Examples include high-stakes domains such as medical diagnoses, classifying people based on protected characteristics, determining eligibility for credit, employment, or housing, generating political advertisements, and law enforcement. If these models are open-sourced, it becomes challenging to limit harmful applications in these and other domains without proper regulation. On the other hand, if large language model access is restricted to a few organizations with the resources required to train them, this excludes most people from access to cutting-edge ML technology. Another option is for an organization to own the end-to-end infrastructure of model deployment, and make it accessible via an API." {% cite ouyangTrainingLanguageModels2022 %}


So if web 2.0 was about the platformatization of the web, what is up next? In the same way that information conglomerates successfully harnessed open source for profit, now can we effectively gamify the entirety of knowledge generation process? can we put ppl inside of information curation chambers when they search?

> To enable all of these updates, Search has to understand interests and how they progress over time. So we’ve taken our existing Knowledge Graph—which understands connections between people, places, things and facts about them—and added a new layer, called the Topic Layer, engineered to deeply understand a topic space and how interests can develop over time as familiarity and expertise grow. {% cite %}

**Academics in particular should be extremely wary of powering a knowledge graph of factual information that then directly fuels the ownership of all information by a few search engines**

- **Review**: {% cite mialonAugmentedLanguageModels2023 %}
	- Also be sure to read and cite: {% cite shahSituatingSearch2022 %}
- Google integrating AI and its graph of everything: {% cite nayakMUMNewAI2021 %}
	- {% cite raghavanHowAIMaking2021 %} - this is how Lens works
	- {% cite cohenHelpfulSearchTools2021 %} - google as arbiter of true information
	- {% cite robertsExploringTransferLearning2020 %}
- Google prior history:
	- {% cite gomesImprovingSearchNext2018 %}
	    - answers -> journeys: aka use context from surveillance to fill in the inadequacies of single-bar serach
	    - queries -> queryless: the user is the context, prompt them with information before they even know they want it!
	    - text -> visual serach
	    - "neural embeddings:" from understanding words to understanding concepts and then map then into some thing in teh knowlege graph.
- Federated learning
	- Why would a standard data interchange format be useful? 
	- When you can't acquire the data, you still want a piece of the action! {% cite sadilekPrivacyfirstHealthResearch2021 %}

- The recurring patterns in these projects trace the emerging consensus of public information projects. Expert councils will create unifying ontologies and launch platforms for public knowledge graph sources. These platforms will beget derivative platforms that mix that public data and private data along with some algorithmic computation to rent as a service. We are intended to populate and curate these public graph platforms with our public data as the crowd source. 
- I mean what could be different? how do we get out of the loop of trying to make "ok the real unified knowledge base for real this time guys" loop {% cite hoytUnifyingIdentificationBiomedical2022 %}. Maybe it's the belief that there should be a single unified naming system that's pathological? Maybe we need to focus on linking these things together rather than projecting them into some singular space.
- it is, in fact ideological! "SPOKE was conceived with the philosophy that if relevant information is connected, it can result in the emergence of knowledge, and hence provide insights into the understanding of diseases, discovering of drugs and proactively improving personal health." {% cite morrisScalablePrecisionMedicine2023 %}
- the hollow middle, right? like why is it so hard for me to even find all the ontologies that have been made by the biomedical translator project? why are most of the API endpoints in arax dead *already* - it hasn't even launched! why aren't there the tools for me to actually *use the information* in a way that wasn't specifically designed for in the platform? by focusng the design into these API-based data sources with platforms strapped on top of them, the project is limited to *only exactly what the developers could imagine and are capable of doing* rather than fulfullig the initial definition (find cite) of what "platforms" meant - an enabling technology that allows an expansive space of use that goes beyond the creators and enables and empowers people!
- "Zero-query The traditional way of information access is reactive: the search system responds to a user-initiated query. Proactive systems, on the other hand, “anticipate and address the user’s information need, without requiring the user to issue (type or speak) a query” [5]. The zero-query search paradigm can be expressed with the slogan “the query is the user.” In practice, the context of the user is used to infer information needs." {% cite balogEntityOrientedSearch2018 %}
- It doesn't have to work! as long as it seems like it does

Scraps:
- Role of knowledge graphs in explainable AI: {% cite lecueRoleKnowledgeGraphs2020 %}
- Explicit algo + KG model - entity oriented search: {% cite balogEntityOrientedSearch2018 %} 
	- Microsoft re: academic graph with chat-based search: {% cite sinhaOverviewMicrosoftAcademic2015 %}
- cognitive expectations of search
	- 2002 RDF Core WG talking about whether we want things to work like google or not... {% cite sticklerReMonotonicityWas2002 %} - https://lists.w3.org/Archives/Public/w3c-rdfcore-wg/2002Sep/0276.html
- agents vs. platforms:
	- where are all the agents? we were supposed to have web robots by now!? {% cite ciorteaDecadeHindsightMissing2019 %}
	- they're doign business stuff! {% cite mcburneyAgentsAreAll2007 %}
- OKN is Specifically trying to get the chatbots up to speed: {% cite bigdatainteragencyworkinggroupOpenKnowledgeNetwork2018 %}
- Microsoft's very fun assistant: {% cite IntroducingMicrosoft3652023 %}

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

> 

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