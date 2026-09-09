---
title: "Don’t wait for the followup meeting"
slug: "2024-02-18-dont-wait-for-the-followup-meeting"
date: "2024-02-18"
description: "Don’t wait for the followup meeting"
coverImage: "/images/blog/2024-02-18-dont-wait-for-the-followup-meeting/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

There comes a time in many meetings where someone says something of the form

“Let’s do some homework on this and have a follow up meeting to make a decision”.

In almost all cases, this is a bad idea and you should just make the decision right there.

There are usually several surface-level reasons to push the decision

a) The right stakeholders are not in the room or not have been checked in on

b) You think you are missing key data or clarity needed to make a decision

c) You might be unhappy with the options presented.

What each of these misses is that the momentum of making a decision is far more important and if any of the cases above is true, you can almost always unwind the decision soon after. If a key person is not in the room, they can be consulted async after. If some key data needs to be found, there is almost always time after the decision to incorporate it. I started adopting this rule when I started to run large organizations and I quickly found a couple of things. The speed of decision making compounds and improves the clock rate of the organization. I can’t think of a single example of when we have regretted or needed to overturn a decision. In almost every case, people knew what the call needed to be and were using as an excuse to hide some other organizational unease. — Sriram Krishnan

### It’s cool…but

![Figure](/images/blog/2024-02-18-dont-wait-for-the-followup-meeting/image-01.jpg)

![Figure](/images/blog/2024-02-18-dont-wait-for-the-followup-meeting/image-02.jpg)

So it’s nearly impossible to have not seen the videos that OpenAI released with their new text to video diffusion transformer model called SORA. They are really good, and considering where we came from only about 8 months ago (Will Smith eating spaghetti anyone?) it’s kind of mind blowing to think of where it’ll be in another year. One interesting thing that came about from reading the technical release was the reference to game engines in the training pipeline. Video game engines model physics well and by using the engine to build synthetic training data the idea of physics is incorporated into the world model understood by the transformer NN. SORA learns a physics engine implicitly in the neural parameters by gradient descent. It’s one of those ideas that is simple when you think about it. It’s not perfect however, and it will come as no surprise that I noticed the uncanniness when reviewing the footage generated vehicles. They just don’t behave like real cars…sorry.

Setting aside the computational requirements, I’m still more convinced than ever that the concept of 3D, physics constrained engineering should be possible. The added tweak here is creating enough synthetic data to train a model, when those engineered 3D objects must stringently meet reality. No errors allowed.

(As an observation on the side, however, I do think that the epistemological crisis many are going to have when they are totally and entirely duped by AI generated content is yet to come. Either that or live your life paranoid about anything and everything. More to come.)

### Who needs RAG?

[https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)

And in the other big news of the week Google announces Gemini 1.5 with 10 Million token context capabilities. I personally think this is bigger news than SORA, but humans are visual creatures so PR is skewed. I am personally really liking Gemini Advanced, though the prompting methodology takes a bit of getting used to. Still being able to drop massive data in a prompt does sort of put RAG out to pasture and simplify the engineering process. We will have to see how that works in practice vs. the paper test cases.

But as readers know I like to try and hypothesize a bit beyond the headlines. I an interesting twist, another paper released by Google ([https://arxiv.org/abs/2402.09371](https://arxiv.org/abs/2402.09371)) one day before announcing that they have near-perfect recall and in-context learning over 10M tokens seems suggestive that Gemini 1.5 is a substantially different design. What could it be?

### The beauty of machine learning

This paper [https://arxiv.org/abs/2402.06184](https://arxiv.org/abs/2402.06184) demonstrates the chaotic behavior of the meta-loss landscape. Here is a dense grid search over two hyperparameters. When the changes in model performance can be attributed to its extreme sensitivity, it presents a formidable challenge for algorithms designed to optimize hyperparameters. Understanding the fractal characteristics of this landscape could provide valuable guidance for navigating its complexities, ultimately improving the efficiency and effectiveness of metalearning strategies. Definitely an area for improved performance outside of the hubbub around transformers.

![Figure](/images/blog/2024-02-18-dont-wait-for-the-followup-meeting/image-03.jpg)

### The insanity and loose money needs a home

[https://lambdalabs.com/blog/lambda-raises-320m-to-build-a-gpu-cloud-for-ai](https://lambdalabs.com/blog/lambda-raises-320m-to-build-a-gpu-cloud-for-ai)

![Figure](/images/blog/2024-02-18-dont-wait-for-the-followup-meeting/image-04.jpg)

For a 4 second commentary that tells you everything you need to understand, see: [https://youtu.be/hsmmznL9sFg?si=XyPYnTUQzdmaloEf](https://youtu.be/hsmmznL9sFg?si=XyPYnTUQzdmaloEf)