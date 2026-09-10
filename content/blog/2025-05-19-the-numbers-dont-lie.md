---
title: "The Numbers Don’t Lie"
slug: "2025-05-19-the-numbers-dont-lie"
date: "2025-05-19"
description: "Many of us in the AI field are probably pretty jaded and often disappointed with new model releases. We keep hoping for serious advancements in coding, scientific computing, and multimodal. However, i..."
coverImage: "/images/blog/2025-05-19-the-numbers-dont-lie/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

Many of us in the AI field are probably pretty jaded and often disappointed with new model releases. We keep hoping for serious advancements in coding, scientific computing, and multimodal. However, it’s important to note that the quadratic time and space complexity of self-attention remains unchanged. Achieving an effective 1 million token context still requires computing about 1 trillion dot products for each new request. Currently, we are witnessing a unique level of generosity as some companies invest billions to kill Google, while Google spends equally to maintain its position. Once this situation stabilizes, we will likely get the bill for those 1 trillion dot products, and I’m guessing we are not going to like it very much.

While a trillion might be an overestimate in the initial napkin math, the reality isn’t significantly improved even with various model optimizations. I’ll attempt some more detailed calculations below to clarify where we stand regarding the total number of calculations.

Let’s use a realistic 100k token request (Sprompt​=10⁵). This might be a decent codebase, or a bunch of quarterly reports. For a garden-variety 7-billion-parameter model, processing that 100k token prompt with full attention is a delightful **3.63×10¹⁵ FLOPs** (yes, PetaFLOPs). The star of this horror show is the attention mechanism in each of the L layers, gleefully scaling at O(Sprompt²​⋅dmodel​). It’s quadratic, it’s unrepentant, and it’s probably why your cloud bill looks like a ransom note.

What can we do to reduce this monstrosity? We have four commonly used methodologies.

-   Window/Sparse Attention — Instead of letting every token stare into the soul of all 99,999 others, we apply digital blinders — a “window” (w = 4096 tokens) moving to a more manageable O(Sprompt​⋅w) which nets us a ~69% (nice!) reduction in FLOPs (Minimal performance drop requires sophisticated sparse attention, not just a naive window, naturally.)
-   FlashAttention — This approach doesn’t reduce overall FLOPs, but it optimizes the execution of the attention process by being I/O aware, which reduces memory traffic and OOM issues. Cost savings.
-   Quantization — Here, we reduce the numerical precision of the model weights and possibly the activations. This is like serving the FLOPs on a smaller plate. While the number of multiplications and additions in your matrices generally remains the same. You can achieve cost savings as the model is lightweight in memory size and can be optimized for specialized hardware (INT8/FP4) that efficiently handle low precision operations.
-   Structured Pruning — If you are feeling lucky (or good) structured pruning allows for yeeting of entire blocks of neurons or channels from your model, effectively reducing the size of the matrices. This can net a ~40% reduction in FLOPs. This approach can be very effective, but it’s also risky for your model’s performance. It’s akin to performing brain surgery by intentionally removing parts of your model. I hope you didn’t remove the section that grasped the fundamental scientific principles you were trying to solve!

If we throw Window Attention and Structured Pruning into the ring together: Total FLOPs ≈ 0.11 PFLOPs (windowed attention) + 0.61 PFLOPs (pruned non-attention) ≈ 0.72×10^15 FLOPs. This is a roughly/reasonable/realistic average **80% reduction** from the initial 3.63 PFLOPs of raw terror. Yes, you *can* significantly cut down the FLOPs for that 100k token monster, primarily with smart attention mechanisms and some judicious pruning. FlashAttention and Quantization will then make the remaining (still hefty) workload run faster and leaner. Just remember, “minimal performance drop” and “80% FLOP reduction” often require a blood sacrifice to the gods of hyperparameter tuning.

So it’s possible to reduce the potential costs of these models, but we should be mindful of two key issues. First, the “No Free FLOPs Lunch” theorem remains undefeated. Squeezing those costs with the techniques we’ve discussed (windowing, pruning, quantization) inevitably means navigating trade-offs. While you can aggressively tailor models for specific use cases, be prepared for certain capabilities to dim or vanish entirely if you get too scissor-happy.

Second, remember that the journey to an “optimized” model is paved with expensive trial-and-error. Your initial attempts to tune that base model (whether it’s proper fine-tuning for a new task or applying these optimization voodoo doll techniques) might initially perform like a confused intern. Each iteration burns through compute and your precious time — costs that stack up *before* you even dream of hitting “run inference” at scale.

I believe that those now using the APIs of current models (which can chew through some serious cash, even as subsidized as they are now) will likely face significant price increases in the future. While it’s difficult to determine if any new mathematical methods can further reduce costs, even incremental improvements will not stem the tide of rising expenses for AI.

### Be Safe out There

[https://horizon3.ai/attack-research/disclosures/unsafe-at-any-speed-abusing-python-exec-for-unauth-rce-in-langflow-ai/](https://horizon3.ai/attack-research/disclosures/unsafe-at-any-speed-abusing-python-exec-for-unauth-rce-in-langflow-ai/)

This website discusses a critical vulnerability found in the Langflow AI tool, highlighting the risks associated with integrating AI without consideration of code security practices. Langflow is a low-code tool for building AI agents, but it is definitely not the only one out there. It allows users to upload and run code as agents within its platform. A vulnerable endpoint, API v1/validate\_code, was designed to check if submitted code meets the required API imports. The code runs user-supplied code directly on the server without proper sandboxing or sanitization. The vulnerability arises from Python’s function definition process, where decorators are executed even if the function is inactive. This allows attackers to create malicious decorators that can inject arbitrary code into the server, resulting in a remote code execution vulnerability.

This isn’t meant to criticize Langflow specifically. Similar issues likely exist in various AI tools. It’s a cautionary reminder that human programmers can also make mistakes, and this has happened historically and will continue regardless of AI. However, AI tools that facilitate low-to-no-code programming are likely to increase the prevalence of vulnerabilities due to the greater volume of code they produce. Companies need to invest in strong SLDC practices, particularly in secure code review. I forsee an increase in tools that address these vulnerabilities. If I were a venture capital fund, I would consider investing more in this area.

### AlphaEvolve

[https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/AlphaEvolve.pdf](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/AlphaEvolve.pdf)

![Figure](/images/blog/2025-05-19-the-numbers-dont-lie/image-01.jpg)

For its I/O conference hype Google released its new AI model, AlphaEvolve, an evolution of the AlphaCoder system. AlphaEvolve optimizes its own training and has actually made some new scientific discoveries and improvements like improving Strassen’s Algorithm for matrix multiplication (unchanged from 1969), improved circuit design and optimized Google’s Borg (ne, K8’s) reducing the cloud computing bill by 0.7%. That’s not inconsequential. It uses an ensemble of LLMs, like Gemini Flash and Gemini Pro, to generate and evaluate ideas, optimizing solutions through a process similar to natural selection (so genetic improvement). While AlphaEvolve only works on problems that can have an automated evaluator, I see some really nifty applications in anomaly detection in time series data. I’m sure there are numerous other applications.

Currently, the model is not open source, and I don’t think there are any plans for it to become so. Access to the model requires an application process; fill out an online form detailing intended use. While this may not directly affect existing companies’ operations or innovation, I find it quite unique and look forward to observing its impact. If AlphaFold and AlphaCoder are any indication, this could be quite interesting.

From a business perspective, I find it frustrating that Google has such impressive internal innovations but struggles to effectively market or leverage products that utilize this technology. It’s one of the most perplexing and frustrating aspects of Google as a company.