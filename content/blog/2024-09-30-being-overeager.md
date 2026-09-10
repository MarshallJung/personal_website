---
title: "Being overeager"
slug: "2024-09-30-being-overeager"
date: "2024-09-30"
description: "Swings and roundabouts. It was always going to be that way. In the last week I read two articles around the failure to launch for AI initiatives at two of the biggest."
coverImage: "/images/blog/2024-09-30-being-overeager/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

Swings and roundabouts. It was always going to be that way. In the last week I read two articles around the failure to launch for AI initiatives at two of the biggest.

First, [https://www.theregister.com/2024/09/24/ibm\_layoffs\_ai\_talent/](https://www.theregister.com/2024/09/24/ibm_layoffs_ai_talent/) IBM is riding a wave of regret after betting that their own internal AI tools were definitely going to replace employees with a cheaper alternative. Turns out they may have overestimated their own tooling. Now you can say that IBM isn’t exactly an AI leader, so this is no surprise. But they aren’t dummies and the fact they believed enough in their stack to let go of approximately 8k employees only to have it bite them is a valid evidentiary observation. If IBM is high on their own supply, will the caution (or regret) be even more strongly felt in other companies?

Second, Google pays $2.7B to get back Noam from Character.Ai. [https://www.entrepreneur.com/business-news/google-rehires-ai-pioneer-noam-shazeer-in-27-billion-deal/480378  
](https://www.entrepreneur.com/business-news/google-rehires-ai-pioneer-noam-shazeer-in-27-billion-deal/480378)This hefty sum is largely a license payment for the technology, but may also qualify as the heftiest signing bonus for a spurned re-hire. What does that say about Google’s beliefs in their own technology? Hard to say, but the need for real, talented AI engineers, data scientists, customer facing folks and managers that know what they are talking about (actually DO know) is something that is very much in need. It’d surprise most people to know the level of porkie pies (cockney for lies) that most AI “engineers” are padding round the edges of their resumes.

### The Sharper Image

[https://huggingface.co/jasperai/Flux.1-dev-Controlnet-Upscaler  
](https://huggingface.co/jasperai/Flux.1-dev-Controlnet-Upscaler)Demo: [https://huggingface.co/spaces/jasperai/Flux.1-dev-Controlnet-Upscaler](https://huggingface.co/spaces/jasperai/Flux.1-dev-Controlnet-Upscaler)

![Figure](/images/blog/2024-09-30-being-overeager/image-01.jpg)

It’s been a while since I looked at the state of the art in super-resolution. A few months ago I was talking to someone at Palantir and they tangentially referenced the issue with long distance infrared sensors for targeting purposes. High resolution, independent acquisition and target ID is certainly possible, but payload size is a constraint. But ASIC chips are cheap and a super resolution model based on known infrared profiles could certainly be crammed in for a few ounces and combined with a lower resolution (smaller, lighter) sensor might be an interesting and cost effective solution. It’s the name of the game in commercialized and open market weapons systems. May the best win. OR, you can just fix those old photos of your granny.

### My productivity stack is getting consolidated

How to be more productive with a bunch of meetings

1\. Record audio from the meeting. No need for otter.ai or any other SaaS based speech to text tool. Just record the audio via [https://rogueamoeba.com/audiohijack/](https://rogueamoeba.com/audiohijack/) or [https://existential.audio/blackhole/](https://existential.audio/blackhole/).

2\. Don’t tap away at your keyboard. Just jot down short phrases to describe the most important points.

3\. Upload audio and PDF scan of notes to NotebookLM

4\. Ask Notebook to expand your notes with details from recording

Bonus: at the end of the week or reporting period, create a consolidated summary or an Audio Overview from all your meeting summaries to review the most important concepts in podcast format.

(As of September 26th 2024, NotebookLM now supports audio files — and YouTube videos — as sources. And we’ve added easy sharing tools for Audio Overviews.)

[notebooklm.google.com](http://www.notebooklm.google.com)

### More image ML, less code

A friend and I were working with Roboflow, an open source company with a freemium model to create an interesting PubSec solution. Since that effort the company has come on a ton. They released a no-code workflows process [https://roboflow.com/workflows/build](https://roboflow.com/workflows/build) to enable vision powered ML. The also just released Florence-2 and SAM-2 as new models in the inference process: [https://github.com/roboflow/inference](https://github.com/roboflow/inference). Exciting times to be building solutions with this type of software. What are your ideas?

### Embedded AI

I’ve been noticing that lots of the tools I play around with or use regularly are starting to incorporate their own AI tools, and these are not just wrappers of megaLLMs from the usual suspects. Two this week that I found interesting. First, HuggingFace released a MacOS desktop app. [https://github.com/huggingface/chat-macOS](https://github.com/huggingface/chat-macOS).

![Figure](/images/blog/2024-09-30-being-overeager/image-02.jpg)

Also, Anaconda, which is a bit old school for most but part of the data scientists tool kit for donkey’s (donkey years, a.k.a a long time) has now released the ability to download and use open source models in the Jupyter environment.

![Figure](/images/blog/2024-09-30-being-overeager/image-03.jpg)

Very cool to see these models integrated, especially some that can run locally.

### Book recommendation and how it applies to AI

A while back I read A Hunter-Gatherer’s Guide to the 21st Century by Heather Heying and Bret Weinstein. It’s a fascinating look at how humans still operate in some very primitive ways even in today’s hyper-novel environments. While not specifically called out in the book due to it predating LLMs, there is some interesting overlap in how we think about what AGI is and how to live with its shortcomings and foibles.

[https://www.amazon.com/Hunter-Gatherers-Guide-21st-Century-Challenges/dp/0593086880](https://www.amazon.com/Hunter-Gatherers-Guide-21st-Century-Challenges/dp/0593086880)

Humans have advanced specifically because we are eminently excellent at information-efficient generalization. This is what enables us to adapt to novelty in your environment while minimizing the amount of experimentation you need to do. It does not guarantee 100% accuracy, but tends to point our evolution in the right direction.For much of our history humans tended to pay with their life when we had too much excessive experimentation and tardy adaptation. For this reason, I don’t think that scale alone can get us to a true AGI. Sample inefficiency alone, combined with energy consumption per unit of “thought” in a given model are not tracking with how human intelligence has emerged. But perhaps that’s the wrong thought process for silicon…

### Cool photo

New phone cameras are awesome, and combined with the right kind of eye for setting, I think they can produce some very awesome results. This photo was from earlier this year at Ozark’s International Raceway.

![Figure](/images/blog/2024-09-30-being-overeager/image-04.jpg)