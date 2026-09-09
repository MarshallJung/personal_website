---
title: "Power Struggle"
slug: "2025-06-09-power-struggle"
date: "2025-06-09"
description: "Power Struggle"
coverImage: "/images/blog/2025-06-09-power-struggle/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

Last week on the All-In podcast ([https://open.spotify.com/episode/3MTSo0kmsIHRxtsJkP9Km8?si=b0a3f907afc84b93](https://open.spotify.com/episode/3MTSo0kmsIHRxtsJkP9Km8?si=b0a3f907afc84b93)), which I believe many of my readers listen to as well, the first half of the episode focused on AI and its risks and impacts. Two topics stood out to me, with the first being related to the article below.

[https://www.aipanic.news/p/effective-altruism-funded-the-ai](https://www.aipanic.news/p/effective-altruism-funded-the-ai)

In a recent Axios interview, Dario Amodei, CEO of Anthropic, said that AI could eliminate half of all entry-level white-collar jobs and increase unemployment by 10- 20% within the next 1–5 years. When asked about the prediction on the podcast, David Sacks recognizes the real risks associated with AI but is skeptical about the dire predictions made by individuals like Amodei, noting (with Chamath) that these predictions often coincide with Anthropic’s fundraising efforts. Additionally, the alarming predictions emerging from Anthropic and other organizations appear to be funded by individuals associated with the Effective Altruism movement (I do think the [ai-2027.com](http://ai-2027.com) is part of this effort), are employed at many of the big AI labs and who also have ties to the Biden administration and other organizations concerned about the control and regulation of current AI.

What we’re witnessing is a power struggle over astronomic sums of money in AI development and distribution. Not to mention potential strategic/politcal power from control of AI models. On one side, some individuals are highlighting the potential negative impacts of AI in hopes of gaining more control. Meanwhile, others, like those on the All-In podcast, advocate for an accelerationist approach, seeking to capitalize on the unrestricted development of AI for more power and opportunity on their side. As always…cui bono.

*But what does this mean for folks like me?*

While I sit here typing away on my keyboard, reading enthusiastic claims about AI managing full engineering teams counterpointed by highly skeptical views on its potential to replace nuanced human roles, I’m struggling. With nearly two decades in AI and ML, and after a year of ad-hoc contracting while searching for a full-time position, I see this situation from a unique and often frustrating perspective. What’s often lost in this binary of unbridled enthusiasm versus deep skepticism is the critical value of those who aren’t necessarily “AI natives” but are profoundly ‘AI-fluent’ through years of foundational work. We understand that modern transformer-based AI isn’t just a magic wand or a “glorified autocomplete.” Applying these powerful models effectively within an enterprise isn’t merely about knowing which API to call; it’s about architecting solutions that integrate with legacy systems, understanding the intricacies of data pipelines, infrastructure and budget constraints, security and compliance requirements, and navigating the complex human change management required for true adoption.

My frustration, and that of many of my peers with similar experience, lies in being misunderstood. We’re either perceived as uncritical cheerleaders if we express optimism about specific applications, or our nuanced, experience-backed insights into how to operationalize these tools are dismissed because of general skepticism about AI’s immediate, transformative utility remains high.

Yet, when it comes to talent, there seems to be a gravitational pull towards either the increasingly cheap, fresh-out-of-college “AI native” or a cautious “wait-and-see” that overlooks the very people who can bridge the chasm between AI’s potential and its profitable, scaled deployment.

It’s not enough to simply deploy an LLM and expect transformation. The “how” — the strategic integration, the risk mitigation, the sustainable scaling — is precisely where seasoned experience in navigating complex projects and diverse stakeholder needs becomes invaluable. I’ve seen previous tech waves and understand the patterns of adoption, the pitfalls of over-hype, and the hard work of making technology deliver real business value.

To enterprise decision-makers: I urge you to look beyond the surface. The current AI revolution, particularly with transformer models, demands more than just technical skill with a new tool; it demands wisdom. I’d like to bring you some.

### Building A Tower of Sand

Related to the opening section of the newsletter this week, folks may have noticed the bankruptcy of Builder.ai, a UK-based AI startup that had significant investors ($400M), including Microsoft, and was valued at over a billion dollars. Many believe Builder.ai’s platform relied more on human engineers, particularly from India, than on advanced AI. This has led to accusations that the company misled investors and customers about its capabilities. While the sweatshop accusations actually date back over five years, a significant factor in the company’s downfall may have been faking revenue by round-tripping funds with another firm. This isn’t surprising given the hype in the AI sector and the pressure to grow using any means, including illegal ones.

People on both sides of the AI debate will use this situation to support their views on AI singularity vs. over-hype. However, it serves as a cautionary tale about the importance of understanding the capabilities of these tools. Relying on solid research, common sense, and first principles thinking will lead to better outcomes than seeking a quick fix.

### Locally Grown

![Figure](/images/blog/2025-06-09-power-struggle/image-01.jpg)

[https://arstechnica.com/tech-policy/2025/06/openai-says-court-forcing-it-to-save-all-chatgpt-logs-is-a-privacy-nightmare/](https://arstechnica.com/tech-policy/2025/06/openai-says-court-forcing-it-to-save-all-chatgpt-logs-is-a-privacy-nightmare/)

This outcome was likely always going to become reality, but it does raise concerns for any major enterprise aware of the security and compliance implications of using API-based models from the big AI labs. It’s also important to note that the vast ecosystem of apps using OpenAI’s API as a back-end may not be able to uphold the data retention policies stated in their terms of service. This situation seems to currently apply only to OpenAI, but it’s likely that other major labs with foundational models face similar issues. This highlights the importance of using and developing local models, as enterprises can maintain control over and gain visibility into their training data.

### Think of some uses?

[https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart](https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart)’

Google has released an open-source repository that enables you to build your own deep research agent using your preferred language model API. I haven’t implemented it yet, but I’m intrigued by the potential to use its web-based search for internal company documentation. This could represent a shift in the understanding of retrieval augmented generation. I’m looking forward to seeing how this repository is creatively repurposed.