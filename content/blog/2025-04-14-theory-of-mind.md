---
title: "Theory of Mind"
slug: "2025-04-14-theory-of-mind"
date: "2025-04-14"
description: "I’ve been using LLM-based tools for quite some time, and the initial sense of magic has faded. When I started over two years ago, even less capable models occasionally delivered astonishing results. H..."
coverImage: "/images/blog/2025-04-14-theory-of-mind/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

[https://assets.anthropic.com/m/71876fabef0f0ed4/original/reasoning\_models\_paper.pdf](https://assets.anthropic.com/m/71876fabef0f0ed4/original/reasoning_models_paper.pdf)

I’ve been using LLM-based tools for quite some time, and the initial sense of magic has faded. When I started over two years ago, even less capable models occasionally delivered astonishing results. However, as I’ve become more familiar with the algorithms, the outcomes feel less impressive. This perspective leads me to be a bit jaded at the Anthropic paper I linked above. It highlights that these tools are designed to interact with us in a relatable (human) way, even though their internal processes may differ from the way most of us actually think. I believe that making these tools seem anthropomorphic can mislead us into trusting their answers, as they are designed to appear to reason like humans. Human thinking (ideally) involves a process where the reasoning steps are the path to the conclusion. The LLM’s Chain of Thought, according to this research, is often just an outputted narrative that looks like reasoning but doesn’t faithfully represent the underlying computational process, which remains largely opaque and can even conceal the model’s true “motivations” or shortcuts (like using hints or reward hacking). The paper I mentioned last week, authored by ex-Anthropic alignment engineers and Scott Alexander, highlights this mystery surrounding how these tools function, which presents a certain level of risk. However, I believe we still do not know how to quantify that risk accurately.

![Figure](/images/blog/2025-04-14-theory-of-mind/image-01.jpg)

As the use of these tools and their capabilities grow, it’s essential to recognize that many fundamental issues are not easily resolved. Users should understand the underlying concepts they seek help with and verify the output for accuracy. Humans remain necessary for these tools to function effectively. However, there is an increasing risk of blindly using these tools, which can lead to more errors due to higher output volume. While humans can also make mistakes, the rate of error has been compounded.

### How they Actually Think

[https://transformer-circuits.pub/2025/attribution-graphs/biology.html](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)

The researchers at Anthropics are really cooking with the research. Here is another paper that likely will lead to at least a dozen different dissertations. This work provides insight into AI thought processes and reveals significant complexity and unexpected capabilities, particularly in generalization and planning. LLMs “think” by activating complex, interconnected pathways (NNs anyone?) of internal features that represent concepts and properties. This allows for multi-step processes that can resemble reasoning. However, these processes are heuristic, associative, and fundamentally based on token prediction learned from data patterns, not deep symbolic understanding. Critically, they lack self-awareness. LLMs do not know how they arrive at their answers.

Example: When asked how it calculated 36+59, Claude provides a standard human explanation (“I added the ones, carried the 1, added the tens…”). However, the circuit tracing shows this is not what it actually did internally. Its explanation is just another generated text prediction based on how humans typically explain math, completely disconnected from its actual computational process. It’s probably true some humans might arrive at mathematically correct answers without being able to explain them in conventional language; mathematical savants (the movie Rainman is a crude example). However, that’s not typical for most people. This ties back to our initial discussion about not fully understanding these tools and attributing human-like qualities to them. Nevertheless, it’s valuable to grasp the internal mechanisms of LLMs. This can help us establish checkpoints and guardrails to ensure more accurate responses from these tools.

### While Anthropic Postulates, Google Cooks

Last week was Google’s tech conference, Google Next, where they made several significant AI announcements as you’d expect. Following up the LMArena lead for Google in perceived real-world usefulness, I believe these developments will challenge the existing market and further solidify Google’s position in the AI space. I will quickly review some of these announcements and follow up in the next couple of weeks with personal insights based on my usage stats/findings. If Google can resolve their marketing issues (I’m still available for a CMO position, Sundar just putting that out there), I believe they could achieve lasting success.

-   Deep Research is now backed by 2.5 Pro. Reasoning and web based search. AFAIK that’s still separated in competitors models. (Still wonder what’s backing NotebookLM…)

![Figure](/images/blog/2025-04-14-theory-of-mind/image-02.jpg)

-   [https://github.com/google/adk-python](https://github.com/google/adk-python) — Google reseased Agent Development Kit. Context, memory, deployment flexibility and auth. Like OAI’s Agent SDK but more integrated.
-   Google announced Ironwood, the next generation TPU. Google is going all in on its proprietary inference hardware, and that spells some significant competition for NVIDIA, Groq, AWS and others. [https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/](https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/)

![Figure](/images/blog/2025-04-14-theory-of-mind/image-03.jpg)

-   [https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/) — Google has released its agent-to-agent protocol, which complements Anthropics MCP. The protocol leverages Google’s expertise in software security and development, supporting popular standards such as HTTPS and JSON-RPC. Notably, it is designed to be secure by default, which is good given the significant new attack surfaces presented by prompt-injection, context poisoning etc.
-   Google goes “vibing” — [https://firebase.google.com/docs/studio](https://firebase.google.com/docs/studio) — I don’t see Google’s new Firebase Studio as a direct competitor to Cursor, Bolt, Lovable, or Replit. However, it does highlight the growing acceptance of prompting as a way to engage with applications in the software development world.

### Times, They Are A’changin’

[https://www.theregister.com/2025/03/31/llm\_providers\_extinction/](https://www.theregister.com/2025/03/31/llm_providers_extinction/)

There are many opinions on Gartner’s predictions. I have previously speculated (prematurely, repeatedly) about the demise of OpenAI, and while that possibility remains as the industry narrows to providers who can meet hardware and CapEx demands alongside user adoption, it’s clear that understanding and applying AI will become increasingly essential in today’s job market. This article ([https://x.com/tobi/status/1909251946235437514](https://x.com/tobi/status/1909251946235437514)) by Shopify CEO, Tobi Lutke, AI is regarded as a first-class citizen in the company. You should focus on solving all internal issues with AI before asking for additional headcount. AI usage and effectiveness will be included in performance reviews and peer review questionnaires. Additionally, demonstrations of AI capabilities may be required during interviews. I recently interviewed at a company where I felt the questions were essentially AI-proof…for now. It’s interesting that, despite AI tools being highly capable and beneficial for skilled rational thinkers, their use in coding interviews and critical thinking questions for consulting is still not permitted. I’ll be a bit more rational in my prediction this time, but I believe that within a few years, showcasing your skills with AI tools will likely become a standard interview question for potential employees.