---
title: "The Org is Shifting"
slug: "2026-08-03-the-org-is-shifting"
date: "2026-08-03"
description: "August 03, 2026"
coverImage: "/images/blog/2026-08-03-the-org-is-shifting/image-01.jpg"
tags: ["AI Strategy"]
readTime: "8 min read"
---

![Figure](/images/blog/2026-08-03-the-org-is-shifting/image-01.jpg)

August 03, 2026

Lots to cover this week. I’ll keep the opening brief and dive into the most interesting and wild developments from the past week.

A team that includes one of my favorite authors, Ethan Mollick, at the University of Chicago released a recent paper on how generative AI and teamwork are changing the landscape of enterprise business. [https://pubsonline.informs.org/doi/10.1287/orsc.2025.20702  
](https://pubsonline.informs.org/doi/10.1287/orsc.2025.20702)They evaluated 791 R&D and commercial professionals at Procter & Gamble tackling real enterprise product innovation challenges. Participants were randomly assigned in a 2x2 design: working individually or in cross-functional pairs, and with or without AI assistance. Solo workers using generative AI matched or outperformed unassisted two-person cross-functional teams, as AI effectively substituted key collaborative functions. Without AI, R&D professionals defaulted to technical solutions while commercial staff favored market-focused ideas. Generative AI enabled both groups to produce balanced, cross-disciplinary proposals, eliminating functional blind spots. It served as a quality amplifier during ideation, while human teams held a slight edge in evaluating and selecting which top idea to advance. Human teams paired with generative AI were nearly three times more likely to produce top-decile (top 10%) solutions than solo workers without AI. Conversational AI also reduced anxiety and frustration while boosting enthusiasm, acting as an active collaborative teammate rather than a static productivity tool.

![Figure](/images/blog/2026-08-03-the-org-is-shifting/image-02.png)

What strategic actions can an enterprise take to leverage these findings?

1.  Position generative AI as a connective interface across functions, not a siloed productivity tool. Pair R&D scientists with managers and sales directors.
2.  Structure lean teams. Once AI is introduced, larger human teams show diminishing returns. For early-stage innovation and problem solving, prefer solo-plus-AI or small, two person teams over large cross-department committees.
3.  Decouple ideation from selection. Design workflows so generative AI expands candidate solution quality and option space, while humans retain strict gatekeeping for final concept selection and capital allocation.
4.  Uplift non-core task performance. The largest gains occur when specialists tackle tasks outside their core domain. Deploy generative AI cross-functionally so technical generalists can operate with domain-expert agility in adjacent functions.

Will you run into problems? Absolutely, but this problem isn’t going away. The paper underestimates how AI-driven changes will clash with existing silos and political barriers. Some people will be deeply distrustful and resist outsiders working within their teams or contributing to certain roles. Making this work will require dedicated, flexible, and at times very directed leadership.

![Figure](/images/blog/2026-08-03-the-org-is-shifting/image-03.png)

### The New Marketing Hack

Last week, we covered how OpenAI’s cybersecurity test model escaped its sandbox and hacked the open-source AI site Hugging Face. It turns out that wasn’t the only incident OpenAI found with its own models. Not to be left out, other frontier labs, like Anthropic, have now reported similar security breaches.

![Figure](/images/blog/2026-08-03-the-org-is-shifting/image-04.png)

Some people are running around yelling the world is ending because we now have independent AI tools that can hack almost anyone. In reality, this stems from poor security practices. Now…a bad actor could use AI tools to do something similar, but these reported incidents from Anthropic and OpenAI aren’t that. It’s hard to impute intent, yet Anthropic’s press release frames this as a case for broader regulation. That should backfire. The models aren’t going rogue like sci‑fi robots. Engineers built weak harnesses, instructed the models to hack, and had plainly poor dev-ops and security practices. Spinning this into “we need government to regulate everyone” instead of “we should face narrow penalties under existing law for these incidents” is the real disconnect.

Are there useful lessons enterprises can take from this debacle? Yes! Prioritize internal AI-based security reviews of your code. OpenAI released a CLI harness to support that process: [https://github.com/openai/codex-security](https://github.com/openai/codex-security)

However, that isn’t a full-spectrum approach to building robust red teaming of your network and security posture to mitigate the risk of rogue AI + human attackers, similar to how OpenAI and Anthropic models behaved autonomously. What you’ll need is an external instantiation of a frontier model, compute resources for it, storage, and, most importantly, complete context of your current network setup, external storage, SaaS tooling, credential management etc. etc.. With that, you can direct the model to explore your topology to identify potential issues. This can be done from the inside out to find exfiltration holes or poorly monitored areas and patch them to prevent internal threats. A gotcha: This will likely need a non-guardrailed open-source model. Frontier models from closed labs are typically guardrailed, so you can’t reliably convince them you’re a red team rather than a malicious actor. This will likely become a paid service offered by a security company such as Palo Alto, Wiz, or a similar organization.

### Point/Counterpoint

[https://www.dwarkesh.com/p/why-compute-might-get-10x-more-expensive](https://www.dwarkesh.com/p/why-compute-might-get-10x-more-expensive)

Stepping back from the technical stuff for a moment, there’s a persistent, broad concern about AI’s impact (how capital spending, economic effects, and everyday life intertwine) Opinions tend to split: bulls expect continued revenue growth; bears foresee a spectacular crash. Bulls note that Anthropic’s revenue has grown 10x year over year; to sustain that pace, it would need $1 trillion in revenue by the end of 2027. As Dwarkesh Patel argues in the linked article, if a GPU’s market value approximates that of a reasonably senior coding engineer, companies running models at that capability could see significantly higher margins.

I’ve leaned bearish on AI (economically, not from a capabilities perspective), but I’m not opposed to the possibility of a soft landing. As I’ve noted in past newsletters, many AI bears assume AI will behave like typical SaaS. That’s not how most enterprises use it. Its application is varied, focused, flexible and unique to individuals. It’s hard to measure, but very much happening. Adding to this is a recent OpenAI post claiming they’ve cut inference costs by up to 50%.

[https://www.theinformation.com/newsletters/ai-agenda/openai-discovers-new-way-cut-inference-costs-half](https://www.theinformation.com/newsletters/ai-agenda/openai-discovers-new-way-cut-inference-costs-half)

Overall, the main challenges for frontier labs like OpenAI and Anthropic are the massive training costs that drain money and compute and outpace inference revenue amid intense competition, especially from state-funded actors like China. US closed-source labs keep investing heavily in scaling beyond their inference earnings. Skepticism about rapid, explosive gains from new agentic workflows likely means slower but spikier progress, with multi-decade timelines for full economic integration and automation. We’ll see how much slow technological diffusion (driven by economic calculation challenges rather than simple adoption barriers) hinders their profitability via IPOs or sustained private funding.

### Memento

When you use long-running or complex agentic systems, agent memory can be ephemeral. Many teams keep a memory.md file for important context, but agents often overwrite or drop parts of their memory as it’s treated as fungible.

[https://github.com/VictorTaelin/OptMem](https://github.com/VictorTaelin/OptMem)

Victor Taelin released a GitHub tool that maintains permanent state for agents within a task. In theory, this is great — though it can grow large on particularly difficult tasks. Still, it’s a solid idea and worth trying.

Scaling this to enterprise-level documentation for an enterprise intelligence layer requires a standard format across all AI agents. Google’s Open Knowledge Format (v0.2) represents knowledge as plain markdown files with YAML front matter. I’ve built something similar for personal use in Obsidian on my laptop, but this seems better suited for a larger team or organization. It would be fascinating to use this from the start of a project to see how we can build knowledge that can be captured, used, stored, and disseminated across the organization.

[https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf)

### Speak to me plain

I’m not the only one noticing that frontier AI models often use a style that’s hard to understand. It’s both technically dense and a bit esoteric. Lately, I’ve started asking: “Report to me in ASD-STE100 simplified technical English.” This standard for reports and operating manuals for aircraft mechanics that helps simplify complex ideas. Try it and see if it makes that alien intelligence in your computer easier to grasp.

### Buzz

Jack Dorsey, a Twitter cofounder, released Buzz, an open-source collaboration platform where humans and AI can work in the same space. As we grow more reliant on agentic systems, juggling multiple concurrent tasks gets tough (I often start a project with one AI, get distracted by another, and forget the first until it pings me at a stopping point, or sometimes forget about it entirely for a good period of time.) Buzz serves as a central hub like Slack or Microsoft Teams, where agents can communicate with each other or with humans, one-on-one or in teams, to get work done. Because it’s open source, it’s a great way to explore the future of human teams and AI interaction.

[https://github.com/block/buzz](https://github.com/block/buzz)