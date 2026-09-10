---
title: "Welcome to my (our) bubble"
slug: "2025-01-20-welcome-to-my-our-bubble"
date: "2025-01-20"
description: "Given that Google search analytics are, for now, reasonably good proxies for the general interest and understanding of society more broadly, I’d like to present you with this graph…"
coverImage: "/images/blog/2025-01-20-welcome-to-my-our-bubble/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

Given that Google search analytics are, for now, reasonably good proxies for the general interest and understanding of society more broadly, I’d like to present you with this graph…

![Figure](/images/blog/2025-01-20-welcome-to-my-our-bubble/image-01.jpg)

We are still really early in the AI adoption phase for the general public. Given that specific models have different strengths, and add to that the associated tooling, infrastructure and requirements necessary to get AI up and running at a given company, there is still a ton of opportunity. But it also goes without saying that marketing and name recognition are probably as important as having a great tool. Engineers might not like to hear this, but it is true when human beings are the ones using your products.

### Open Source Assistant

[https://github.com/langchain-ai/executive-ai-assistant](https://github.com/langchain-ai/executive-ai-assistant)

One of the parts of my life that strikes me as both frustrating and ready for an AI overhaul is my email. Sure I use Gmail, and Gemini is slowly getting integrated in there, but the feature of auto reply, summaries and housekeeping is not a feature yet. I stumbled across this open source effort from Lanchain-AI that is a decent stab at doing this. I have not set it up yet, but the README is pretty thorough. Best practices for use are thin, and I can see this getting you in some trouble when the AI tells the accounts receivable guy to go and stuff it.

### Hype or Singularity?

Not sure if any of my readers have come across the increasingly common X posts claiming that “OpenAI/Anthropic/etc. have reached AGI internally and something BIG is coming soon”. Look, I’m generally pretty positive about the direction that AI is headed, but I’m not a Foomer (a.k.a. someone that believes that AI is going to imminently become conscious or super intelligent). So is all this hand waving and rumor by X posters just FUD or marketing? Hard to say, but in the past claims of MASSIVE advancements in AI models haven’t really meaterialized. We have seen improvements on benchmarks, but that has not translated through to real-world applications. Again, I remind people that I am usually very early to these types of things, so maybe I need to wait 6 months or so. However, there are odd interviews and statements like this one from a co-founder of OpenAI:

![Figure](/images/blog/2025-01-20-welcome-to-my-our-bubble/image-02.jpg)

Where people talk about needing to “train out the model’s existential dread”. Just a ghost in the machine?

### How to fine tune based on goal

[https://openpipe.ai/blog/deterministic-vs-freeform-tasks](https://openpipe.ai/blog/deterministic-vs-freeform-tasks)

This is an interesting article that summarizes the big differences in the right way to evaluate and fine-tune LLMs depending on whether your task has one right answer or many. It’s split between tasks with one correct answer (or just a few) “deterministic.” They include things like: Classification, structured extraction, agent flows that produce a single action. They’re tasks where you can quickly check if an output is objectively correct. On the other hand, “freeform” tasks have infinitely many correct outputs — think: Summaries, email drafts, chatbots. Here, correctness is more subjective. There’s no single “right” answer, and that affects how we measure success. Long story short, For deterministic tasks, Reinforcement Fine-Tuning (RFT) is very promising, especially when correctness is verifiable. For freeform tasks, preference-based methods (like DPO or RLHF) are very effective in guiding the model’s style and tone. The graph in article shows the split in the company, OpenPipes, type of use. Fascinating, and I wonder how accurate this is to the whole of AI use.

![Figure](/images/blog/2025-01-20-welcome-to-my-our-bubble/image-03.jpg)

### How they did it.

Given that Google likes to release a whitepaper on a particular subject after they have already built the technology, this paper: [https://arxiv.org/abs/2501.00663](https://arxiv.org/abs/2501.00663) from Google might be the explanation of how the 2M long context window in Gemini models work. It begs the question though; if the replication of human based task learning is innately more powerful then why do smaller models with TTC outperform? Is there a balance, or would we all really be looking at specializing models since that is likely to be the best performing for narrow tasks as well as likely more compute efficient.

### Devin…didn’t

[https://www.answer.ai/posts/2025-01-08-devin.html](https://www.answer.ai/posts/2025-01-08-devin.html)

So having worked with agents for a while now, and heard more than my fair share of pitches when helping evaluate companies for a local VC fund, I have to say that the “Agent” thing is really out over it’s skis. The summary of this companies PoC with Devin (it’s a “true pair programmer AI code assistant”) is well summed up in the employee’s feedback.

—   
Tasks it can do are those that are so small and well-defined that I may as well do them myself, faster, my way. Larger tasks where I might see time savings I think it will likely fail at. So no real niche where I’ll want to use it. — Johno Whitaker

I had initial excitement at how close it was because I felt I could tweak a few things. And then slowly got frustrated as I had to change more and more to end up at the point where I would have been better of starting from scratch and going step by step. — Isaac Flath

Devin struggled to use internal tooling that is critical at AnswerAI which, in addition to other issues, made it difficult to use. This is despite providing Devin with copious amounts of documentation and examples. I haven’t found this to be an issue with tools like Cursor, where there is more opportunity to nudge things in the right direction more incrementally. — Hamel Husain  
 —