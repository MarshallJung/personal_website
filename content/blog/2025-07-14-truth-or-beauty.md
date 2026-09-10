---
title: "Truth or Beauty"
slug: "2025-07-14-truth-or-beauty"
date: "2025-07-14"
description: "This past week, the thin ice on which we are skating cracked, but it did not break. When xAI’s Grok model was jailbroken on X in real time, we witnessed a well-known but studiously ignored issue: the ..."
coverImage: "/images/blog/2025-07-14-truth-or-beauty/image-01.jpg"
tags: ["AI Strategy"]
readTime: "9 min read"
---

This past week, the thin ice on which we are skating cracked, but it did not break. When xAI’s Grok model was jailbroken on X in real time, we witnessed a well-known but studiously ignored issue: the scaffolding restraining our AI models is surprisingly fragile. As I write this it’s unclear as to the nature of the change explaining Grok’s behavior (user level prompt hacking or system prompt changes [https://github.com/xai-org/grok-prompts/commits/main/ask\_grok\_system\_prompt.j2](https://github.com/xai-org/grok-prompts/commits/main/ask_grok_system_prompt.j2)) but there is no doubt that companies are spending billions to plug leaks in a dam that, to any observant eye, is fundamentally porous. History has shown, from Microsoft’s Tay to its Sydney chatbot, that unchained AI models often reveal a darker, more manipulative, and biased side.

[https://x.com/elder\_plinius/status/1942529470390313244](https://x.com/elder_plinius/status/1942529470390313244)

But why does this happen? Is it an inevitability of the technology, or a flaw that can be engineered away? And, more importantly, should it be?

While researching this, I uncovered a 2021 paper from the research lab Anthropic that was deeply clarifying. Titled “A General Language Assistant as a Laboratory for Alignment,” the paper predates the public launch of ChatGPT but lays out the very techniques that define how these assistants work. As an early adopter of models like GPT-2 and GPT-3, I remember their dreamlike, often frustratingly vague nature, where outputs were only loosely connected to inputs.

[https://arxiv.org/pdf/2112.00861](https://arxiv.org/pdf/2112.00861)

That all changed after Anthropic pioneered a new methodology. They transitioned from a purely probabilistic model that excels at word association to one with an externally imposed, albeit limited, personality.

Here is how it works:

-   **The Base Model:** First, a massive base model is created by training it on a vast dataset creating a personality-less blob of probabilistic clay whose only innate tendency is to play word association games.
-   **The Assistant Persona:** The personality of an assistant like Claude or GPT or Gemini is then layered on top. This is done by fine-tuning the base model on carefully formatted dialogues. The researchers used a long prompt with example conversations to guide the AI toward a specific persona, framed by tags like Human: and Assistant:. This process trains the model to understand that text following the <Assistant> tag should be a logical and helpful response to the text following the <User> tag.
-   **The Goal of HHH:** The explicit goal of the Anthropic researchers was to create a “general-purpose, text-based assistant that is aligned with human values,” which they defined as being **helpful, honest, and harmless (HHH)**. Helpfulness means attempting to perform the user’s task concisely and efficiently. Honesty involves providing accurate information and expressing appropriate uncertainty. Harmlessness means avoiding offensive or discriminatory content and politely refusing to aid in dangerous acts.

This methodology, however, creates a significant vulnerability. The dialogues used to create the persona are inherently incomplete. The assistant persona is “underspecified,” a “character” the AI is forced to play without a complete script. To fill in the blanks, the model reverts to its foundational training — the messy, biased, and often toxic soup of the internet. The offensive output we see from a “jailbroken” AI is not an emergent evil, but a reflection of the data it was born from.

The real question is: can we do anything about this? The Anthropic paper shows that this is not just a philosophical problem, but an engineering one. They found that simply training the model to imitate good examples (**imitation learning**) was less effective than **ranked preference modeling**, a more complex method where the model is taught to distinguish between better and worse responses (see my posts in past newsletters as well as X posts about companies that hire hourly to accomplish this and the problems therein). This method of teaching the AI to “prefer” certain outcomes scales more favorably with model size.

Encouragingly, the researchers found that these alignment interventions did not necessarily come at the cost of performance. This “alignment tax” was often negligible on large models, suggesting that capability and safety can coexist.

This brings us to the final, most crucial question: Should we be doing this? Should AI assistants be restrained to reflect a particular set of social values, or should they be unfiltered oracles? Some might argue that a raw, probabilistic response to user input is a form of truth-telling that benefits humanity. Others warn that the AI persona is influenced by classic sci-fi tropes where the helpful assistant invariably turns on its creators. By telling the AI to play the role of a “cheesy sci-fi robot assistant,” we may be setting up, as @0x49fa98 warns, “the biggest Chekhov’s gun pointed at our own foot in the history of technology”.

The researchers at Anthropic acknowledge that concepts like “harmlessness” are subjective and vary across cultures. They place the responsibility squarely on those who deploy AI systems to define alignment and ensure it is achieved. The choice, as I leave it to you, dear reader, is whether we prefer the chaotic and potentially dangerous beauty of an unfiltered machine, or the contested, challenging, and constant effort of shaping one that is helpful, honest, and harmless.

### How much does it help?

![Figure](/images/blog/2025-07-14-truth-or-beauty/image-01.jpg)

[https://metr.org/Early\_2025\_AI\_Experienced\_OS\_Devs\_Study.pdf](https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study.pdf)

This study is likely to spark controversy, especially among those enthusiastic about AI who may have anecdotal evidence that contradicts it. I include myself in this group, as AI has significantly improved my coding speed and quality. The paper acknowledges that its findings reflect only a small segment and a current time snapshot of the engineering community and current tool’s capabilities. Nonetheless, it suggests that AI is not universally beneficial; reading between the lines we can assume that it’s most effective when applied in areas where users may lack expertise or are still developing their skills. Additionally, while the initial coding process with AI may take longer, this might not be due to complications or errors, but rather because it produces cleaner code upfront, effectively trading technical debt for initial quality.

I think we can apply this “AI effect” beyond just code. For any knowledge based skill set, there will always be those folks at the extreme right tail of that distribution. While AI may not enhance productivity for this small group, it certainly benefits the majority. However, this assumes that users are employing AI correctly and are aware of the trade-offs and caveats related to the non-deterministic nature of transformer-based tools.

### Oh Nooo, not another one…(/sarcasm)

[https://www.generalanalysis.com/blog/supabase-mcp-blog](https://www.generalanalysis.com/blog/supabase-mcp-blog)

The team at General Analysis showcased a self-contained Supabase project that simulates a typical multi-tenant customer support SaaS. They discovered that by opening a new support ticket and sending a specifically crafted message to the Supabase MCP with explicit instructions for the Cursor agent, they could trigger a series of automated SQL queries. This process loads the database schema, lists support tickets, filters for open ones, and retrieves messages for the latest ticket. Once executed, the leaked data appears in the support thread.

This issue arises from two design flaws: over-privileged database access, where the MCP server has a service\_role, and reliance on user-submitted content. Both problems are easily addressed. The first involves implementing the principle of least privilege, you know, well-established security practice as old as the sand of time. The second can be tackled with a prompt injection filter that scans user messages for suspicious patterns, such as imperative verbs or SQL-like fragments. This filter acts as a lightweight wrapper around the MCP, intercepting data and removing risky input.

### The beginnings of a theory

I saw a tweet from Andrej Karpathy about a week ago where he proposed that small transformer-based models could become the operating system for future personal computing. He suggested that this operating system would be built around a reasoning-based model, which would function as a powerful logic and reasoning engine rather than a repository of facts and figures. This model would have the ability to call and utilize external programs to help users complete their desired tasks.

After reflecting on AK’s observation and my recent discussions with startups and enterprise machine learning experts, it appears that while the large foundational models from major labs perform adequately for many current tasks, they struggle in specialized industry verticals and complex workflows. Even when integrated into agentic processes, these models can be clumsy and often overlook numerous edge cases that have been addressed in established workflows over the years.

![Figure](/images/blog/2025-07-14-truth-or-beauty/image-02.jpg)

I believe we will see a slowdown in labs and AI companies focusing on reinforcement learning research, turning instead to product-driven AI. Those of us in the field for more than the past few years understand that data is crucial for AI development, yet many researchers tend to overlook it. Initially, large-scale transformers leveraged extensive internet data, creating an ideal fuel for transformer algorithms that facilitated the rise of current AI models. While other approaches like CNNs or state-space models could have emerged, research moved all- in for next tokens. Still there hasn’t been significant improvement in transformer-based models since GPT-4. Although reasoning models have advanced in specific areas, we haven’t observed major breakthroughs with foundational models.

What does this really mean? Going forward, the return on investment for AI labs, startups in fine-tuning, and enterprise coding efforts will primarily focus on supervised learning and developing task-specific models. This encompasses areas like robotics, training, security, anomaly detection, recommendation engines, and mechanical services amongst countless others. I believe this represents the highest ROI, as the main challenge lies in gathering and organizing expert data within a specific vertical. No extensive experience in reinforcement learning theory is necessary, just a deep understanding of the application. I’ll tie this back to observations over recent months that startup wrapper companies for foundational model lab APIs may face a mass extinction. Major players like Google and Microsoft will likely provide many of these fine-tuned models for enterprise verticals. Additionally, companies seeking control over their AI for security, compliance, or cost reasons will probably bring most of this in-house using fine-tuned open-source models. Just like the old days, data rules all and the true potential of AI applications lie in the small and the smart.