---
title: "A war on two fronts"
slug: "2024-05-20-a-war-on-two-fronts"
date: "2024-05-20"
description: "A war on two fronts"
coverImage: "/images/blog/2024-05-20-a-war-on-two-fronts/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

This last week saw two of the biggest heavyweights in AI, Google and OpenAI release new all-in-one models. In some ways they were very similar. Multimodal models that are trying to be everything to everyone. There were differences, but overall I think we are definitely seeing the bifurcation of the AI space. Summed up concisely, large, proprietary API driven multimodal models from various hyperscalers contrasted with smaller open source models, fit for purpose and on-prem capable. In some ways, no different than any other technology, really. Commercial enterprises will have a choice and the business cases for one vs. the other will fall out from there.

As for the models and products themselves, I’m pretty agnostic. Assuming that the UI for the two models was exactly the same (that the models weren’t trying to seduce you…wink, wink) I bet you probably couldn’t tell which was which. A friend sent me this paper ([https://arxiv.org/abs/2405.07987](https://arxiv.org/abs/2405.07987)) and on the whole I agree. When these autoregressive transformer based models are trained on largely the same enormous datasets, and the SOTA network structure and tweaks are incorporated in each they will basically end up giving the same benchmarked responses. From a business perspective this tells me that aligning your model with your existing infrastructure is probably the best idea. Have GCP? Use Gemini. Run on MSFT? Use their hosted version of GPT.

### CAT3D, the best 3D

[https://arxiv.org/abs/2405.10314](https://arxiv.org/abs/2405.10314)

[https://cat3d.github.io/](https://cat3d.github.io/)

Recently I’ve been considering getting a 3D scanner. Combined with design software like Fusion360, 3D printing and online manufacturing from companies like SendCutSend and Cloudmaker, it’s getting to the point that we nearly have a Star Trek replicator available to the individual maker. However, back in the day I used to use photogrammetry to create some of my CAD drawings. Now with the advent of processes like the one linked above that uses unique diffusion model architecture, 3D scenes can be generated from only a few views. I think about this from the manufacturing arena. Use your CAD model, or plan and elevation views of any particular object to generate a 3D model. OR…how about going backwards and decomposing a known 3D object to a few views as a “language” and then use those views to generate a unique new object?

![Figure](/images/blog/2024-05-20-a-war-on-two-fronts/image-01.jpg)

### Slack wants your data

![Figure](/images/blog/2024-05-20-a-war-on-two-fronts/image-02.jpg)

Long before “AI” was a thing I was a “Big Data” guy, and in some ways that has never really gone away. I may be showing my O&G roots here, but in the AI world data has always been the “oil” and those who have it are the wones with the resources. I fully expect companies like Slack, or Google, or Mayo Clinic etc. to jealousy and legally protect these unique data sources. However, knowing what we know now, there is never any guarantee that your proprietary company information won’t be leaked to someone else at some point. Who was it that was talking about this way back when…hmmmm.

![Figure](/images/blog/2024-05-20-a-war-on-two-fronts/image-03.jpg)

### It was always going to end up in the courts

[https://www.bloomberg.com/news/articles/2024-05-16/sony-music-warns-companies-to-stop-training-ai-on-its-artists-content](https://www.bloomberg.com/news/articles/2024-05-16/sony-music-warns-companies-to-stop-training-ai-on-its-artists-content)

From the article here about Sony and artist licensing, to OpenAI being super cagey about how SORA was probably trained on YouTube content, to MSFT Copilot and opt-out on incorporating your Git repos, to Slack hoovering up your DMs’, files and internal company discussions. The future of AI will always likely end up being decided by the courts and not in the world of technology. How will this affect the development of AI in the US vs. elsewhere in the world where they are not so worried about legalities?

### Cost control

[https://ai.google.dev/gemini-api/docs/caching](https://ai.google.dev/gemini-api/docs/caching)

One of those obvious ideas that makes sense when you think about it. Caching has been a thing in big databases for a very long time, and is used quite extensively in Google Search and other social media platforms. In my own use cases with really long context prompts (several 100k) it’s great to be able to quickly reference this data and speed up layered or more complex prompts. It will also be a great boon for agents since those tend to me more task specific and require more structured information for operations.

### Some questions

1.  Since OpenAI and Google seem to want to entwine the AI into everyday life (wasn’t that supposed to be Google Home, Alexa and Siri?) here are some things that we might be able to do. And maybe some we don’t want them to do.
2.  Does it do the basics? Like when you ask Siri to take you back to your car, it doesn’t work, but if you ask it to take you back to your parked car, it does. If you ask 1,000 questions how many does it answer accurately? Are there arenas where it can’t help at all?
3.  Is it true multi-*modal*? Most of the demos we’ve seen are just with camera and microphone. What about the barometer inside your phone? Or the IMU motion sensors? Or the heart rate sensor inside your watch? What kind of data sets are required to understand these inputs? Where do those exist?
4.  Is it true multi-*model*? Can you ask it a question like, “Please write me a graduate-level essay on the economic underpinnings of the Civil War but please ask Google Gemini, Meta Llama, OpenAI ChatGPT, Anthropic Claude, and please tell me where these differ?” Will this even be cost effective?
5.  Can it code? With a big context window (Google just announced beta access to a two million token window). Like drop your whole code folder into the model prompt and ask it to add features, debug, etc. Maybe the most likely given the highly structured nature of code, but still something that is years away at this point.
6.  Can you control every application you already use, whether it’s from Autodesk, Adobe, X, or, really any company? Can it instantly get smart about any new thing, like can it figure out how to export a 3D model from Autodesk and format that correctly to send via .DWG to Cloudmaker? What kind of APIs will need to be built and maintained to make this work. Who develops them?
7.  Can I really talk to it about medical and mental health concerns, even ones that will get me to go see a doctor? What kind of PII issues does this bring up and who is responsible for any “malpractice”?

What other ones are you thinking about?