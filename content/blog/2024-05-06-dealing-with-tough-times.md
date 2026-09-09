---
title: "Dealing with tough times"
slug: "2024-05-06-dealing-with-tough-times"
date: "2024-05-06"
description: "Dealing with tough times"
coverImage: "/images/blog/2024-05-06-dealing-with-tough-times/image-01.jpg"
tags: ["AI Strategy"]
readTime: "3 min read"
---

We all go through tough times. For some it’s family related, others have health issues. But for the vast number of us we will also at some point face pain in our working lives. I know that these days are tough for the tech industry. Probably the leanest since the dot com wipeout of 2001–02. Recently I was part of a significant downsizing at the startup that I was working at. I liked the company and believed in the mission, even though the leadership had lost the employees trust and apparently also lost direction for the company in general. Being a veteran of the startup world, getting let go is a common reality. Something that you know is always right around the corner. Afterall, we only hear about the unicorn success stories where every employee rides off into the sunset with FU money, but most companies don’t make it and everyone is off to look for the next idea. It’s hard to see a good product at a startup with a solid team and good culture get run into the ditch, but it happens way more than most know.

I don’t have any more advice than most more wise than me. Keep your chin up, support one another and remember that helping someone else is sure to come back in return tenfold over.

### It’s the data stupid

[https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/](https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/)

Short post, but seems to be a data point reinforcing my position that transformer (and diffusion) models are not unique, and are by default limited by their training data. Emergent properties are only a curious “observation” of the underlying data. What this seems to say is that barring major efficiency improvements in architecture, the arms race will be won by those companies that have the most data. And who might that be?

“It implies that model behavior is not determined by architecture, hyperparameters, or optimizer choices. It’s determined by your dataset, nothing else. Everything else is a means to an end in efficiently delivery compute to approximating that dataset”

### I might also be wrong

[https://arxiv.org/abs/2404.19756](https://arxiv.org/abs/2404.19756)

Here’s a concept that seems simple once someone smarter than I suggests it. Kolmogorov-Arnold Networks. Instead of having fixed activation functions on the neurons in a NN (sigmoid, relu, tanh etc.) and weights on the graph edges we can instead have a learnable activation function (in this case a 1D learnable spline function) on the edges. These can be a much better fit building the network and apparently have a meaningful uplift in performance. Interesting concept for sure, and this is the kind of thing that could prove me wrong in the plateauing of model performance.

![Figure](/images/blog/2024-05-06-dealing-with-tough-times/image-01.jpg)

### I might also not be wrong

![Figure](/images/blog/2024-05-06-dealing-with-tough-times/image-02.jpg)

Where’s the AI zooming past us to superintelligence that Kurzweil etc. predicted/feared? As long as AI systems are trained to reproduce human-generated data (e.g. text) and have no search/planning/reasoning capability, performance will saturate below or around human level. Furthermore, the amount of trials needed to reach that level will be far larger than the amount of trials needed to train humans. LLMs are trained with 200,000 years worth of reading material and are still only as good as a reasonably intelligent Jeopardy contestant. Their usefulness resides in their vast accumulated knowledge and language fluency.

### Same as it ever was

As Yann LeCun says

1\. Claim that AI can do everything

2\. Raise tons of money from investors.

3\. Tell governments that AI is very dangerous and that open source AI should be regulated out of existence.

….

4\. Profits!

The hidden, and discernable process behind AI regulations

![Figure](/images/blog/2024-05-06-dealing-with-tough-times/image-03.jpg)