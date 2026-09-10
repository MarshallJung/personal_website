---
title: "Useful Rules and Razors"
slug: "2024-04-22-useful-rules-and-razors"
date: "2024-04-22"
description: "This Twitter thread is, I think, a good summary of how the vast majority of folks will use AI in the coding world. I count myself among this identified group. People who are intelligent, curious and u..."
coverImage: "/images/blog/2024-04-22-useful-rules-and-razors/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

1.  Bragging Razor — If someone brags about their success or happiness, assume it’s half what they claim. If someone downplays their success or happiness, assume it’s double what they claim.
2.  High Agency Razor — If unsure who to work with, pick the person that has the best chances of breaking you out of a 3rd world prison.
3.  The Early-Late Razor — If it’s a talking point on Reddit, you might be early. If it’s a talking point on LinkedIn, you’re definitely late.
4.  Luck Razor — If stuck with 2 equal options, pick the one that feels like it will produce the most luck later down the line. I used this razor to go for drinks with a stranger rather than watch Netflix. In hindsight, it was the highest ROI decision I’ve ever made.
5.  Parent Rule — Break down the investments your parents made in you: Time, Love, Energy, and Money. If they are still alive, aim to hit a positive ROI (or at least break even.)
6.  Narcissism Razor — If worried about people’s opinions, remember they are too busy worrying about other people’s opinions of them. 99% of the time you’re an extra in someone else’s movie.

### So how useful is AI Coding?

[https://github.com/the-laughing-monkey/agent-web-crawler/tree/main](https://github.com/the-laughing-monkey/agent-web-crawler/tree/main)

[https://x.com/Dan\_Jeffries1/status/1779472810412286335](https://x.com/Dan_Jeffries1/status/1779472810412286335)

This Twitter thread is, I think, a good summary of how the vast majority of folks will use AI in the coding world. I count myself among this identified group. People who are intelligent, curious and understand goal driven tasks, but are not particularly good programmers. We may not have done a bunch in our lives, or it may not be a “native” language that we understand. The summary is great with some good suggestions for tools that are truly useful. The takeaway? “So is AI about to put everyone out of a job? Hell no it’s not. Again, if anything, top notch coders who can think in code and define problems clearly are going to be more in demand. If you can think about thinking you’ve got a tremendous advantage in the coming world.”

The concept of thinking about thinking, and I’d argue more importantly defining and writing clear questions, you will be able to leverage these tools much better than others. It will change the way we code, but it won’t put anyone out of work yet.

### Time series falls to the transformer?

[https://arxiv.org/pdf/2310.03589.pdf](https://arxiv.org/pdf/2310.03589.pdf)

I wasn’t particularly convinced that transformer based models would be a good fit for time series data, but this is an interesting paper that tells the opposite story. At the heart of the matter is the attention mechanism in transformers that might be able to learn existing patterns and extend. IT makes sense, but I always stumbled around the idea that very complex systems like stock markets have a repeatable and predictable language. The more complex the phenomenon the less performant the attention mechanism can be. In this paper the model leverages a Transformer-based architecture, optimized for time series data, with self-attention mechanisms that facilitate the handling of temporal dependencies and patterns across varied frequencies and characteristics. They claim better performance than other classic statistical and neural network based prediction methodologies.

### Look…I can explain

[https://www.researchgate.net/publication/379057225\_Unintended\_effects\_of\_algorithmic\_transparency\_The\_mere\_prospect\_of\_an\_explanation\_can\_foster\_the\_illusion\_of\_understanding\_how\_an\_algorithm\_works#:~:text=From%20a%20practical%20standpoint%2C%20we,unfounded%20reliance%20on%20algorithmic%20recommendations](https://www.researchgate.net/publication/379057225_Unintended_effects_of_algorithmic_transparency_The_mere_prospect_of_an_explanation_can_foster_the_illusion_of_understanding_how_an_algorithm_works#:~:text=From%20a%20practical%20standpoint%2C%20we,unfounded%20reliance%20on%20algorithmic%20recommendations).

We can’t explain how you get a particular answer from AI, which can make people distrust AI results… unless you just tell them that an explanation of the system is available. Then they trust the results more *EVEN* if they never look at the explanation.

How many of my dear readers have been in the technical sales role where the mere appearance of expertise and an extremely cursory, hand wavy explanation of the technical solution is good enough. Is it because the person on the other end is incapable of understanding the details, or is the attempt at an explanation good enough for them to assume that it actually works?

### Llama 3

Yes, Llama 3 was released this week and as we get further down the road of understanding how these tools work, there are much better questions being asked about how these models are trained and how they really, really work.

![Figure](/images/blog/2024-04-22-useful-rules-and-razors/image-01.jpg)

So an 8B model was trained on 15 trillion tokens? Where does all this data come from? IS there a heap of synthetic data in there? Did they rerun a bunch of epochs across the same data? Definitely not compute optimal, though there are some issues with Chinchilla as we have recently found out. Apparently Meta stopped training Llama 3 even though gradients were still falling after 15T. I guess we should simply extrapolate that AGI will be 1 parameter and nearly infinite tokens????? Just kidding, kind of.

It does bring up an interesting tidbit in Zuckerberg’s interview which we will cover here…

### Zuck on Dwarkesh

AI winter is here. Zuckerberg is a realist, and believes progress will be incremental from here on.

1.  Growth of AI models is real world constrained. We will hit energy and efficiency bottlenecks well before any AGI.
2.  “I actually think before we hit that, you’re going to run into energy constraints. I don’t think anyone’s built a gigawatt single training cluster yet. You run into these things that just end up being slower in the world.”
3.  “I just think that there’s all these physical constraints that make that unlikely to happen. I just don’t really see that playing out. I think we’ll have time to acclimate a bit.”
4.  Zuckerberg would stop open sourcing if the model is the product.
5.  “Maybe the model ends up being more of the product itself. I think it’s a trickier economic calculation then, whether you open source that.”
6.  Believes they will be able to move from Nvidia GPUs to custom silicon soon. This is really Meta specific as we have seen lots of startup AI chip makers and Google didn’t use NVIDIA GPU’s for Gemini, so this is already here.
7.  “When we were able to move that to our own silicon, we’re now able to use the more expensive NVIDIA GPUs only for training. At some point we will hopefully have silicon ourselves that we can be using for at first training some of the simpler things, then eventually training these really large models.”

Zuckerberg is pessimistic about the energy requirements to train future models. Looking at history, the FLOPS per unit energy has doubled every 24 months for most of the last 20 years. However, is this a rule that can be assumed? Smaller chip architecture, more energy efficiency can probably help, but outside macroeconomic forces and physics point to a leveling off of current methods. I think this is an accurate assessment, though far from universally accepted.

![Figure](/images/blog/2024-04-22-useful-rules-and-razors/image-02.jpg)

Zuckerberg sees the ecosystem built around the model as the goldmine. It is the user context, the network graphs of personal interaction, the moderation, the memory, and the infrastructure that is the product. This allows him to freely release open source models, because he has all of the rest of the pieces of user facing scaffolding already done. However, is Facebook and Instagram a place where AI is best used? It’s where Meta currently makes the money.

He believes that IF an actual AGI is something that looks more like a personal companion that moves with the user and is not dependent or part of a larger central model or infrastructure would remove Meta from the ecosystem and would cause them to re-evaluate the current open-source posture.

Overall it was a pretty conservative podcast, and one that I feel was well reasoned, though some others may disagree. But as fellow observers have commented, playing it conservative has never been a way to raise $$$ in SV and Meta isn’t looking for investment. Your observations are welcome.