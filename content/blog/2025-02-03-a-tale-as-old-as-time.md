---
title: "A Tale as Old as Time"
slug: "2025-02-03-a-tale-as-old-as-time"
date: "2025-02-03"
description: "A Tale as Old as Time"
coverImage: "/images/blog/2025-02-03-a-tale-as-old-as-time/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

“Talk is cheap”. “Actions speak louder than words”. Chances are that you’ve heard these sayings before. And, yes dear reader, I’m keenly aware that by writing a newsletter all I’m really doing is talking. If what I placed here on paper every week was actually all the things that I was building and doing then I’d probably be rich and retired, or so darn busy that I’d probably not have a chance to write the newsletter in the first place. So, yes I’m aware of the irony of writing about this very topic. But goodness knows that as I’ve progressed through my career and gotten wiser in my years I have noticed the “talkers” more and more. Quite often people that have good ideas do not also have the ability to commit them to paper, code, steel etc. a.k.a real life. They’ll talk a great deal about how it ought to be done or how someone else should do it in a very specific way. But they won’t do it themselves. By putting your ideas out into the world, you are opening yourself up for criticism and derision. In some ways this helps iron out the wrinkles, correct the misapprehensions and accumulate wisdom, but it can be very frustrating. When someone else dismisses your work without themselves providing help or examples red mist can result. It’s too easy to simply throw your hands up at the perceived lazy criticism and simply say, “well do it yourself then!”. Don’t do that. Better you take a few minutes to write a bit, take a walk and think about a quote from Naval Ravikant, “*If you dislike something, look for the truth in it; if you love something, look for the lie in it.*”

### Just Get Gud Bro

[https://semianalysis.com/2025/01/31/deepseek-debates/](https://semianalysis.com/2025/01/31/deepseek-debates/)

I wasn’t planning on talking any more about Deepseek this week, but the bloodbath in the markets associated with the regular folk (non-AI people to you and me) when they glommed onto the talking heads assertions that Deepseek R1 was 70% cheaper than any US based AI companies models was pretty epic. X was thick with the news and debate for a week ahead of the market wipeout, so I was under the impression that people had seen through the hand wavy numbers for cost released by Deepseek and all was well. But it turns out that when you are deeply involved in a particular technology you can lead the markets by a pretty substantial margin. That being said, I’d be a buyer of NVIDIA here, because despite Deepseek’s clever optimizations, scaling and access to the infra still wins in the long run. (Not financial advice, obviously)

The Semianalysis article above states that the widely circulated $6M training cost is incorrect, as it only accounts for GPU pre-training expenses and excludes R&D, infrastructure, and other critical costs. According to their findings, DeepSeek’s total server CapEx is around $1.3B, with a significant portion allocated to maintaining and operating its GPU clusters. There is also the prickly question of how R1 was trained with some reasonable claims that OAI’s o1 served as a distillation funnel. Could Deepseek create a reasoning model as effective if it did not have access to the OAI API? Was MSFT looking the other way as Chinese IPs hammered Azure to extract the information from OAI’s models? Who knows, but given the OAI/Oracle Stargate announcement perhaps Altman and MSFT are on the outs. Tasty drama indeed.

Still, the AI cold war between China and the US is a good thing. Keeps us on our toes and with an AI friendly administration we will see some really cool advancements in the near future.

### Brevity above all

OK, one more R1 based finding (though I think this may apply to models other than R1. @NeginRaoof\_ on X found the following:

![Figure](/images/blog/2025-02-03-a-tale-as-old-as-time/image-01.jpg)

Basically, the longer the model response, the more likely it’s incorrect. So proposing that multiple parallel runs of a prompt should return the shortest. Create feedback where you multiply by the reward but divide by the square root or cube root of the length, this way the model will inherently be pushed towards smaller more accurate chains. OAI o1, I think, has something similar. Also, keep in mind this was done on math problems only, so not sure how well this would translate to other non-structured data. (And ironically, doesn’t this apply to the real world too? The longer, yappyier an answer from someone the less likely that they probably know the actual answer. Call it the “politician’s clue”)

### Still missing the trees for the forest

YC isn’t by any means the be all and end all of the tech space when it comes to getting ahead of the next big thing in tech. However, the following summary of what they are looking to build in 2025 is this:

![Figure](/images/blog/2025-02-03-a-tale-as-old-as-time/image-02.jpg)

You know what’s still missing? Data startups that make bringing the entire mess of enterprise data to the table for the current crop of AI tools. Without a universal, distributed, zero trust semantic data model, the AI agents that YC wants built will inevitably be a disappointment. Sure they might work most of the time well enough, but they’ll fail often enough that no one will trust them. Without the concrete and rebar of a good data foundation AI tools are a castle built on sand.

### Radiation Resistant Alloys

As we look to modernize and increase electricity in the US, nuclear power is most definitely on the table. I’ve been a proponent of nuclear power for so many years. Way before it became cool. I even wrote about a hydrogen resistant stainless alloy about a year ago. One of the issues that plagues the newer breeds of reactors like molten salt tungsten and other inherently safe designs is the lack of radiation resistant metals to build the containment and piping required. Hot swapping these bits is really tough. I stumbled across this article recently: [https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.8.115406](https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.8.115406)

Quick summary: Refractory high-entropy alloys (read; metals that can withstand mechanical stress in high heat environments) are materials made from multiple high-melting-point metals in roughly equal proportions. Those containing tungsten exhibit minimal changes in mechanical properties when exposed to continuous radiation and could be used to shield the crucial components of future nuclear reactors. According to the paper, the findings suggest that the material’s radiation resistance cannot be explained by its robustness to radiation-induced defect formation. So they are going to have to look at other properties. This kind of research is both fascinating and hugely required.