---
title: "Scaling Laws in LLMs"
slug: "2023-09-04-scaling-laws-in-llms"
date: "2023-09-04"
description: "Scaling Laws in LLMs"
coverImage: "/images/blog/2023-09-04-scaling-laws-in-llms/image-01.jpg"
tags: ["AI Strategy","Motorsport & Dynamics"]
readTime: "4 min read"
---

[https://markov.bio/biomedical-progress/](https://markov.bio/biomedical-progress/)

While the paper is written for the biomedical field, the principles are perfectly transferrable to low fidelity 3D datasets. Let’s look at an [OpenAI paper on scaling](https://arxiv.org/pdf/2102.01293.pdf)

![Figure](/images/blog/2023-09-04-scaling-laws-in-llms/image-01.jpg)

In the above example, we see that for a 40M parameter transformer fine-tuned on 3e5 characters, DT is approximately 1000x bigger than DF. The less fine-tuning data is available, the more pre-training helps. What are the pre-training datasets that Istari has that can help speed the application of industry specific LLMs?

### Helping customers use Istari LLMs

[https://github.com/comet-ml/comet-llm](https://github.com/comet-ml/comet-llm)

Getting customers (or internal devs) to really love Istari LLMs for digital thread engineering means taking the mystery out of using them correctly. Making sure that prompts are effective requires a way to track effectiveness and changes over time. Here’s an open source project that can provide centralized tracking. Will definitely make support, best practices and DevRel easier.

### Polluted waters?

![Figure](/images/blog/2023-09-04-scaling-laws-in-llms/image-02.jpg)

The above figure is ChatGPT performance on benchmark C++ evals over time. After the cutoff date performance falls rapidly. Point is most LLMs (the big closed ones too) are over fitting on available data. Be careful using benchmark performance metrics to help select a model, even a SaaS one. The concept of basic ML data best practices is an iron law that cannot be denied.

### Meta’s Cotracker

[https://github.com/facebookresearch/co-tracker](https://github.com/facebookresearch/co-tracker)

Tracking the changes in a 3D point cloud can be a difficult task. Here Meta implements it in dynamic 2D video. Josh’s base geometry + “bump map” concept could be simplified by using euclidean differentials to the selected grids implemented in Meta’s solution. I think this would be a very integral part of any optimization loop.

### Blog Idea

**Humans in the Loop —** (Why this topic? Thinking from the customer’s perspective handing over a design process that has traditionally been very dependent on human process to an algorithm that abstracts much of that management can be a decision fraught with nervousness. Istari believes in the process, as do I, but there will be a need to guide the customer. This blog concept is the idea that Istari as a company honors that process while building a vision for the future. Accelerationaist vision aside, we need to respect the place humans have in the process. After all, Adrian Newey designs and iterates on Red Bull’s Formula 1 cars using a traditional manual drafting board!)

Digital design has the promise of automating much of the hands-on process of building, testing and verifying everything from airplanes to medical devices. Being able to specify a concept through natural language description or from a library of existing designs promises to shorten development time significantly. Automated design pipelines that use a simple universal API language from structure through aero and stress analysis is a process that has not previously been accomplished. While the concept of a Star Trek like “replicator” is something that will in the fullness of time be possible, for our foreseeable future we must take advantage of the most valuable resource available to any company employing Istari’s software. I am of course speaking of the fantastically adept neural net that is sitting in between each of our ears.

The human brain is a wonderful computer. Capable of complex real time calculus that allows our hand to be in exactly the right place to catch a baseball, or to look at a racecar suspension design and know that it’ll work better than a competitors. We often forget that there is a place where a passionate and educated human can improve on the efficiency of a 3D ML pipeline. Inserting humans in the design loop can help catch issues early if only because something simply doesn’t “look right”. In 2012 John Hurly was working on NASA’s Orion spacecraft, when he noticed that the parachute system wasn’t working correctly. While the design met the aerodynamic specs, the fabric was not woven correctly leading to it being too stiff for deployment. A human, particularly a passionate and observational one, is a fantastic addition to a ML design pipeline. Let’s take full advantage of people and their ability to bring creativity and observational skills to the future of our digital metaverse.