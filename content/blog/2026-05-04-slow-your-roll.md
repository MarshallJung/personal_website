---
title: "Slow Your Roll"
slug: "2026-05-04-slow-your-roll"
date: "2026-05-04"
description: "Aaron, Box’s CEO, is a prominent voice in tech and AI, and I agree with his post in principle. But this kind of enthusiasm, especially the idea of a forward-deployed engineer wiring agents into system..."
coverImage: "/images/blog/2026-05-04-slow-your-roll/image-01.png"
tags: ["AI Strategy"]
readTime: "4 min read"
---

![Figure](/images/blog/2026-05-04-slow-your-roll/image-01.png)

[https://x.com/levie/status/2049714403050918067?s=20](https://x.com/levie/status/2049714403050918067?s=20)

![Figure](/images/blog/2026-05-04-slow-your-roll/image-02.png)

Aaron, Box’s CEO, is a prominent voice in tech and AI, and I agree with his post in principle. But this kind of enthusiasm, especially the idea of a forward-deployed engineer wiring agents into systems of record, often comes from the leading edge of AI. In most legacy enterprises, that role will hit ownership silos, operational concerns, security blockades, and internal politics. While adoption will vary, I expect the average legacy enterprise won’t see meaningful success from this model for at least two to five years.

Companies that want to lead, not sit with the average, need strong executive ownership to drive the AI transformation. This can’t be a bottom-up effort; too many stakeholders in a typical enterprise are invested in existing processes to make change at that level effective.

### The Chase Continues

[https://chatgpt.com/codex/for-work/](https://chatgpt.com/codex/for-work/)

In my personal work and across many startups I know, Claude Co-work has been the go-to productivity tool for business processes. Hardcore engineers still prefer CLI-based environments, which makes sense for those workflows. But if you’re overhauling a business or data pipeline, especially for management and decision making, Claude Co-work has been the best fit.

Last week, OpenAI released Codex for Work, essentially responding to Anthropic. Google also consolidated AI Studio and Vertex under Gemini Enterprise for a similar look and feel. It’s clear the major players are racing to match each other’s LLM usability features. Most people (and much of AI’s target market) aren’t engineers, and many don’t want a CLI. These interfaces are more useful for the average knowledge worker.

Whether this UI direction is permanent remains to be seen, but the push for feature parity is obvious. I haven’t tried the new Codex yet, but I plan to soon and will share feedback with readers.

Productivity tools from the more complex AI harnesses are reaching everyday users, and some of these Codex’s capabilities are now in browser-based ChatGPT.

[https://openai.com/index/introducing-workspace-agents-in-chatgpt/](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)

The key sticking point here isn’t just the features, it’s the need for ChatGPT to integrate with your organization’s SaaS tools. Fundamental capabilities don’t matter if they can’t connect to your productivity stack: email, calendar, Jira issues, or your Salesforce system of record.

This is where it gets real. These integrations often face security requirements enforced by people incentivized to say no. In a typical enterprise, that significantly limits what these tools can achieve for motivated employees.

### Fine Tuning for the Rest of Us

[https://x.com/Mayank\_022/status/2046646301555900828?s=20](https://x.com/Mayank_022/status/2046646301555900828?s=20)

Fine-tuning open-source models for unique enterprise applications will only grow in importance. The Hugging Face research team recently open-sourced the same research loop they use daily: you provide a prompt, it searches papers, follows citations, tests ideas in GPU sandboxes, and iterates to produce a deep research-backed models for any use case.

It runs on their cloud platform or on local GPUs if available. I’m not certain it supports proprietary datasets, but that capability likely exists or is easy to add. If so, there are compelling applications for teams with strong in-house data, offering a meaningful competitive advantage.

CLI: [https://github.com/huggingface/ml-intern/tree/main](https://github.com/huggingface/ml-intern/tree/main)

Web + mobile: [https://huggingface.co/spaces/smolagents/ml-intern](https://huggingface.co/spaces/smolagents/ml-intern)

### Good tutorial

Using an LLM for daily tasks can feel repetitive when you restart each day with the same structure and background knowledge. This tutorial shows how to build a basic personal knowledge layer that acts as a context window for handling repetitive and evolving work.

The key is identifying the specific queries your knowledge base must answer. Apply creativity and forethought to keep the scope focused; an overly broad knowledge base can produce oddly shaped embeddings and reduce query accuracy.

[https://academy.dair.ai/blog/how-to-build-an-llm-knowledge-base](https://academy.dair.ai/blog/how-to-build-an-llm-knowledge-base)

### Privacy Models

It was not on my bingo card, but OpenAI releasing a 1.5B-parameter open-weights model focused on preventing PII leakage in LLM interactions is a tremendous effort. This bidirectional model, pre-trained for high-throughput data sanitation, would be especially useful in medical and legal contexts. It could also serve as a pass-through filter to ensure employee information doesn’t leak via LLM interactions, email, or external chats.

[https://github.com/openai/privacy-filter](https://github.com/openai/privacy-filter)