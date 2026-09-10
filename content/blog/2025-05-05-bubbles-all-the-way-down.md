---
title: "Bubbles All the Way Down"
slug: "2025-05-05-bubbles-all-the-way-down"
date: "2025-05-05"
description: "Just the other day I was having a really in-depth conversation about an AI app that is meant to serve a group of folks that most people would think are not a target audience for AI. It was very intere..."
coverImage: "/images/blog/2025-05-05-bubbles-all-the-way-down/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

Just the other day I was having a really in-depth conversation about an AI app that is meant to serve a group of folks that most people would think are not a target audience for AI. It was very interesting for two reasons. One, listening to the stories of how magic these future customers found the app reminds me that AI can actually be really helpful and inspiring. Too often I run into the limitations and failures of AI in my day-to-day, that I forget that most applications that could bring joy and productivity lie not on the bleeding edge of the tool’s capabilities, but in the meat of the curve. There are great applications for AI today that don’t need the most capable frontier models and don’t require massive amounts of carefully curated data and infrastructure.  
Second, I am reminded that I live in an AI bubble. A bubble on top of a bubble even. What I take for granted as old news and AI applications have not even reached the early adopters, let alone been evaluated and PoC’d into everyday enterprise tech stacks. Sure, a lot of the EA MSFT crowd have had Co-pilot thrust upon them, but aside from spiffing up emails and answering some very basic FAQ’s most employees have no idea what capabilities LLMs possess. Ther is a chance that most companies have nerfed versions or have declined deeper integrations due to security or compliance concerns, but I think an equally valid reason is that the employees are not aware of how to use the tools. There is a ton of education that needs to happen to really revolutionize the modern workforce. We are still a few years away from AI being “old-hat” for most folks.  
But I will be here, educating and evangelizing! So feel free to give me some topics that you, the reader, would like to see answered.

### Agents, Agents Everywhere

This 190-page paper ([https://arxiv.org/pdf/2504.01990](https://arxiv.org/pdf/2504.01990)) serves as a solid summary of the current state of agents, rather than a deeply researched scientific proposal. Given the rapid pace of AI development, its relevance may diminish quickly, but it contains many valuable insights. Given the number of references, this resource also offers a valuable starting point for researching how agents should be structured and how they currently operate, allowing you to build upon this effort. Here are a couple key points.

The definition of an AI agent is often unclear in many discussions. This is a useful starting point for clarifying how an AI agent interacts with its environment and how to consider its internal functions.

![Figure](/images/blog/2025-05-05-bubbles-all-the-way-down/image-01.jpg)

You can already build very complex agentic systems today, but the next frontier is agents that take actions and make decisions in the real world. We need better tooling, better training algos, and robust operation in different action spaces.

![Figure](/images/blog/2025-05-05-bubbles-all-the-way-down/image-02.jpg)

It’s a fun paper to read if you have some spare time. If not, you can load the PDF into your favorite LLM and start asking detailed research questions.

### RL is not a Panacea

[https://arxiv.org/abs/2504.13837](https://arxiv.org/abs/2504.13837)

This paper suggests that sophisticated reward loops in reinforcement learning tend to reinforce the same reasoning patterns already known by the base model. While initial pass accuracy increases, the model’s understanding becomes narrower. It’s like training for a multiple-choice test by only memorizing answers without understanding the underlying concepts. Perhaps the focus shouldn’t solely be on developing better agents but rather on improving data selection. We’ve been pushing these models to overcome larger challenges while misinterpreting overfitting as genuine insight. This situation raises the question of whether we’re repeating the common machine learning error of overfitting data.

### Open Codex

OpenAI has released its open-source Codex tool, a shift for many AI companies/labs towards closer integration with end-users’ command line interfaces. This move may help recapture AI IDE users from companies focused on wrapping foundational models. This GitHub repository is a fork of the original AI Codex, enabling you to run various models, including Google’s Gemini and open-source models through Ollama.

[https://github.com/ymichael/open-codex](https://github.com/ymichael/open-codex)

This push towards open integration with any foundation model suggests that wrapper companies may struggle to survive in the future. It also raises interesting business concepts for AI labs, particularly regarding how they can monetize API usage in a landscape where users favor open tools and have flexible model choices based on their specific tasks.

### Old School with a New Twist

[https://developers.googleblog.com/en/data-science-agent-in-colab-with-gemini/](https://developers.googleblog.com/en/data-science-agent-in-colab-with-gemini/)

I’ve mentioned this in my newsletter before (probably more than once), but Google’s AI Data Colab tool is a fantastic application for data science. While AI can be defined as data science with some mathematics, this tool enables users to explore large datasets quickly, even without extensive Python programming experience. It truly democratizes data exploration for nearly everyone. I uploaded a significant amount of data from my race car and quickly explored and visualized some interesting results related to the engine control parameters. Please give it a try!

### Some Spicy Shorts

*Microsoft and Meta Throw Cash at AI Like It’s Confetti:* Microsoft is flexing with an $80 billion budget for AI data centers, tossing over half of it at the U.S. market like a tech sugar daddy. Not to be outdone, Meta’s jacked up its 2025 spending forecast to $64–72 billion, all to juice up its AI game. I find both investments intriguing. Microsoft has recently pulled back from many AI projects due to potential infrastructure issues, making its reversal noteworthy. Similarly, the lukewarm reception of Meta’s Llama 4 model raises questions about the return on investment for the billions that Zuckerberg is spending.

*AI Cash Flood — with a Twist:* AI startups swam in a $73 billion cash pool in Q1 2025, but OpenAI snagged a whopping $40 billion of it in one SoftBank-led round. That’s right, over half the haul went to one player. There are still many opportunities to fund your small AI startup, but I find it challenging to see how OpenAI will provide a serious return on investment in this space unless their timeline extends over several decades. Alternatively, perhaps I’m not aware of some upcoming developments, which is always possible.