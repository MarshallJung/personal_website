---
title: "A Long, Long way to go…"
slug: "2026-03-07-a-long-long-way-to-go"
date: "2026-03-07"
description: "It’s often hard to gauge how other enterprise AI initiatives compare to what I’m helping to build at Valvoline Global Operations. I recently read a Wall Street Journal piece on Colgate-Palmolive, high..."
coverImage: "/images/blog/2026-03-07-a-long-long-way-to-go/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2026-03-07-a-long-long-way-to-go/image-01.png)

It’s often hard to gauge how other enterprise AI initiatives compare to what I’m helping to build at Valvoline Global Operations. I recently read a Wall Street Journal piece on Colgate-Palmolive, highlighting how a long-time insider is leading AI efforts there. I know these articles usually lag reality, but taking it at face value, my reaction to their program would be “unimpressed.”

![Figure](/images/blog/2026-03-07-a-long-long-way-to-go/image-02.png)

I do think their “AI Ambassador” program, where people across the company partner with the AI leader and then teach others how to fish, is a good thing. But if they’re only using these tools for basic research and a simple ChatGPT interface, they’re missing a lot of value.

Used correctly, adoption can scale quickly. In my short time at VGO, I’ve seen usage evolve from a Google search replacement to advanced data analysis and workflow/process replacement. I’m also seeing new users and fresh enthusiasm from across the company nearly every day.

While I often feel I’m falling behind the state of the art day to day (hard not to with things advancing so quickly), the truth is that Valvoline Global Operations — despite being a 3,000-employee global company — is pushing real boundaries in thinking and adoption. I look forward to continuing to see what these AI tools can enable, even for a 140-year-old company.

### Harnessing AI

Over the past couple of weeks, there’s been a consistent challenge: AI is moving so fast that terminology is both opaque and overloaded, with few settled definitions. One fast-rising area is LLM or AI harnesses. These orchestration layers turn raw LLMs into autonomous agents capable of real-world action. In these agentic workflows, the LLM is the brain; the harness provides the body: tools, memory, execution loops, and safety guardrails. Without a harness, even the strongest models are stuck in stateless chat. With a harness, they can read file systems, query productivity stacks, execute shell commands, drive a browser, and maintain state across days of work.

Common Terminology (03/2026 Landscape)

1.  **LLM Harness:** The runtime environment (prompt engineering + tool registry + execution engine + context manager) that wraps an LLM. Same model in different harnesses yields radically different behavior because the harness defines available tools, context assembly, and the feedback loop.
2.  **Agentic Workflow / ReAct Loop**: The canonical cycle:

a. Intake + context assembly

b. LLM inference (text or structured tool call)

c. Tool execution → observation injected as new message

d. Loop until final answer or max steps.

e. Pseudocode (the heart of every serious harness):

![Figure](/images/blog/2026-03-07-a-long-long-way-to-go/image-03.png)

**3\. MCP (Model Context Protocol)**: The emerging open standard (modelcontextprotocol.io) that lets any harness discover and call tools from external CLIs/servers without custom glue code. Think USB-C for AI tools.

**4\. Skills / Tools**: Pluggable, natural-language-described capabilities (OpenClaw) or MCP servers.

Links:

[https://github.com/googleworkspace/cli  
](https://github.com/googleworkspace/cli)[https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/workiq-overview  
](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/workiq-overview)[https://github.com/anthropics/skills/tree/main/skills/skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)

OpenClaw is the dominant open-source personal-agent harness (formerly Moltbot/Clawdbot) but there are other notable harnesses including OpenCode (planning + build split), Aider, Cursor, agent-runner, and vendor-specific ones (GitHub Copilot CLI, Gemini CLI Harness AI DevOps Agent, etc).

What’s confusing is that many of these tools are both harnesses in themselves and MCP-compatible, making traditionally linear or parallel workflows more omnidirectional and porous. Agents can compose across vendors without friction because integration patterns are largely identical. A harness can register the MCP server’s tool schema at startup and decide when to call it via proxy. There’s no custom glue code, and you can mix different MCPs for different components based on the application or desired outcome. Standards and best practices will emerge over time, but for now it’s still a tinkerer’s paradise. If that’s not your thing, it may take a while for a more universal user interface to develop that helps the average employee use these tools.

AND!!! We’re seeing a higher abstraction layer emerge that lets you manage multiple LLM harnesses together to handle more traditional, conventionally described business tasks. [https://github.com/paperclipai/paperclip](https://github.com/paperclipai/paperclip) is more of an engineering business manager rather than a programmer.

### Careful with those SLA’s

![Figure](/images/blog/2026-03-07-a-long-long-way-to-go/image-04.png)

There are likely good reasons for this graph, but the Anthropic team relies heavily on AI to write code — apparently 80% of deployed code is written by Claude Code. They ship fast, yet these poor reliability numbers suggest a downside to that speed. This could be due to rapid user growth and infrastructure constraints — something to keep in mind. If you depend on cloud-provided models to power mission-critical parts of your product, it behooves you to be careful about how this works.

### SEO in the Age of AI

[https://www.growandconvert.com/ai/seo-traffic-decline-chatgpt-ai/](https://www.growandconvert.com/ai/seo-traffic-decline-chatgpt-ai/)

Many consumer-facing companies are asking how years of painstaking SEO work will be affected by one-click AI summaries from Google and chat interfaces like ChatGPT, Perplexity. The article is a good read. I won’t summarize it here, but I’ll share a few takeaways to spark discussion.

-   Prioritize Bottom-of-Funnel Content: Focus on ranking for commercial terms. Being cited by AI is key to remaining in the consumer’s “consideration set.”
-   Implement Self-Reported Attribution: Use “How did you hear about us?” fields to capture search-driven discovery often misreported as direct traffic due to unreliable digital tracking.
-   Monitor Branded Search: Use an increase in branded searches as a KPI, indicating non-branded SEO success is driving awareness.
-   Track LLM Referrals: Monitor traffic from AI platforms (like ChatGPT/Claude) to identify brand recommendations outside of search.
-   Holistic Lead Measurement: Measure organic leads site-wide (not just per article) to account for users who find the brand via AI-cited content but convert through a direct visit.

### OpenFrawd

![Figure](/images/blog/2026-03-07-a-long-long-way-to-go/image-05.png)