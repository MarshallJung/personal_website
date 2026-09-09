---
title: "Not a palette cleanser…"
slug: "2024-11-25-not-a-palette-cleanser"
date: "2024-11-25"
description: "Not a palette cleanser…"
coverImage: "/images/blog/2024-11-25-not-a-palette-cleanser/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

As I was listening to my wife talk about the VA, and the tragic inability of our veterans to get the mental health help they so desperately need I was saddened. Much of the problem stems from the labyrinthine and maddening crush of paperwork, much of it still on physical paper, duplicative and unneeded. I was reminded of a quote from Alexis De Tocqueville’s “What Sort Of Despotism Democratic Nations Have To Fear”

“It covers the surface of society with a network of small complicated rules, minute and uniform, through which the most original minds and the most energetic characters cannot penetrate, to rise above the crowd. The will of man is not shattered, but softened, bent, and guided: men are seldom forced by it to act, but they are constantly restrained from acting: such a power does not destroy, but it prevents existence; it does not tyrannize, but it compresses, enervates, extinguishes, and stupefies a people, till each nation is reduced to be nothing better than a flock of timid and industrious animals, of which the government is the shepherd.”

With all our modern technology and knowledge it seems we cannot do better. But I am a glass half full person, and perhaps now, in a time that feels more like change than anything in the last 30 years, we can find the will to fix that which has buried us under so much. Eyes up folks, focus on the future.

### Following on from last week

While the “death of AI” is still circulating, there have been a few predictable responses to that assertion. Some which are just plain wacky and others that are more measured. On the crazy side are the ghost in the shell folks like an OpenAI insider ([https://x.com/apples\_jimmy/status/1859827339280171504](https://x.com/apples_jimmy/status/1859827339280171504)) basically claiming sentience. But in the more reasonable camp we have Jensen Huang ([https://fortune.com/2024/10/25/nvidias-billionaire-ceo-says-ai-can-do-a-lot-of-things-except-take-his-job/](https://fortune.com/2024/10/25/nvidias-billionaire-ceo-says-ai-can-do-a-lot-of-things-except-take-his-job/)) stating the same concept. AI will do the repetitive and well documented 50% of our day-to-day work 100% better. That leaves us to explore the other 50% which AI cannot do since, hopefully, it’s unique and new. Of course those folks who are not creative or industrious will be more affected by AI, so it will not all land equally.

### Not just 3D Generation

[https://research.nvidia.com/labs/dir/edify-3d/](https://research.nvidia.com/labs/dir/edify-3d/)

![Figure](/images/blog/2024-11-25-not-a-palette-cleanser/image-01.jpg)

NVIDIA just released another 3D generative model that generates meshes with detailed geometry. Previously models have generated rendered 3D items with texture and colors, but if these items need to be incorporated into actual 3D programs like Fusion, SolidWorks and CATIA then the meshes are a great place to start. I’m looking forward to these models using engineering math as an input for the generated item. It seems simple, but that “language” is pretty hard to turn into a set of embeddings.

### Providing context the easy way

[https://llmstxt.firecrawl.dev/](https://llmstxt.firecrawl.dev/)

I’ve used web crawler based text generators before, especially to convert github repositories to text files that can then be used as context for LLM prompting. This new one released a few days ago is based of Firecrawl, which does a better job than most of the existing implementations. Give it a shot when you want to incorporate some base knowledge to an AI conversation.

### Replication is a good thing

Only a few months after OpenAI released o1 a Chinese backed group releases DeepSeek V2 modeled after the same CoT and inference time compute scaling ideas.

![Figure](/images/blog/2024-11-25-not-a-palette-cleanser/image-02.jpg)

Tying this into the idea of LLM scaling hitting a wall, it’s another confirmation point that the same amount of effort and methods will roughly reproduce the same results. It also shows that this type of model will become widely available and economically indefensible. Continue focussing on where there is proprietary data and build LLM powered tools to address those markets.

### It’s easy to keep multiples

![Figure](/images/blog/2024-11-25-not-a-palette-cleanser/image-03.jpg)

We’ve covered pgai Vectorizer before. Instead of worrying too much about model lock in, you can create 3 different versions of your data with 3 different OpenAI embedding models in just 3 SQL queries (see code snippet). This ability to maintain multiple versions of your data with different embedding models not only makes testing new models easier, but also makes serving results for A/B testing, and gradually rolling out model upgrades without disrupting production much easier as well.

### Metaprompts

Prompting is an artform, and we’ve all come to rely on a set of concepts that seem to work well in getting models to behave the way we want them to. There is a fair amount of research into this, and this Harvard paper sums up some of the best practices that can help guide you. They do seem to be useful. Take a look here: [https://hbsp.harvard.edu/inspiring-minds/an-ai-prompting-template-for-teaching-tasks](https://hbsp.harvard.edu/inspiring-minds/an-ai-prompting-template-for-teaching-tasks)