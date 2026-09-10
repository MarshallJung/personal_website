---
title: "NVIDIA GTC — The Dead Walking — A Review"
slug: "2025-03-24-nvidia-gtc-the-dead-walking-a-review"
date: "2025-03-24"
description: "I can’t actually remember the last time I was at a tech conference. It was probably way back when I was still at Google and they moved their annual conference from SF to Las Vegas when it got too big ..."
coverImage: "/images/blog/2025-03-24-nvidia-gtc-the-dead-walking-a-review/image-01.jpg"
tags: ["AI Strategy"]
readTime: "8 min read"
---

![Figure](/images/blog/2025-03-24-nvidia-gtc-the-dead-walking-a-review/image-01.jpg)

I can’t actually remember the last time I was at a tech conference. It was probably way back when I was still at Google and they moved their annual conference from SF to Las Vegas when it got too big for the Moscone Center. So it’s been 6 years or thereabouts. I’m not one for conferences, to be honest. Big crowds and talking to many people tends to deplete my battery pretty fast. Give me a quiet mountain stream or the wind in the aspen trees.

But brave this gathering I did and despite the long days on my feet I did learn some interesting things. First, nearly all of the 25–30k people were there in the pursuit of the next AI unicorn. The feeling was a bit manic and disjointed. I was not working in tech during the lead up to the dot com crash, but I have to think that the feeling today is roughly the same. Like the internet back then, today a new technology (AI) has minted overnight unicorns seemingly with very little effort and no moats. Everyone wants in and the successes of the few (Cursor, Perplexity, ElevenLabs etc., etc) are stalked by the failures of others ([https://www.wired.com/story/humane-ai-pin-hack-revival/](https://www.wired.com/story/humane-ai-pin-hack-revival/)). But the recipe is still a mystery. I can’t help but feel a little empathy for the enthusiastic companies crammed into the San Jose convention center selling their unique flavor of “Agentic RAG”, unit testing/code verification tools, digital twin gaussian splatting software, etc. I looked around and thought that most of the companies are already dead. They just don’t know it yet.

Why are they dead? Well, because most of them rely on a business model where they consume LLM APIs, layer some UI/UX on top for an “AI Enhanced” SaaS offering (pejoratively, “wrapper” companies). Increasingly the big labs and hyperscalers find themselves in a race to the bottom competing on API pricing for foundational models, future revenue streams start to look compressed and envious eyes cast across the landscape and see SaaS as revenue — stable, recurring, and tied to user workflows. This trumps the volatile, low-margin LLM API market and bringing the offerings back in house is preferable. ([https://siliconangle.com/2025/03/07/microsoft-reportedly-develops-llm-series-can-rival-openai-anthropic-models/](https://siliconangle.com/2025/03/07/microsoft-reportedly-develops-llm-series-can-rival-openai-anthropic-models/))

More examples: OpenAI’s o1-pro pricing of $150 per million input tokens and $600 per million output tokens only makes sense when you realize that they don’t actually want anyone to really use it. Look at Claude Code where Anthropic is stabbing Cursor and Windsurf in the back. Gemini now offering mind maps, canvas, IDX and RAG based solutions. And on and on it goes. Game it out a few years and MSFT will have captured 80% of the AI market via EA cramdowns on existing customers. Google centric companies will find the same and the remaining 15% will have enough room for 1–3 other players. Talk about a tough space. A menagerie of unicorns this is not.

What else is clearly the elephant in the room at GTC last week? The evolution of AI models in enterprise solutions to look exactly like software management. As smaller, smarter models are created specifically for narrow tasks, the training, testing, versioning, application and security of the model garden looks just like software management. NVIDIA themselves, Oracle, IBM, AWS, Google and all the other biggies are all offering AI management and deployment platforms. Of course the biggest player in the space is HuggingFace (not a presence at GTC, curiously) but I can see MSFT grabbing them and rolling it into GitHub. Makes sense. But I’m sure there will be other players here. How exactly do you build a startup in that space with sufficient differentiation? Focus on a particular industry with complex compliance needs. Build a collaborative, enterprise-Grade model hub. Imagine a private version of HuggingFace, tailored for corporate needs. I’m sure some folks are working on it, but it’s not a front and center product yet. Maybe some traction here.

### Not all Black Pilled

There were of course some bright spots where AI clearly is making a difference AND where companies can use the same basic underlying algorithmic structure to be successful as they have other moats in manufacturing or proprietary data. The robotics, manufacturing, digital engineering, medical and drug/health spaces are pretty nifty and I’ll be the first to admit that I’ve been sleeping on these as they are outside my area of expertise (well except possibly for the CFD/FEA space and 3D engineering applications)

![Figure](/images/blog/2025-03-24-nvidia-gtc-the-dead-walking-a-review/image-02.jpg)

[https://x.com/NVIDIAHealth/status/1892269481642090928](https://x.com/NVIDIAHealth/status/1892269481642090928)

The folks over at the biosciences part of the conference had some nifty demo pipelines for Evo-2 and OpenFold for novel drug and genetic treatment pipelines. Pointed me in the direction of [https://www.lajollalabs.com/](https://www.lajollalabs.com/) who are already using some of these techniques.

I was unable to convince the engineering firms like Ansys and Dassault that next token prediction methodologies are useful for CFD analysis, but I am yet undeterred! It is important to note that the physics models hosted by and optimized to NVIDIA GPUs are basically the go-to industry standard for all engineering. Discounting GAN methods, generative methodologies are still pretty rare in the pure engineering space.

So was my trip to NVIDIA’s GTC conference worth it? Yes, it was. It was interesting to see everyone’s perspectives and approaches to available opportunities. Next year, I wouldn’t be surprised if the conference is significantly smaller as wrapper companies and startups begin to sort themselves out, be acquired or fold up shop. Enterprises will probably start to make long-term licensing decisions for AI implementation so the revenue picture will be clearer. I’ll leave you with one interesting observation. There was no mention of powering data centers. I’ve noted previously in my newsletter that the wait times for gas turbine generators, the fastest and most efficient method for auxiliary power for data centers, currently have a 90-month lead time. I believe that much of AI adoption will not be limited by the technology itself but rather by our capacity to provide expanded, cost-effective data centers for implementing these solutions.

### Dumb or Lazy?

[https://www.microsoft.com/en-us/research/wp-content/uploads/2025/01/lee\_2025\_ai\_critical\_thinking\_survey.pdf](https://www.microsoft.com/en-us/research/wp-content/uploads/2025/01/lee_2025_ai_critical_thinking_survey.pdf)

This Microsoft paper suggests that greater trust in AI capabilities can lead to less critical thinking among human users of these tools. I noticed many reports on this paper, with most summarizing it as suggesting that AI is making humans less intelligent. In some cases, I can see how using AI could foster laziness, as it might not encourage a deeper understanding of the subject. However, if you are a critical thinker who understands how these tools are trained and on what data, you can recognize their strengths and limitations. This knowledge allows you to trust certain answers while taking the time to explore more complex or niche topics with the AI. I think it’s helpful to periodically assess how you’re using these tools to determine if they’re contributing to your productivity or just adding to your output in a “noisy” manner. The answer may surprise.

### What’s China up to?

It’s been notable to see China increasingly embracing open-source AI. I certainly didn’t expect it. Several models from Chinese state-associated companies and startups have emerged, with solid capabilities. Deepseek is one of the most prominent, but there are certainly more on the horizon.

There are likely many theories about China’s intentions, as this clearly falls within the scope of the CCP’s central controlling organization and their objectives. My theory is that China aims to apply its traditional approach to AI: studying, copying, optimizing, and then undermining other economies with lower prices and scale. They can only accomplish this if their models are completely open source, as many people don’t trust Chinese software from a security standpoint. That’s why they’ve been releasing all the weights. However, it makes you wonder that since training foundational models is the most expensive and least profitable part of AI, those who can build impressive fine-tuning and applications on top of open models will likely capitalize on the ROI for AI. Are there going to be Chinese, American, or even European companies involved in the app side? It’s hard to say. However, this bold strategy will create an interesting landscape regarding open-source versus closed-source models. If trends continue, open models are likely to challenge the revenue models of companies like OpenAI and Anthropic.

### AI Data Intelligence Platforms

![Figure](/images/blog/2025-03-24-nvidia-gtc-the-dead-walking-a-review/image-03.jpg)

[https://github.com/microsoft/data-formulator](https://github.com/microsoft/data-formulator)

I recently spoke with a legacy data and AI platform tool with significant adoption. At NVIDIA’s GTC conference, I also came across a few small startups developing similar solutions to the Microsoft link I shared above. The moat that big data companies have had may be disappearing. For tasks like data enrichment, manipulation, cleaning, monitoring, and enhancement — combined with AI tools for accessing and building data pipelines, accomplishing these tasks is much easier today than in the past. There’s exciting competition emerging in this space, and organizations with large data needs and data science teams will have plenty of options in the coming year. It’ll be interesting to observe how this competition develops.