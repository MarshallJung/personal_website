---
title: "Know your mission and have faith"
slug: "2023-11-06-know-your-mission-and-have-faith"
date: "2023-11-06"
description: "“I spent so much of my life terrified of what I was going to become and whether I was going to be right here right now. God, how much time did I waste afraid I wasn’t going to be right here right now?..."
coverImage: "/images/blog/2023-11-06-know-your-mission-and-have-faith/image-01.jpg"
tags: ["Intelligence"]
readTime: "3 min read"
---

“I spent so much of my life terrified of what I was going to become and whether I was going to be right here right now. God, how much time did I waste afraid I wasn’t going to be right here right now? If I could change, the only thing I’d change about my whole life would be fearing less that I wouldn’t get right here — the place I was going anyway. I wouldn’t change all the mistakes and mishaps, I needed those. But all the constant worry that I wasn’t going to make it, that took me out of enjoying the moment. It took me out of enjoying these experiences, smiling or eating my lunch or doing whatever I was doing.

Know your mission, have faith you’re going to get there. Wherever you go, it’s going to be alright.” — Aubrey Marcus

### Super resolution

I had an interesting conversation with someone that works for a company making high resolution long range LADAR(LIDAR) for targeting systems. While I’ve had some experience with LADAR mapping on outcrops for subsurface modeling, long range focussed systems are a little different. Gaussian laser beams are said to be diffraction limited when their radial beam divergence

![Figure](/images/blog/2023-11-06-know-your-mission-and-have-faith/image-01.jpg)

is close to the minimum possible value, which is given by

![Figure](/images/blog/2023-11-06-know-your-mission-and-have-faith/image-02.jpg)

where lambda is the laser wavelength and w0 is the radius of the beam at its narrowest point. For a given platform (that is going to be useful in any case, think UAV) this likely means that the transceiver assembly is pretty small. At distance this would mean that the image resolution is probably a little rough. I think with the right training data set, we could use super resolution algorithms to correctly upscale the target image for better results. Here are a few resources that might get one started.

1.  [https://blog.research.google/2021/07/high-fidelity-image-generation-using.html](https://blog.research.google/2021/07/high-fidelity-image-generation-using.html)
2.  [https://openaccess.thecvf.com/content/CVPR2023/papers/Gao\_Implicit\_Diffusion\_Models\_for\_Continuous\_Super-Resolution\_CVPR\_2023\_paper.pdf](https://openaccess.thecvf.com/content/CVPR2023/papers/Gao_Implicit_Diffusion_Models_for_Continuous_Super-Resolution_CVPR_2023_paper.pdf)
3.  [https://jina.ai/news/a-guide-for-super-resolution-ordinary-to-extraordinary-with-inference/](https://jina.ai/news/a-guide-for-super-resolution-ordinary-to-extraordinary-with-inference/)

### Content discovery with Beam

I was also talking with a company that had a interesting product that one might describe as a Airbnb for hunting and fishing. One of the issues they face is that state regulations are complex, changeable and difficult to parse for the purposes of creating a bespoke trip. Pulling info out of anyone’s document stream is always going to be useful. Like that 2000 pages of engineering requirements for the next generation airframe. Here’s a more robust and real time pipeline that can be set up against any given project.

[https://beam.apache.org/blog/dyi-content-discovery-platform-genai-beam/](https://beam.apache.org/blog/dyi-content-discovery-platform-genai-beam/)

### Our demise is greatly exaggerated?

Turns out, fitting a curve to a dataset produces a model that only generalizes to that specific data distribution. New paper by Google provides evidence that transformers cannot generalize beyond their training data. Ammunition for the AGI doomers?

[https://arxiv.org/abs/2311.00871](https://arxiv.org/abs/2311.00871)

### Winner of the NMF belt and the “nicest killer” in the UFC

Not only is Stephen Thompson a really nice guy but he’s probably the most creative striker in the UFC. Here’s a great video about his career so far: [https://youtu.be/JK6ZEQB1cGk?si=bNkqgpyHtDIUqkXg](https://youtu.be/JK6ZEQB1cGk?si=bNkqgpyHtDIUqkXg)