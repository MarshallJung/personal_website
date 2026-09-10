---
title: "Thanks, I Hate It"
slug: "2026-08-22-thanks-i-hate-it"
date: "2026-08-22"
description: "It is hard to open any species of media today without sensing a public disapproval of data centers that borders on the visceral. One might almost prefer the sooty embrace of a coal-fired plant, curiou..."
coverImage: "/images/blog/2026-08-22-thanks-i-hate-it/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-08-22-thanks-i-hate-it/image-01.png)

It is hard to open any species of media today without sensing a public disapproval of data centers that borders on the visceral. One might almost prefer the sooty embrace of a coal-fired plant, curious as that sounds. Yet here we are. The claims about costs, inputs, and externalities deserve examination, the truth behind them, and the psychological weather that has brought us to this point.

I hear the same refrains in conversation and online. The electricity, the noise, the water, the blight on neighborhoods. Some discourse has reached the point where a coal fired power plant is preferred to a server farm.

![Figure](/images/blog/2026-08-22-thanks-i-hate-it/image-02.png)

First, yes, data centers consume a great deal of electricity. Because most new facilities are too large for ordinary residential or commercial grids, they increasingly bring their own “behind-the-meter” generation. Often these are gas turbines, sometimes diesel or mobile units. But publically the fear is that data center demand will raise prices for everyone else. In practice the picture is more complicated. Behind-the-meter arrangements reduce direct competition for grid electrons, and in some analyses large loads have helped spread fixed costs, modestly lowering average residential rates. Other recent studies find measurable upward pressure, especially in wholesale and capacity markets, and note that large gas purchases can still lift commodity prices that feed into electricity. On balance the claim that data centers “tend to lower, not raise” consumer costs is supported by several careful papers, but contested and regionally uneven. However, building more electricity generation and modernizing distribution is good for everyone long term.

[https://x.com/CityJournal/status/2077092838630735935](https://x.com/CityJournal/status/2077092838630735935)

Noise is a fairer complaint. Fans, turbines, and cooling equipment produce a steady drone, sometimes with a low-frequency component that residents feel more than hear. Measured at the property line under typical setbacks, levels are frequently lower than those from a busy freeway at similar distance, though the 24/7 continuity and tonal quality make the experience different. Context still matters.

[https://www.datacenterslist.com/stats/noise](https://www.datacenterslist.com/stats/noise)

Water is the last major physical charge, and here the record is clearer. An early, widely circulated claim (later traced to a unit-conversion error in coverage of a Chilean facility) overstated needs by roughly a thousandfold. Most modern and new facilities rely on closed-loop cooling: after an initial fill (often measured in a few Olympic swimming pools) the water is recirculated rather than continuously consumed. In national terms, U.S. golf-course irrigation and California almond cultivation each dwarf the entire data-center fleet; even aggressive near-term projections leave data centers a small fraction of those totals. If the goal is reducing water consumption, the larger levers are known.

![Figure](/images/blog/2026-08-22-thanks-i-hate-it/image-03.png)

Beyond the physical claims lies a broader psychological distaste that is beginning to shape regulation and opportunity. At bottom, many opponents treat data centers, and by extension AI, as a net harm to humanity. While a growing share of new capacity does serve AI training and inference, the facilities also host ordinary cloud, enterprise, and scientific workloads. The industry has nevertheless done a poor job of communicating tangible benefits.

The public encounters low-value, polarizing AI-generated content; hears leaders such as Dario Amodei and Sam Altman warn of large-scale job displacement (Amodei has spoken of possible 20 % unemployment and the obsolescence of many white-collar roles within years); and meets stories (typically exaggerated) of AI-enabled hacking or concentrating wealth. Much of the darker narrative is overstated or selective, yet it dominates.

SIDE NOTE: I see an interesting psychological dynamic in my role as a public AI evangelist and AI director in a global company. Publicly, opinions about AI are highly negative, yet many of the same naysayers rely on and increasingly enjoy using AI in their private and work lives. In enterprises, I believe a substantial supermajority is enthusiastically adopting AI to automate and improve daily tasks. Adoption will be slow because the tools are evolving and employee education for appropriate use is challenging, but I don’t think enthusiasm for enterprise AI will retreat.

Meanwhile, successes receive less attention. Only days ago Moderna and Merck announced that their personalized mRNA cancer vaccine (intismeran), designed with AI assistance to target each patient’s neoantigens, met its primary endpoint in a Phase 3 melanoma trial. The first such late-stage success for an individualized mRNA cancer therapy. Parallel advances in mathematics, materials science, and public-service efficiency continue quietly. AI and the data centers that power it can deliver broad gains; the public case has simply been made poorly. That perception gap now rivals the physical concerns and fuels the distaste.

[https://www.merck.com/news/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-autogene-plus-keytruda-met-endpoints-of-recurrence-free-survival-rfs-and-distant-metastasis-free-survival-dmfs-in-patient/](https://www.merck.com/news/merck-and-moderna-announce-phase-3-interpath-001-trial-of-intismeran-autogene-plus-keytruda-met-endpoints-of-recurrence-free-survival-rfs-and-distant-metastasis-free-survival-dmfs-in-patient/)

To be clear, I do not share the hostility, yet I understand its sources. My aim remains to keep people enthusiastic and forward-looking about the technology and the infrastructure that enables it. Naïveté is unnecessary: those who share this outlook are unlikely to reverse the coming regulatory or local backlash.

Given the precarious financial engineering (circular financing loops, vendor credit, off-balance-sheet commitments, and valuations that assume unbroken demand growth) a market downturn affecting AI and adjacent tech, with spillover to the broader U.S. economy, remains a realistic near-term risk. A multiyear pause while the industry discovers applications most people actually enjoy and can use efficiently feels, unhappily, like the sober forecast for a sector I continue to love.

### SLMs to the Rescue

[https://x.com/gabepereyra/status/2090453918547685537?s=20](https://x.com/gabepereyra/status/2090453918547685537?s=20)

I’ve argued in my newsletter previously that small language models (i.e. open-source, open weight models carefully fine-tuned on a solid, verifiable domain dataset) will become the default AI systems in enterprises and the engine behind successful consumer-facing SaaS tools. As a logical extension of my previous writing above, with current algorithmic methods, data sets, and power constraints, enormous frontier models are unlikely to deliver significant further gains. They’ll likely remain just one tool among many for enterprises focused on products or services in a specific economic vertical. Companies can fine-tune smaller open-weight models on proprietary datasets to deliver value. For example, Harvey (link above), an AI-legal company, did this with an open-source model, achieving frontier-level performance at significantly lower cost.

### Skillz

[https://github.com/mattpocock/skills/tree/main/skills](https://github.com/mattpocock/skills/tree/main/skills)

I shared this with colleagues this week. Building specific yet transferable skills is the new programming of the AI age. The best approach is still evolving, but Matt Pocock (GitHub linked above) offers one of the strongest current sets of skills and best practices to help you make AI more effective in your day-to-day work.