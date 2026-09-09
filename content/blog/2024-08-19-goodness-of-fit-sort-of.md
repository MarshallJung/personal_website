---
title: "Goodness of fit…sort of"
slug: "2024-08-19-goodness-of-fit-sort-of"
date: "2024-08-19"
description: "Goodness of fit…sort of"
coverImage: "/images/blog/2024-08-19-goodness-of-fit-sort-of/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

Those that know me understand that staying fit is a lifetime passion for me. Not only does it keep a person feeling energetic, it has many mental health benefits as well. It’s awfully easy to stay so focussed in front of the computer that we end up pushing (pun intended) our own fitness goals aside. Here is a nifty repo that uses Meta’s SAM model to count real movement (can do squats and situps as well). As the author suggests, dropping this into a chrome extension that blocks your internet unless you do a set number of full movements. Gotta use technology to get it done right?

[https://simpleai.darefail.com/pushupcount/  
](https://simpleai.darefail.com/pushupcount/)[https://github.com/DareFail/AI-Video-Boilerplate-Simple](https://github.com/DareFail/AI-Video-Boilerplate-Simple)

![Figure](/images/blog/2024-08-19-goodness-of-fit-sort-of/image-01.jpg)

### Can’t make something out of nothing

I’ll address the implications of this in the next post below, but as a summary of the summary, “You can’t make it better without adding data”. A few conversations with some smart folks this weekend got me thinking about the application of transformer based models to everyday life. Some of us have kids and what world they might live in where these AI tools are prevalent is both fascinating and a bit scary. Right now I’m confident that AGI isn’t possible simply because the data set is limited. With current technology we cannot move beyond that which we know. Any output from a model is completely determined by

1\. The information represented in the structure/data of the model,   
2\. The instructions given to it, and   
3\. Any incompressible stochasticity over 1 & 2.

At best, anything which looks novel in the output will either have been already encoded in the model, the input, or the combination of the two. If it’s the model, that’s more like compression or encryption, if it’s the input, then it’s just new data, and if it’s both, that’s more interesting, but essentially just an algorithm.

[https://en.wikipedia.org/wiki/Data\_processing\_inequality](https://en.wikipedia.org/wiki/Data_processing_inequality)

### Meet one of the e/acc crowd

[https://situational-awareness.ai/](https://situational-awareness.ai/)

I used Gemini inside of NotebookLM to pull out relevant details from the paper with reference quotes.

1.  “Trust the trendlines … The trendlines are intense, and they were right.” “The magic of deep learning is that it just works — and the trendlines have been astonishingly consistent, despite naysayers at every turn.”
2.  “Over and over again, year after year, skeptics have claimed ‘deep learning won’t be able to do X’ and have been quickly proven wrong.” “If there’s one lesson we’ve learned from the past decade of AI, it’s that you should never bet against deep learning.” “We’re literally running out of benchmarks.”
3.  It’s “strikingly plausible that by 2027, models will be able to do the work of an AI researcher/engineer.”
4.  “By 2027, rather than a chatbot, you’re going to have something that looks more like an agent, like a coworker.”
5.  The data wall: “There is a potentially important source of variance for all of this: we’re running out of internet data. That could mean that, very soon, the naive approach to pretraining larger language models on more scraped data could start hitting serious bottlenecks.”
6.  “AI progress won’t stop at human-level … We would rapidly go from human-level to vastly superhuman AI systems.” Superintelligence, coming in 2030 A.D.?
7.  AI products are likely to become “the biggest revenue driver for America’s largest corporations, and by far their biggest area of growth. Forecasts of overall revenue growth for these companies would skyrocket.” “Stock markets would follow; we might see our first $10T company soon thereafter. Big tech at this point would be willing to go all out, each investing many hundreds of billions (at least) into further AI scaleout. We probably \[will\] see our first many-hundred-billion-dollar corporate bond sale.”
8.  “Our failure today to erect sufficient barriers around research on artificial general intelligence “will be irreversible soon: in the next 12–24 months, we will leak key AGI breakthroughs to the \[Chinese Communist Party\]. It will be the national security establishment’s single greatest regret before the decade is out.”
9.  Superintelligence “will be the United States’ most important national defense project.”
10.  There’s “no crack team coming to handle this. … Right now, there’s perhaps a few hundred people in the world who realize what’s about to hit us, who understand just how crazy things are about to get, who have situational awareness.

Now, Aschenbrenner is an AI investor. So he’s not a disinterested party. Talking his book so to speak. However there isn’t a reference to the idea of data limitations as addressed in the previous post above. There is also a lot of hand waving around physical limitations like GPUs (or equivalent) as well as power requirements and legal constraints. So I suppose I’ll place myself firmly in the camp of wait and see.

### Feeding the beast

Netflix has released as open source the workflow orchestrator that data scientists and analysts use to understand user behaviors and other large-scale data-driven trends. Called “Maestro”, the workflow orchestrator, released under an Apache 2.0 license, was designed to support hundreds of thousands of workflows and has completed up to 2 million jobs in a single day. You can evoke from the cURL command line to create, run, and delete a workflow and an associated batch of data. The workflow is defined in JSON, and the business logic can be packaged into Docker images, Jupyter notebooks, bash scripts, SQL, Python, and other formats. Maestro manages the entire lifecycle of a workflow, handling retries, queuing, and task distribution to compute engines. It supports DAGs but also cyclic workflows and multiple reusable patterns, through for each loop, sub workflows, and conditional branching. I think this is great infra-ish backend for the AI tools that are being built. Not sexy perse, but certainly useful.

[https://github.com/Netflix/maestro](https://github.com/Netflix/maestro)

### So disappointing

Last post. Apologies for the lack of technical content. We’ll get back after it next week I promise. This last week I was having a conversation with one of the big four consulting companies after someone told me that a competitor to this big company had advertised 64 AI engineering roles in their healthcare and life sciences group. I got suspicious and did some question asking. Turns out that very highly paid AI roles are actually free PR for consulting companies like I suspected. They don’t actually intend on hiring any of these engineers, but it does give the appearance that the company is hiring the best of the best which helps land customer bids. Pretty shady, but I suppose in the modern world not all that surprising.