---
title: "I missed something"
slug: "2024-12-23-i-missed-something"
date: "2024-12-23"
description: "Last week I reviewed my 2024 predictions and put my thoughts and beliefs on paper for 2025. However, I missed something in prediction and it was also something that I failed to recognize or predict du..."
coverImage: "/images/blog/2024-12-23-i-missed-something/image-01.jpg"
tags: ["AI Strategy","Motorsport & Dynamics"]
readTime: "7 min read"
---

Last week I reviewed my 2024 predictions and put my thoughts and beliefs on paper for 2025. However, I missed something in prediction and it was also something that I failed to recognize or predict during 2024. This is test time compute. Also called inference compute or even “reasoning” (blech!) it’s the one trend that I really didn’t catch last year. As the parameter scaling hit a wall for logistical and financial reasons, test time compute came to the forefront for almost the same reasons. Scaling test-time compute can be more effective than simply scaling model parameters for certain tasks, and in theory it can be more energy efficient than the big pre-training model runs for similar quality output (however that might be measured.)

See here: [https://arxiv.org/abs/2408.03314  
](https://arxiv.org/abs/2408.03314)And here: [https://arxiv.org/abs/2412.15204](https://arxiv.org/abs/2412.15204)

![Figure](/images/blog/2024-12-23-i-missed-something/image-01.jpg)

But it’s a focus for a very monetary reason as well. Pre-training is expensive, risky, kills your old ones and their investment, and you really have no guarantee that you’re going to meaningfully outperform previous models or your competitors. But as an AI lab or big company, test time compute is a great way to leverage your foundational models and get that unit consumption on top of your GPU/TPU infra investment. It is a much more tasty business model and one that is much more predictable. And investors like predictable.

There are a bunch of other benefits as well. Better integration with applications, better differentiation from competitors etc. but long story short I missed this trend. I’ll endeavor to keep my head up on it as the year progresses.

### The grey pill

Google recently released Gemini with Deep Research. I, as I am apt to do, immediately jumped on board to give it a roll. I asked it to help me write a technical article on race car suspension kinematics. I asked that Gemini pay special attention to how the design choices might affect the tire contact patch and the tradeoffs that might need to be made in order to maximize performance. I was genuinely surprised at the output. Gemini referenced some excellent websites, whitepapers and articles. In the end it got about 80% of the ideas correct. Now I understand that this is a pretty esoteric subject. Not all of my dear readers are as dedicated to race cars and engineering speed as I am, so the average person would likely think the generated article is pretty good. But it really isn’t. It’s only 80% good.

And this brings me to my worry with this tool, and I suppose AI in general. When this type of research and generated content is disseminated, consumed and reused into the next AI response on suspension kinematics, what detail was lost? People will recognise this as the theory of the dead internet. When the vast, vast majority of information is AI generated, what variety, what detail, what expertise will be irrecoverable? We risk narrowing the knowledge distribution. Losing the beautiful and valuable tails that represent genius or madness or creativity. The sum of all information will cluster around that 80%. The greying out of human knowledge.

And it’s not just the wider internet. Corporations that don’t pay attention to their in house treasures of knowledge will suffer the same fate. Sure, the AI tools will make access to the vast details easier, but if you don’t first understand what you have at the company, and even more importantly, the human experts that still work for you, you will grey your knowledge as well. And those crucial lessons about how to win a contract or deliver a service might be lost. Companies risk becoming uncreative, and even uncompetitive. What a turn huh? AI with the promise of efficiency and vigor…delivers just the opposite.

But don’t lose hope dear reader. It’s the grey pill after all. One thing I’ve learned about humans in my years in this world is that we are beautiful, varied, wonderful, driven and above all creative. Those that can keep thinking outside the box, even a very knowledgeable AI box, will guide us to the future. And I believe in us.

### The Answer is 42

Let’s take the previous two talking points and wrap them around the announcement of both OpenAI’s o3 and Gemini 2.0 Flash Thinking Experimental. For one these are fast follow ups of o2 and Gemini models. With basically no announcements around GPT-5 or straight Gemini 2.0. So it appears that for at least now the next generation of pre-train scaling is not on the books. However, Logan Kilpatrick said that, “Pretraining is only over if you have no imagination” [https://x.com/OfficialLoganK/status/1868002617311596552](https://x.com/OfficialLoganK/status/1868002617311596552) so there may yet be some movement in that direction.

As of now OpenAI’s o3 has set some very impressive benchmarks including a nearly 88% in its high-octane version on the ARC-AGI test maintained by Francois Chollet. It scores 75.7% on the semi-private eval in low-compute mode (for $20 per task in compute ) and 87.5% in high-compute mode (thousands of $ per task). It’s very expensive, but it’s not just brute — these capabilities are new territory and they demand serious attention. As Francois says, “Deep learning did hit that wall, and the natural answer to get past it was deep learning plus search. AI research is about to enter its deep-learning guided program synthesis (or CoT synthesis) arc”.

![Figure](/images/blog/2024-12-23-i-missed-something/image-02.jpg)

So the Monte Carlo Tree Search method, which is the known CoT method or some other search method seems to be the magic ingredient. What is old is new again, right? But as we can see the costs for these models are still not competitive. Obviously this will fall over time, but it’s also important to remember that while many are labeling these tools AGI, the average human off the street will score about 70–80%. STEM college grad: >95%. So a reasonably smart person. Not a genius. It will also be extremely important to analyze the strengths and limitations of the new systems. Here are some examples of tasks that o3 couldn’t solve on high-compute settings (even as it was generating millions of CoT search tokens and consuming thousands of dollars of compute in the process).

Ethan Mollick observed that o3 seems to have proven Douglas Adams correct on AI. It’ll give you the right answer, but only after thinking for a very long time and costing lots of money, and you better know how to ask the right question up front.

![Figure](/images/blog/2024-12-23-i-missed-something/image-03.jpg)

It will be fascinating to see where this goes, and closely monitor what industries and tasks seem to be the most likely to be overtaken.

### The real time real world is one step closer

[https://genesis-embodied-ai.github.io/](https://genesis-embodied-ai.github.io/)

So this mind blowing gem dropped this week. It’s, dare I say it, a little unbelievable. However it seems to be a collab between 20 labs with some big names, so I have to think that it’s real. It’s supposed to be open source, though I don’t think it’s been fully released yet. A few highlights:

*100% Python, both front-end interface and back-end physics engine, all natively developed in python.*

*Parallelized simulation with unprecedented speed: Genesis is the world’s fastest physics engine, delivering simulation speeds up to 10~80x (yes, this is a bit sci-fi) faster than existing GPU-accelerated robotic simulators (Isaac Gym/Sim/Lab, Mujoco MJX, etc), without any compromise on simulation accuracy and fidelity.*

So far most of the world generators from places like World-Labs seem to be very cartoonish, and the diffusion based video generators like Veo and Sora are not really physics informed, merely 2D imagers, so this is very different.

If this turns out to be replicable and accurate in real world, it’s amazing. First 100% python? I guess it isn’t that slow after all, eh? Second, how does it handle the HPC requirements for nearest neighbor interaction that govern nearly all physical interactions? What kind of resolution and is there some kind of underlying PINN here? Third, if this is that much faster on the same hardware, could it be just a bit faster on much cheaper hardware? And I do really hope that it’s physics consistent. The impact on things like robotics, self-driving algorithms, and of course, near and dear to my heart, CFD. Man, race cars are going to get so much faster with the ability to accurately model airflow on the cheap.