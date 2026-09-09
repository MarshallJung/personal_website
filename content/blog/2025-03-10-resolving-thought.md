---
title: "Resolving Thought"
slug: "2025-03-10-resolving-thought"
date: "2025-03-10"
description: "A bit shorter this week as I’m in TX over the weekend at PCA COTA. Hopefully some pictures in the next newsletter!"
coverImage: "/images/blog/2025-03-10-resolving-thought/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

A bit shorter this week as I’m in TX over the weekend at PCA COTA. Hopefully some pictures in the next newsletter!

This bit of news isn’t particularly recent, but it got me thinking about how I write this newsletter each week. I don’t usually follow a linear pattern for each sentence or section. Instead, I start with an idea or something that catches my interest and that evolves into a set of thoughts, which I then transform into sentences. I became curious about whether diffusion is a better process for LLMs or AI in general when it comes to imitating human thought patterns. The debate on whether diffusion or autoregressive methodologies dominate natural language models is a topic for another discussion, but this is what I’m interested in.

[https://huggingface.co/papers/2502.09992](https://huggingface.co/papers/2502.09992) — This paper from Inception AI presents a compact diffusion-based model for natural language. A few weeks ago, it was quite highly ranked in the HuggingFace Copilot arena.

![Figure](/images/blog/2025-03-10-resolving-thought/image-01.jpg)

After some research, I found that this is a more robust and complex implementation of an earlier paper I had seen on simple masked diffusion language models. I’ve included the paper here: [https://arxiv.org/abs/2406.07524](https://arxiv.org/abs/2406.07524)

The model is not only super quick but also prompts consideration of how it may transcend the limitations of auto-regression. This could be due to its more tree-like concept of thought, as opposed to the linear chain of AR. While I’m uncertain about the deeper implications, the application of reasoning (though I’m not sure how that’d be done ATM) in this context seems intriguing. It makes intuitive sense to me since I often resolve concepts from a over arching thought down to a linear explanation to share with others. However, this may not be the most efficient approach for using these tools in a digital context.

### Still not Black or White

The generative AI lab at Wharton University is releasing its first prompt engineering report that empirically tests various prompting approaches. While it may seem slightly late to the game, it highlights some very interesting findings.  
First, there isn’t a single standard for measuring whether a large language model meets a benchmark. The choice of standard significantly affects its performance, as standards can vary based on your specific goals. Second, It’s often difficult to determine if a specific prompting approach will benefit or hinder your goals within an organization. In some cases, it may help, while in others, it may not. This can also vary across different models.

The paper is here: [https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=5165270  
](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165270)And it reminds me of another useful article that I think will help folks understand how to use AI…think like an AI! [https://www.oneusefulthing.org/p/thinking-like-an-ai](https://www.oneusefulthing.org/p/thinking-like-an-ai)

### Replicate Deepseek smolly

[https://huggingface.co/reasoning-course  
](https://huggingface.co/reasoning-course)[https://colab.research.google.com/github/huggingface/notebooks/blob/main/course/en/chapter13/grpo\_finetune.ipynb](https://colab.research.google.com/github/huggingface/notebooks/blob/main/course/en/chapter13/grpo_finetune.ipynb)

One of the key insights from DeepSeek’s open-source reasoning model R1 is that data isn’t necessary for the post-training; only reward functions are required for reinforcement learning. Above are some links that show how to achieve this using a small LLM within a Google Colab notebook. If you’re curious about how these various fine-tuning methodologies work, here’s a flowchart to help you decide which one to use.

![Figure](/images/blog/2025-03-10-resolving-thought/image-02.jpg)

### A Camera is All You Need

Website: [https://fast3r-3d.github.io/  
](https://fast3r-3d.github.io/)Demo: [https://fast3r.ngrok.app/](https://fast3r.ngrok.app/)

For a while now I’ve been wanting to get a low-cost consumer 3D scanner to assist with fabrication on my race car. I haven’t made a purchase yet since they are still a little expensive and a lot of the fabrication is already done. However, I may want to replace or upgrade parts of the car in the future, as it’s a never ending project, so it’s in the cards. This fast3r-3d algorithm moves away from previous two-view methods by processing all views simultaneously in one large transformer. This eliminates the costly stages of view selection and alignment, making the process end-to-end learnable with the added benefit of significant improvements in speed and memory efficiency. Could something like this replace a laser-based or infrared 3D scanner for modeling objects that can be imported into CAD? I’m not sure, but it is an interesting direction for the future.

### Your own Data Scientist

[https://developers.googleblog.com/en/data-science-agent-in-colab-with-gemini/](https://developers.googleblog.com/en/data-science-agent-in-colab-with-gemini/)

When I worked in oil and gas, we dealt with some enormous structured data sets. Sure we all argue about whose data sets are bigger, but these were significant. The ability to use a transformer-based agent to sort this data with natural language for insights would have been incredibly useful. Moving forward, I believe this will greatly benefit the data science side of the business, and I’m glad Google has released this technology. True democratization is intriguing, especially if it can replace or simulate a semantic layer on existing data.

### Materials Corner

[https://interestingengineering.com/science/interlocked-polymer-mechanical-bonds-armor](https://interestingengineering.com/science/interlocked-polymer-mechanical-bonds-armor)

As someone with a mechanical inclination, I’m always intrigued by new materials. I always look for ways to apply these engineering advancements in the race car industry. However, I believe this particular material is being marketed more as body armor, likely for our armed services and law enforcement personnel. But scatter shields or wero skid plates would be really applicable here. Like the jabrock pieces, but probably a bit lighter and tougher. Put me on the list!