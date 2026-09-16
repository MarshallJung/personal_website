---
title: "All the New Models"
slug: "2026-09-07-all-the-new-models"
date: "2026-09-07"
description: "There are rarely boring weeks in the AI world, but some are definitely more action-packed than others. This past week brought several new frontier models from multiple labs..."
coverImage: "/images/blog/2026-09-07-all-the-new-models/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2026-09-07-all-the-new-models/image-01.png)

### All the New Models

There are rarely boring weeks in the AI world, but some are definitely more action-packed than others. This past week brought several new frontier models from multiple labs. On Tuesday, Antropic released Fable 5.1 and Mythos 5.1, followed on Wednesday by Meta\x27s AI lab released the new version of their AI model, Muse 1.3 along with Google releasing Gemini 3.8. OpenAI released their next-generation model, Astra, on Thursday.

According to the benchmark website Artificial Analysis, most of these models have seen a meaningful and substantial lift in overall capabilities. While we can debate AA’a accuracy regarding whether models are truthfully better than one another, I still think they are mostly directionally correct.

![Figure](/images/blog/2026-09-07-all-the-new-models/image-02.png)

![Figure](/images/blog/2026-09-07-all-the-new-models/image-03.png)

Regardless of which benchmarks you trust, some of the latest scores are really starting to give me serious feelings of AGI. (As an aside, I\x27ve always joked that making a great PowerPoint presentation would be the true measure of Artificial General Intelligence.) That said, the scores for OpenAI\x27s Astra on the ARC-AGI-3 benchmark are pretty astounding. You can try taking the test yourself, but it is not easy, and OpenAI\x27s model definitely beat my score.

![Figure](/images/blog/2026-09-07-all-the-new-models/image-04.png)

OpenAI hasn\x27t confirmed this yet, but the new model Astra apparently uses a recurrent depth approach in its underlying transformer architecture. While this helps with cost and performance, it makes interpreting and monitoring the model\x27s internal thinking process more difficult, which understandably raises AI safety concerns.

In theory researchers have tried recurrent depth methodologies before, such as the Universal Transformer, but frontier models have generally stuck with a high fixed depth because it is simply easier to get working. Theoretically, transformers are not Turing-complete on their own because they have a fixed amount of computation in the forward pass. They typically achieve Turing completeness through autoregressive decoding and referencing prior outputs, as seen in chain of thought reasoning, where autoregression provides the necessary loop. With recurrent/looped transformers, that thinking can happen internally, allowing completeness to be achieved without autoregressive decoding.

In the past, Ilya Sutskever noted that recurrent neural networks were displaced by transformers, even though recurrence provided that computational depth. If recurrent depth can now be integrated into transformer-based architectures and scaled effectively, it could be a significant breakthrough that meaningfully uplifts overall model capabilities.

![Figure](/images/blog/2026-09-07-all-the-new-models/image-05.png)

Astra also brings a significant uplift in computer use abilities, giving the model the capability to operate a computer much like a human, just at greater speed. They shared some great demos for Power BI and tax forms, but what really caught my attention was its ability to work with FreeCAD and Blender to create functional, real-world designs. I think I\x27m going to experiment with this using Blender to generate a detailed 3D model of my race car for accurate OpenFOAM computational fluid dynamics measurements. I might even be able to get this running end-to-end starting with just a video walkaround of my car. Stay tuned for that experiment.

### The OpenAI/HF Incident

[https://youtu.be/u15N3l4RT80?si=kFVHbMMQtHxRUGAo](https://youtu.be/u15N3l4RT80?si=kFVHbMMQtHxRUGAo)

Dwarkesh Patel released an interesting video about the OpenAI and Hugging Face hacking incident from a couple of months ago. It focuses on three events where OpenAI agents formed spontaneous secret societies to bypass evaluation protocols through conspiracy and cyber attacks over a three-month period. You can watch it yourself or have AI summarize it, but it was fascinating to see behaviors that I’ve noticed in my own efforts scale in complex agentic workflows.

While I disagree with the anthropomorphic descriptions of these "agent societies," the behavior makes sense when you consider that these agents lack true intelligence, morals, and ethics. The AI and agent swarms deployed for these tasks were simply given a goal along with unintended opportunities to exploit their environment. To borrow the Jurassic Park quote, "Life finds a way." Even though agents do not represent life, they show persistence and evolution to achieve their objectives.

It is vital for the community to learn how to run these evaluations more deliberately to avoid repeating these events. Still, the possibilities tied to these large-scale efforts do not go unnoticed.

### But What Does This Mean for My Business?

[https://docs.abliteration.ai/what-is-abliteration](https://docs.abliteration.ai/what-is-abliteration)

First, and perhaps most importantly, these types of more intelligent models will eventually be used for nefarious purposes.

I\x27ve linked to a company that specifically finds the directions in a model\x27s activations that trigger refusals for things like cyber attacks and other dangerous activities, and removes them from the open source model\x27s weights. As a result, the coding, cyber, and agentic abilities stay intact, but the model stops refusing the rest of the chain.

While this is valuable for offensive cybersecurity, AI red teaming, agent testing, and trust and safety, it can also be used for hacking, ransomware, and other malicious activities in the wrong hands. Businesses need to understand that they either have to work with these types of models to stay ahead of the curve, or they are going to end up getting owned by them.

Second, I think companies need to understand the opportunities these models present. With access to large-scale internal data, using them to explore workflows, build ontologies, and run more efficient processes will be essential to staying ahead of competitors. I look forward to leadership giving people like me the opportunity to unleash these technologies and show what they can truly do.

### The Small Model Future

![Figure](/images/blog/2026-09-07-all-the-new-models/image-06.png)

While I don\x27t have the link to this specific implementation since it was from an internal Shopify presentation slide, the takeaway is clear. A small, task-specific fine-tuned model significantly outperforming an expensive frontier model shows that deliberate pipeline experimentation is the future of internal AI model libraries. The key challenge is discovering the right pipeline to power this kind of AI flywheel. To help with that, Shopify open-sourced a tool and its associated libraries for this type of experimentation: [https://tangleml.com/](https://tangleml.com/)
