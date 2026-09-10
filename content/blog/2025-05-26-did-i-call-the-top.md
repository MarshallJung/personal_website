---
title: "Did I Call the Top?"
slug: "2025-05-26-did-i-call-the-top"
date: "2025-05-26"
description: "I’m not one to shy away from self-congratulation, but last week’s newsletter entry highlighted the looming price hikes for SOTA AI models. Those with keen eyes might have noticed my timing was rather ..."
coverImage: "/images/blog/2025-05-26-did-i-call-the-top/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

I’m not one to shy away from self-congratulation, but last week’s newsletter entry highlighted the looming price hikes for SOTA AI models. Those with keen eyes might have noticed my timing was rather fortuitous. Google’s I/O conference this week unveiled new membership tiers and pricing for their recently released tools.

![Figure](/images/blog/2025-05-26-did-i-call-the-top/image-01.jpg)

Google’s recent premium tier announcement is merely the latest in a long line of AI labs charging hundreds of dollars for access. This appears to be the proverbial straw breaking the camel’s back, signaling the end of affordable access to top-tier AI models for average users. The discerning observer might notice a pattern forming here.

[https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=5136877](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136877)

![Figure](/images/blog/2025-05-26-did-i-call-the-top/image-02.jpg)

![Figure](/images/blog/2025-05-26-did-i-call-the-top/image-03.jpg)

First, it’s worth noting that within a mere year, Google’s Gemini tools have managed to dethrone ChatGPT as the preferred AI assistant for professionals. Second, nearly half of the US workforce now uses generative AI professionally. A clear sign that these tools have graduated from mere curiosities to practical workplace assets. The days of AI being just a digital plaything for the technologically curious appear to be behind us. AI labs like Google/OpenAI/Anthropic have noticed our growing dependency on their tools. As demand rises, prices will too, as the economically savvy among us might predict. As my article last week noted, this outcome was rather predictable. These companies were, after all, hemorrhaging money with their current business practices. However and unfortunately we are potentially witnessing the predictable outcome where financially comfortable professionals maintain access to advanced AI tools (either through personal means or workplace provisions) while others get left behind. This widens the already concerning productivity gap between haves and have-nots. The lofty vision of AI founders creating a more equitable society through equal access and opportunity? Those who’ve been paying attention might notice this utopian dream slipping quietly away. But let’s not close on a sour note. Open source tools and infrastructure improvements may yet drive training and inference costs down. These technological tweaks could reset the supply-demand balance, potentially leading to price reductions in the future.

Did I nail the peak of this hype cycle and affordability conundrum? Time will tell, but whether I’m slightly premature or not, AI costs are inevitably trending upward.

### MSFT Throws another Handful

In a move that surprises absolutely no one, Microsoft has suddenly discovered the virtues of open source for Copilot — right after OpenAI snatched up Windsurf. What we’re witnessing isn’t technological altruism but rather two former playground pals now engaged in a corporate custody battle over the average programmer’s attention. The timing, one might note, carries all the subtlety of a compiler error on production day. These AI titans, having exhausted their friendship bracelet phase, are now locked in what they’d like us to believe is an ideological struggle, when it’s really just two tech behemoths attempting to colonize the IDE real estate of developers worldwide.

OpenAI’s acquisition of Windsurf brought a substantial user base — a fact not lost on Microsoft. The tech giant is surely eyeing those VSCode AI assistant users who might be persuaded to return to the fold. While Microsoft may invest in polishing the open source project’s interface, they’re also aware that many users balking at Windsurf’s monthly fees will gravitate toward their offering. The business logic is impeccable. This leads me on to another prediction.

### The Rise (Again) of Open Source AI

Before we get too far, the business models for labs creating open source AI models remain a bit of a mystery to me. That said, these models, while perhaps not the crème de la crème, should be sufficiently fine-tunable to handle specific enterprise workloads.

Initially attractive for their apparent ease, proprietary AI APIs are becoming costly due to rising per-token charges and dwindling subsidies as we’ve established above. I think this will eventually push businesses to consider open-source models on their own infrastructure. This shift offers benefits like cost control, transparency, and data security, addressing concerns about vendor lock-in and unpredictable pricing. However, open-source AI requires significant investment in in-house talent, including ML engineers, data scientists, cybersecurity experts, and MLOps professionals, to manage deployment, customization, security, and governance. While open source promises freedom from API costs, neglecting the need for a skilled internal team can lead to expensive failures.

I suspect the AI landscape will evolve to resemble in-house software development more than the cloud-everything approach we’ve seen dominate the past decade. While SaaS AI tools and self-hosted open-source options will certainly maintain their respective markets (the discerning observer knows these things never truly disappear), companies will increasingly bring AI development under their own roofs. Let’s bookmark this prediction and revisit it, shall we?

### The Universe of Knowledge (or some of it anyway)

[https://soarxiv.org/](https://soarxiv.org/)

All 2.8 million arxiv.org papers are available here for three-dimensional exploration. This visualization helps compare different knowledge domains and, while not directly research-applicable, it’s one small step away from a knowledge graph. Combining this with the embeddings could prove rather interesting for research purposes.

### Bottlenecks

![Figure](/images/blog/2025-05-26-did-i-call-the-top/image-04.jpg)

This week, I keep encountering the supply and demand dynamics related to AI. The potential bottleneck for inference compute is significant, with only about 10 million H100 equivalents available globally. Given that AI compute has been growing at around 2.25x, we may soon reach the limits of chip production capacity, even under the best assumptions. With rising demand for AI and corresponding price increases, any supply constraints will further drive up AI costs.

### Diffusion is Not Dead

[https://goo.gle/44MwCW3](https://goo.gle/44MwCW3)

Google’s DeepMind research team has unveiled a diffusion model for advanced text generation. Rather than predicting text directly, it generates outputs by refining noise, a familiar methodology. This approach is said to enhance its performance in coding and math by allowing rapid iteration over solutions. Speed appears to be its strength, making it a valuable addition to a mixture of experts pipeline that combines generation with traditional next token reasoning refinement. Sign up for the waitlist at the link above.

### n8n

![Figure](/images/blog/2025-05-26-did-i-call-the-top/image-05.jpg)

LLM APIs have ushered in a new era of workflow automation — relatively inexpensive, at least for the moment, right, RIGHT!?. I’ve been hosting n8n, an open source tool that performs admirably even on my modest laptop. It’s perfect for building time-saving workflows that, in a business setting, could efficiently dispatch those particularly vexing low-hanging fruits.

n8n presents an intriguing opportunity for teams seeking a flexible, self-hostable automation solution with robust integrations and AI capabilities. The discerning technical user will appreciate being able to customize workflows with code while still enjoying the benefits of a visual interface. Worth exploring, I’d say.