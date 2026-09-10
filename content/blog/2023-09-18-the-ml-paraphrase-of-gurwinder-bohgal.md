---
title: "The ML paraphrase of Gurwinder Bohgal"
slug: "2023-09-18-the-ml-paraphrase-of-gurwinder-bohgal"
date: "2023-09-18"
description: "“You can gauge someone’s ignorance by the number of AI solutions they explain with the same answer. Those who fix many different issues (e.g. time-series, tabular, physics constrained) with just 1 sol..."
coverImage: "/images/blog/2023-09-18-the-ml-paraphrase-of-gurwinder-bohgal/image-01.jpg"
tags: ["Monday Morning ML","AI Strategy"]
readTime: "4 min read"
---

“You can gauge someone’s ignorance by the number of AI solutions they explain with the same answer. Those who fix many different issues (e.g. time-series, tabular, physics constrained) with just 1 solution (e.g. LLMs) are recycling explanations because the demand for answers outstrips their supply.”

Harsh but true. I’ve been doing some pro-bono consulting for old friends in the oil patch and I’m consistently surprised by the number of folks that want LLMs “like ChatGPT” to solve all their problems. There are the right tools for an ML solution and the wrong ones. Don’t get over committed.

Read here: [What is a Physics Informed Neural Network?](https://benmoseley.blog/my-research/so-what-is-a-physics-informed-neural-network/)

And here: [https://arxiv.org/abs/2308.16898v1](https://arxiv.org/abs/2308.16898v1)

And here: [https://arxiv.org/abs/2207.08815](https://arxiv.org/abs/2207.08815)

And here: [https://arxiv.org/abs/2305.02997](https://arxiv.org/abs/2305.02997)

Public Service Announcement — **OpSec!**

It likely depends on your public exposure (social media, PR etc.) but I have received a number of “honeypot” contacts from shady Twitter(X) and LinkedIn accounts. They seem to all use generic photos from young women and write atrocious English (AI powered?). They ask about work and send pictures etc. I block them pretty fast now that I know what to look for, but it’s probably worth making an announcement for the company to keep an eye out for this type of attack vector.

### Where to use one ML algorithm vs. another

[https://arxiv.org/abs/2305.02997](https://arxiv.org/abs/2305.02997)

When we think about 3D object “optimization” we will generally be working towards min/max target goals. Minimize drag or maximize downforce, for example. Those values as derived from DE tools such as OpenFOAM are often represented in tabular format. When that data is skewed, long tailed or otherwise irregular, “old fashioned” gradient boosted can outperform NN based solutions. And as a plus they are easier and cheaper to implement. Another point for choosing the right tool for the job.

### ReST to get better!

In this paper [https://arxiv.org/pdf/2308.08998.pdf](https://arxiv.org/pdf/2308.08998.pdf) Google’s DeepMind proposes using self generated and filtered data sets to improve model accuracy without relying on RLHF. This concept is a hard one for me to understand since traditional ML algorithms reinforced with graded output from themselves always leads to overfitting. I’m going to really have to try and understand this topic more deeply.

![Figure](/images/blog/2023-09-18-the-ml-paraphrase-of-gurwinder-bohgal/image-01.jpg)

**Moar learning from** [**https://dsboost.dev/**](https://dsboost.dev/)

Models usually cannot work with textual data, so we need to convert words into numbers. This is typically done with word embeddings. These are vector (numerical) representations of text. We have four words in this example: Apple, Banana, Cat and Dog. All of them are converted into vectors and visualized. Cosine “similarity” can tell how similar two vectors are. The range for cosine is between 0 and 1. 0 means no similarity, while 1 means exact match. To calculate Cosine similarity in the 2D space we use the angle between the two points. We can also use the formula from linear algebra where a⋅b is the dot product of a and b, and ∥a∥ and ∥b∥ are the magnitudes respectively. As you can see from the calculation, since both Cat and Dog are animals, they are pretty similar. Apple and Dog are far from each other, and the angle is larger, so the Cosine similarity is lower. Cosine similarity is not restricted to 2D vectors. You can do the same calculation for embeddings that contain hundreds of elements so 3D objects, properly vectorized, can also be compared.

![Figure](/images/blog/2023-09-18-the-ml-paraphrase-of-gurwinder-bohgal/image-02.jpg)

### Energy Efficiency

A bit about a nifty ongoing project that I have been working on for a few years. Solar thermal is significantly more efficient at capturing energy than solar voltaic. It’s also easy to build at home. On the back of my house I have a 4’x16’ solar thermal panel that I built in my garage. It takes cool air from the sub-basement, routes it via a super efficient radial fan (meant for radon extraction) and returns it to the house. A simple temperature feedback switch turns it on and off.

![Figure](/images/blog/2023-09-18-the-ml-paraphrase-of-gurwinder-bohgal/image-03.jpg)

![Figure](/images/blog/2023-09-18-the-ml-paraphrase-of-gurwinder-bohgal/image-04.jpg)

![Figure](/images/blog/2023-09-18-the-ml-paraphrase-of-gurwinder-bohgal/image-05.jpg)

As you can see in the above pictures, air is heated from approximately 65F to 210F. If you do the thermodynamic calcs on this with the mass of air and the electricity consumed by the fan we get a coefficient of performance of approximately 2.1. Payback on materials was about 3 months, or one winter. Planned upgrades include a thermal sand battery in the basement where I can bank some of the heat for timed release as well as running the hot water heater inlet through the battery to preheat water for showers/dishes etc. Let me know if you have any other questions!