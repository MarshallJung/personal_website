---
title: "The Price of Authenticity"
slug: "2025-10-20-the-price-of-authenticity"
date: "2025-10-20"
description: "The Price of Authenticity"
coverImage: "/images/blog/2025-10-20-the-price-of-authenticity/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

[Graphite.io](http://graphite.io) released a study that quantified the prevalence of AI vs. human articles on the internet. The study (linked here: [https://graphite.io/five-percent/more-articles-are-now-created-by-ai-than-humans](https://graphite.io/five-percent/more-articles-are-now-created-by-ai-than-humans)) gives the methodology and limitations, but the TL;DR is as follows: AI-generated articles now outnumber human-written ones online, though their proportion has leveled off since May 2024. Despite their prevalence, these articles largely don’t appear in Google or ChatGPT, and Graphite soes not suspect real users don’t view them proportionally. The study didn’t assess AI-generated/human-edited articles, which may be even more common.

![Figure](/images/blog/2025-10-20-the-price-of-authenticity/image-01.png)

I think we have to ask ourselves, is this necessarily a bad thing? Most people I know in the tech industry, and even many who don’t work in tech, use AI to help write emails or documentation. Some use it for blog articles or press releases. The truth is, even when using AI, much of the content is still reviewed and approved by humans.

I think the question is: at what point does it stop being an authentic human creation and start becoming a pure AI product? At the research level, proofreading, draft creation? Where? That raises another question of whether it really matters IF the information is valuable. People probably don’t care much where it comes from.

This is a tough question and topic to cover, especially as someone like myself who prides themselves on writing these weekly newsletters by hand the old-fashioned way, even if I use AI to help with research and dig deeper into particularly interesting subjects. I’m curious to know if any of my readers have opinions on this matter.

### Building a Product?

[https://www.linkedin.com/in/vineeshkapoor/](https://www.linkedin.com/in/vineeshkapoor/) had an interesting observation that I think rings true for the majority of the startups that I’ve worked with over the past few years. “**Most “AI platforms**” aren’t actually product companies (today) — they’re services in disguise” Most AI startups describe their platforms as flexible, scalable and transformational. But when you look at their early customer base, even as they scale, they end up customizing and deploying with their own engineers. Every deployment requires custom code, essentially turning each one into a project. Using AI in your startup doesn’t guarantee the idea will scale to the full TAM scope you envision. When AI-enabled startups can create products faster than ever before, it becomes increasingly important to focus on solving one specific customer problem, do it exceptionally well, and then deliver that solution reliably and cost-effectively.

### The Future of Fine Tuned SLMs

Checkr is an online background check company. To improve efficiency in their internal processes and core structure they used fine tuning on an LLM. Their strategy targeted high-cost, high-complexity, and long-tail problems that were previously handled through manual review or simpler existing models.

[https://www.linkedin.com/pulse/genai-architecture-series-streamlining-background-robert-schwentker-hexic/](https://www.linkedin.com/pulse/genai-architecture-series-streamlining-background-robert-schwentker-hexic/)

Once they identified the problem, their strategy was to prove that a small, specialized model could outperform a large, general-purpose one.

-   **Benchmark Everything:** They tested four different patterns: — **Expert LLM (GPT-4):** Too slow and expensive. — **Expert LLM + RAG:** Surprisingly, this *lowered* accuracy on their most difficult cases. — **Fine-Tuned LLM (LLaMA 2–7b):** This was the clear winner, achieving the highest accuracy (85% on difficult cases) with the lowest cost (under $800/month) and fastest response (0.5 seconds). — **Fine-Tuned + Expert LLM (Hybrid):** This added complexity with no additional accuracy gain.
-   **Focus on Cost and Performance:** The fine-tuned LLaMA 2–7b model achieved a **5x cost reduction** and was **30x faster** than the general-purpose GPT-4, while also being more accurate for their specific task.
-   **Use Efficient Techniques:** They found that LoRA (Low-Rank Adaptation) fine-tuning method — provided no significant drop in accuracy compared to full fine-tuning, making the process even more efficient.
-   **Utilize a Deployment Platform:** They used Predibase to manage the process, allowing them to test multiple open-source models, monitor performance, and deploy the final adapter efficiently.

Here’s how you might apply this to your enterprise operations:

1.  **Find the “Expensive 2%”:** Checkr automated 98% of its checks with simpler models, but the remaining 2% were highly complex, unclassified, and required slow, manual review that was only 50% accurate. — **Enterprise takeaway:** Look for the small percentage of tasks (e.g., support tickets, compliance reviews, data entry) that consume a disproportionate amount of manual effort, time, and budget, or lead to “significant customer frustration.”
2.  **Target Specific, Repetitive Classification Tasks:** The core problem was categorizing unstructured text (charge information) into 230 distinct categories. This is a classic, well-defined classification task. — **Enterprise takeaway:** Identify processes that require employees to manually read unstructured text (emails, reports, logs, reviews) and assign a specific category, tag, or label.
3.  **Identify Bottlenecks with High Latency or Cost:** Their initial exploration of large models like GPT-4 worked, but was too slow (15-second response time) and too expensive (a projected $12,000/month). — **Enterprise takeaway:** If you have a process that *must* be fast (like Checkr’s synchronous requests) and cost-effective to scale, it’s a prime candidate for a smaller, fine-tuned model.
4.  **Leverage Existing, High-Quality Data:** Checkr’s success was built on having “reliable training and evaluation sets.” They had a history of 1.5 million checks per month, providing a massive, high-quality dataset to train on. — **Enterprise takeaway:** The best opportunities are in areas where you already have a large volume of historical data, especially data that has been manually labeled or corrected over the years.

### GDPval — How Good Are They, Really?

In this paper, OpenAI presents a set of benchmarks where industry experts outlined important real-world and difficult tasks for AI to accomplish. Other experts performed the tasks themselves, and a final cohort graded both human and AI output. New models approached human-level performance. The impact was significant with tasks averaging seven hours of work. The method used for the models workflow, “try then fix” workflow proved effective. However, these are still individual tasks rather than complete jobs. According to a graph they presented, experts working directly with AI who know how to use it effectively see cost and speed improvements. These experts should achieve even better results with more advanced models.

![Figure](/images/blog/2025-10-20-the-price-of-authenticity/image-02.png)

### An Interview with AK

[https://x.com/dwarkesh\_sp/status/1979234976777539987](https://x.com/dwarkesh_sp/status/1979234976777539987)

This is a wonderful interview for people in the industry to listen to Andre Karpathy give a balanced look at the current state of AI, particularly the nuances of large language models. One of the most interesting parts is when he describes why LLMs can’t learn like humans simply because current reinforcement learning methodology is so different from how humans actually learn. Instead of a single outcome updating weights throughout our entire neural network, we keep much less memory and build generalized cognition that is more effective at teaching us patterns rather than rewards. AK also really focuses on the importance of teaching people how to use LLMs rather than the specific applications that might be part of a start-up. It’s worth a listen.