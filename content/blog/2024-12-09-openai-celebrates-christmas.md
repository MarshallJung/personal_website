---
title: "OpenAI celebrates Christmas"
slug: "2024-12-09-openai-celebrates-christmas"
date: "2024-12-09"
description: "It was quite busy this past week, so we will get this week underway with a rapid fire M(3). Next week I’ll be trying to scrutinize the inner workings for my 2025 crystal ball."
coverImage: "/images/blog/2024-12-09-openai-celebrates-christmas/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

It was quite busy this past week, so we will get this week underway with a rapid fire M(3). Next week I’ll be trying to scrutinize the inner workings for my 2025 crystal ball.

For those that did not read it, my article in The NewStack on infra in the DevOps world went live last week. Read it here: [https://thenewstack.io/why-devops-is-backward-and-how-we-can-solve-it/](https://thenewstack.io/why-devops-is-backward-and-how-we-can-solve-it/)

OpenAI has proclaimed 12 Days of AI or some such, releasing unspecified new models and features for the days leading up to Christmas. The one that I think has made the biggest splash so far, as of the writing of this newsletter is OpenAI o1 is now out of preview in ChatGPT. It’s multimodal as well as more concise in its thinking, resulting in faster response times than o1-preview. OpenAI claims that o1 outperforms o1-preview, reducing major errors on difficult real-world questions by 34%. It’s supposedly safe, though it was jailbroken in about 10 minutes by tricking it into a simulated Gotham City.

Time will tell if this is a gamechanger, though I doubt there will be a major uplift necessitating a rewrite of my o1-preview review newsletter. But for sure there will be specialized applications that will excel with the full version. I’ll be poking at it over the next few weeks.

In summary, a garden of ITC reasoning models, a healthy crop of open source pretrained foundational and others will find solid application in the various industry verticals and SaaS companies.

### What the futurists are saying

![Figure](/images/blog/2024-12-09-openai-celebrates-christmas/image-01.jpg)

It is worth noting that this is an increasingly common message from insiders at the big AI labs. It isn’t unanimous, and you absolutely don’t have to believe them, but I hear the same confidence privately as they are broadcasting publicly. Still not sure how you plan for this and what type of skill sets in the knowledge industry will be valuable, but suffice it to say that this is the biggest disruption of human progress since the advent of computer programming.

### So smol

[https://github.com/huggingface/smol-course](https://github.com/huggingface/smol-course)

For anyone interested in fine-tuning or aligning LLMs, this is a free and open course. It focuses on practical use cases, so if you’re working on something, bring it along. It’s peer reviewed and open so you can discuss and get feedback. It’s going to run for the month of December, which is a nice time to learn new stuff.

For those that want to wrap a small model into an agent that can be deployed as part of an application in order to accomplish a narrow task well, this might be a great starting point. HIPAA compliance, on-prem coding models, refactoring!, mobile apps. You’ll think of something.

### Not investment advice…really not

[https://apps.apple.com/us/app/autopilot-investment-app/id1613625799?mt=8](https://apps.apple.com/us/app/autopilot-investment-app/id1613625799?mt=8)

So anyone that is marginally interested in complex systems and money will probably have the financial markets high on the list of things to analyze. The above link is a GPT powered investment bot. For those who understand LLMs (and you all do my dear readers) will understand that what they have done is create a really good sentiment following algorithm. The portfolio is basically up exactly the same as SPX and minus transaction fees it’s probably down. Making money in complex markets requires thinking outside the box and future forecasting. Neither of these are things that LLMs are particularly good at, and they should not be given their training data and reasoning methods. So I’m not all that worried that the good brokers are in any real danger here.

### Generating the weather

[https://deepmind.google/discover/blog/gencast-predicts-weather-and-the-risks-of-extreme-conditions-with-sota-accuracy/](https://deepmind.google/discover/blog/gencast-predicts-weather-and-the-risks-of-extreme-conditions-with-sota-accuracy/)

Google leverages diffusion based models to handle weather prediction as solid as physics based models in a fraction of the time and cost. GenCast is able to generate a single 15-day scenario in 8 minutes on a single TPU chip. When predicting extreme heat, cold, and high wind speeds, it consistently outperformed the current best operational forecast known as ENS.

Where I’d like to see this is in the fluid dynamics space for CFD modeling. Yes, yes, the market is far less profitable, and there is a bit of wrangling around the 3D space. Google’s GenCast has to at least have the concept of orographic effects like mountain effects, so the shape of a race car wing might be a digestible idea, though I’d have to understand how the model works in a bit more detail than that presented in the paper.

### Still isn’t going to fix the real world

I’ve referenced World Labs in a newsletter previously insomuch as I was hoping that their concept was to digitally twin the real world. We could use this for prototype engineering and testing for items that we could make tangible. World Labs released their promo [https://www.worldlabs.ai/blog](https://www.worldlabs.ai/blog) and while it is a generatively materialized environment (and Google has done the same recently as well) it’s still a video game. So for the construction of a Ready Player One like alternative reality, it’s fine as far as it goes. But aside from the video game and entertainment value I don’t see this getting any closer to solving a true, physics accurate digital twin useful for changing the real world.