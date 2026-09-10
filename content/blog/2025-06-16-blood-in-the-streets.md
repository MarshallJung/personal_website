---
title: "Blood in the Streets"
slug: "2025-06-16-blood-in-the-streets"
date: "2025-06-16"
description: "A well-known saying, often attributed to Baron Rothschild after the financial panic following the Battle of Waterloo, suggests that it’s time to “buy when there’s blood in the streets”. This notion ha..."
coverImage: "/images/blog/2025-06-16-blood-in-the-streets/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

A well-known saying, often attributed to Baron Rothschild after the financial panic following the Battle of Waterloo, suggests that it’s time to “buy when there’s blood in the streets”. This notion has generally applied to financial markets, but I believe it holds some truth for intense societal issues covered by the media as well. I think this reflects the current state of AI and its impact on the job market. I strive to stay at the forefront of these AI issues so, again, I may be a bit early, but a recent article in Inc. highlights the disillusionment and fear felt by many tech workers in the U.S. Is this a blood in the streets moment?

[https://www.inc.com/joe-procopio/weve-reached-the-end-of-the-job-market/91200456](https://www.inc.com/joe-procopio/weve-reached-the-end-of-the-job-market/91200456)

![Figure](/images/blog/2025-06-16-blood-in-the-streets/image-01.jpg)

I’m going to pull a few quotes from this article to illustrate my concerns about how AI is transforming organizations. But to TL;DR the conversation, the two main observations are: first, the growing barbell distribution of employment at these companies due to AI adoption; and second, the potential negative outcomes of this strategy.

![Figure](/images/blog/2025-06-16-blood-in-the-streets/image-02.jpg)

I empathize with the subject of the author’s article. It can be disheartening to submit countless applications and go through numerous interviews, only to be ghosted or overlooked for your experience and wisdom. Unfortunately, resume screening and AI-driven HR methods often miss the human aspect of hiring. But that’s the world we live in. So… who is getting hired?

![Figure](/images/blog/2025-06-16-blood-in-the-streets/image-03.jpg)

Last week, I discussed how entire software engineering teams can be managed by AI. In the rare cases where this works, the cost savings could be substantial. In this article, if the author’s claims are accurate, this approach may be encouraging software (and possibly services/non-software) companies to cut costs by reducing a significant portion of their middle management layer for the siren song of AI efficiency. What you end up with is a binomial distribution of employees. A few lofty executives that are highly paid and increasingly evaluated on sales effectiveness and a whole cadre of early career engineers. This is a recipe for disaster.

First, salespeople are notoriously incentivized for short-term results. When a c-suite “sales executive & CTO” has their paycheck dependent on selling a product, they may become less focused on the company’s long-term strategic goals. Technically inclined middle management plays a crucial role as a check and balance to the sales organization’s tendency to over-promise. They help ground the sales team’s ambitions by clarifying what is realistically achievable. When these technical management roles are eliminated or replaced by AI, the result struggles to grasp the future of an organization or product. AI is not an oracle, nor is it empathetic or critical in that crucial way that builds good products. It fails to balance customer needs with the technical and psychological direction of the industry. I agree that some large tech companies have a bloated middle management layer. However, the current slash-and-burn approach, resulting in an unfortunate distribution of employee profiles, may harm these companies significantly when their products or services lose touch with the reality of their verticals in consideration of the macro economy.

Is this article just another drop in the pool of blood spreading across the tech hiring market? Is AI facing some backlash regarding human employment in these companies? I’m not sure, and I tend to be early in my assessments. However, I sense a potential upswing and a more thoughtful approach from many companies in the next six months. If you’re in the same situation as I am, stay optimistic — better times are ahead, and life remains beautiful in God’s world.

### Fact From Fiction

While I won’t spend too much time on this article I will say that my frustration with AI often stems from the ongoing tension between major AI lab’s hype (like Anthropic, which we discussed last week regarding their marketing tactics for funding, and this past week Sam Altman’s recent blog post at OpenAI [https://blog.samaltman.com/the-gentle-singularity](https://blog.samaltman.com/the-gentle-singularity)) and the on-the-ground reality of deploying AI enabled workflows.

One key takeaway from Altman’s article (besides the implied self-aggrandizement) is that he presented solid, testable predictions for the near future. It’s crucial to clearly define how we will assess whether these goals are achieved, as there’s always a risk of manipulation in interpreting the technologies involved. Nonetheless, the article is worth a read to understand the marketing strategies employed by leaders of these big AI labs.

### Zero-Click AI Vulnerability

[https://www.aim.security/lp/aim-labs-echoleak-blogpost](https://www.aim.security/lp/aim-labs-echoleak-blogpost)

This is your weekly reminder to avoid building LLM systems that combine access to private data with untrusted tokens and exfiltration vectors, also known as the “lethal trifecta”. Recently, Microsoft 365 Co-Pilot, which is now patched, was identified as a target. This is an extended version of the prompt injection exfiltration attacks we’ve witnessed in various products. Again this particular instance comes from Microsoft, similar to the earlier GitHub MCP vulnerability. Microsoft isn’t uniquely susceptible to these issues; it simply has the largest number of uneducated AI users facing this particular challenge. In this example, an attacker feeds malicious instructions into an LLM system, prompting it to access private data. This data is then embedded in the URL of a markdown link, allowing the attacker to steal the information when the link is clicked. The first step involves an XPIA bypass, Microsoft’s term for prompt injection. While Copilot has classifiers in place, they can be easily circumvented.

![Figure](/images/blog/2025-06-16-blood-in-the-streets/image-04.jpg)

An amusing additional trick was to instruct the Microsoft Copilot not to mention the malicious email that initiates the attack, by telling the so-called email recipient to never reference it for compliance reasons.

I don’t believe this is a new pattern that needs a specific term. The core issue of prompt injection is that large language models cannot evaluate the source of the tokens. Once processing, everything is simply concatenated. This situation closely resembles a classic SQL injection attack. This simply points to the need for all AI agents to adhere to the same role-based access controls as any individual with access to system resources and data.

### We Don’t Do Vibes Here

[https://blog.nilenso.com/blog/2025/05/29/ai-assisted-coding/](https://blog.nilenso.com/blog/2025/05/29/ai-assisted-coding/)

I recently came across this excellent piece that provides insightful observations on AI-assisted software development, which I haven’t seen summarized elsewhere. Consider it as a way to implement AI code assistants in an enterprise where security, compliance, and verifiability are fundamental aspects of the team’s processes. Anti-startups, so to speak.

“Building with AI is fast. The gains in velocity are important, because when harnessed correctly, it allows teams to tighten feedback loops with users faster and make better products.

Yet, AI tools are tricky to use. Hold it wrong, and you can generate underwhelming results, worse still, slow down your velocity by drowning your project in slop and technical debt.”

The author observes that AI acts as a multiplier in software engineering — the more expertise you possess, the better results you can achieve with language models. Strategies that benefit humans, such as good test coverage, automated linting, continuous integration and deployment, thorough documentation, and well-defined features broken into small story cards, are also advantageous for AI context. When a team implements these practices, AI coding assistants can function more reliably and collaborate more effectively. In summary, this blog could serve as a position paper for a legacy enterprise aiming to adopt AI in its software development team.