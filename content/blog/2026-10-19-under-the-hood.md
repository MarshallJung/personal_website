---
title: "Under the Hood"
slug: "2026-10-19-under-the-hood"
date: "2026-10-19"
description: "Long-time newsletter readers will recall AI models being pejoratively labeled \"stochastic parrots\" early on in the AI revolution. That label largely stemmed from the sheer complexity of neural networks..."
coverImage: "/images/blog/2026-10-19-under-the-hood/image-01.png"
tags: ["AI Agents & Agentic Workflows","AI Security & Safety","Motorsport & Engineering"]
readTime: "4 min read"
---

![Figure](/images/blog/2026-10-19-under-the-hood/image-01.png)

### Under the Hood

Long-time newsletter readers will recall AI models being pejoratively labeled "stochastic parrots" early on in the AI revolution. That label largely stemmed from the sheer complexity of neural networks and the unknowability of their weights. For the most part, this tied into the concept of "interpretability", a focus that only a handful of researchers truly prioritized, overwhelmed by the massive wave of potential cash that most people aimed for with these LLMs.

In the early days of using LLMs, interactions were just simple call-and-response chats. As long as you provided enough context in the prompting, probabilistic non-determinism was something you could engineer around. But now agentic systems have become far more complex. Because with tools/skills relatively simple prompts and context can now engineer extraordinarily detailed and complex software-based outcomes, the ability to peek inside how these processes work to audit their reliability has returned to the forefront as an essential priority.

This past week, an essay by Nick Camerata from Goodfire brought the importance of interpretability back into focus. [https://already-clean.goodfire.com/](https://already-clean.goodfire.com/) “The cause of polysemanticity in early model organisms wasn’t superposition, but several ordinary, mostly fixable issues. We can now understand most neurons in models up to trillions of parameters, and think the outlook for mechanistic interpretability may be far better than we thought.” While his essay focuses on model alignment (making AI safe for humans) it might be a bit too optimistic that interpretability will become tractable in time to meet those alignment needs. Time will tell.

[https://github.com/dearlordylord/hapsland](https://github.com/dearlordylord/hapsland)

Along these same lines, others have modeled more applicable state machines or simple reducers where agents turn an opaque sequence of LLM calls, side effects, and feedback loops into something inspectable, simulatable, and explainable. Even a flat diagram delivers most of the value here.

Agents excel at enumerating the full set of states and transitions, which strips away hidden, invalid states. While this shines in front-end logic for complex software programs, it generalizes well to agent control flow. State machines enforce explicit, legal transitions to enable exhaustive testing. The model proposes, the machine decides what is allowed and what happens next. This is more token-efficient for many tasks and easier to maintain than long chains of free-form LLM calls. They also pair naturally with schema validation, ensuring the model only proposes valid events.

From a product perspective, this approach yields more reliable, inspectable agentic products. Users and developers can interactively explore actual system behavior instead of relying on static docs or opaque agent traces. Ultimately, this reduces the understanding bottleneck, builds trust, and makes onboarding much smoother.

### Looking at it Backwards

[https://github.com/chenglou/handwired](https://github.com/chenglou/handwired)

Some creative people have taken the concept of interpretability and turned it on its head. For example, the above GitHub repo bridges the gap between traditional code and neural networks by turning if-else loops into weights, creating a deterministic neural network from code. While that might seem like just a clever trick, things get interesting if you unfreeze some of those weights and start training them. You can apply standard neural net techniques like losses and backpropagation, allowing the model to learn directly from user interactions. This opens the door for your deterministic code to evolve alongside each individual's use of the software. It is a nifty idea and definitely something worth watching.

### Cyber Attack

![Figure](/images/blog/2026-10-19-under-the-hood/image-02.png)

Cyber will be one of the most defining and public domains for AI over the next few years and a top priority for most enterprises. Security teams face a massive influx of work and a whole new skill set as they deal with vibe coded issues, external agentic attacks, and accidental agentic swarms violating internal policies. AI agents will naturally be part of the solution, too, and we will certainly see a wave of new products protecting code, enterprise systems, infrastructure, and data. If anyone in tech feels a bit lost about their future career path, jumping into this space right now would be a fantastic move.

### Foresight

[https://developers.google.com/edge/foresight](https://developers.google.com/edge/foresight)

I have spent quite a few hours engineering my own internal meeting and note-taking tools to better capture information from meetings and brainstorming sessions. I feed that into a personal knowledge base that serves as a second brain for everything from ideation to mundane day-to-day tasks. Somehow, I missed Google releasing a local tool that does all the stuff I want. It runs on its open source Gemma model (and is totally local), which could definitely help capture those critical details.

(Apple Silicon only for now…)

### Plugging My Own

As a Porsche Club of America driving coach, I know how tough it is to explain suspension kinematics with just words, especially in a noisy paddock with spotty internet.

I recently experimented with Google's Gemini 4 Argon model, which seems to grasp the physical world a bit differently (and better? Different pre-train?) than other frontier models. Using it, I built an offline-first, cross-platform mobile and web app for instructors and students. It breaks down multivariable suspension kinematics, weight transfer, and tire saturation through clear, simple diagrams.

I've shared the project under an MIT license on GitHub at the link below. I am still undecided on paying to publish it to the App Store, but I hope you find it helpful. Feel free to download and use it.

[https://github.com/MarshallJung/suspension_kinematics](https://github.com/MarshallJung/suspension_kinematics)
