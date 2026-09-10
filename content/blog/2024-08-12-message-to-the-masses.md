---
title: "Message to the masses"
slug: "2024-08-12-message-to-the-masses"
date: "2024-08-12"
description: "When I say that this is written to the masses, in this case I mean both employees and employers in the tech space. So…not exactly the masses, but enough folks these days. I was tracking tech layoffs (..."
coverImage: "/images/blog/2024-08-12-message-to-the-masses/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

When I say that this is written to the masses, in this case I mean both employees and employers in the tech space. So…not exactly the masses, but enough folks these days. I was tracking tech layoffs (see below) and while fabbing up a set of custom offset lower control arm bushings for the race car I happened to be listening to Vivek Ramaswamy and Mark Cuban debate on the Truth podcast ([https://open.spotify.com/episode/1BrKSeohRK3oeyg1UbbWbz?si=RLjaDS98T1Ga5iDG4X8cdQ](https://open.spotify.com/episode/1BrKSeohRK3oeyg1UbbWbz?si=RLjaDS98T1Ga5iDG4X8cdQ)) They were talking about DEI (toss the grenade, huh?) and I found myself agreeing with Cuban’s take on how this applies to hiring. He said that finding those naturally talented folks in overlooked areas is a great ROI when compared to hiring based on the same old certifications, degrees, diplomas and narrow areas of expertise.

![Figure](/images/blog/2024-08-12-message-to-the-masses/image-01.jpg)

As the AI revolution continues, and it will continue despite the current hiccups, I find myself thinking about who in the future will make the ideal tech employee and how competitive companies might best hire those folks. AI will continue to make inroads into jobs that fall within areas of narrow technical competence. Think coding, network security analysis, git housekeeping, testing, etc. Any job that operates on structured knowledge will look very different in 5 years. The employees that will be desirable are those that can bring creativity and skills from many different arenas to bear on a new or unique problem. A “Renaissance Employee” that can see around the concepts that an AI was not trained on or are too complex to understand. Add to that an ability to talk to customers, sell, write (authentically) and teach, and those captains will be able to leverage AI to be much more productive.

Where do you find such folks? I’m obviously biased since I count myself as one already, but in the spirit of Mark Cuban’s idea of diversity I would look for these future stars in the STEM arena, but filter by soft skills like writing or public speaking. Hire those people now and you’ll for sure get a leg up on your competition when the race begins again.

### Linked in AI

[https://www.linkedin.com/blog/engineering/generative-ai/musings-on-building-a-generative-ai-product](https://www.linkedin.com/blog/engineering/generative-ai/musings-on-building-a-generative-ai-product)

Interesting writeup on how the LinkedIn team reduced the error rate from ~10% to ~0.01% when generating structured outputs with LLMs.Turning natural text into structured outputs is a cool use case for LLMs. But getting LLMs to do this reliably is quite challenging. In their writeup, the LinkedIn Engineering team shares what they did to reduce the error rate: Write an in-house defensive YAML parser. Wrote guardrails to detect and patch mistakes before parsing. Prompt engineering to include hints about common mistakes. This is pretty common stuff, but sometimes simple is good. As the model gets more specialized, the data set that it’s trained on is defined and describable, this technique improves in kind.

### Remember Tensorflow Playground?

So, tensorflow never really took off, but there was a cool playground where you could model an MLP. Someone now made it for transformers! Very cool and now this can help explain the concept to others. It runs a GPT-2 instance locally in the user’s browser and allows you to experiment with your own inputs.

[https://poloclub.github.io/transformer-explainer/](https://poloclub.github.io/transformer-explainer/)

### Learn the world

“Grounding natural language in physical 3D environments is essential for the advancement of embodied artificial intelligence.” If we hope for ML based tools to construct 3D items, or power robots that can accomplish tasks in the real world, the idea of the world around us must be bridged by language-to-object connections. The paper above aims at bridging the gap between 3D-VL and embodied AI. They introduce the SG-3D dataset for this task. SOTA 3D-VL models struggle in this task.

### Red fruit…

I include a longer paraphrased selection from Andrej Karpathy that talks about what it would take to really move LLMs forward. DeepMind has done some of this with the incorporation of AlphaGo like reasoning concepts, but as AK points out this type of RL is too constrained for foundational models. “No production-grade \*actual\* RL on an LLM has so far been convincingly achieved and demonstrated in an open domain, at scale. And intuitively, this is because getting actual rewards (i.e. the equivalent of win the game) is really difficult in the open-ended problem solving tasks. It’s all fun and games in a closed, game-like environment like Go where the dynamics are constrained and the reward function is cheap to evaluate and impossible to game. But how do you give an objective reward for summarizing an article? Or answering a slightly ambiguous question about some pip install issue? Or telling a joke? Or re-writing some Java code to Python? Going towards this is not in principle impossible but it’s also not trivial and it requires some creative thinking. But whoever convincingly cracks this problem will be able to run actual RL. The kind of RL that led to AlphaGo beating humans in Go. Except this LLM would have a real shot of beating humans in open-domain problem solving.”

With the recent hinting shenanigans around Q\*/Strawberry, I think this is the idea that many labs are currently working towards. We shall see.

### Engineering at its finest

Czinger breaks the production car hillclimb record at Goodwood. Y’all will remember this car as a GAN optimized and 3D printed car. [https://www.czinger.com/around-the-world/29](https://www.czinger.com/around-the-world/29)

![Figure](/images/blog/2024-08-12-message-to-the-masses/image-02.jpg)

SpaceX has shown the next iteration in its rocket motors. By moving electronic controls to mechanical solutions and utilizing more 3D based manufacturing methods then have, in classic Colin Chapman style, simplified and added lightness. I would LOVE to work for SpaceX!

![Figure](/images/blog/2024-08-12-message-to-the-masses/image-03.jpg)