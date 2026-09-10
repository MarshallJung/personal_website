---
title: "When you’re out there in the world"
slug: "2024-04-08-when-youre-out-there-in-the-world"
date: "2024-04-08"
description: "If you have the same opinions as everyone around you, then either you are basing your views on your friends or you are basing your friends on your views."
coverImage: "/images/blog/2024-04-08-when-youre-out-there-in-the-world/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

If you have the same opinions as everyone around you, then either you are basing your views on your friends or you are basing your friends on your views.

Both paths lead to blindness. — Gurwinder Bhogal

### Following up

In a brief discussion around my lead article last week, a smarter person than me pointed out that the big AI-first D&A company wouldn’t be so silly as to simply rely on raw GP4 API calls to chain together workflows. There is, undoubtedly, some kind of prompting filter that universalizes the process such that the pipeline would be agnostic to the LLM backing it. In my weekly research I have not run across such a system. Not that it does not exist, simply that I have not heard of one. The company did not allude to this in the workshop I attended, nor when I asked about the future proofing of LLMs did they speak about such a system. Thinking a bit deeper, how would such a system work? Anyone that has played around with various LLMs will know that they sometimes give similar, but different answers to the same questions. Normally this isn’t such a big deal, but what if the results of a carefully crafted prompt, intertwined with company specific tools is not a “common” LLM instruction chain? I don’t think that you could just swap out GPT4 for vanilla Llama2 and expect the same results. What if mission critical supply chain decisions are riding on the AI prompt chain? If this no code tool enables dozens of employees to make their own critical data decisions…how much “prompt/code” review would be needed to make sure it’s not screwed up? Suffice it to say I don’t really like using LLMs in this way. Especially if there is no “filter” in the way to universalize prompting to be model agnostic, if there is even such a thing. Maybe the lesson here is don’t use LLM’s where they should not be used.

### Back to basics.

Sometimes it’s good to review the basics. I am not immune to this either. Here are two links to get you started in the world of LLMs.

[https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/)

[https://youtu.be/wjZofJX0v4M?si=pU1yuWzjaBOnS\_Cc](https://youtu.be/wjZofJX0v4M?si=pU1yuWzjaBOnS_Cc)

### Train your own foundational model for “cheap”

[https://github.com/myshell-ai/JetMoE](https://github.com/myshell-ai/JetMoE)

So it took about $100k and two weeks to train a MoE model that outperforms Llama2. Let’s assume the benchmarks are accurate and repeatable. What does this mean? Well, I was kind of wrong for a start. In my article about Peak AI ([https://medium.com/@jung.marshall/traversing-the-hype-curve-126ce704b389](https://medium.com/@jung.marshall/traversing-the-hype-curve-126ce704b389)) one of the reasons I stated for slowing progress in the world of LLMs is the compute costs are too large for smaller players to roll their own. Now $100k is not cheap exactly, but it’s going in the right direction. Could be cheaper if you take longer as well. Does this gain you more than fine tuning an open source foundational model? I don’t know the answer to that, but watch this space to find out when I am once again…wrong.

### How inefficient?

[https://arxiv.org/abs/2404.02258](https://arxiv.org/abs/2404.02258)

It turns out that most of the compute in LLM inference is wasted since not all next tokens are equally hard to predict. In this paper by DeepMind, they propose a Mixture of Depths, where the model intelligently predicts how much compute is needed next. For example it takes more compute to predict the next token after a full stop on a sentence. Makes sense right? So if the needed compute is predicted to be less we can skip layers in the transformer and still expect reliable performance. Wait…is this me being wrong again!?

![Figure](/images/blog/2024-04-08-when-youre-out-there-in-the-world/image-01.jpg)

### Security of LLMs

So it turns out that if you are persuasive, verbose and subtly repetitive you can break most commercially available LLMs safety protocols, especially as those models accept much longer context prompting. Anthropic published their findings here: ([https://www.anthropic.com/research/many-shot-jailbreaking](https://www.anthropic.com/research/many-shot-jailbreaking))

![Figure](/images/blog/2024-04-08-when-youre-out-there-in-the-world/image-02.jpg)

My biggest takeaway from the many-shot jailbreak is actually the unreasonable effectiveness of this Cautionary Warning Defense prompt: jailbreak effectiveness tanks from 61% to 2%. I’ve found final-message appended reminders useful for boosting instruction following generally. If you are using an LLM that has long context prompt capability, keeping it on track with end of message reminders is more effective than relying on an initial system prompt, especially if you get really deep with a particular task.