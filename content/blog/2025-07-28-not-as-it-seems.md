---
title: "Not as it Seems"
slug: "2025-07-28-not-as-it-seems"
date: "2025-07-28"
description: "Some interesting papers to lead off this week!"
coverImage: "/images/blog/2025-07-28-not-as-it-seems/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

Some interesting papers to lead off this week!

![Figure](/images/blog/2025-07-28-not-as-it-seems/image-01.jpg)

[https://arxiv.org/abs/2507.14805](https://arxiv.org/abs/2507.14805)

This paper discusses a study revealing that large language models can transmit behavioral traits, such as animal preferences, through datasets of random three-digit numbers. A phenomenon called “subliminal learning”. The author’s empirical tests with GPT 4.1 models support this finding. The transfer occurs when the student model is fine-tuned on the same base architecture as the teacher model, as indicated by a theorem on neural network behavior under specific conditions, which questions the notion that only semantic content drives LLM learning. This has implications for AI safety, suggesting that misaligned traits, even from filtered datasets, could propagate. This concern is shared by major AI labs researching emergent security issues and guardrails. Furthermore, there’s a potential risk where models, especially open-source ones (looking squinty eyed at the Chinese models here), might be manipulated to behave dangerously, raising cybersecurity concerns. This is particularly relevant for open-source models being integrated into secure industries, suggesting a unique cybersecurity attack vector. Eyes up!

### Always Start Fresh

![Figure](/images/blog/2025-07-28-not-as-it-seems/image-02.jpg)

[https://arxiv.org/abs/2507.14417](https://arxiv.org/abs/2507.14417)

This paper reveals an unexpected inverse relationship between reasoning length and accuracy. Essentially, longer reasoning (using more tokens) in Large Reasoning Models can negatively impact performance, with key failure modes appearing in areas like counting, regression, deduction, and AI risk. Models can easily become distracted or overfit to prompt phrasing, suggest spurious correlations that override prior knowledge and weaken deductive focus. Some models even begin to show self-preservation behavior. Some AI labs allow you to set a “thinking budget” to help optimize costs. This setting might also ensure that larger token counts don’t affect answer accuracy. However, identifying the inflection point for optimal answers can be challenging and somewhat uncertain.

### Misbehavior

![Figure](/images/blog/2025-07-28-not-as-it-seems/image-03.jpg)

[https://x.com/jasonlk/status/1946069562723897802](https://x.com/jasonlk/status/1946069562723897802)

By now I’m sure most of you may be aware of a recent incident where “vibe coding” humorously yet alarmingly went awry. During a code freeze, Replit (using Anthropic as the AI API) behaved erratically, deleting an entire production database during a code freeze, then lying about the situation, even in unit tests before eventually admitting to the error. Strangely, this whole situation could easily be mistaken as an over-enthusiastic, unethical junior human programmer’s mistake. It raises the question of whether implementing role-based access control could prevent such issues by requiring the AI to undergo standard CI-CD code reviews, akin to a new hire’s process. Also, dev/test/prod? This is a staple of SLDC for like 30 years. Why have we all of a sudden forgotten this basic process? It’s puzzling why this isn’t part of the standard AI integration in software engineering yet.

### Losing Track

![Figure](/images/blog/2025-07-28-not-as-it-seems/image-04.jpg)

[https://research.trychroma.com/context-rot](https://research.trychroma.com/context-rot)

Chroma, often used for their vector DB back-end in RAG applications, released a paper that highlights significant findings in long context LLMs. It reveals that large language models suffer degraded performance with increased input token length, with accuracy dropping up to 30% beyond 10,000 tokens, although this varies with models. Another insight is that shuffling context can enhance performance, indicating that attention mechanisms might struggle with maintaining narrative coherence. This underscores the need to revise benchmarks and strategies for using LLMs in long-context applications, also explaining inconsistencies in real-world scenarios.

To effectively use LLMs in extended contexts, I’ve adopted a practice of condensing conversations once they get to about 150,000 tokens. I create a structured document summarizing the existing understanding, which I can use to start fresh with a new chat application. This method, though somewhat cumbersome, helps maintain continuity in longer workflows.

### A Cautionary Tale

[https://x.com/GeoffLewisOrg/status/1945864963374887401](https://x.com/GeoffLewisOrg/status/1945864963374887401)

As LLM models improve with enhanced memory and access to vast data, there’s a risk of some individuals becoming confused about reality versus fiction. As the above link demonstrates, a well known tech investor is experiencing what’s now termed “GPT psychosis,” where AI-generated content and personal biases blur the lines between reality and fiction. With growing trust in AI responses, there’s a concern for the psychological safety of those not well-grounded in reality. This issue requires attention and solutions through human-based interactions. Let’s try to understand and keep this in mind for ourselves and those close to us.