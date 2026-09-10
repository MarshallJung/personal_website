---
title: "The agreeable liar"
slug: "2024-10-14-the-agreeable-liar"
date: "2024-10-14"
description: "Late night Sunday, long weekend at the racetrack for the last Porsche Club DE of the 2024 season. Sometimes banging out these newsletters is tougher than other times. Habits are a good thing though an..."
coverImage: "/images/blog/2024-10-14-the-agreeable-liar/image-01.jpg"
tags: ["AI Strategy","Motorsport & Dynamics"]
readTime: "5 min read"
---

Late night Sunday, long weekend at the racetrack for the last Porsche Club DE of the 2024 season. Sometimes banging out these newsletters is tougher than other times. Habits are a good thing though and I find myself often thinking about things that I hear during the week in context of how it might be explained briefly in a newsletter entry. A great example of how an intellectual habit can help shape actions which in turn shape outcomes.

It was a remarkably quiet week in the world of AI, almost too quiet? No major announcements, releases or advancements. Very interesting. There are a few things of note though and I hope that my dear readers will get something out of it!

Inspired by a tweet/X post that I read this past week, I enlisted a friend of the newsletter to help with a small experiment. We both asked a question of Claude but with just the positive and negative viewpoints from our side switched. I asked why cats make the best pets and are better than dogs. It agreed with me and provided a bunch of reasonable reasons why cats are better pets and even attempted a few scientific explanations. My friend then asked why cats are not the best pets and the LLM agreed with my friend as well, citing reasons that exactly contradicted the reasons that were just given to me. It is fascinating to see how far most foundational LLMs have been tuned for agreeableness, and will only contradict me on a few narrow topics.  
It makes sense if you understand how transformers are constructed and the likely content of the training corpus, but it does bring up the cautionary concept of how to use these tools and for what purposes.

### OpenBB

Anyone familiar with algorithmic trading and the financial world in general will know about Bloomberg terminals. Long a staple of the pro, they do run $30k/yr and offer data access and analytics that are not readily approachable for most of us. OpenBB is an open source alternative that comes along with lots of data feeds and now an integrated AI to help summarize news and speed up decision making. For sure would have helped me eek out a few more dollars from that NVIDIA short a month or so ago. Y’all remember right!? Nailed it.  
Try it here: [https://openbb.co/](https://openbb.co/)

![Figure](/images/blog/2024-10-14-the-agreeable-liar/image-01.jpg)

### Super faster CFD!

[https://developer.nvidia.com/blog/transforming-cfd-simulations-with-ml-using-nvidia-modulus/](https://developer.nvidia.com/blog/transforming-cfd-simulations-with-ml-using-nvidia-modulus/)

![Figure](/images/blog/2024-10-14-the-agreeable-liar/image-02.jpg)

Fascinating article that claims to have made meaningful advancements in efficiency for CFD. I raised a little eyebrow when they called Fourier neural operators (FNO), “AI” but I am resigned to the fact that ML=AI these days, so I won’t argue. For those who are interested, traditional Navier-Stokes methodologies for CFD are computationally intensive and not very parallelizable. Using a Lattice Boltzmann Method (LBM) instead of directly solving macroscopic equations, LBM simulates fluid flow by tracking the movement and collisions of fictitious particles on a discrete lattice. Combining FNOs with the traditional LBM methods parallelizes, and allows work with lower resolution data. Pluses all around.

A good summary of FNOs and the LBM are available from your favorite LLM, so I won’t go into those details here, but I still like the idea of learning the “next token” prediction methodology for a CFD transformer. What I had not thought of was the LBM concept as the tokenizer. I think this would be reasonably provable in 2D

And for those that are really into these sorts of things, here is a $30 course from NVIDIA on PINN, that should get you pareto conversant: [https://learn.nvidia.com/courses/course-detail?course\_id=course-v1:DLI+S-OV-04+V1](https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-OV-04+V1)

### AI takes over the Nobels

Computer simulation and calculation seems to be more and more integrated with the hard sciences. This year one half of the 2024 Nobel prize in chemistry went to David Baker from the University of Washington in the US, with the other half jointly awarded to Demis Hassabis and John M. Jumper, both from London-based Google DeepMind. Awarded for their work with AlphaFold, the protein simulation algorithm that has revolutionized medical and drug research. I think that we will continue to see CS at the heart of many future hard science discoveries.

**AND** it brings up the moral question of the US gov’s push to split Google for antitrust violations. See here: [https://apnews.com/article/google-search-antitrust-case-59114d8bf1dc4c8453c08acaa4051f14](https://apnews.com/article/google-search-antitrust-case-59114d8bf1dc4c8453c08acaa4051f14). Like Bell Labs, Google has enjoyed outsize profits and a good part of those have gone into things like DeepMind, which I think would be hard for anyone to argue that it has been a net negative on humanity. Splitting Google would lower incentives for research. It is also humorous that the DOJ is considering antitrust for Google search right when LLMs are proving to be the greatest existential threat to the monopoly. Ahhh, government. Always late to the party.

### Real life SciFi

![Figure](/images/blog/2024-10-14-the-agreeable-liar/image-03.jpg)

How cool that we can be alive to see the advancement of SpaceX. The progress in the space of 5 years rivals that of the previous 40 combined. Seeing dedicated, curious and optimistic people like Musk and companies like SpaceX give me real hope! Let me know what you find fascinating?

### An interesting article

[https://darioamodei.com/machines-of-loving-grace](https://darioamodei.com/machines-of-loving-grace)

Those of us living on the edge of the AI curve will know what the label e/acc means (IYKYK). However, there is an odd overlap in the AI optimist’s mind with that of traditional religion. In some ways the faith of what AI promises for the future becomes the hope and guide for everyday behavior and ethics. But ultimately AI is a human creation and while I have no doubt that it will continue to progress in capability, I think the hope that it will solve all of our problems “eventually” with concepts or methods that are always just around the corner borders on cult-like worship. I think it also relegates humanity to a place of subservience that I think could have some unpleasant results. I urge some caution here.