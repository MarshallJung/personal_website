---
title: "An Instructional"
slug: "2025-10-13-an-instructional"
date: "2025-10-13"
description: "An Instructional"
coverImage: "/images/blog/2025-10-13-an-instructional/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

The algorithm has served me up all sorts of info after the past weeks where I’ve been talking about and searching for information on DSPy and other programmatic LLm interface technologies. And along came this video: [https://www.youtube.com/watch?v=I9ZtkgYZnOw](https://www.youtube.com/watch?v=I9ZtkgYZnOw) The author Drew works on Overture Maps, which combines Point Of Interest data from numerous providers to create a single unified POI database. This is a notoriously difficult task in GIS where multiple datasets are deduped and merged together or conflated.

Drew uses a local model, Qwen3–0.6B, to compare 70 million addresses and identity matches, for example between Place(address=”3359 FOOTHILL BLVD”, name=”RESTAURANT LOS ARCOS”) and Place(address=”3359 FOOTHILL BLVD”, name=”Los Arcos Taqueria”’).

DSPy’s role is to optimize the prompt used for that smaller model. Drew used GPT-4.1 and the dspy. MIPROv2 optimizer, producing a 700 token prompt that increased the score from 60.7% to 82%. Having a prompt optimization pipeline makes it trivial to evaluate and switch to other models if they can score higher with a custom optimized prompt — without needing to execute that trial-and-error optimization by hand.

### Moving Towards Definition

Also a couple of weeks ago I talked a bit about DSPy and PDDL-INSTRUCT. Recently the creators of DSPy linked a paper [https://arxiv.org/pdf/2507.19457](https://arxiv.org/pdf/2507.19457) that I think fits really nicely into that topic from a few weeks ago.

For years, the gold standard for teaching an AI a new skill has been Reinforcement Learning (RL), requiring thousands of trial-and-error runs that are computationally expensive and slow. The paper introduces a system called GEPA (Genetic-Pareto). Instead of adjusting model weights with numeric rewards, GEPA uses an LLM to reflect on its own performance in natural language. It examines its failures, diagnoses the problem, and then rewrites its own prompts to get better. The results claimed that GEPA can outperform traditional RL methods while using up to 35 times fewer examples.

I think it could fit in with the previous LLM construct like:  
PDDL-INSTRUCT creates a better model. GEPA writes the perfect instructions for the model and DSPy is used to build the optimal pipeline or program using LLMs as components.

Of course GEPA’s “meta-prompt” guides its reflection, but its effectiveness, basically whether it’s a universal genius or task-specific, is questionable; we might just be shifting the prompt-writing difficulty. Despite using natural language, GEPA remains an optimizer, not a true reasoner; its “understanding” might just be sophisticated pattern-matching. While sample-efficient in task execution, GEPA’s “reflection” steps incur significant, hidden LLM computational costs. Finally, while GEPA generates highly tailored prompts that show good generalization in the paper, their hyper-specialization in real-world scenarios risks overfitting and brittleness. We’ll just have to see how this one plays out, but if you are trying to build very application specific pipelines, this might be a good tool. However, at that point are you not necessarily better just writing the code in the first place?

### Finding the Needle

I was recently working with a customer on getting better classification of events out of text strings. There were a bunch of traditional methods that worked ok, but one of the best uplifts came from using an embedding model for the text. The article here: [https://towardsdatascience.com/the-rise-of-semantic-entity-resolution/](https://towardsdatascience.com/the-rise-of-semantic-entity-resolution/) is a good summary of why that worked.

As AI agents become more prevalent, the demand for solid knowledge graphs will really ramp. However, extracting information from text with LLMs often creates numerous duplicate entities, a problem that traditional, rule-based entity resolution methods are poor at, especially at scale. Semantic entity resolution uses semantic blocking (sentence transformers create vector embeddings for grouping similar records) and LLM-based matching and merging. LLMs identify and merge records into enriched entities, guided by metadata and field descriptions.

At the top of the HF leaderboard Gemini embedding models were my choice for semantic entity resolution. Top semantic understanding through training on vast datasets, crucial for accurately clustering similar entities despite textual differences. I used the clustering mode, foundational to “semantic blocking.” I didn’t move over to the foundational models for the matching and merging portion, but you sure could.

Highly recommend the article to help understand how to do this with your unstructured text data.

![Figure](/images/blog/2025-10-13-an-instructional/image-01.png)

### Talking Past One Another

This last week I chose to get verbose in a reply on LinkedIn. Was this a good use of my time? Probably not, but I did find the linked article in WSJ very frustrating: [https://www.wsj.com/lifestyle/careers/in-a-sea-of-tech-talent-companies-cant-find-the-workers-they-want-76b7983a?mod=hp\_lead\_pos11](https://www.wsj.com/lifestyle/careers/in-a-sea-of-tech-talent-companies-cant-find-the-workers-they-want-76b7983a?mod=hp_lead_pos11)

For those that can’t get past the paywall here’s a TL;DR:

“Despite an apparent “sea of tech talent” after layoffs at major companies, businesses struggle to find workers because of a specific demand for highly specialized Artificial Intelligence (AI) skills that are scarce, leading to a disconnect between abundant general tech workers and a shortage of niche experts. This gap results in many experienced tech professionals being unable to find jobs, while a few AI specialists command exceptionally high salaries and demanding work conditions.”

These types of traditional media articles from places like the WSJ make me so frustrated. The employee/company marketplace is literally talking past one another. There are amazing AI fluent employees that have been out of work for a year or more that cannot get hired because they don’t look like the traditional “tech” employee of the past. Enterprise hiring needs to drop the requirements for “10+ years of programming experience” and start looking for people that have had success in 2 or more disparate industries. People that write well, publish in public and are relentless technical tinkerers. See this paper for a good start: [https://osf.io/preprints/psyarxiv/vbkmt\_v1](https://osf.io/preprints/psyarxiv/vbkmt_v1)

A while back another Google VP posted that he had some success using AI to help solve a car problem. I responded a few hours later with my prototype multimodal app that was meant to help users diagnose car trouble and provide cost estimates. I love cars. I’m also a petrophysicist, mathematician, programmer, mechanical engineer, economist, philosopher and writer. My resume is a terrible fit for the “AI Employee” the companies in WSJ are trying to hire, but people like me are the ones that they REALLY aught to be looking at for the future of their organizations.