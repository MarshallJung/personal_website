---
title: "AGI? Nah…not soon anyway"
slug: "2026-06-20-agi-nah-not-soon-anyway"
date: "2026-06-20"
description: "June 22, 2026"
coverImage: "/images/blog/2026-06-20-agi-nah-not-soon-anyway/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2026-06-20-agi-nah-not-soon-anyway/image-01.png)

June 22, 2026

If you’re a regular reader of this newsletter, you’ve likely come across podcaster and AI intellectual Dwarkesh Patel. He’s an interesting figure I often resonate with, partly because he isn’t selling his “book” when it comes to AI.

[https://youtu.be/4pG3SJQPAwk?si=x\_aEODnl9XvnAo7G](https://youtu.be/4pG3SJQPAwk?si=x_aEODnl9XvnAo7G)

In his recent video (linked above), he argues that today’s AI relies on a massive, compute-intensive “data black hole,” where models need vast amounts of domain-specific data, often millions of times more than a human would, to reach competence in a particular task. For average organizations where specialized (read; non-public) physical, code based, and operational knowledge is paramount, this highlights a critical gap between having “information” and having an AI that functions as a “co-worker.”

The Sample Efficiency Gap: Dwarkesh notes that humans learn complex physical or operational tasks, like operating machinery or dealing with distributor contracting processes, for example, in a fraction of the time it takes to train an AI model. If you want an AI to act as a co-worker, simply dumping data into a model isn’t enough; the model needs to solve the “credit assignment problem” by understanding the *reasoning* behind expert decisions rather than just predicting outputs.

Task-Specific vs. General Knowledge: AI progress currently relies on bespoke human expert trajectories like legal filings, management consulting rubrics, or technical writing. To transform AI from a fancy pants search engine into a co-worker, you would need to capture similar “expert trajectories” for your specific operational workflows, essentially curating high-quality demonstrations of how your best engineers or technicians approach problems.

The “Out-of-Distribution” Problem: While AI excels at mechanical, predictable tasks, it struggles with problems distant from the data distribution. Of course AI can improve quality of life by easing repetitive, boring tasks. But true transformation requires an AI co-worker that can handle unique, on-the-ground scenarios not covered by existing manuals or public data. The future value lies in human-AI complementarity, where AI handles the data-heavy grunt work and humans navigate the unique, out-of-distribution challenges.

Here are three suggestions to help a company position AI strategically and communicate it effectively both internally and to external stakeholders.

1.  Systematically gather expert reasoning: Move beyond just storing documents to storing the train-of-thought and rubrics used by your subject matter experts.
2.  Focus on Task-Specific RL: Use compute to simulate and verify AI actions against your internal standards, treating AI like a trainee that needs to grind through thousands of rollouts per task.
3.  Prioritize Human-in-the-loop: Treat the AI as a force multiplier that automates common tasks to free up humans to focus on the unique, high-value, out-of-distribution problems that currently define high-level engineering and management roles.

### Yea…this is how you get in trouble

![Figure](/images/blog/2026-06-20-agi-nah-not-soon-anyway/image-02.png)

### Visually Appealing

[https://github.com/BuilderIO/skills](https://github.com/BuilderIO/skills)

If you use Claude Code or Codex, you know how valuable plan mode is for clarifying the exact output you want ahead of building something. But long markdown essays in the terminal can be overwhelming.

The GitHub link above provides a skill called ‘/visual-plan’ that generates MDX with interactive visuals: components, diagrams, API specs, schema changes, annotated code, and pan-and-zoom wireframes. It offers a more intuitive way to understand what the agent is doing — especially helpful for visually oriented folks like me.

### Universal Knowledge

[https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)

As frontier foundation models improve, missing context still limits their usefulness, especially in agentic systems. These models can write code, summarize documents, or analyze datasets, but they need the right information to be accurate and actionable.

Google introduced the Open Knowledge Format (OKF), an open specification that formalizes the LLM‑Wiki pattern into a portable, interoperable format. It’s vendor‑neutral, agent and human friendly, and standardizes how to represent the metadata, context, and curated knowledge modern AI systems need.

With OKF, knowledge distilled from enterprise repositories (email backups, chat histories, document repositories, unstructured data extraction, legal filings, and more) can form a traversable, referenceable knowledge graph. This serves as a universal data “ore” for multi‑layer, cross‑team, agentic workflows, while avoiding issues like replication, lack of single‑source, hallucinations, and repetition, which drive frustration and rising costs.

### Finetuning made Easy

About three and a half years ago, I fine-tuned a Llama model to better use the open-source CFD package OpenFOAM. At the time, most current tools didn’t exist, so I did super hacky VM-based retraining of Llama 2 with PEFT on top of an early version Llama.cpp.

But times have changed! The link below provides a step-by-step guide to install and fine-tune Google’s latest open-source model entirely locally. This has strong applications for science-focused work, especially when you have significant proprietary data you want to keep private. Done correctly, you don’t need a frontier model to solve a narrow problem with well-defined data.

[https://x.com/akshay\_pachaar/status/2063610194618396728?s=20](https://x.com/akshay_pachaar/status/2063610194618396728?s=20)

### Learn Anything

[https://www.aihero.dev/learn-anything-with-my-teach-skill](https://www.aihero.dev/learn-anything-with-my-teach-skill)

A common issue with AI is that it can become a crutch, discouraging real learning. People copy and paste prompts and hope the right answer appears. If you don’t clearly understand your prompt — or at least the basics of going from point A to point B — you can’t verify whether the answer is correct.

But you can fight this. AI can also be a great tutor. I’ve shared a link to a skill set you can load into your favorite AI tool to help you learn about any topic. A good first step is to ask your AI to help you learn logic and rhetoric, since they’re essential for asking effective questions.