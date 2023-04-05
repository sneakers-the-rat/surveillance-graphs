[^triplets]: Equivalently, one could emphasize that they are graphs composed of **triplet** links that describe some subject, predicate, and object.

[^dois]: For another example re: the political nature of the DOI system in the face of the arbitrary linking of the internet, see section 3.1.2 "[Integration, not Invention](https://jon-e.net/infrastructure/#seemingly-prosocial-protocols-can-be-used-by-industries-to-preem)" in {% cite saundersDecentralizedInfrastructureNeuro2022 %}

[^fbgraph]: Facebook describes the notion of its platform as being just a means of interacting with its underlying data graph in corporate web design speak: "A useful tool for Facebook has been to think of the graph as the model and a Facebook page as the view—a projection of an entity or collection of entities that reside in the graph." {% cite noyIndustryscaleKnowledgeGraphs2019 %}

[^etsydb]: For a practical example, see a recent [trio](https://www.etsy.com/codeascraft/scaling-etsy-payments-with-vitess-part-1--the-data-model) of [blog](https://www.etsy.com/codeascraft/scaling-etsy-payments-with-vitess-part-2--the-seamless-migration) [posts](https://www.etsy.com/codeascraft/scaling-etsy-payments-with-vitess-part-3--reducing-cutover-risk) from Etsy engineers that describe the process of scaling their database system.

[^notmagic]: I am aware graph databases are not magic and this is an extraordinarily simplified example. The principle is the point, not all the subtle ways the implementations of graph databases are hard.

[^RELXStrugs]: Though apparently they have had historical difficulty actually getting that integration to work {% cite schonfeldReorganizationElsevier2022 %}.

[^infoindustry]: To the degree that it can be considered an "industry" rather than a "mode of extraction."

[^integration]: > That is because knowledge graphs aim to solve the data incongruence problem, which is one of the biggest operational headaches for corporates, says Atkin.  “Corporates suffer from technology fragmentation and as a result have a lot of data that doesn’t align across the organization. Doing the hard work to fix this data incongruence reality is a pre-requisite for realizing business value,” he says. {% cite schenkerNewReportDetails2021 %}

[^freesoftware]: "free as in whatever will prevent you from @'ing me about getting some definition of free wrong."

[^wikipedia]: I have written about the peculiar structure of Wikipedia among wikis previously, section 3.4.1 - "[The Wiki Way](https://jon-e.net/infrastructure/#the-wiki-way)" {% cite saundersDecentralizedInfrastructureNeuro2022 %}

[^crowdsource]: For critical work on crowdsourcing in the context of "open science," see {% cite mirowskiFutureOpenScience2018 %}, and in the semantic web see {% cite allhutterWorkingOntologistsHighQuality2019 %}.

[^rdfavmicroformats]: (Intervening messages in the [chat log](https://www.w3.org/2011/06/semtech-bof-notes.html) have been omitted for clarity):<br>
    
    `<tantek>` Hey Kavi - do you see what you've done here?
    <br>
    `<tantek>` You've gotten a community leader of microformats.org (myself) and chair of W3C RDFa WG to \*agree\*
    <br>
    `<edsu>` tantek: see, that's progress :)
    <br>
    `<manu-db>` Yes - both RDFa and Microformats communities agree - sky will be falling, next.

[^linkingagreements]: "The potential benefit of the service that would become CrossRef was immediately apparent. Organizations such as AIP and IOP (Institute of Physics) had begun to link to each other’s publications, and the impossibility of replicating such one-off arrangements across the industry was obvious. As Tim Ingoldsby later put it, **'All those linking agreements were going to kill us.'**" {% cite crossrefFormationCrossRefShort2009 %}

[^diygoogle]: Go ahead, try and make your own web crawler to compete with Google - all the information is just out there in public on the open web! 

[^translator]: Or, just "Translator"

[^impossibledata]: > First, we assert that a single monolithic data set that directly connects the complete set of clinical characteristics to the complete set of biomolecular features, including “-omics” data, will never exist because the number of characteristics and features is constantly shifting and exponentially growing. [...] We also assert that there is no single language, software or natural, with which to express clinical and biomolecular observations—these observations are necessarily and appropriately linked to the measurement technologies that produce them, as well as the nuances of language. The lack of a universal language for expressing clinical and biomolecular observations presents a risk of isolation or marginalization of data that are relevant for answering a particular inquiry, but are never accessed because of a failure in translation.
    >
    > Based on these observations, our final assertion is that automating the ability to reason across integrated data sources and providing users who pose inquiries with a dossier of translated answers coupled with full provenance and confidence in the results is critical if we wish to accelerate clinical and translational insights, drive new discoveries, facilitate serendipity, improve clinical-trial design, and ultimately improve clinical care. This final assertion represents the driving motivation for the Translator system. {% cite consortiumUniversalBiomedicalData2019 %}

[^biolinkpaper]: The title of the Biolink paper is "Biolink Model: A universal schema for knowledge graphs in clinical, biomedical, and translational science" {% cite unniBiolinkModelUniversal2022 %}

[^tooling]: To their credit, the Translator project seems to have made some of the long-delayed tooling for declaring a schema in a more accessible syntax[^yaml] than RDFS/OWL and generating representations in multiple formats, from [JSON-LD to pydantic models](https://github.com/biolink/biolink-model). The Biolink paper also mentions a "[Node Normalization Service](https://github.com/TranslatorSRI/NodeNormalization)" for being able to resolve Linked Data entities from different vocabularies that have been declared to be the same thing, but at the time of writing development seems to have [slowed](https://web.archive.org/web/20230316031655/https://github.com/TranslatorSRI/NodeNormalization/graphs/contributors)

[^babel]: In an odd mixture of metaphors, members of the Translator consortium introduced the project with a piece titled "Deconstructing the Translational Tower of Babel." {% cite austinDeconstructingTranslationalTower2019 %} A common interpretation of the Biblical Tower of Babel is as a symbol of the hubris of humanity, attempting to inscribe ourselves into the heavens and become immune to any future God-induced flooding. God, concerned with the power of a humanity unified under a single language, punished them by scattering people into groups speaking mutually unintelligible languages so they would not complete the tower. It is unclear why an effort to create a universalizing ontology would then be deconstructing a tower of babel, as it was the power of a unified language that allowed it to be built. Perhaps in other interpretations the Tower is an obelisk that suppresses the reunification of language. But I digress.

[^slots]: or links, labeled edges.

[^norawdata]: In a 2018 presentation by one of Biolink's authors: "What NOT to use the biolink-model for: Raw data, Metadata about a dataset" with some caveat that the underlying metamodel might still be useful {% cite chrisIntroductionBioLinkDatamodel2018 %}.

[^generality]: General as opposed to an ontology like [MONDO](https://mondo.monarchinitiative.org/) {% cite vasilevskyMondoUnifyingDiseases2022 %} that identifies specific diseases.

[^moredata]: The answer to a question posed as an algorithmic problem is always more data: "These results suggest that if more EHR concepts were mapped to SPOKE, a significant improvement in the classifier could be achieved." {% cite nelsonEmbeddingElectronicHealth2021 %}

[^robokopdidntwork]: ITSN2 was identified in [an unrelated paper about attachment patterns](https://pubmed.ncbi.nlm.nih.gov/28210932/), HSD17B3 and 5a-RD2 were incorrectly identified as HSD17B13 and DHRS11 from [another paper](https://www.nature.com/articles/nrurol.2012.182), POMC and OPN1SW were sourced from [two papers](https://www.frontiersin.org/articles/10.3389/fendo.2019.00751/full) that [don't mention them](https://pubmed.ncbi.nlm.nih.gov/30843609/). Androgen receptors were also identified, which is probably true, but almost trivially so.

[^ipredit]: I submitted a [pull request](https://github.com/jannahastings/mental-functioning-ontology/pull/8) to remove it, and a full year later it was merged!

[^dateextract]: as well as a recommendation for "date allergenic extract" from a misinterpretation of "to date" in the abstract of [a paper](https://pubmed.ncbi.nlm.nih.gov/24330520/) that reads "Cross-sex hormonal treatment (CHT) used for gender dysphoria (GD) could by itself affect well-being without the use of genital surgery; however, **to date,** there is a paucity of studies investigating the effects of CHT alone"

[^araxtrans]: To its credit, ARAX does transform the request for `DOID:10919` to `MONDO:0001153` - gender dysphoria.

[^personalmedicaldata]: A 2020 presentation in one of the Translator's [github repositories](https://github.com/NCATSTranslator/Translator-All) describes methods for mining individual clinical data {% cite translatorconsortiumClinicalDataServices2020 %} 

[^RELXmedicaldata]: > In commercial healthcare, identity, claims and provider data is combined with patient information to assist healthcare providers, pharmacies and insurers in delivering improved health outcomes, ensuring accurate and complete provider data and regulatory compliance. {% cite relxAnnualReport20222023 %}

[^flows]: eg. Some members of the SPOKE project, a Knowledge Provider for the Translator project, describe the effects of the extended graph as "pushing" or influencing the "flow" of information: 
    > "For this patient, information flows from Carbamazepine to a set of Disease nodes (either through “treated by” or “contraindicated for” edges) and then (either directly or through an additional Disease or Gene node) to the genes CNP, MAG, or PTEN which are all components of “Myelin sheath adaxonal region.” {% cite nelsonEmbeddingElectronicHealth2021 %}

[^reasoner-training]: >"The Reasoners then return ranked and scored potential translations with provenance and supporting evidence. The user is then able to evaluate the translations and supporting evidence and provide feedback to the Reasoners, thus promoting continuous improvement of the prototype system." {% cite consortiumUniversalBiomedicalData2019 %}

[^section206]: There is a clear analogy to the recent push to increase internet content regulation by social media companies {% cite doctorowRegulatingBigTech2019 %}. A platform makes a quasi-universal social space for profit, moderation then has to scale with the size of the platform, then it lobbies to increase regulatory burden to a point that is impossible to maintain for all but already-scaled companies. It is only the quasi-universality of the platform that makes the moderation burden so high in the first place, however, compared to eg. a decentralized medium that might have a structurally different disposition to moderation ( see {% cite rozenshteinModeratingFediverseContent2022 %}).

[^whoomp]: If you could rig an MS Word template to punctuate sentences with "[Whoomp! (There It Is)](https://www.youtube.com/watch?v=L6mNa_QZVHg)," they would have.

[^NSFconvergence]: The Convergence Accelerator is a project specifically designed to provide public research funding to for-profit industries {% cite nationalsciencefoundationNSFConvergenceAccelerator2019 %}

[^pattern]: Hopefully this pattern is familiar.

[^spoke]: SPOKE, discussed previously, was funded by both the Translator project {% cite huangNIH1OT2TR00345001EVIDARA2020 %} and OKN {% cite baranziniNSFAwardSearch2022 %}, and [KnowWhereGraph](https://knowwheregraph.org/) is another notable early prototype {% cite janowiczKnowKnowWhere2022 %}

[^boozallen]: Including a representative from Booz Allen Hamilton, which may be familiar as the former employer of Edward Snowden, who was working for them on a contract with the NSA which gave him access to the details of its [PRISM](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)) mass-surveillance program.

[^palantirexternaldata]: Palantir prides itself on its ability to continuously add new data sources: 
    > “Because one of Palantir’s biggest selling points is the ease with which new, external data sources can be incorporated into the platform, its coverage grows every day. LAPD data, data collected by other government agencies, and external data, including privately collected data accessed through licensing agreements with data brokers, are among at least 19 databases feeding Palantir at JRIC.” {% cite braynePredictSurveilData2020 %}

[^sprint]: The "Innovation Sprint" is essentially as an extended pitch session for future work, which is both important context as a strong counterincentive to series ethical consideration of the projects --- and also a demonstration of why it might not be good to organizing infrastructural projects as pitch sessions rather than from some ethical foundation.

[^systemsengineers]: A recurring pattern in techno-solutionism: 
    > "These perspectives assume that complex controversies can be solved by getting correct information where it needs to go as efficiently as possible. In this model, political conflict arises primarily from a lack of information. If we just gather all the facts, systems engineers assume, the correct answers to intractable policy problems like homelessness will be simple, uncontroversial, and widely shared.
    >
    > But, for better or worse, **this is not how politics work.**" {% cite eubanksAutomatingInequalityHow2019 %}

[^cfive]: ...and then outsourcing the maintenance and risk of it being breached {% cite informationsystemsadvisoryboardcountyoflosangelesCONTRACTCOUNTYANGELES2021 %}

[^acab]: > These visits often resulted in other, unrelated arrests that further victimized families and added to the likelihood that they would be visited and harassed again. In one incident, the mother of a targeted teenager was issued a $2,500 fine when police sent to check in on her child saw chickens in the backyard. In another incident, a father was arrested when police looked through the window of the house and saw a 17-year-old smoking a cigarette. These are the kinds of usually unreported crimes that occur in all neighborhoods, across all economic strata—but which only those marginalized people who live under near constant policing are penalized for. {% cite guarigliaTechnologyCanPredict2020 kathleenTargeted2020 %}

[^utopiaofrules]: For a fuller discussion of utopias, power, imagination, managerialism, and its intersections with bureaucracy, see {% cite graeberUtopiaRulesTechnology2015 %}
    > The increasing interpenetration of government, university, and private firms has led all parties to adopt language, sensibilities, and organizational forms that originated in the corporate world. While this might have helped somewhat in speeding up the creation of immediately marketable products --- as this is what corporate bureaucracies are designed to do --- in terms of fostering original research, the results have been catastrophic. [...]
    >
    > A timid, bureaucratic spirit has come to suffuse every aspect of intellectual life. More often than not, it comes cloaked in a language of creativity, initiative, and entrepreneurialism. But the language is meaningless. The sort of thinkers most likely to come up with new conceptual breakthroughs are the least likely to receive funding, and if, somehow, breakthroughs nonetheless occur, they will almost certainly never find anyone willing to follow up on the most daring implications. [...]
    >
    > This is what I mean by"bureaucratic technologies": administrative imperatives have become not the means, but the end of technological development. {% cite graeberUtopiaRulesTechnology2015 %}

[^EOSC]: It's out of scope here, but another point of comparison and contrast is the EU's European Open Science Cloud (ESOC) project {% cite directorate-generalforresearchandinnovationeuropeancommissionEOSCArchitectureWorking2021 directorate-generalforresearchandinnovationeuropeancommissionSolutionsSustainableEOSC2020 directorate-generalforresearchandinnovationeuropeancommissionEOSCInteroperabilityFramework2021 %}

[^loveyanerds]: Except by the scores of beloved nerds in exile on the freer parts of the internet who remember the death of IRC and RSS and the weaponization of JavaScript **acutely and personally.**

[^firefox]: The last major competitor being Firefox with market share in the low teens. Hang in there little fox!

[^chrome]: Which Google uses as a surveillance platform and a weapon which, according to unredacted court records detailing its "Privacy Sandbox" project, they plan to use for a forceful takeover of the rest of the global ad market in the name of privacy: "Google's new scheme is, in essence, to wall off the entire portion of the internet that consumers access through Google's Chrome browser." {% cite ReGoogleDigital2021 %}.

[^nonuniversal]: Universal definitions are themselves part of of the critique.

[^IP]: (that is profitable to maintain IP licenses for)

[^bigdickdata]: See Data Feminism's concept of "Big Dick Data"
    > Big Dick Data is a formal, academic term that we, the authors, have coined to denote big data projects that are characterized by masculinist, totalizing fantasies of world domination as enacted through data capture and analysis. Big Dick Data projects ignore context, fetishize size, and inflate their technical and scientific capabilities.4 In GDELT’s case, the question is whether we should take its claims of big data at face value or whether the Big Dick Data is trying to trick funding organizations into giving the project massive amounts of research funding. (We have seen this trick work many times before.) {% cite dignazioDataFeminism2020 %}

[^priorthought]: Eg. {% cite birhaneValuesEncodedMachine2022 benderDangersStochasticParrots2021 birhaneAlgorithmicInjusticeRelational2021 birhaneDecolonisingComputationalSciences2020 dignazioDataFeminism2020 allhutterWorkingOntologistsHighQuality2019 magerDefiningAlgorithmicIdeology2014 bowkerSortingThingsOut1999 %}

[^spokeknowledge]: > "SPOKE was conceived with the philosophy that if relevant information is connected, it can result in the emergence of knowledge, and hence provide insights into the understanding of diseases, discovering of drugs and proactively improving personal health." {% cite morrisScalablePrecisionMedicine2023 %}

[^googleranking]: Google characterizes the potential for varying meanings in terms of "localization" --- where different geographic locales may have different understandings of a given query, but within that locale meaning is homogenous. It unintentionally captures the tension between localization and maintaining the epistemological framing of "reliability" of information with some underlying True value with this paradox in its training materials for its manual search quality evaluators: 
    > "Ratings should not be based on your personal opinions, preferences, religious beliefs, or political views. Always use your best judgment and represent the cultural standards of your rating locale." {% cite googleSearchQualityEvaluator2022 %}

[^pagerank]: Along with other differentiating technologies like PageRank.

[^enshittification]: The same is true of algorithmic social media feeds, see {% cite doctorowTiktokEnshittification2023 %}

[^underspecified]: "The benefits of PageRank are the greatest for underspecified queries" {% cite pagePageRankCitationRanking1999 %}

[^mitchell]: "Such personalized page ranks may have a number of applications, including personal search engines. These search engines could save users a great deal of trouble by efficiently guessing a large part of their interests given simple input such as their bookmarks or home page." {% cite pagePageRankCitationRanking1999 %}

[^harnesses]: Literally "Harnessing the wisdom of the crowds" {% cite pascaOrganizingSearchingWorld2007 %}

[^timestealing]: The notion of presenting services as free by virtualizing computing resources is as old as time sharing on digital computers, eg. Tung-Hui Hu relates this history to the creation of the atomized individual digital subject described below: 
    > "In this, time-sharing anticipated the way that the contemporary cloud encourages its users to take things free of charge. By making each online resource freely available—computer storage, processing time, content, even software—the cloud encourages the pleasurable and quasi-illicit feeling that we are getting away with something: that we, too, have stolen time. [...]
    >
    > Virtualization is itself a logical map, a topography that results from creating a set of personal channels that isolate us into individual users (and therefore seems to give us as much data, storage, computing power, etc., as we personally want).{% cite huPrehistoryCloud2015 %}

[^longtermists]: In addition to already thoroughly problematized ideologies like immortality cults and their many branches like longtermism, etc.

[^SERPfuzziness]: > "The utility of a search stems from its straightforwardness and the immense reduction of complexity it affords. Search engines flatten a complex topology of networked contents into an ordered list fitting the user's ongoing task and intentions.
    > 
    > Not unlike a library or archival catalogue, the results page both orders and locates knowledge resources, yet it breaks away from stable classifications and the importance of categories as the basis of such order
    >
    > Even if the SERP and the matching online resources are served as separate webpages, it is difficult to draw a definitive line between them. The boundary between the SERP and target pages is fluid" {% cite kallinikosAmbivalentOntologyDigital2013 %}

[^linguisticgrounding]: Language modeling research has developed its own ad-hoc definitions of "grounding" that move goal posts until one could trivially describe what LLMs have as "understanding," eg. a 2000 technical report from Microsoft Research {% cite horvitz2000grounding %} constructs an unconvincing probabilistic definition of mutual understanding based on utility maximization. The problem of symbol grounding has a long and broad history, and since the argument here is that it is a red herring to understanding the purpose of large language models, I won't attempt a review. 

[^antifascistai]: eg. from "Resisting AI:"
    > What’s important is not whether AI’s representations of the world are accurate but how AI acts as an apparatus that directly helps to produce the world. {% cite mcquillanResistingAIAntifascist2022 %}

[^useofai]: Throughout this section, my use of "AI" is not to indicate endorsement of large language models or any other algorithmic system as being "artificially intelligent," but rather to be able to speak in the parlance of the domain texts without a profusion of scare quotes and qualifiers.

[^immortalitycults]: As part of a long lineage of immortality cults (eg. {% cite diazImmortalityAttainable20302023 %}) like cryogenics, the longtermists believe that we will "merge" with artificial general intelligence through eg. "brain uploading" or brain-computer interfaces in a fully digital civilization of infinitely many potential consciousnesses and resolve all world problems. 

[^hypeorsincerity]: some papers will flatly claim they are at least in-category of systems that could have "artificial general intelligence," given some noncommittal wash of definitions (eg {% cite bubeckSparksArtificialGeneral2023 %}), but others are more conservative and provide repeated caveats like "loosely speaking" to play both sides by invoking the language of intelligence as a metaphor that the reader can interpret as literal or not {% cite raffelExploringLimitsTransfer2020 %}.

[^notbusinessplans]: Each different kind of information here needs its own set of caveats --- press-release-like sources of course are intended only the present the company in a positive light, patents are often defensive and might ever be realized, and whitepapers from researchers don't necessarily represent business plans, but each are indicative of the thinking and strategies of these companies in their own right.

[^siristrugs]: Interestingly Siri's team struggled because they couldn't figure out whether they wanted it to be merely search or a more personal assistant: 
    > "Siri’s various teams morphed into an unwieldy apparatus that engaged in petty turf battles and heated arguments over what an ideal version of Siri should be—a quick and accurate information fetcher or a conversant and intuitive assistant capable of complex tasks. [...]  One team member said their vision of an ideal Siri was similar to the 2013 Spike Jonze movie “Her,” in which Joaquin Phoenix plays a lonely man who falls in love with “Samantha,” a conversant operating system." {% cite tilleySevenYearItchHow2018 %}

[^googleknows]: Though Google specifically is very aware of multiple search strategies and address the need to better accomodate them elsewhere.

[^iterativesearch]: Again, invoking convenience:
    > It has been a powerful vision for more than 20 years to design search engines that are intuitive and simple to use. Despite their remarkable success, search engines are not perfect and may not yield the most relevant result(s) in one shot. This is particularly true for rare and intrinsically difficult queries, which may require interactive exploration by the user to be answered correctly and exhaustively. [...] It seems natural to envision artificial search agents that mimic this interactive process. {% cite adolphsBoostingSearchEngines2022 %}

[^wherearetheagents]: The question "Where are the agents?" was answered in 2007 with "busy doing business-to-business stuff," and this model of LLM-powered knowledge graphs is a continuation of that pattern {% cite mcburneyAgentsAreAll2007 %}.

[^timblagents]: > We see that search engines, remarkably, do scale - but at the moment produce very unreliable answers. Now, on a semantic web we can imagine a combination of the two. For example, a search engine could [retrieve] all the documents which reference the terms used in the query, and then a logical system [could] act on that closed finite world of information to determine a reliable solution if one exists. {% cite berners-leeEvolutionSpecificationCommentary1998 %}

[^compositional]: rather than considering input elements separately

[^critihype]: "[criti-hype](https://sts-news.medium.com/youre-doing-it-wrong-notes-on-criticism-and-technology-hype-18b08b4307e5)" {% cite vinselYouReDoing2021 %}

[^kidsandvoiceinterfaces]: To some degree these assistants feel like a generational marketing campaign like McDonald's Happy Meals, where the animacy of a phone might seem ridiculous to people who grew up with them as inert objects, but that might not be the case for future generations. In 2021, Google's Director of Product Management described this expectation for animacy: "My four-year-old talks to everything with a screen, expecting it to answer" {% cite googledevelopersWhatNewGoogle2021 %}

[^ctrlf]: Again, it is the combination of large machine learning models and knowledge graphs that makes some dream of convenience possible: "Scene Exploration uses computer vision to instantly connect the multiple frames that make up the scene and identify all the objects within it. Simultaneously, it tapes into the richness of the web and Google's Knowledge Graph to surface the most helpful results. [...] this is like having a supercharged ctrl+f for the world around you." {% cite googleGoogleKeynoteGoogle2022 %}

[^failureresearch]: These companies are acutely aware of this, and their research into understanding user expectations and trust of assistants also has a strong strain of animism, eg. describing how people will only use their assistants for simple tasks like playing music "while trust [...] was being repaired." {% cite mercurioMixedMethodsApproachUnderstanding2023 %}

[^bard]: The Assistant team is being reorganized under Google's LLM-powered search product Bard as of March 2023, again highlighting the continuity of these projects {% cite eliasGoogleReshufflesVirtual2023 %}

[^zeroquery]: > "The zero-query search paradigm can be expressed with the slogan “the query is the user.” In practice, the context of the user is used to infer information needs." {% cite balogEntityOrientedSearch2018 %}