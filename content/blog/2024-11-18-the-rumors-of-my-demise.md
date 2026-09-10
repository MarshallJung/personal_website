---
title: "The rumors of my demise…"
slug: "2024-11-18-the-rumors-of-my-demise"
date: "2024-11-18"
description: "So it was bound to happen. I am perpetually early to trends and technology, however I tend to get at least the direction correct, even if the details might need a little filling. It’s not because I’m ..."
coverImage: "/images/blog/2024-11-18-the-rumors-of-my-demise/image-01.jpg"
tags: ["AI Strategy"]
readTime: "8 min read"
---

So it was bound to happen. I am perpetually early to trends and technology, however I tend to get at least the direction correct, even if the details might need a little filling. It’s not because I’m well connected, and not because I’m smarter than your average cat. It’s just a rigorous application of first principle thinking in physics, math, economics and psychology. Understand those and usually you’ll be right about 80% of the time, BUT, BUT you’ll usually be really early as well. You’ve been warned.

And so this past week it seems that the mainstream has caught up with the backside of the Gartner hype cycle, or the “slope of cope” as we have come to label it here in our little newsletter. The articles are numerous and similar.

1.  [https://www.bloomberg.com/news/articles/2024-11-13/openai-google-and-anthropic-are-struggling-to-build-more-advanced-ai](https://www.bloomberg.com/news/articles/2024-11-13/openai-google-and-anthropic-are-struggling-to-build-more-advanced-ai)
2.  [https://www.theinformation.com/articles/openai-shifts-strategy-as-rate-of-gpt-ai-improvements-slows](https://www.theinformation.com/articles/openai-shifts-strategy-as-rate-of-gpt-ai-improvements-slows)
3.  [https://www.wsj.com/tech/ai/the-ai-revolution-is-already-losing-steam-a93478b1](https://www.wsj.com/tech/ai/the-ai-revolution-is-already-losing-steam-a93478b1)

So is it really all over? Of course not, but it’s more nuanced than simply yes or no. So let’s go through a few of those first principles to understand where we are going with AI. Those of you who are regular readers will find some of these ideas repetitive as I’ve included them over the past 6 months or so sprinkled across the newsletters, but we can summarize it all here for brevity. We will also address the known unknowns and the unknown unknowns as well since those are important. In no particular order, let’s go!

***Economics***: Like it or not we live in a capitalist world. There are precious few people who are truly altruistic and you’ll not find any of them in the AI race. So if $$$ drive AI, we need to figure out how to make money with models. The foundational models are most precarious. Obsolescence on SOTA is very easy and costs for the next level of achievement with current algorithms do not get cheaper by much, or fall at all. Besides having the cash there is not much of a moat for foundational models. The current cloud hyperscalers have one unassailable advantage, the infra required is already available. Anthropic and OpenAI can’t easily replicate that, or at least not before going out of business. But it won’t stop the founder mode blather. Sam Altman has said he wants to do a $1 trillion training run for an AI model, which could lead to understanding the nature of physics and solving engineering problems like nuclear fusion. (from: [https://youtu.be/JiwiqYGw4iU?si=n51Dkb0kCK--O8E3](https://youtu.be/JiwiqYGw4iU?si=n51Dkb0kCK--O8E3)) How convenient that the amount of money and energy needed to unlock AGI happens to be exactly the maximum amount available…/sarcasm.

So advantage to the infra owners then. Hyperscalers’ desire to capture this new market, especially as it disrupts current business models like retail and search, will incentivize continued improvements even if those come at a slightly slower pace or from novel algorithmic approaches. In order to hit the bottom of the hype curve we need to see a big foundational company go kaput.

Where the economics continue to make sense is in the specialization of existing models into highly specific industry applications like learning, finance, law, geoscience or code. Built on high-quality domain-specific data curated and maintained in closed source by companies that build a killer UI/UI around a very profitable target market. These types of AI agents/applications will use hyperscalers infra and likely even their foundational models as a starting point.

***Physics/Math***: We can rehash some of the past newsletter observations, but attention based transformers are far from “efficient” both in power as well as in algorithmic construction.

Power. Like it or not, NVIDIA GPU’s ain’t exactly paragons of energy efficiency. Plenty of folks have taken a run at “transformer on a chip” like Sohu, or Etched and while some of these are vaporware, Google’s TPUs are clearly a demonstration that larger models can certainly be trained and possibly with fewer dollars in electrons. Looking at things like ([https://www.reddit.com/r/LocalLLaMA/comments/1gporol/llm\_inference\_with\_tensor\_parallelism\_on\_a\_cpu/](https://www.reddit.com/r/LocalLLaMA/comments/1gporol/llm_inference_with_tensor_parallelism_on_a_cpu/)) and Apple’s M4 Max being 1.8 times faster than the RTX 5000 at the same task, while using 14 times less power are all indications that we can go bigger even with current methods for less cost, which resets that cost/gain curve calculation.

Math is where we have tons of current opportunities. There are way, way more to talk about than we can reasonably cover here, but starting with things like last week’s paper: ​​[https://arxiv.org/abs/2406.15786](https://arxiv.org/abs/2406.15786) where internal efficiency in transformer attention layers can be optimized, to the idea of scaling inference time compute [https://ekinakyurek.github.io/papers/ttt.pdf](https://ekinakyurek.github.io/papers/ttt.pdf) there are a bunch of available optimization. Just to name a few:

Stateful models with nonlinear transitions  
Alternative optimization methods (GAN hybridization, etc.)  
Hardware that allows for sparse connectivity  
Dynamically growing/evolving networks  
Non-feedforward networks, omnidirectional and asynchronous  
Latent losses/objectives not just data space reconstruction

So the space for discovery is still huge and the opportunity to specialize is still in its infancy. This recent article is testament to this: [https://www.science.org/doi/10.1126/science.ado9336](https://www.science.org/doi/10.1126/science.ado9336). I mean how close are we to generating artificial life?

***Psychology***: Last but certainly not least is the way AI interacts with human beings. After all, this technology does not exist in a vacuum. Whether it’s being built to make money or from the esoteric belief that AGI accelerationism will bring about utopia, the end effect is about what it can do for human kind. So we have to understand how humans from all walks of life, cultures and belief systems will work with and around AI. One of the biggest hurdles that we have now is trust. Whether it’s trust in the answers from an AI tool, knowing that hallucinations are a nearly unavoidable part of the deal, or trust that the AI application isn’t going to be wholly replacing a group or type of worker, trust is a very important commodity. It’s here that we have both the most opportunity and the most peril.

From a business perspective, AI applications have to be seen as both cost effective as well as meeting compliance and security requirements. These will be easily met with highly focused models baked into industry specific applications. Chances are they won’t even be sold as “AI” at all. They will simply be more capable “chatbot” type interfaces (agents) that can accomplish detailed and repetitive tasks with a level of accuracy that meets any particular industry’s legal requirements.

From a public perspective, AI based search, retail algorithms and more interactive real time assistants that have things like Anthropic’s computer use capabilities will become nearly indispensable for everyday folks. Even an imperfect implementation of these types of applications will still see major adoption and increasing reliance. Demand for AI will continue to grow.

*So where are we?*

We are busy gathering speed on the slope of cope. Wiping out at the bottom will likely be precipitated by a major economic failure, but if we can persevere the future looks bright. We also don’t know where the next evolution will come from. There is a great deal of research and optimization that has not yet been explored, so meaningful step changes in evolution are very possible. Saying we’ve “hit the wall” is very much a sad implication of the human spirit and curiosity. As an analogy, Polymarket is an online betting platform that played a pretty major role in this last presidential election. Bets are settled using smart contracts via Polygon, a sublayer of the Ethereum network. So, yes, web3 actually found a valuable and profitable application. AI will be no different, we just need to cross the desert first. Hold fast my dear accelerationists, the future’s still bright.

### Marshall’s Infra Corner

After spending a week deep diving into [https://nitric.io/](https://nitric.io/) I came up with some blog ideas, some social content and a few demo summaries. It’s probably not a big surprise to my readers, but I like to learn new things. Infra/Ops seems to be an area that just doesn’t see the kind of innovation or interest that much of the rest of the tech sector receives. Perhaps the scaling laws for hardware have allowed people to ignore optimization, but between application code bloat, security oversights and an aging sysadmin population (let’s be honest, that’s who really got into infra operations) there is real opportunity here. And fear not dear readers! There is a way to bring ML/AI into this to make things faster and less painful. I hope to get to that part in the future. So enjoy my first shot at a Twitter(X) post for Nitric.io

![Figure](/images/blog/2024-11-18-the-rumors-of-my-demise/image-01.jpg)

It doesn’t have to be this way! Make everyone get along and herd your cats by using @nitric\_io. Keep everyone happy with a clean separation between application development and deployment.