---
title: "On the application of LLMs"
slug: "2024-06-10-on-the-application-of-llms"
date: "2024-06-10"
description: "I’ve been pretty outspoken about the appropriate application of autoregressive transformer based models to everyday business use cases. I recently had a brief conversation with a big cloud company tha..."
coverImage: "/images/blog/2024-06-10-on-the-application-of-llms/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

I’ve been pretty outspoken about the appropriate application of autoregressive transformer based models to everyday business use cases. I recently had a brief conversation with a big cloud company that was focussed on delivering GPU and raw infra to customers specifically interested in developing and delivering “AI” enabled tools. Either ISVs or VPC/internal for big conglomerates. My take away from the conversation is that there is a scramble to deliver as much compute as possible as fast as possible. It makes sense for cloud providers to jump on this as we can see from the graphic below, the cost of model development is scaling nearly exponentially. I’m sure there is a limit and cost is a rather opaque thing, but I’m sure GPT-5 isn’t going to be cheaper (if and when it is released). (As an aside, I have a close friend that works in the power generation and engineering sector, and the power demands from new AI data centers have GE’s combined-cycle gas turbines pre-sold through 2026. We are talking several 100’s of megawatts of base load demand. Nat gas futures might well be a good long term investment…)

I can’t see this ending well. The scale of over investment in the infrastructure space to build larger and larger models is something that I think is going to come back to bite a fair few companies. ROI is very nebulous and with the continuing problems associated with accuracy, hallucination and reliable benchmarking. I think the seed of doubt when it comes to “AI” tools is going to grow over time. We will look at another example later in the newsletter.

What we can briefly say is that the water is getting muddy and when this high tide goes out, there will be some missing swimsuits.

![Figure](/images/blog/2024-06-10-on-the-application-of-llms/image-01.jpg)

### Stanford AI review 2024

[https://aiindex.stanford.edu/wp-content/uploads/2024/04/HAI\_AI-Index-Report-2024.pdf](https://aiindex.stanford.edu/wp-content/uploads/2024/04/HAI_AI-Index-Report-2024.pdf)

A long read, and one that I have not finished yet. Some info in here that confirms my priors and some that does not. Good resource for understanding the current market place.

### I’ve probably been giving people the wrong examples

[https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries](https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries)

When I talk to people about where AI tools will have the biggest impact, I usually try and simplify it as much as possible by telling them that the more structured the underlying knowledge the model was trained on the better the model will perform. While I usually leave out the concept of fine tuning, in general I think this is a correct way of discussing the areas where transformer models have an edge. (Conversely, diffusion based models excel at creative tasks like image generation, where “structure” isn’t really a thing, however I think that’s a bit different but we can have that discussion at a different time) So I’ve been telling people that vocations like paralegal, coding engineer, medical diagnosis etc. will be affected most. Leaving aside legal and compliance implications, these jobs use right/wrong data and being good at them is oftentimes as much about being accurate and referenceable as being creative. However, the Stanford article linked above that came out of their 2024 AI Report demonstrates that, “we put the claims of two providers, LexisNexis (creator of Lexis+ AI) and Thomson Reuters (creator of Westlaw AI-Assisted Research and Ask Practical Law AI)), to the test. We show that their tools do reduce errors compared to general-purpose AI models like GPT-4. That is a substantial improvement and we document instances where these tools provide sound and detailed legal research. But even these bespoke legal AI tools still hallucinate an alarming amount of the time…”

I’ve always pushed the idea of RAG tools to help with these issues, and they do. But apparently it may not be quite enough to serve as a compliant reference for legal proceedings. I don’t know exactly how these tools were built, but it is a concept to keep in mind.

### The new oil/lithium/uranium?

In the conversation with the big cloud provider I mentioned earlier in the newsletter, one of the topics that came up was the fact that customers of the cloud provider were interested in performance metrics. I was asked, “How do you know when to swap a new model in or re-train an existing model? What benchmarks should be used?” This gets back to last week’s entry, and ongoing blog article, about benchmarking and LLM model performance evaluation. My answer to this question was the age old and possibly boring ML and statistics response of, “You can’t test what you’ve trained on”. The only way to tell if the next LLM model plugged into your company’s RAG tool performs better than the old version is if you have a reserved and proprietary data set with samples that have not been seen by the model. This makes private data very, very valuable and something that should be guarded and carefully curated so as to never allow testing and eval data to pollute the model training data. So if you have that data, it is very valuable. See this announcement:

[https://x.com/TheAtlantic/status/1796666744657883213](https://x.com/TheAtlantic/status/1796666744657883213)

What these deals do have to do with is locking up exclusive access to sources of information. Act accordingly.

### BAck to something cool

![Figure](/images/blog/2024-06-10-on-the-application-of-llms/image-02.jpg)

[https://arxiv.org/abs/2402.14009](https://arxiv.org/abs/2402.14009)

[https://arturs-berzins.github.io/GINN/](https://arturs-berzins.github.io/GINN/)

As long time readers will know, I have a 3D mind. That is to say that I like objects, building things and making that process more efficient. This is an interesting paper that discusses a generative 3D process that might be a step forward in truly generative 3D. The paper is a bit thin on discussing why this particular method is better than GANs for constrained generation, but I do have no doubt that this particular research direction can be more “creative” than GANs by first principle.