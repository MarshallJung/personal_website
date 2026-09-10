---
title: "The Slope of Cope"
slug: "2024-06-24-the-slope-of-cope"
date: "2024-06-24"
description: "With any new technology, be it silicon based, medical or physical, we are not immune from the hype curve. This is different from the adoption curve, which one might say is the first derivative of the ..."
coverImage: "/images/blog/2024-06-24-the-slope-of-cope/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

The back side of the hype curve

With any new technology, be it silicon based, medical or physical, we are not immune from the hype curve. This is different from the adoption curve, which one might say is the first derivative of the hype curve.

![Figure](/images/blog/2024-06-24-the-slope-of-cope/image-01.jpg)

In every cycle there is the peak of inflated expectations followed by the valley of disillusionment, but there isn’t an “official” name for the negative trend line that connects those two as far as I know. So henceforth I will be naming this angsty, accusatory and desperate portion of the curve “**The Slope of Cope**” (™ and all that, no stealing!).

All joking aside, we see things like this ([https://apnews.com/article/mcdonalds-ai-drive-thru-ibm-bebc898363f2d550e1a0cd3c682fa234](https://apnews.com/article/mcdonalds-ai-drive-thru-ibm-bebc898363f2d550e1a0cd3c682fa234)) and headlines like this one ([https://www.zdnet.com/article/generative-ai-may-be-creating-more-work-than-it-saves/](https://www.zdnet.com/article/generative-ai-may-be-creating-more-work-than-it-saves/)) and this one ([https://www.theinformation.com/articles/generative-ai-providers-quietly-tamp-down-expectations?rc=7gpwfr](https://www.theinformation.com/articles/generative-ai-providers-quietly-tamp-down-expectations?rc=7gpwfr)) that tell me that we are starting to run into the limits of transformer language models.

Most that read my newsletter will know that I’m neither an AI doomer, nor a pie eyed e/acc fanboy. I’m a realist that looks for applications of technology based on scientific first principles combined with human psychology. And I believe the “**Slope of Cope**”™ can be understood through these ideas. I’ll address each of these ideas in the newsletter today through an observational example.

The human element

My very good friend D.H. sent me the following two articles:

[https://www.bloodinthemachine.com/p/understanding-the-real-threat-generative  
](https://www.bloodinthemachine.com/p/understanding-the-real-threat-generative)[https://www.metafilter.com/204168/ChatGPT-is-bullshit](https://www.metafilter.com/204168/ChatGPT-is-bullshit)

And I think that they capture the human psychological aspect of AI technology well. There are links to many technical articles and papers included, but I think the overwhelming gist of the two articles is, “this AI is not really all that good, and we need to be careful how and where we apply it.”. Countervailing arguments will follow calling people revanchist and uninformed. Afterall, did the same articles appear when Henry Ford started producing automobiles? Yes, yes they did and when we look out on our roads today we don’t see many horses and buggies. But AI isn’t the car, and its applications cannot be everything to everyone. If we can learn anything about changing people’s lives, up to and including taking their livelihoods away, it’s that it should be done slowly and considerately. Change can happen, and it should, but we can never forget that humans are not replaceable widgets, and getting AI wrong in making people angry and recalcitrant is never going to serve the purpose of fulfilling the promise of AI.

Some of the uses of AI are getting kind of bleak: [https://www.americanbanker.com/news/the-ai-bringing-zen-to-first-horizons-call-centers](https://www.americanbanker.com/news/the-ai-bringing-zen-to-first-horizons-call-centers) where employees are getting pacified by AI algorithms because they have to deal with customers furious at dealing with…other AI call center algorithms.  
Or maybe we can just make the irate customers sound less angry? [https://www.cxtoday.com/contact-centre/contact-centers-are-turning-to-ai-filters-to-protect-staff-from-angry-customers/](https://www.cxtoday.com/contact-centre/contact-centers-are-turning-to-ai-filters-to-protect-staff-from-angry-customers/) Not sure that saying “fuck off” politely helps a bunch, but…  
Just because we can does not mean we should and factoring in the emotions, effects and complexity of humans is not easy. But we, the people who build and sell AI products and solutions, should always be very considerate in how we use these tools to enhance and build employees, not replace them.

The technical element

There are also technical reasons to believe that LLMs will not be a universally applicable solution as well. This paper as presented last week: [https://arxiv.org/abs/2401.11817](https://arxiv.org/abs/2401.11817) summarizes a mathematical approach to proving that LLMs, as currently implemented, will not ever be free of hallucinations. While I think this is “intuitively” true, it’s nice to have math as a back up.

![Figure](/images/blog/2024-06-24-the-slope-of-cope/image-02.jpg)

[https://arxiv.org/abs/2406.04369](https://arxiv.org/abs/2406.04369) — “Rag Does Not Work for Enterprises” is another paper that was released recently and points to more practical issues with using these types of tools in a business setting. The paper proposes some additional methods that might mitigate some of the uncertainties inherent in the RAG method as well as some more applicable benchmarks for the tools.  
This is not to say that there are no places for LLMs in business. There are certainly some amazing creative applications that thrive on the introduction of unique combinations of tokens for the purposes of inspiration or augmentation. And there are other technologies that can be incorporated (we’ll look at an oldie but goodie briefly in the next section) to keep the LLM on the straight and narrow. But that really puts the transformer as a part, an important one, but just a part in a machine learning pipeline for particular applications.

Sometimes the foundations are there for a reason

![Figure](/images/blog/2024-06-24-the-slope-of-cope/image-03.jpg)

“Given how prevalent the embedding-based RAG demo is, it’s easy to forget or overlook the decades of research and solutions in information retrieval. Nonetheless, while embeddings are undoubtedly a powerful tool, they are not the be-all and end-all. First, while they excel at capturing high-level semantic similarity, they may struggle with more specific, keyword-based queries, like when users search for names (e.g., Ilya), acronyms (e.g., RAG), or IDs (e.g., claude-3-sonnet). Keyword-based search, such as BM25, is explicitly designed for this. Finally, after years of keyword-based search, users have likely taken it for granted and may get frustrated if the document they expect to retrieve isn’t being returned.”

From an excellent summary here: [https://applied-llms.org/#dont-forget-keyword-search-use-it-as-a-baseline-and-in-hybrid-search](https://applied-llms.org/#dont-forget-keyword-search-use-it-as-a-baseline-and-in-hybrid-search) and it points to the idea that humans don’t really work, or perhaps were not trained, with the idea of semantic similarity when it comes to information retrieval. We think of a name, a place or a thing and from that we branch out. So using traditionally “human” processes in-pipeline with LLM based methods are more successful.

Here is a git of a speedy BM25 implementation that might be of use: [https://github.com/xhluca/bm25s](https://github.com/xhluca/bm25s)

Rule #1

Ok, last one I promise. We’ll get back to some more interesting and esoteric applications of ML for the purposes of “semantic inspiration” soon. I just wanted to be that guy that posits “[Chesterton’s Fence](https://fs.blog/chestertons-fence/)” one last time.

[https://developers.google.com/machine-learning/guides/rules-of-ml#:~:text=Rule%20%231%3A%20Don't,a%20product%20without%20machine%20learning](https://developers.google.com/machine-learning/guides/rules-of-ml#:~:text=Rule%20%231%3A%20Don%27t,a%20product%20without%20machine%20learning).

![Figure](/images/blog/2024-06-24-the-slope-of-cope/image-04.jpg)

As I talk with many, many folks in the pursuit of a new role I often times feel like the old grey beard yelling at the kids to get off my lawn, but ML (yes, and even AI) are based on the time tested rules of statistical methods, and the data that is fundamental to the success of any new algorithm. Let us not forget that!

Interesting method for 3D reconstruction

![Figure](/images/blog/2024-06-24-the-slope-of-cope/image-05.jpg)

[https://yizhiwang96.github.io/Slice3D/](https://yizhiwang96.github.io/Slice3D/)

I’ve struggled with implementing the concept of using 3D images as a “language” for generation of text prompted objects. The big issue here is the data that is needed to train the model. There is no standard adhered to in the space for axes and scaling. For example this makes getting a model to understand an object and that same object upside down very hard. It’s like trying to train a text based LLM with words spelled forward and backwards and have them learn it’s the same word. It’s possible, but difficult. This method seems like a way of helping, though I’m still not sold. IF, IF, IF there was a way of going from g-code back to the object that would solve all my problems, but the data set is so sparse as to be nearly useless. And it’s not useful at all for any composite items like an airplane wing. I’m sure I’m missing something. Any suggestions from the reader’s as to what I’m missing?