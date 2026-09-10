---
title: "Green Shoots"
slug: "2025-08-25-green-shoots"
date: "2025-08-25"
description: "I’m sure my readers will relate to this, but I often have a flurry of ideas around a particular technology concept and then take in-depth time to collect those thoughts and build an argument from them..."
coverImage: "/images/blog/2025-08-25-green-shoots/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

I’m sure my readers will relate to this, but I often have a flurry of ideas around a particular technology concept and then take in-depth time to collect those thoughts and build an argument from them. I then curate, carefully review, and publish them in this newsletter. However, in this process I often dismiss or miss certain nuances or viewpoints that are actually important to consider when examining something as large and complex as today’s AI revolution.

After publishing last week’s newsletter about the coming downturn in tech due to AI overinvestment, I realized that I had dismissed or didn’t properly address counterexamples. I was too negative. There are actually companies in this space building conservatively with business models well-suited for the difficult times ahead. This was reinforced during a conversation with leadership from a tech company that relies on AI, where the CEO told me he felt the overhyping of AI itself was overhyped. And he was right.

I won’t spend much time on this today, but companies like Groq, Cerberus, and CoreWeave have interesting, sustainable business models where they can serve inference on open-sourced or small hosted proprietary models that are inexpensive enough, thus justifying these company’s more efficient capital investments. And there are plenty of other companies using AI responsibly and effectively.

Basically, I think the CEO’s statement is accurate. I just need to look a bit deeper under the surface. There are certainly companies that will survive a technology downturn, and most of them are not usually at the top of news feeds very often. I’ll continue looking out for these types of companies to help bring additional visibility to my readers in order to build sustainable and affordable AI pipelines. Let’s keep it positive.

### About That Report

[https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/)

This past week, an MIT report was released showing that 95% of AI-based initiatives at enterprise companies are failing. Combined with a report from AlphaTarget showing that enterprise AI tool adoption rates are leveling off after their rapid initial uptake, this seemed to throw fuel on the AI doom narrative.

![Figure](/images/blog/2025-08-25-green-shoots/image-01.jpg)

But if you read the MIT report, it contains a key observation that happens to align with my real-world experience. For 95% of companies in the dataset where generative AI implementation is falling short, the issue isn’t AI model quality but the learning gap for employees. Organizations are still figuring out how to use AI effectively at scale. People simply don’t know how to get the best out of the current AI tools.

Ethan Mollick wrote this article a few months back and it’s totally accurate: [https://www.oneusefulthing.org/p/making-ai-work-leadership-lab-and  
](https://www.oneusefulthing.org/p/making-ai-work-leadership-lab-and)TL;DR: Leadership at enterprise companies must do more than just encourage AI adoption. They need a clear plan for how AI will transform daily operations. They should stay informed about AI best practices and bring those insights in-house. Most importantly, they need to identify, hire and empower employees who show enthusiasm and aptitude for AI, positioning them as internal educators and innovation lab leaders. These AI champions aren’t necessarily traditional engineers, but rather curious generalists who excel at teaching others.

### Hmmmmmm…you connect the dots

Reading between the lines a bit here, but if you are deep in it, I think this is telling a bit of a story.

[https://uk.finance.yahoo.com/news/openai-cfo-sees-firm-selling-180309041.html](https://uk.finance.yahoo.com/news/openai-cfo-sees-firm-selling-180309041.html)

Also overheard: Altman recruiting HFT engineers. The search for any business but API serving continues.

[https://arxiv.org/abs/2507.19703v2](https://arxiv.org/abs/2507.19703v2)

This non-peer-reviewed paper re-evaluates the scaling laws for large language models that initially generated significant excitement and caused the ai2027 folks to predict an intelligence explosion in 2027. This paper argues that scaling laws overlook the extremely long computational tail required to avoid errors, making this outcome unlikely. There’s a figure in the paper that illustrates this problem well: achieving just one additional order of magnitude reduction in errors for large language models requires about 10²⁰ times more compute power than we have today. And that is simply not physically possible. The paper quotes, “…raising their reliability to meet the standards of scientific inquiry is intractable by any reasonable measure. We argue that the very mechanism which fuels much of the learning power of LLMs, namely the ability to generate non-Gaussian output distributions from Gaussian input ones, might well be at the roots of their propensity to produce error pileup, ensuing information catastrophes and degenerative AI behavior.”

I think this explains the discrepancy between people who claim these models scale just fine and every-day end users experiencing less than desirable behavior. Humans naturally amplify the error tails of distributions.

![Figure](/images/blog/2025-08-25-green-shoots/image-02.jpg)

[https://arxiv.org/abs/2508.01191](https://arxiv.org/abs/2508.01191)

From the paper: “…LLMs are not principled reasoners but rather sophisticated simulators of reasoning-like text… Rather than demonstrating a true understanding of text, CoT reasoning under task transformations appears to reflect a replication of training patterns learned during training.” Or using CoT fails to generalize out of the training data.

### ViPE

[https://github.com/nv-tlabs/vipe](https://github.com/nv-tlabs/vipe)

Robotics interacts with the physical world, which likely represents the truly scalable application of AI advancement. This is probably because the amount of data available to gather and use is much larger than what you might have for traditional text-based systems, whether those involve computer or human-based writing. This open source AI tool from NVIDIA excels at creating dense depth maps from videos, advancing three-dimensional world modeling from existing or user-captured footage. As always I’m interested in how this might help me build reliable and cost-effective three-dimensional models of my race car for computational fluid dynamics.

### An Open Letter to Palantir

Dear Palantir,

I mean this with the best intentions but…you risk becoming the know-it-all failure poster child of the AI revolution. If you’re open to some honest criticism, please read on:

Last week I spent a few days attending an energy conference in Denver, Colorado. I spoke with the CEO of a major international O&G company’s US onshore subsidiary. Their investor presentation highlighted AI-powered tools developed for their field personnel using Palantir as the back-end technology. I could tell right away that the AI tools weren’t really fit for folks who wear hard hats and steel toes, turn wrenches, and work in difficult conditions. Reliance on manufacturer manuals, the need for a web based interface, no viable way of gathering or using tribal knowledge…etc. etc. Some Palantir forward deployed engineer never thought to talk with the users, hear pain-points and see how day-to-day operations actually work. In the one-on-one Q&A session I asked the CEO how adoption was, and he said it was, “terrible”.

Why is this? And how many other industry verticals are you, Palantir, risking your reputation in delivering ivory tower solutions? Last I checked Palantir has somewhere around ~5500 employees globally. Given your presence in so many of the biggest of global companies I think you risk overcommitting to AI based solutions without actually taking the time to prioritize. Inevitably this leads to underdelivering. I have seen it first hand now a few times. Enough to warrant writing this open-letter.

I don’t think Palantir needs to change its corporate culture or goals to help solve this problem, but there are at least two immediate options. First, if you want to continue having a presence in so many verticals, you need to hire more highly qualified people who are willing to get some dirt under their fingernails with the end users and actually understand how everyday enterprises approach AI and your tools. Second, you could pull back to more deliberate types of engagements. Either approach would likely increase opportunities to build your reputation, and I think the public, shareholders, and customers would all be thankful for these changes.