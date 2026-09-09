---
title: "The buck stops…"
slug: "2023-12-04-the-buck-stops"
date: "2023-12-04"
description: "The buck stops…"
coverImage: "/images/blog/2023-12-04-the-buck-stops/image-01.jpg"
tags: ["AI Strategy","Motorsport & Dynamics"]
readTime: "7 min read"
---

The Abilene paradox is a group dynamic where a group of people agree on a course of action that goes against the preferences of the individual members. This explains why a group made up of very intelligent folks can together arrive at a very stupid outcome. No one wants to rock the boat so a suboptimal outcome for everyone results. I’ve spoken about this before, but in this case I’ll extend the advice. A business decision by committee usually ends up being the least best. While expertise should be solicited from everyone, the ultimate responsibility for the outcome should be owned, publicly owned, by one person.

### Despite AWS Re-Invent, AI is not the solution for everything.

[https://www.platformer.news/p/amazons-q-has-severe-hallucinations](https://www.platformer.news/p/amazons-q-has-severe-hallucinations)

It seems like the best idea ever right? Everytime I’m in AWS console I get the two-pizza box team mentality. Product development at AWS is like raccoons and the garbage bin. You know exactly what the end result is going to look like and it ‘aint going to be pretty. So layering an LLM chatbot over the top to help? Not so fast. Attention based transformers are not good at anything that requires precise recall and zero errors. I’m sure the AWS engineers thought it sounded great until you figure out where the training data was coming from. I would have hoped that they didn’t just dump raw support logs into the data pile, but you know trash pandas and last week’s spoiled spaghetti.

### Making Large Language Models Uncool Again

[https://www.youtube.com/watch?v=6LXw2beprGI](https://www.youtube.com/watch?v=6LXw2beprGI)

I had YouTube run the transcript of this and fed into Bard for a few good take aways. So I was using LLMs for exactly the thing they were meant to be good at.

“So something everybody I think pretty much agrees on, including Sam Altman, including Yann LeCun, is that LLMs aren’t going to make it. The current LLMs are not a path to ASI. They’re getting more and more expensive, they’re getting more and more slow, and the more we use them, the more we realize their limitations.

We’re also getting better at taking advantage of them, and they’re super cool and helpful, but they appear to be behaving as extremely flexible, fuzzy, compressed search engines, which when you have enough data that’s kind of compressed into the weights, turns out to be an amazingly powerful operation to have at your disposal.

\[…\] And the thing you can really see missing here is this planning piece, right? So if you try to get an LLM to solve fairly simple graph coloring problems or fairly simple stacking problems, things that require backtracking and trying things and stuff, unless it’s something pretty similar in its training, they just fail terribly.

\[…\] So that’s the theory about what something like Q\* might be, or just in general, how do we get past this current constraint that we have?”

\-Jeremy Howard, Co-Founder of fast.ai

### LLM all-in-one?

[https://github.com/mozilla-Ocho/llamafile](https://github.com/mozilla-Ocho/llamafile)

Download a 4GB binary, child 755 it and now you have a full LLM and the software needed to run it ready to go, with multiple operating system platforms supported by that single file. Documentation says GPU works on Apple Metal, GCP Linux Nvidia, Windows Nvidia, and Jetson Nvidia. And CPU inference works on Linux/MacOS/Windows/BSD. Easy binary distro for anyone that needs on prem bespoke LLM solutions.

### Going forwards and backwards.

After all these years this is my first time published on actual dead trees. Granted it’s only in Porsche Club’s Rocky Mountain Region magazine, but still another accomplishment! I’m going to be writing a series of these over the next year on race car concepts.

![Figure](/images/blog/2023-12-04-the-buck-stops/image-01.jpg)

Here’s the text (Thanks Bard!)

Chances are if you are reading this article that you understand the value of good tires. Whether on your daily driver for every season, or your dedicated track weapon. And let’s be honest, who hasn’t been just a bit jealous seeing one of our PCA members getting On-Site Tires to mount up a brand new set of stickered Hoosiers for their ride on Saturday morning at a DE? But I’m here to tell you that there is an amazing amount of technical detail in how tires actually work beyond simply being “sticky”. Let’s break out some physics and math to understand what the tires actually do and how you can use these ideas to make yourself just a bit faster around the track. Tires are a complex multivariate part of vehicle performance, but in this first article we’ll look at two of the many physical descriptions of tires.

Tires are just springs.

Like many things in the world of physics, tires are actually easily modelled as springs. They are simply rolling air springs that work very similar to the airbags used for heavy trucks or load levelling on pickups. The basic equation for modelling tires is as follows:

m \* d²x/dt² + kx + bx = 0

Where:

-   m is the mass of the oscillating object
-   k is the spring constant
-   b is the damping coefficient
-   x is the displacement of the oscillating object from its equilibrium position
-   t is time

If you recall the pre-2022 F1 cars they ran a 13” wheel with a bulky sidewall tire (large tire aspect ratio). In slow motion this tire compressed and rebounded, oscillated and shook over curbs and track imperfections. The teams actually modelled the tire as a meaningful part of the car’s suspension. When the ground effect rules began in 2022, the new lower profile tires compressed less and oscillated at a faster rate which caused the rest of the suspension to need to deal with different loading. From the equation above the new tires increased the spring constant and the damping coefficient. How should you think about this concept when choosing tires for your car? Tires with taller sidewalls will absorb more track irregularities like curb impacts and high frequency impacts without upsetting the car’s dynamics. It would also allow suspension tuning to be tailored to car dynamics like roll and dive which are movements that suspension dampers are more capable of handling well. But like anything with track cars this comes with a tradeoff…

Tire movement

When we drive on the track, tires move. They compress under longitudinal loads and get pushed laterally when we go around corners. If the tire grips the race surface well and the loads are sufficiently high, the tire can move a significant amount. Tires slip axially on wheels, and are pulled away from the tire rims under cornering.

Some tire movement is absolutely necessary to keep the contact patch as large as possible given any acceleration. But this contact patch can be affected by the tire aspect ratio, sidewall construction and tire pressures. The key is to find a balance that maximizes the contact patch with the capabilities of the car. While there are exceptions to everything, and driver confidence is a meaningful variable, there is a mathematically ideal tire for any given track and condition regardless of whether a driver might be able to extract that peak performance from the tire. Let’s look at a set of basic rules.

In general, the heavier a car is (whether statically or with generated downforce) the more robust and less flexible a tire can be and still work well. Lower aspect ratios, heavier sidewalls remain flexible under larger loads to provide a uniform contact patch. Lighter cars may want to move towards higher aspect ratio tires of lighter construction which can move around a bit more to provide the same consistent surface contact. Of course, tire pressures should be optimized in each environment for each vehicle, but broadly speaking the above rules can be applied to gain an edge in overall maximum tire grip.

In summary:

There is much more to talk about with tires, and hopefully we can dive into some of these in future articles. Tire chemistry, and suspension geometry effects play an important role as well. Tires are a complex subject, but one that we can get a good overview of and help us be faster!