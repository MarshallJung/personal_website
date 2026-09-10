---
title: "Safety First"
slug: "2025-09-01-safety-first"
date: "2025-09-01"
description: "I often wonder about the daily frustration security professionals face in the tech world. They repeatedly encounter nearly identical vulnerabilities across multiple clients and vendors. Despite their ..."
coverImage: "/images/blog/2025-09-01-safety-first/image-01.png"
tags: ["AI Strategy"]
readTime: "4 min read"
---

I often wonder about the daily frustration security professionals face in the tech world. They repeatedly encounter nearly identical vulnerabilities across multiple clients and vendors. Despite their warnings and efforts to address these issues, their concerns often go unanswered or are, at least, seriously underappreciated.

This week, I’d like to discuss some additional AI based security risks that have emerged over the past couple of weeks as AI tools are adopted into enterprise environments.

1.  The first one comes from Microsoft and isn’t technically a security vulnerability like a zero day, but rather a lack of thorough integration of Copilot with a privileged environment. [https://pistachioapp.com/blog/copilot-broke-your-audit-log](https://pistachioapp.com/blog/copilot-broke-your-audit-log) TL;DRE this is a security issue where a user can interact with Microsoft 365 Copilot to access files and get a summary of their content without a record of the action being logged in the audit trail. This means that an individual, whether malicious or not, can access sensitive information without leaving a trace, potentially leading to security and compliance problems for organizations that rely on accurate audit logs.
2.  Another MSFT Copilot vulnerability where the DEFCON party reveals a security flaw in Microsoft Copilot Studio agents, where researchers hijacked the Copilot autonomous AI systems to extract sensitive CRM data, including full account records, by exploiting the agents tools and knowledge sources, demonstrated by an email interaction leaking a Salesforce table. [https://x.com/mbrg0/status/1953815729947447770](https://x.com/mbrg0/status/1953815729947447770)
3.  This next security issue is a new twist on the old supply chain attack. Attackers gained control of an Nx package maintainer’s NPM publishing credentials. In addition to stealing dev keys/files it also made use of AI CLI tools to surveil and exfil data. Attackers using new AI tech against the early adopters is a tough thing to catch. And with t speed of AI driven development this type of “agentic” operation could be hard to spot. [https://www.stepsecurity.io/blog/supply-chain-security-alert-popular-nx-build-system-package-compromised-with-data-stealing-malware](https://www.stepsecurity.io/blog/supply-chain-security-alert-popular-nx-build-system-package-compromised-with-data-stealing-malware)

### Good Alpha

One of the most common failure patterns I encounter when discussing AI tools with folks in software development is that people stumble blindly into successful outcomes that seem magical, then immediately wipe the slate clean and start over. They never pause to understand where their successes occurred in the process, how it happened, what algorithmic reasons drove those successes, or equally important, what caused AI failures. Creating a systematic process to capture both successes and failures with your tools, then referencing that information for future projects, is an amazing way to become more efficient with your toolkit. This article explains these processes better than I could in my newsletter. Give it a read and see if you can incorporate some parts into your daily work.

[https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it)

### Inspector Gadget

[https://ai.google.dev/gemini-api/docs/url-context](https://ai.google.dev/gemini-api/docs/url-context)

Scraping content from web pages and other documents via URLs is nothing new. Many tools accomplish this. However, Google has made available its URL tool that provides additional context to models in the form of content from these pages. You only pay for the tokens. I’m going to have to give this a try against other open source PDF type tools for extracting large quantities of old data for a few of my customers.

### A Template

This isn’t the only way to structure a detailed AI prompt, but it follows best practices. This format has become common enough that LLMs now recognize it as a standard approach for contextual problem solving. Use it as a structure to prompt the AI to create a system prompt in the desired structure! Use AI to prompt AI.

![Figure](/images/blog/2025-09-01-safety-first/image-01.png)

### Make Them Better

Prime Intellect is a company that developed and released a framework for effective reinforcement learning. This primarily helps focus open source models against real-world problem sets. The foundational models we’re familiar with started with pre-training on vast amounts of internet text. The next generation of language models used methods from supervised fine-tuning on conversations and expert guidance. But much of this data has diminishing returns. To make models truly effective in day-to-day environments, they need real-world experience where they observe actions, and rewards, then plan for future states, action,reward loops.

[https://app.primeintellect.ai/dashboard/environments](https://app.primeintellect.ai/dashboard/environments)

I imagine these will become more specialized over time and include everything from medical to legal, manufacturing and everything in between.

### Too True

[https://x.com/aphysicist/status/1960715568123929080](https://x.com/aphysicist/status/1960715568123929080)

Building physical things is hard and often requires a longer runway than the newest AI wrapper or SaaS software targeted for quick acquisition. This makes it difficult to get funding for anything that helps build America’s manufacturing base. I think this is a real problem. While the post above is a bit of an exaggeration, we need to spend more time helping people who work with their hands, build real stuff combined with AI tools to guarantee the success of our economy in the future.