---
title: "Proving Me Wrong"
slug: "2025-09-29-proving-me-wrong"
date: "2025-09-29"
description: "Proving Me Wrong"
coverImage: "/images/blog/2025-09-29-proving-me-wrong/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

A couple of papers to lead the week. I think they claim some very interesting and (as of yet) underreported findings. The first one definitely challenges my assumptions about how transformer-based models will be applied and integrated into everyday technology. I’m always looking to see where I’m wrong.

![Figure](/images/blog/2025-09-29-proving-me-wrong/image-01.png)

This isn’t just an incremental improvement. If this technology proves scalable, it represents a paradigm shift that could redefine the economics and accessibility of AI. It addresses the twin crises of AI: unsustainable power consumption in data centers and the inability to run powerful models on local, edge devices. But this is still early days, and let’s be honest, it isn’t necessarily a product yet. First, their proposed hardware solution is clever, but how robust will it be in the real world, especially for analog-based performance that could change significantly due to thermal noise or signal drift. Also, they applied to relatively simple transformer model. What about mixture of experts or state-space models? So the gain in attention mechanism for a GP2 size model is impressive, but it hasn’t been proven to work on any current state-of-the-art models. Another issue is the momentum behind NVIDIA and their CUDA software ecosystem. This represents a significant switch in development direction and faces a big battle for developer adoption. Additionally an accuracy caveat needs to be mentioned here. They claim comparable performance, but a small drop in accuracy could be the difference between a correct answer and subtle but more dangerous hallucinations. So we need to be critical about what “good enough” means when we see a trade-off in this type of hardware and software optimization.

### Being Pedantic

We’ve all seen demos of AI agents that flawlessly book trips or manage calendars, but deploying them in the real world often reveals a fatal flaw… they are masters of plausible nonsense. They fail to track logical steps, leading to broken workflows. A new paper on PDDL-INSTRUCT offers a powerful solution. By instruction tuning a model not just on plans, but on the verifiable logic behind each step — and using a formal verifier to check its work — researchers have created a feedback loop that teaches the LLM to “think” like a symbolic planner, boosting accuracy by an pretty impressive 66 percentage points in some domains.

[https://arxiv.org/pdf/2509.13351](https://arxiv.org/pdf/2509.13351)

![Figure](/images/blog/2025-09-29-proving-me-wrong/image-02.png)

Y’all can read the paper, but this got me thinking about the comparison between this PDDL method and DSPy. It is in fact not really a comparison but more of a complimentary tech stack.

PDDL-INSTRUCT, the Trainer, aims to create a better model by curating perfect training data (verifiable chains of thought) to fine-tune model weights. This heavyweight operation fundamentally changes the student, requiring significant data and compute.

DSPy, the Compiler (or Socratic Tutor), optimizes prompting techniques for a given LLM. Its “teleprompters” programmatically explore and refine instruction sets (e.g., few-shot, chain of thought) to elicit correct answers. This is a lightweight, programmatic approach.

Imagine using DSPy to orchestrate a model that has already been fine-tuned using the PDDL-INSTRUCT methodology. You would have a model with a superior innate grasp of logic (from PDDL-INSTRUCT), being guided by a programmatically optimized prompting strategy (from DSPy). This layered approach — improving the core model, then optimizing the interaction with it — is likely the path forward for building truly state-of-the-art agents.

### How Do I Say This?

![Figure](/images/blog/2025-09-29-proving-me-wrong/image-03.png)

I’ve been trying to articulate this concept for a while now, building on what Francois is saying. The most successful people using AI today aren’t necessarily the most technically rigid or competent individuals. Instead, they’re incredibly curious and hardworking people with a strong grasp of language and the ability to approach problems from first principles. I believe these are the best employees for the future, but I struggle with how to explain this clearly so people understand how to hire for these qualities.

For the last decade, hiring for tech, especially AI, was like hiring an engine builder. We needed people who could take raw parts (Python, TensorFlow, data pipelines) and assemble a complex, powerful engine from scratch. This required deep, specialized, and often rigid technical knowledge. The job was to build the machine.

Today, foundation models are the new engines. They are massive, pre-built, and astonishingly powerful — think of them as off-the-shelf rocket boosters. You don’t need to hire someone to build the rocket anymore. You need to hire a rocket navigator.

The navigator’s job isn’t to know the metallurgy of the fuel pump. Their job is to know:

-   Where are we going? (First-principles problem definition)
-   How do I talk to the ship’s computer? (Mastery of language)
-   What happens if I push this button a little… or a lot? (Curiosity and experimentation)
-   When the computer gives a weird reading, is it a sensor glitch or are we about to fly into a tiny black hole? (“Taste” and critical thinking)

The best navigators aren’t necessarily the best mechanics. They are curious, creative, and relentless problem-solvers who know how to ask the right questions to steer an immensely powerful, but sometimes literal-minded, machine.

In that spirit here is a humorous (but serious) job posting and some interview questions that might be more useful than you’d initially think.

*“We are seeking an AI Navigator to join our crew. You’re part human, part librarian, and part detective. Your job is to ask brilliant questions of our very powerful, very literal AI co-pilot. If your first instinct when a tool gives you a bad answer is to blame the tool, this isn’t the role for you. If your instinct is to say ‘challenge accepted’ and re-phrase your question five different ways, we need to talk. We’re looking for a Swiss Army knife with a soul.”*

Interview Questions to Find Them:

-   To test for Deconstruction: “Forget AI for a moment. Let’s say we want to reduce employee turnover. Don’t give me any solutions. Just walk me through the first 10 questions you would ask to understand the problem.”
-   To test for Semantics: “Explain the concept of ‘brand equity’ (or another complex idea from your field) to me twice. First, as you would to a CEO. Second, as you would to the AI model, knowing it has no real-world context.”
-   To test for Tinkering: “Tell me about a time you were trying to get information and the ‘obvious’ way didn’t work. What was the problem, and how many different ways did you try to solve it before you either succeeded or gave up?”

By focusing on these core qualities, you shift the hiring process from a technical checklist to a search for a mindset. You’ll end up with fewer people who can recite the parameters of a model, and more people who can actually use it to create value. And frankly, that’s a much better bet for the future.

### Presented without comment

![Figure](/images/blog/2025-09-29-proving-me-wrong/image-04.png)

![Figure](/images/blog/2025-09-29-proving-me-wrong/image-05.png)