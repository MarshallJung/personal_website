---
title: "This is why we can’t have nice things"
slug: "2024-05-27-this-is-why-we-cant-have-nice-things"
date: "2024-05-27"
description: "This is why we can’t have nice things"
coverImage: "/images/blog/2024-05-27-this-is-why-we-cant-have-nice-things/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2024-05-27-this-is-why-we-cant-have-nice-things/image-01.jpg)

[https://youtu.be/NPOHf20slZg?si=i4kVhIkMMM6-u8bi  
](https://youtu.be/NPOHf20slZg?si=i4kVhIkMMM6-u8bi)[https://youtu.be/zLvFc\_24vSM?si=kRgSsnKVt7JiT33z](https://youtu.be/zLvFc_24vSM?si=kRgSsnKVt7JiT33z)

When the web 3.0/crypto/NFT hype was at its peak, I’ll admit that I was singularly unimpressed. Sure, there are interesting uses for blockchain technology in very specific cryptographic applications, however the hype far outweighed the reality. (Cue the crypto bros sending me angry, threatening messages). I’m seeing these same overtones in the AI space.

![Figure](/images/blog/2024-05-27-this-is-why-we-cant-have-nice-things/image-02.jpg)

What makes it more frustrating for me personally this time is that I am a rational, experienced and realistic ML/D&A practitioner that is suffering from guilt by association. As I continue to look for a new position it’s hard to convince companies that I would love to work for that I’m not “just one of those hype guys”. Yes, yes, the shoe is on the other foot now and it makes me sad. I’m sorry to all those real security and cryptography people I painted black during that last hype cycle. Please accept my apology.

### Blink and you miss it

[https://arxiv.org/pdf/2405.14458v1](https://arxiv.org/pdf/2405.14458v1)

I was literally just building something that used YOLOv8 and in just a few months v10 is out (I must have missed v9 completely). Compared with YOLOv9-C, YOLOv10-B has 46% less latency and 25% fewer parameters for the same performance. That’s super impressive. I remember back at my time at Google I worked on an object detection and classification project with a public sector customer. YOLO didn’t even exist and writing the code to support that project actually became the very first SaaS VisionAI product for Google. Things certainly have come along way. Code for v10 is here: [https://github.com/THU-MIG/yolov10?tab=readme-ov-file](https://github.com/THU-MIG/yolov10?tab=readme-ov-file)

### Every single time

[https://github.com/ragapp/ragapp](https://github.com/ragapp/ragapp)

I was literally just writing the last implementation of a local RAG tool based off the newest and easiest open source tools and BAM! here comes the next no-code version. Released by the folks behind LlamaIndex and built on the same backend as the create-llama project, this looks to be the simplest and fastest effort yet. I have not tried it as of writing this newsletter, but I’ll need to understand what ingest capabilities look like (multi-modal is really important for me) and what kind of models it supports. Looks like ollama-local with llama3 looks doable.

### The “Garden of Forking Paths”

[https://arxiv.org/abs/2405.12532](https://arxiv.org/abs/2405.12532)

I’m always on the lookout for pieces of data that will disabuse me of my prior assumptions and biases. There have been several papers (like the above) released in the recent past that show how optimizations in the inference space give significant improvements in efficiency and cost reduction. Many small bites at the apple will add up to something meaningful in making AI models efficient for more applications. This is a more machine layer upgrade on the idea that I posted last week: [https://ai.google.dev/gemini-api/docs/caching](https://ai.google.dev/gemini-api/docs/caching)

![Figure](/images/blog/2024-05-27-this-is-why-we-cant-have-nice-things/image-03.jpg)

### Peering inside

[https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html)

For context, the goal of dictionary learning is to untangle the activations inside the neurons of an LLM into a small set of interpretable features. We can then look at these features to inspect what is happening inside the model as it processes a given context. We also explore how the model actually uses these features to predict the next word. In other words, we try to separate features that are related to the context from ones that are useful for prediction. This sparse autoencoder is scaled to meaningful size such that features that can allow for better tuning, alignment and QC are much easier to extract from even the largest models. This is a good step in the direction of dealing with hallucinations. I think this same concept can be aligned with any language that is not sufficiently structured as to provide for completeness and interpretability.

![Figure](/images/blog/2024-05-27-this-is-why-we-cant-have-nice-things/image-04.jpg)

### Faster Pandas

[https://colab.research.google.com/github/rapidsai-community/showcase/blob/main/getting\_started\_tutorials/cudf\_pandas\_stocks\_demo.ipynb](https://colab.research.google.com/github/rapidsai-community/showcase/blob/main/getting_started_tutorials/cudf_pandas_stocks_demo.ipynb)

Python has become slow over time. We all know this but truthfully it’s usually part of DA/ML workflows where speed is usually not the most important feature. But it’s nice to see NVIDIA helping the cause out by optimizing on GPU. Hopefully some of the other python libraries will be included.

### Agent based Data Science

[http://labs.google/code](http://labs.google/code)

-   Helps with complex tasks like planning, and error correction.
-   Helps with data science tasks like predictive modeling.
-   Outputs an AI-generated Colab notebook based on your prompt.

Interesting effort from the Google team. Agent based LLM pipelines are complex and all the rage right now. Here they have built one for data analytics in the browser. Like Google’s NotbookLM I think they don’t get enough credit for putting together these cutting edge ML processes while the rest of the industry crows about the individual parts and pieces. I found the tool to be helpful in a more exploratory manner. Complex data sets where you might be a deep expert are probably beyond its ken right now, but the process is pretty cool.

### I’ll fit anything on anything

I have been using the “internet replicator” to have laser cut parts combined with my own machining efforts in the garage to adapt racing 4-piston brake calipers to the back of my race car. Gives me a chance to practice my TIG welding as well.

![Figure](/images/blog/2024-05-27-this-is-why-we-cant-have-nice-things/image-05.jpg)

![Figure](/images/blog/2024-05-27-this-is-why-we-cant-have-nice-things/image-06.jpg)