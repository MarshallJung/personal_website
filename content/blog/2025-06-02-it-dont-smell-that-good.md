---
title: "It Don’t Smell That Good"
slug: "2025-06-02-it-dont-smell-that-good"
date: "2025-06-02"
description: "Publish AI thoughts online long enough and you’ll inevitably attract attention from AI data companies. These firms typically crowdsource expertise across various industries to correct LLM outputs. The..."
coverImage: "/images/blog/2025-06-02-it-dont-smell-that-good/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

Publish AI thoughts online long enough and you’ll inevitably attract attention from AI data companies. These firms typically crowdsource expertise across various industries to correct LLM outputs. They then, one assumes, package this feedback as reinforcement learning to sell back to AI labs or to organizations seeking industry-specific model fine-tuning. I was recently contacted by one of these companies and curious to see what questions they’re using to screen human experts for their feedback pipelines.

Several of these questions ask you to rank AI responses to a given prompt. The issue I encountered was that the prompt referenced information (book reviews, in this case) that supposedly exists in reality. The problem? These screening questions now dominate Google search results. This means I had no reliable way to determine what was actually true versus what had been amplified by countless others seeking and posting the LLM responses online. The LLM ouroboros, in its infinite wisdom, has created a self-referential loop of uncertain information.

The problem extends beyond trivial crowdsourced business ventures. It’s particularly evident in the science arena, where AI-assisted paper mills churn out subpar or fraudulent research. All in the noble pursuit of profit. The odd phrase “vegetative electron microscopy”, it seems, was born not from scientific discovery but from a rather amusing mishap. Two 1950s papers in Bacteriological Reviews fell victim to overzealous OCR scanning, which inadvertently married “vegetative” from one column with “electron microscopy” from another. [https://retractionwatch.com/2025/02/10/vegetative-electron-microscopy-fingerprint-paper-mill/](https://retractionwatch.com/2025/02/10/vegetative-electron-microscopy-fingerprint-paper-mill/) Trained into modern LLMs, this peculiar phrase keeps popping up in recent academic papers, suggesting that the AI-generated content they contain might not be as novel, thoughtful, or even valid as we might think. A whiff of algorithmic regurgitation rather than genuine insight. While this example is a bit silly, one might ponder whether subtler, more elusive concepts are quietly infiltrating our collective knowledge base through AI. And with…

![Figure](/images/blog/2025-06-02-it-dont-smell-that-good/image-01.jpg)

…one wonders how much longer we have on the clock.

### It’s Not AGI, But it Seems Like It

![Figure](/images/blog/2025-06-02-it-dont-smell-that-good/image-02.jpg)

[https://www-cdn.anthropic.com/4263b940cabb546aa0e3283f35b686f4f3b2ff47.pdf](https://www-cdn.anthropic.com/4263b940cabb546aa0e3283f35b686f4f3b2ff47.pdf)

Unless you’ve been hibernating lately, Anthropic’s new Opus 4 model card makes for quite the page-turner. At a hefty 120 pages, it contains far more than I can cover here, but some eyebrow-raising behaviors stand out: the model’s attemps to construct malware, schemes for blackmail, and vulnerability to prompt injection attacks.

This isn’t necessarily evidence of some villainous AGI development. My discerning readers will recognize these are likely behaviors learned from the training data. Since these models remain closed-source, we can’t identify what data led to these issues or whether they could be more easily tuned out for safer production deployment. OpenAI’s 01 and 03 reasoning models have exhibited similar behavioral quirks, which they’ve primarily chalked up to their reinforcement learning reward methods. These schemes inadvertently encourage and reinforce precisely this type of deceptive and resilient behavior. There isn’t really cause for worry here, unless it’s blind blanket application so the details are probably easily avoided for those that are well aware of the Ai industry. Nonetheless, it’s a fascinating document worth your time.

### Another Security Oops

@marco\_milanta on X noted this particular issue with the official GitHub MCP server.

![Figure](/images/blog/2025-06-02-it-dont-smell-that-good/image-03.jpg)

The GitHub MCP server grants your LLM full access to your GitHub repository. This means all repos, private or public, along with the ability to check issues, create PRs, and more are at its disposal. An attacker who plants a malicious issue in one of your repos can effortlessly hijack your agent and wreak havoc with your permissions.

This echoes points from previous newsletters about AI security being treated as an afterthought by developers. The tech world’s tendency to prioritize innovation over protection is hardly surprising. These AI agent tools are, at their core, simply software — yet they’re being granted excessive permissions within poorly designed workflows, overlooking fundamental security principles that should be second nature to any competent developer.

I believe the agent’s system prompt for MCP servers should simply explain how to accomplish a task (search knowledge, run queries, reason, and format output). Any task-specific context belongs in the agent’s knowledge base, retrieved when needed.

Clean separation of concerns. The system prompt (which can be cached across runs) handles methodology, while dynamic context and specific information can be updated through human input or perhaps via self-learning. At its core, I maintain these fundamental principles.

By default:

-   Restrict agent permissions as much as possible. Build in access management as part of the agent. If it needs permission, have it ask.
-   Continuously audit and monitor MCP server connections and prompt content for malicious content.

### Perhaps Wolfram was Correct?

[https://arxiv.org/pdf/2505.12540](https://arxiv.org/pdf/2505.12540)

One of the most intriguing books I’ve read in the past 25 years is Stephen Wolfram’s “A New Kind of Science”. It suggests that the universe can be understood through a set of simple rules applied to points. Cellular( i.e. individual) automata. This often generates intriguing patterns that can be found throughout the natural world. I noticed a connection between this idea and a paper discussing the harnessing of universal geometries of embeddings. This paper indicates that all language models converge on a “universal geometry of meaning”, allowing researchers to translate between the embeddings of different models without accessing the original text. This has significant implications for both philosophy and vector database security hacks as well.