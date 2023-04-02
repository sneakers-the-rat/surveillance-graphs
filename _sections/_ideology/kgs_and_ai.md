## The Near Future of Surveillance Capitalism: Knowledge Graphs Get Chatbots.

Given that positive caricature of the Cloud Orthodoxy, what is the future it imagines, and why is the addition of chatbots to knowledge graphs of central importance?

The construction of search --- particularly single-bar search a la google --- as the primary means of information retrieval on the web is not epiphenomenal to its history or structure. The problem that search addresses is an overload of information: if there were only 5 websites, search would be unnecessary. Before Google, search engines were littered with categories and rich with "advanced search" parameters common in other, more constrained search contexts to specify coordinates in the overload. The single bar search paradigm[^pagerank] is simply *more convenient* than rifling through categories or preparing structured queries. Its convenience, of course, naturally trades off with the amount of information present in a query, and thus the ability to specify precisely what you're after.

Imprecision in search, when calibrated correctly, is a *feature* not a bug[^SERPfuzziness]. The cognitive expectation of indexical or "advanced" search in a finite database is that it is possible to "reach the bottom" of it --- given my query, if something was here I would be able to find it. Conversely, it would be very obvious if a result that *didn't* match your query was included in the results. It is by, perhaps counterintuitively, cultivating the expectation of imprecision that it becomes possible to embed ads or other sponsored content in results[^enshittification]. It's a delicate dance: if you are presented with exactly the correct link at the top of a page of results, you don't spend enough time in the feed to be advertised to. If the results are too low quality, searchers might look elsewhere.

To make up for the lack of search detail from single-bar search, Google and others use whatever additional contextual information they can. This is one way of characterizing PageRank[^underspecified] - in the absence of some differentiating information in the query like "pages from x site" or "written by y" which the searcher may not even know beforehand, PageRank uses the information latent in the link structure of the web to infer "page quality." Surveillance also fits the bill nicely --- in addition to gathering a product to sell in the form of targeted ad space, comprehensive user profiling provides a great deal of context for underspecified searches[^mitchell]. 

The semantic structure of natural language queries is another means of recovering expressiveness in single bar search, and here knowledge graphs begin to re-enter the story. Many queries can be modeled as a graph: eg. a search for "lead singers of concerts in German cities started in the 19th century" can be framed as a query over a graph that first needs to select a number of nodes with a [`City`](https://schema.org/City) type with `containedInPlace` or `containsPlace` links to or from the `Germany` node, respectively, and an [`inception`](https://www.wikidata.org/wiki/Property:P571) property between 1800 and 1900, then find the concerts that are happening within those cities, then their bands, their lead singers, and so on. Using this graph structure for search requires parsing the query into its component "entities" and then mapping those into a structured knowledge graph {% cite liUnderstandingSemanticStructure2010 reisingerFineGrainedClassLabel2011 pascaWhatYouSeek2007 %}. Entity matching is hard for a number of reasons, eg. natural language is strongly ambiguous at the level of individual words: does "jaguar" refer to the animal or the car? Am I asking for cities or concerts that started in the 19th century? The extended structure of the knowledge graph gives some basis for matching given the context of the query --- If I'm asking about how many doors it has, I'm probably talking about a car, most concerts don't last more than 100 years, etc. The extended context of the graph also allows the search engine to make use of information that might never appear in the same place, eg. concert event pages typically don't have information about the founding of the city they are in.

Of course, to *use* a knowledge graph one must first *have* a knowledge graph. Google and other search-adjacent researchers were writing about the need for extracting factual information from the web (eg. {% cite halevyUnreasonableEffectivenessData2009 pascaTurningWebText2008 pascaWeaklysupervisedDiscoveryNamed2007 pascaOrganizingSearchingWorld2007 pascaOrganizingSearchingWorld2006 pascaAcquisitionCategorizedNamed2004 %}) around the same time Freebase and other Semantic Web technologies began to mutate into the era of Linked Data and become usable. The deepening entanglements and arguable capture of the semantic web follow shortly thereafter. 

The development of large language models (LLMs) is similarly entwined with the need for semantically parsing search queries. Language and knowledge graphs alike have the unfortunate quality of having long-range dependencies between terms, where eg. in language one needs to use contextual information sometimes separated by many paragraphs to understand any given term. Enter Google's research on Transformer architectures for neural networks {% cite vaswaniAttentionAllYou2017 %}, which spawned their BERT model {% cite devlinBERTPretrainingDeep2019 %} --- which is used in their search products to parse natural language queries and match them to entities in their Knowledge Graph {% cite nayakUnderstandingSearchesBetter2019 %}. To extend these models, Google and others then developed architectures to better accomodate multimodal information like browser history, image contents, and, importantly, sequential behavioral information like the multiple searches someone will do for a single topic {% cite nayakMUMNewAI2021 tayHyperGridTransformersSingle2021 huUniTMultimodalMultitask2021 %}. 

These threads --- search, public/private knowledge graphs, large language models, and the Cloud Orthdoxy --- converge at the push across information conglomerates towards personal assistants and **chatbots.** 

It is impossible to understand the purpose of LLMs and chatbots without the context of knowledge graphs. Specifically: ***Large Language Models are interfaces to knowledge graphs.***

Microsoft explicitly says as much in a March 2023 presentation "[The Future of Work With AI](https://www.youtube.com/watch?v=Bf-dbS9CcRU)" (emphases mine):

> "The Copilot System harnesses the power of three foundational technologies: Microsoft 365 Apps, the Microsoft Graph --- **that's all your content and context, your e-mails, files, meetings, chats, and calendar** --- and a large language model. [...] Copilot preprocesses the prompt through an approach called grounding [...] one of the most important parts of grounding is making a call to the Microsoft Graph to retrieve your business content and context. Copilot combines this user data from the graph with other inputs to improve the prompt. It then sends that modified prompt to the LLM. Copilot takes the response from the LLM and post-processes it. This post-processing includes additional grounding calls to the graph. [...] Copilot iteratively processes and orchestrates these sophisticated services to produce a result that feels like magic." {% cite microsoftFutureWorkAI2023 %}

LLMs elaborate on the cognitive model of single bar search powered by knowledge graphs, displacing it with the *prompt.* Remodeling search as an iterative process of bidirectional natural language queries reclaims additional context lost in the single bar, single shot model. The language model serves two roles: first, as with previous generations of language models, they *parse natural language into computer-readable queries.* Transformers and other recent models support greater long-range contextual input, which can condition a continuous search process with queries spanning multiple sessions {% cite maChallengesSupportingExploratory2020a %} and with longer-term user profile data --- something that Google describes as its "shift from answers to journeys" {% cite gomesImprovingSearchNext2018 konzelmannChattingYourGoogle2018 %}. Second, they are capable of *generating* plausible text that can be used to prompt intermediate responses or answer questions.

Large language models have been so richly criticized because of their obvious capacity for harm that it's difficult to provide a sample that even approaches reasonable coverage. Most criticisms focus on the effects of generated model output, including from biases in its training data, from failure to contextualize their limitations, and from functioning as a weapon in the class war. The "Stochastic Parrots" paper {% cite benderDangersStochasticParrots2021 %} and surrounding work is an important line of criticism here. They argue that large language models have a large and inequitably distributed environmental cost, their training data inevitably reinforces hegemonic and commercially compatible language bias, and that a realignment of research goals and development practices is needed to mitigate harm and reclaim the opportunity costs spent on pursuing "AI." They continue their critique [in response](https://www.dair-institute.org/blog/letter-statement-March2023) to an [open letter](https://futureoflife.org/open-letter/pause-giant-ai-experiments/) from a longtermist organization {% cite futureoflifeinstitutePauseGiantAI2023 %}, arguing for increased transparency and accountability regulation and citing three ongoing harms: 

> "1) worker exploitation and massive data theft to create products that profit a handful of entities, 2) the explosion of synthetic media in the world, which both reproduces systems of oppression and endangers our information ecosystem, and 3) the concentration of power in the hands of a few people which exacerbates social inequities." {% cite gebruStatementListedAuthors2023 %}

Core to their argument is that large language models cannot understand the language they parse and generate {% cite benderClimbingNLUMeaning2020 %}. Shah & Bender specifically explore Google's conceptualization of LLMs in search in "Situating Search" against the longer backdrop of information retrieval research {% cite shahSituatingSearch2022 %}. They identify how Google's LLM-mediated search paradigm ignores the varying needs of different kinds of information seeking, eg. searching for specific information vs. browsing among a category of information, ultimately pointing towards a need for public information infrastructures. 

These criticisms are of course *all true and valuable.* The arguments about whether or not the language models understand the text the parse and generate is directed towards what is likely an ideological minority in the longtermists and their ilk, however. Adherents of the Cloud Orthodoxy explicitly disavow the notion that these language models "know" anything, and 

So by downplaying the risk of how they will really be deployed by saying they are simply pattern recognition robots, we are limited in our ability to identify their purpose and articulate alternatives. 

By approaching from the lens of the semantic web and knowledge graphs we get a different perspective. 

> that what’s important is not whether AI’s representations of the world are accurate but how AI acts as an apparatus that directly helps to produce the world. {% cite mcquillanResistingAIAntifascist2022 %}


- stochastic parrots crit & situating serach
	- situating search
		- ideological mismatch: They rightly criticize them for responding to imagined needs instead of actual needs, but these statements like "The very fact that ranking is a critical component of this paradigm is a symptom of the retrieval system providing users a selection of potential answers, which induces a rather significant cognitive burden on the user." {% cite metzlerRethinkingSearchMaking2021 %} are directly illustrative of the ideology that drives these technologies.
		- they *are* aware of multiple search strategies, but they intrinsically want to promote some and not others --- steer people away from cognitively tasking things like evaluating evidence. if there is complexity, this is something the bot coaches you through. the goal is *more convenient search* at the expense of agency of the searcher.
		- also the explicit knowledge bases part!!!
	- but really we need to think of the other side, the parsing side, and these things as interfaces to KGs
	- two things:
		- them being ungrounded won't be true for long
		- as with search, imprecision is a feature.
	- but look across the aisle at the OTHER TECH that search engines develop: search
		- that necessarily involves mapping natural language to concepts and using that to constrain the results of information
		- so it's not an argument about whether these things can "reason on their own" - they're not even supposed to. They're just a translation layer between natural language and a knowledge graph
- if we approach from the semweb side, AI has ALWAYS been part of the dream - these are finally the autonomous agents that ppl have been waiting for (cite "where are all the agents" paper) (actually go back and cite where are all the agents paper in the cloud orthodoxy section)
	- when turning to KGs, goto "semantic web has always been about AI too. now is the moment where that could become real in a really bad way" {% cite daquinNewGenerationSemantic2008 %}. 
	- Watson was a freaking semweb robot...
	- where are all the agents? we were supposed to have web robots by now!? {% cite ciorteaDecadeHindsightMissing2019 %}
		- they're doign business stuff! {% cite mcburneyAgentsAreAll2007 %}
	- Tim BL specifically wanted chatbots: https://www.w3.org/DesignIssues/Evolution.html
- more details on how kgs + llms work
	- function as search: prompt resolves the fundamental difficulty in entity matching - if there is ambiguity the prompt can just ask you which you mean.
	- enter personal assistants! {% cite adolphsBoostingSearchEngines2022 chaudhriKnowledgeGraphsIntroduction2022 %}
		> "Second, there is a clear recognition that KG representations are a central ingredient to achieving the compositional behavior in AI systems."
		- introduction of google assistant {% cite pichaiBuildingNextEvolution2016 sGoogle2016Keynote2016 %}
			> But Google has not yet begun exploring how to make money from Bard itself, said Dan Taylor, a company vice president of global ads. It considers the technology “experimental,” he said, and is focused on using the so-called large language models that power chatbots to improve traditional search.
			> 
			> “The discourse on A.I. is rather narrow and focused on text and the chat experience,” Mr. Taylor said. “Our vision for search is about understanding information and all its forms: language, images, video, navigating the real world.”
			> 
			> Sridhar Ramaswamy, who led Google’s advertising division from 2013 to 2018, said Microsoft and Google recognized that their current search business might not survive. “The wall of ads and sea of blue links is a thing of the past,” said Mr. Ramaswamy, who now runs Neeva, a subscription-based search engine.
			>
			>  {% cite mickleChatbotsAreHere2023 %}
		- Interestingly Siri's team couldn't figure out what they wanted it to do along these lines: "Siri’s various teams morphed into an unwieldy apparatus that engaged in petty turf battles and heated arguments over what an ideal version of Siri should be—a quick and accurate information fetcher or a conversant and intuitive assistant capable of complex tasks. [...]  One team member said their vision of an ideal Siri was similar to the 2013 Spike Jonze movie “Her,” in which Joaquin Phoenix plays a lonely man who falls in love with “Samantha,” a conversant operating system." {% cite tilleySevenYearItchHow2018 %}
		- Microsoft v. google
			- {% cite kurianNextGenerationAI2023 %}
		- Microsoft is angling for the enterprise side
			> But Copilot doesn’t just supercharge individual productivity. It creates a new knowledge model for every organization — harnessing the massive reservoir of data and insights that lies largely inaccessible and untapped today.  https://blogs.microsoft.com/blog/2023/03/16/introducing-microsoft-365-copilot-your-copilot-for-work/
	- chatbots are interfaces to kgs: {% cite adolphsReasonFirstThen2021 huebscherZeroShotRetrievalSearch2022 huEmpoweringLanguageModels2022 renLegoLatentExecutionguided2021 %}
		> All in all, our findings suggest that it might be beneficial to slow down the race towards the biggest model and instead shift attention towards finding more effective ways to use models, including but not limited to, better prompting or increasing inference-time compute.
		> 
		> The deterioration of search results for multi-hop questions highlights the importance of a better approach to interacting with the Internet. This is particularly challenging for the general-purpose and powerful, yet black-box, search engines, where gradient-based learning is infeasible due to the discrete bottleneck introduced by working directly with words. We expect that “learning to search” approaches could boost performance of the overall system [22, 10, 11], where complex queries could be decomposed into simpler sub-queries, akin to approaches in question decomposition [40, 41]. While these tasks have not yet been tackled with LSLMs and few-shot prompting, we believe that it would be a reasonable first approach
		> - google {% cite lazaridouInternetaugmentedLanguageModels2022 %}
	- directly through latent space: {% cite adolphsDecodingNeuralRetriever2022 %}
	- chatbots do everything: {% cite mialonAugmentedLanguageModels2023a %}
	- And thery're very aware of the issues with trust & multiple search modalities
		- researching how to maintain trust: "This has led many practitioners and researchers alike to imagine a near future where voice assistants can be used in increasingly complex ways, including supporting healthcare tasks [41, 55], giving mental health advice [52, 66], and high stakes decision-making [17]." {% cite mercurioMixedMethodsApproachUnderstanding2023 %}
- Impacts
	- closing off the rest of the web
 		- google engineer in entity oriented search literally has a diagram that excludes the rest of the web
 		- re: AMP.
 		- Google is very sensitive about this! (nyt article) {% cite sullivanGoogleSearchSends2021 %}
	- concentrating in the hands of a few tech giants under the guise of 'safety'
		> "Aside from intentional misuse, there are many domains where large language models should be deployed only with great care, or not at all. Examples include high-stakes domains such as medical diagnoses, classifying people based on protected characteristics, determining eligibility for credit, employment, or housing, generating political advertisements, and law enforcement. If these models are open-sourced, it becomes challenging to limit harmful applications in these and other domains without proper regulation. On the other hand, if large language model access is restricted to a few organizations with the resources required to train them, this excludes most people from access to cutting-edge ML technology. Another option is for an organization to own the end-to-end infrastructure of model deployment, and make it accessible via an API." {% cite ouyangTrainingLanguageModels2022 %}
		- {% cite cohenHelpfulSearchTools2021 %} - google as arbiter of true information
		- AI will probably have some legislation under the guise of 'explainable AI,' and knowledge graph grounding will be the way that happens. {% cite lecueRoleKnowledgeGraphs2020 janowiczNeuralsymbolicIntegrationSemantic2020  %} (and cite end of microsoft presentation).
			- So, only we are able to use these tools both because we are the only ones that have the compute, but also because we are the only ones who have enough 'factual information' to actually make them work safely.
	- hypersurveillance
		- Re: the rest of existing personal assistants
		- Amazon already has surveillance via ring et al, wants to put a freaking drone in your house
		> To enable all of these updates, Search has to understand interests and how they progress over time. So we’ve taken our existing Knowledge Graph—which understands connections between people, places, things and facts about them—and added a new layer, called the Topic Layer, engineered to deeply understand a topic space and how interests can develop over time as familiarity and expertise grow.
		- They want to model your whole life!
		- snatching the personal knowledge graph people: {% cite balogPersonalKnowledgeGraphs2019a %} Under the guise of convenience - "update my location across all my apps"
	- you become your own prison guard
		- You train the model by using it, of course (cite ChatGPT paper about training on prior responses)
	- misinformation
		- but as a feature, not a bug.
		- the internet being awash in a bunch of garbage is great for companies who want to be the sole source of reliable information! Only Google will be able to protect you from misinformation! 
	- 'queryless'
		- actively steering you, rather than being responsive
		- https://www.blog.google/products/search/introducing-google-discover/
		- "The zero-query search paradigm can be expressed with the slogan “the query is the user.” In practice, the context of the user is used to infer information needs." {% cite balogEntityOrientedSearch2018 %}
	- advertising
		- social search network: your bot could be your friend recommending you stuff, this is sort of the dream with Amazon's little robot buddy
		- but also it could be a conduit through which you could be provided with "ur friends just bought this thing"
	- re: broader KG network
		- OKN is Specifically trying to get the chatbots up to speed: {% cite bigdatainteragencyworkinggroupOpenKnowledgeNetwork2018 %}
		> "These direct answers bring us some of the way towards our vision of domain expert advice; however, they are limited by the size of the graph, which only represents a fraction of the information contained in the Web corpus, and the inability to provide nuanced answers (by definition, answers are limited to factoids)." {% cite metzlerRethinkingSearchMaking2021 %}
		- Data laundering - "how do i beat my competitor" or providing insurance risk rankings doesn't nee to reveal the sources of the data, it can instead be "synthesized" by a series of models which also give it plausible deniability
		- it's just a chatbot after all! fallibility as a *feature*
	- a new kind of data market
		- Federated learning
			- Why would a standard data interchange format be useful? 
			- When you can't acquire the data, you still want a piece of the action! {% cite sadilekPrivacyfirstHealthResearch2021 %}
		- Think broader than search engines though, the pernicious and dangerous part here is that we could merge several classes of platform and surveillance harm: individual surveillance could merge with medical and public information and insurance information and the rest in an interoperable interchange format so that the data brokering economy woudl effectively explode. Imagine the splintering of infinitely many platforms that each owned some subset of the data, each platform holder owning all of them and slicing them off to you and pocketing the costs.
		- merged with research and reference data, they could literally make a graph of all information and supplant libraries, etc. for all information from news to government to personal.
- transition to next section
	- the hollow middle: these things don't even *work* anyway {% cite broussardArtificialUnintelligenceHow2018 %}
		- always limited to *only exactly what the developers could imagine you wanting to do* - why should we *have to* always have our digital reality defined by someone else's ideology


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





**Scraps**

- **Review**: {% cite mialonAugmentedLanguageModels2023 %}
	- Also be sure to read and cite: {% cite shahSituatingSearch2022 %}
- Google integrating AI and its graph of everything: {% cite nayakMUMNewAI2021 %}
	- {% cite raghavanHowAIMaking2021 %} - this is how Lens works
	- {% cite robertsExploringTransferLearning2020 %}
- Google prior history:
	- {% cite gomesImprovingSearchNext2018 %}
	    - "neural embeddings:" from understanding words to understanding concepts and then map then into some thing in teh knowlege graph.


