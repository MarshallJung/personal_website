---
title: "Happy I made it this far"
slug: "2024-09-03-happy-i-made-it-this-far"
date: "2024-09-03"
description: "This past week I had the opportunity to interview (and test) with a leading AI research company. You might know them, as the AI is French and writes music and poetry. I’ll save you the suspense and te..."
coverImage: "/images/blog/2024-09-03-happy-i-made-it-this-far/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

This past week I had the opportunity to interview (and test) with a leading AI research company. You might know them, as the AI is French and writes music and poetry. I’ll save you the suspense and tell you that I didn’t make the cut, but considering there were likely hundreds, if not thousands, of people interested in the position, I’m proud that I was selected to put my best to the test. Part of the interview included a very difficult timed leetcode interview, which given the company involved, was a bit odd given that no AI was allowed in answering the questions. I’ve been pretty harsh on companies that are requiring coding exams for customer facing roles given that the future looks very different, HOWEVER, in the case you need to at least clear a basic bar for intelligence, leetcode sans AI is probably a way to do it. And given that it is an employers market (especially for highly desirable positions) I can’t see this changing anytime soon. Pity…I’d have made a great employee.

### Leetcode no more?

[https://www.reddit.com/r/leetcode/comments/1ex7a1k/i\_automated\_leetcode\_using\_claudes\_35\_sonnet\_api/](https://www.reddit.com/r/leetcode/comments/1ex7a1k/i_automated_leetcode_using_claudes_35_sonnet_api/)

As a follow on to the lead entry this week, a software engineer nailed 86% on standard leetcode problems. The very french Claude 3.5 pipeline completed 633 problems in 24 hours, completely autonomously and cost $9 in API calls. So coding productivity is not a problem. What is valuable is the ability to take the concepts and get them into reality. Curious generalists will own the future.

### Product idea?

I was hiking this weekend and the trail that I traveled is used as a catchment for the backcountry runs off the backside of Beaver Creek ski resort. I’ve skied these runs literally hundreds of times over the years and the one thing that was really hard was to find my way to the great glades. Sure you can spot them via high res satellite but on the ground while skiing trees is tough. Could we combine a GPS with a ESP32 based HUD type display for goggles that could direct you in real time as you ski. Could also maybe get this a a HUD based application for hill-climbs and navigating new race tracks. The question here is what’s the customer base look like? Anyone interested.

### The homework apocalypse

[https://www.oneusefulthing.org/p/post-apocalyptic-education](https://www.oneusefulthing.org/p/post-apocalyptic-education)

Long time readers will remember that I talked about how LLM based AI tools will change the landscape of how we learn. And of course, we all learn. I would imagine that those of us who use these tools on a daily basis have really started thinking more about how to describe problems rather than specifically how-to solve them. I have called this a socratic revolution and the likely specialized language that we will develop I have already trademarked as “Socrato”

The article above talks about how we will use AI in the realm of education and how things are changing when every homework assignment can already be adequately done. We will need to teach how to think vs. memorization.

### The newest shadow IT

[https://www.oneusefulthing.org/p/detecting-the-secret-cyborgs](https://www.oneusefulthing.org/p/detecting-the-secret-cyborgs)

Is this an issue folks are seeing? I’ve been in the startup realm for so long I don’t know the intimate details. The issue in organizations: They have put together elaborate rules for AI use focused on negative use cases.

As a result, employees are too scared to talk about how they use AI, or to use corporate LLMs. They just become secret cyborgs, using their own AI & not sharing knowledge

“All of this use leads to the final concern, the justified worry that workers might be training their own replacement by figuring out how to work with AI. If someone has figured out how to automate 90% of a particular job, and they tell their boss, will the company fire 90% of their coworkers? Better to keep usage secret, and avoid any risk.”

### Making a new bet

[https://github.com/google-deepmind/uncertain\_ground\_truth/blob/main/monte\_carlo.py](https://github.com/google-deepmind/uncertain_ground_truth/blob/main/monte_carlo.py)

TLDR: Conformal prediction gives mathematical guarantees unlike usual monte carlo. With regular monte carlo when a user asks for 90% interval the actual coverage could be far below. With conformal prediction 90 percent means 90 percent while still adhering to the random sampling requirements of the base method. Gold standard. This is not something that likely comes up regularly in transformer work, outside the potential applications of model performance evaluation. However the guarantee is something that is very desirable.

### My best guess

I was discussing the future of AI with a friend lately and besides my contention that smaller specialized models will be the workhorses of the future, there is still the idea of the “crude oil” of the AI revolution. The foundational models will need to be improved, but what does that look like. So here is my best guess on the state of foundational LLMs :The scale increase between GPT-3 and GPT-4 was 100x and doing that for the next model is going to be very hard. We’re nearly out of general language tokens. So let’s estimate that we can at best 2x that for the next generation. If big companies can buy/cajple proprietary tokens maybe we get to 3–4x. Lots of data cleaning gets 6–7x. A 100x training run also requires a gigawatt datacenter which we don’t have yet, but let’s assume that some energy efficiency is realized so we only need 75% of that.  
Synthetic data is great, but it’s not clear how that can be used for general language. I suspect this is why both OAI and Anthropic are focusing on math and code (and why DeepMind folded in AlphaProof etc.) which can be improved via various “synthetic” compute methods (simulated data, or recursive self improvement of some sort). In the meantime, there is focus on getting more learnings from the same data. Perhaps there is a breakthrough there but I’ve not heard of it. Planning can be pushed to inference in some domains (e.g. coding) which we’re starting to hear about. But again, not clear how much this buys. Basically, I don’t see where the 100x jump will come from for general language reasoning. This is why we’re seeing a focus on more structured data like math and code. This is one place where I’d be very happy to be proven wrong, but I’m not holding my breath.

OTOH here is a nifty paper from [https://epochai.org/blog/can-ai-scaling-continue-through-2030](https://epochai.org/blog/can-ai-scaling-continue-through-2030) that lays out a more optimistic case. Always good to have multiple viewpoints.

![Figure](/images/blog/2024-09-03-happy-i-made-it-this-far/image-01.png)