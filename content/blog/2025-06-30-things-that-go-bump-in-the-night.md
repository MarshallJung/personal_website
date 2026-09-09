---
title: "Things That Go Bump in the Night"
slug: "2025-06-30-things-that-go-bump-in-the-night"
date: "2025-06-30"
description: "Things That Go Bump in the Night"
coverImage: "/images/blog/2025-06-30-things-that-go-bump-in-the-night/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

I assure you this newsletter isn’t turning into a security blog, but it’s important to consider the unintended consequences and mistakes related to AI during this ongoing integration phase. As foundational models stabilize and the economics of AI applications evolve, enterprises are exploring how to apply AI to enhance efficiency, whether by building their own solutions or acquiring them from third-party vendors. Currently, the main concern is security and compliance. You can find efficiency in many repeatable tasks, but from a security standpoint, many people may be getting a bit out over their skis. You may remember the survey from last week’s newsletter, and I have a few more insights to share this week.

First, It appears that Asana did a GitHub. [https://www.bleepingcomputer.com/news/security/asana-warns-mcp-ai-feature-exposed-customer-data-to-other-orgs/  
](https://www.bleepingcomputer.com/news/security/asana-warns-mcp-ai-feature-exposed-customer-data-to-other-orgs/)The excessive MCP access enabled individuals within a company to view task-level information, project metadata, team details, comments, discussions, and uploaded files from various domains. To mitigate this, Asana suggesed setting LLM integration to restricted access…you know like a “new employee’s” appropriate level of RBAC?. This situation highlights that the fundamental principle of least privilege was not followed when building their MCP server.

These best practices are well documented on the industry standard modelcontextprotocol.io web page: [https://modelcontextprotocol.io/specification/draft/basic/security\_best\_practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices) Many companies are solving the challenge of AI deployment by exposing their MCP servers directly to clients and implementing OAuth at the application level instead of using a dedicated proxy. While this approach works well for basic authentication, it does not meet the needs for dynamic authorization. This situation raises concerns about the “confused deputy” problem, where the MCP server might unintentionally perform privileged actions on behalf of an attacker when calling downstream services. Traditional enterprise security solutions have relied on VPN-based perimeter protection, but this is incompatible with modern agentic access patterns, as hosted AI services like Claude or ChatGPT cannot connect to private networks via VPN. This presents an architectural choice: either limit agentic access to fully internal deployments, which negates the benefits of hosted AI services and access to advanced models, or expose the MCP service to public networks with strong application layer security. The latter aligns with zero-trust principles. The MCP specification recognizes this need by requiring proxy architectures instead of network-level controls. However, it does not specify how these proxies should implement the dynamic authorization policies needed for agentic access scenarios.

Zero trust security principles are essential here. They provide the contextual layer that OAuth and well-implemented MCP proxies fundamentally lack.

-   Never trust, always verify: Evaluate every MCP method call independently, even for agents with valid credentials.
-   Least privilege access: Restrict actions beyond OAuth scopes using fine-grained context.
-   Assume breach: Monitor for anomalous behavior, even from valid tokens.
-   Continuous verification: Reassess each request as conditions evolve.
-   Context-aware authorization: Validate requests against real-time conditions, not just static scopes.

The folks over at [https://www.pomerium.com/resources](https://www.pomerium.com/resources) have a helpful chart that details the various layers and implementation protocols for zero trust in MCP.

![Figure](/images/blog/2025-06-30-things-that-go-bump-in-the-night/image-01.jpg)

Is it particularly challenging to focus on security in AI tools? Not necessarily from a technical perspective, but it does require significant effort from startups developing internal or external AI integration, which is quite the opposite of the “ship fast” mentality that has been made so much easier by the new breed of coding assistants. However, due to ongoing and repeated security issues, prioritizing security has become essential for best practices. I hope venture capitalists and other tech companies carefully consider these credentials and security measures when evaluating tools for their enterprises or during acquisitions.

### Follow-up to the AI-brainpocolypse

![Figure](/images/blog/2025-06-30-things-that-go-bump-in-the-night/image-02.jpg)

In a follow-up to last week’s newsletter about the MIT study, which found that lower brain connectivity during LLM use suggests reduced internal attention and memory rehearsal, it became evident that AI tools are just illuminating the normal distribution of human characteristics. Using these AI tools simply reflects the natural distribution of intelligence and drive. This may be a bit controversial, but new tools invented by humans are often not fully (at all?) understood by most users. And that’s ok! You don’t have to understand LLMs in order to derive some level of benefit from them, even if that’s just using it to make a vacation itinerary or a funny set of lyrics for your friend’s birthday celebration. However there are those of use that must know how stuff works, and are smart enough to grasp the fundamentals and can leverage these new tools more effectively. While AI may make the average person less intelligent, it will significantly boost the productivity of those who are curious and driven. If you have ideas and can “just do things”, the future is yours, provided you are willing to commit and iterate on them.

### What Are You Building For?

[https://arxiv.org/abs/2506.06576](https://arxiv.org/abs/2506.06576)

This paper by Stanford researchers provides valuable insights into where AI is being developed and applied. However, it reveals that many AI tools are being designed for the wrong types of jobs. Some interesting figures tell the story.

![Figure](/images/blog/2025-06-30-things-that-go-bump-in-the-night/image-03.jpg)

Many insights in this data come from AI scientists and surveys of Y Combinator companies. They found that 41% of startup investments are directed towards areas where workers either prefer not to see automation or where AI has limited applicability. It seems the startup community may be creating things that sound cool, but not necessarily what people in the workforce actually need.

![Figure](/images/blog/2025-06-30-things-that-go-bump-in-the-night/image-04.jpg)

The figure above is interesting because 69% of workers reported that they desire AI to automate repetitive tasks, allowing them to focus on high-value work. However, when comparing this with usage data from Claude, the top 10 occupations showing the highest automation desire account for only 1.26% of total usage. This underscores the importance of soliciting worker input, as usage data may not align with actual workplace needs.

The key takeaway is that AI can substantially enhance the average worker’s daily tasks without posing a risk of job replacement. Instead, it can improve efficiency and potentially increase job satisfaction. The industry isn’t focussing on this particularly deeply as of yet, so the “trickle down” is far from cementing our daily work schedules as of now.

### In One Afternoon

Used the new Gemini CLI released this week to build a multimodal vehicle diagnostic app in an afternoon. Prototyping has never been easier. See the demo here: [https://youtu.be/87kpA0sAJLI?si=Ob3K32o4yMTpW\_3Y](https://youtu.be/87kpA0sAJLI?si=Ob3K32o4yMTpW_3Y)