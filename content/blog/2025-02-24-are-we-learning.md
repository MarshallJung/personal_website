---
title: "Are we learning?"
slug: "2025-02-24-are-we-learning"
date: "2025-02-24"
description: "I’m following up on our discussion about AI in education from last week. I found an article that raises some additional questions for me. Used properly, AI is a great way to understand new and unique ..."
coverImage: "/images/blog/2025-02-24-are-we-learning/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

[https://nmn.gl/blog/ai-and-learning](https://nmn.gl/blog/ai-and-learning)

I’m following up on our discussion about AI in education from last week. I found an article that raises some additional questions for me. Used properly, AI is a great way to understand new and unique ideas. However, it often serves as a quick and easy solution for completing tasks. I understand that in some situations this is acceptable, as AI is meant to be an efficiency tool. Where is the line between a tool that enhances efficiency and one that hinders our learning? Sometimes, I believe people need to struggle with a problem to truly understand it.

![Figure](/images/blog/2025-02-24-are-we-learning/image-01.jpg)

I’m facing a challenging situation because I’m not a strong coder, so I lean on it a lot. But does this hinder my getting better?. I often view AI as a leaky abstraction in coding, meaning it doesn’t fully conceal the underlying complexity. Consider this: Python acts as an abstraction layer over C++, eliminating the need for memory management. This makes it deterministic, allowing us to avoid memory-related concerns. But if Python programs were to fail randomly due to memory issues, the abstraction wouldn’t be very useful. This is similar to LLMs today. While they can accomplish a lot, most software developers recognize that there’s a limit to codebase complexity the tools can consume. After a certain point, performance declines, and it’s essential to understand the code to identify the underlying issues. I guess I look forward to the future books, “How to Refactor AI Codebases” and “Debugging AI Generated Software: A Dummies Guide”

### Grokked

Grok 3 was released about a week ago, and in my last newsletter, I mentioned I would provide an update on its performance. This release is the first significant test of scaling foundational pre-training, and so far, it shows promising advancements. Grok 3 appears to pass both the LMSYS tournament vibe check and outperforms many benchmarks. It was surprising to find that it includes a reasoning function and its own version of deep search, which can be compared to OpenAI and Gemini’s deep research functions. Andrej Karpathy believes ([https://x.com/karpathy/status/1891720635363254772](https://x.com/karpathy/status/1891720635363254772)) it’s close to the state of the art compared to OpenAI’s O1 Pro. At $200 a month, O1 Pro’s pricing stands in contrast to Grok 3, which is free. Overall, I believe there’s not much to change regarding consensus projections on AI. Development is still accelerating, and speed remains a competitive advantage. Compute power is essential, and there isn’t a clear secret sauce for creating a frontier model if you have the talent and access to the necessary chips. As an enthusiastic AI user, I’m excited to see new frontier models released, as they often inspire other labs to develop competitive iterations.

### Trouble in Paradise?

[https://x.com/dwarkesh\_sp/status/1892245713452741059](https://x.com/dwarkesh_sp/status/1892245713452741059)

Check out this interesting podcast featuring Satya from Microsoft. It seems that Microsoft is cautious about AGI, concerned about over-investment, and their partnership with OpenAI may be in jeopardy. Sataya is addressing concerns about the bubble in AI build-out. He’s disappointed with the OpenAI partnership and dislikes discussions about model benchmarks. To him, achieving 10% global growth with AI is essential; otherwise, it feels meaningless. Additionally, he appears to be distancing Microsoft from the capex situation. A more cynical interpretation is that they overspent and are now worried about struggling AI revenues, realized OpenAI is a bit shady and meanwhile, the Chinese have easily replicated their product with significantly less investment through DeepSeek R1. I am typically early in the adoption curve, but it appears we may be truly entering the trough of despair. Sataya is a clever player and has proven effective in the AI space, so watch this space.

### Also MSFT

[https://news.microsoft.com/source/features/ai/microsofts-majorana-1-chip-carves-new-path-for-quantum-computing/](https://news.microsoft.com/source/features/ai/microsofts-majorana-1-chip-carves-new-path-for-quantum-computing/)

![Figure](/images/blog/2025-02-24-are-we-learning/image-02.jpg)

Soooo, Microsoft seems to be withdrawing from AI investments while simultaneously investing heavily and achieving breakthroughs in quantum computing. Satya’s public release of this news seemed odd. They claim to have discovered an entirely new state of matter, but the tone of their announcement feels somewhat suspicious. The quote. “Most of us grew up learning there are three main types of matter that matter: solid, liquid, and gas. Today, that changed. After a nearly 20 year pursuit, we’ve created an entirely new state of matter, unlocked by a new class of materials, topoconductors, that enable a fundamental leap in computing.” This has no real backing in physics that I can tell. Solid, liquid, and gas, are states of matter, not types. And he’s missing 2 more; “plasma” and “Bose-Einstein Condensates” (BEC). This should be common knowledge to anyone with a basic science education. “Topoconductors” would make six (6), and it sounds like a scam.

I haven’t seen much news about Microsoft’s quantum computing breakthrough aside from their announcement. However, if their claims are accurate, each qubit measures 1/100th of a millimeter, and they now have a clear path to a million-qubit processor. There are still super-cold requirements, so there won’t be data centers filled with these, but even if it’s only a few hundred, well…that is game changing.

### The Goog’s Breakthrough

[https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/)

I believe we’re beginning to see what AI’s impact on science will look like. This Google paper highlights new discoveries made by AI collaborating with human co-scientists, which many of us have been eager to see. Having an infinitely patient research assistant to help debate and refine hypothesis generation allows individual scientists to have a much greater impact in their fields. BAck in October of last year I wrote about a paper where GPT-4 outperforms doctors in making diagnoses, even surpassing the accuracy of doctors using GPT-4. I’m unsure if the same will apply to the Google paper. In specialized fields, where LLM data may be limited, a research assistant powered by LLM can effectively help collate, remember, and enhance a scientist’s work, maybe driving advancements. So I’m glass half full on this one.

The turn tables

![Figure](/images/blog/2025-02-24-are-we-learning/image-03.jpg)

![Figure](/images/blog/2025-02-24-are-we-learning/image-04.jpg)

Klarna is the company that fully embraced AI to replace customer support, boasting about cost savings across social media. Many predicted this would signal the end of call centers and traditional customer support. Klarna also claimed to be replacing several costly SaaS systems with their own AI solutions, but they never provided proof of these systems functioning in production, yet many people believed them. Sometimes, companies realize that while technology is important, human interaction is also essential. In certain situations, person-to-person connections are necessary to drive value in a customer-facing business.

### The Language of Life

Arc Institute and NVIDIA have published EVO-2, the largest AI model for biology, trained on 9.3 trillion DNA base pairs across the entire tree of life. Properly understood, DNA sequences form meaningful combinations, making it the language of life.

[https://arcinstitute.org/manuscripts/Evo2](https://arcinstitute.org/manuscripts/Evo2)

You can think of this as a DNA-focused LLM. Instead of generating text, it creates genomic sequences, reading and interpreting complex DNA, including non-coding regions typically seen as junk. It generates entire chromosomes and new genomes while predicting disease-causing mutations, even those not yet understood. This represents a shift from merely describing biology to designing life, enabling the engineering of synthetic life from scratch and offering the potential for tailored genetic therapies to address diseases like cancer. It also shares a distinct similarity with the beginning of I Am Legend starring Will Smith, so it could go either way.

### But the LLM needs to have the data

[https://arxiv.org/abs/2404.04125](https://arxiv.org/abs/2404.04125)

When teaching people to use LLMs effectively, I emphasize that understanding the LLM’s capabilities is crucial. This awareness can prevent difficulties when prompting, as they may recognize that highly specialized questions may not be covered in the training set. With proper prompting, users can guide the LLM to provide unique and helpful answers, viewing it more as a system for exploration than just a query and answer machine. This paper from April of last year reminds me of the adage: the more esoteric the domain, the worse the performance. I believe this is a rule of thumb everyone should consider.