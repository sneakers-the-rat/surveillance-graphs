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