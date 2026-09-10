---
title: "In another’s shoes"
slug: "2024-02-12-in-anothers-shoes"
date: "2024-02-12"
description: "“Every single person is exactly what you would be if you were them. This includes your political opponents. So instead of dismissing them as evil or stupid, maybe seek to understand the circumstances ..."
coverImage: "/images/blog/2024-02-12-in-anothers-shoes/image-01.jpg"
tags: ["AI Strategy"]
readTime: "3 min read"
---

“Every single person is exactly what you would be if you were them. This includes your political opponents. So instead of dismissing them as evil or stupid, maybe seek to understand the circumstances that led them to their conclusions.” — Gurwinder Bhogal

It’s comfortable to dismiss those with different viewpoints as uninformed or lesser than yourself or your in-group. I’ve found “walking a mile in someone else’s shoes” is an old saying that still applies today. It isn’t meant to necessarily make you change your own mind, but there is wisdom and virtue to be found in trying to genuinely understand another’s worldview.

### Fine tune for free a.k.a. Do you need that GPU cluster?

[https://github.com/Locutusque/TPU-Alignment](https://github.com/Locutusque/TPU-Alignment)

I think this is both a fun exercise as well as a statement on the market when it comes to perceived infrastructure needed to fine tune LLM’s. Here they are using Google TPU’s provided for free on Kaggle which probably isn’t a production ready ML pipeline, but I think it also says something interesting about what type of compute is actually needed for open source fine tuned models and their applications to industry specific problems.

### Playground for Gaussian 3D model creation

[https://huggingface.co/spaces/ashawkey/LGM](https://huggingface.co/spaces/ashawkey/LGM)

Fun and functional Gradio playground for generating high resoulution 3D models from text/2D input. With a well formatted high resolution image and appropriate prompting I can see this process generating base 3D models that could be refined quickly for design iteration. Perhaps have this generation on one side of a GAN like process for automatic refinement?

[https://huggingface.co/papers/2402.05054](https://huggingface.co/papers/2402.05054)

### Focus on the important stuff

[https://huggingface.co/spaces/Xenova/remove-background-web](https://huggingface.co/spaces/Xenova/remove-background-web)

Web based tool using transformer.js (because if it can be written in javascript it probably will be) that removes backgrounds automatically in your browser. I think this has a particularly interesting application in segmentation pipelines where you can specify a series of backgrounds such that the requirements for the segmentation model can deal with fewer classes. Not entirely sure that it would make the process any more efficient, but for some reason it makes sense to me.

### Geospatial analysis for us plebes

[https://github.com/opengeos/leafmap](https://github.com/opengeos/leafmap)

Sort of makes you think of mapping for ecological efforts, which is likely a capability, but Leafmap is a spinoff of the geemap python package, built works outside of GEE cloud platform. Bidirectional interactivity with a no-code GUI in a Jupyter environment. What’s not to like?

### How did no-one think of this earlier?

[https://huggingface.co/papers/2402.01391](https://huggingface.co/papers/2402.01391)

This is one of those ideas where when you hear about it you wonder, “Why didn’t I think of that?”. So RHLF is a staple of gathering data to fine tune and guide LLM’s. Code is a fantastic place to specialize in the transformer space because the output and training data is so well structured. (I’d probably argue that coding will be the place where transformers have the most measurable impact on human activity). So what’s the version of RHLF in the code LLM space? Well the errors that come from the compiler, of course. Now if any of us have struggled to get a chat based tool like Gemini to write code for us, we are essentially taking the (inevitable?) errors and rewriting those as prompts for the LLM to fix the code. Well, let’s just cut out the middleman shall we?

### A fair statement.

Perhaps if you need the GDP of a G7 nation and the power consumption of the entire UK, I think it’s safe to say that your design is…suboptimal.

![Figure](/images/blog/2024-02-12-in-anothers-shoes/image-01.jpg)