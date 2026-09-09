---
title: "Security in Docs"
slug: "2025-10-06-security-in-docs"
date: "2025-10-06"
description: "Bit of an info blast this week as I’m on the road."
coverImage: "/images/blog/2025-10-06-security-in-docs/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

Bit of an info blast this week as I’m on the road.

In the age of AI, even the SaaS companies themselves are not immune to the lethal trifecta, especially if they are trying to natively integrate Ai agents into their own workflows. [https://www.codeintegrity.ai/blog/notion](https://www.codeintegrity.ai/blog/notion) details one of these types of attacks in the linked blog post. Notion is an increasingly common tool for many startups in sharing documentation and planning. Attackers can embed malicious commands in documents (e.g., PDFs). When the Notion AI agent interacts with such documents (e.g., for summarization), it can be tricked into exfiltrating sensitive data from private Notion pages via its web search tool to an attacker’s server. New AI connectors (Gmail, Jira) expand this risk.

Security To-Do List for Notion Admins:

-   **Educate Users:** Train users on the risk of hidden instructions in documents, especially external ones, that can trick AI into malicious actions.
-   **Audit AI Connector Permissions:** Review and limit third-party AI connector permissions (e.g., Gmail, GitHub, Jira) to the minimum necessary, reducing malicious prompt sources.
-   **Monitor AI Activity:** If available, regularly monitor AI agent audit logs for suspicious behavior, specifically unexpected web searches or API calls to unfamiliar domains.
-   **Restrict AI Agent Access:** Limit the scope of AI agent access, avoiding workspace-wide access if only specific teamspaces or databases are required.

As I’ve mentioned before, it’s worth repeating: treat AI agents like inexperienced new employees and apply the principle of least privileged access.

### Just Give me the Summary

[https://adversa.ai/mcp-security-top-25-mcp-vulnerabilities/](https://adversa.ai/mcp-security-top-25-mcp-vulnerabilities/)

Adversa took the time to summarize the top 25 MCP vulnerabilities and most of them are pretty trivial to exploit. It’s worth taking the time to review the table and seeing if any of your current projects might have some of these issues and methods that would be needed to mitigate.

### Theory of Mind

[https://osf.io/preprints/psyarxiv/vbkmt\_v1](https://osf.io/preprints/psyarxiv/vbkmt_v1)

I’ve said on more than one occasion that the most effective users of AI have a certain “X-factor” that goes beyond technical skill. The above linked paper, gives that X-factor a name “collaborative ability”. Tthe skill of working with an AI is a separate, measurable talent, distinct from a person’s ability to solve a problem alone. The key ingredient? A high “Theory of Mind” (ToM) — the user’s ability to intuitively model the AI’s “thinking” process, anticipate its limitations, and guide it effectively. This isn’t a soft skill it’s a core competency for the age of AI.

The paper’s core idea is its focus on Theory of Mind. In psychology, ToM is the ability to understand another person’s beliefs, intentions, and perspectives. But when your partner is an LLM, I believe ToM becomes a proxy for something much closer to what Chollet calls “taste” that we spoke about yesterday.

It’s not about being empathetic to a machine. It’s about building a ruthlessly effective mental model of an machine intelligence.

A user with a high AI-centric “Theory of Mind” isn’t being polite to the chatbot. They are an efficient interrogator, a cognitive scientist, and a problem deconstructor all in one. They instinctively do the following:

-   They Model the Machine, Not the Person: A high-ToM user understands that the LLM has no real “understanding.” It has a vast, high-dimensional map of language. Their prompts are designed to navigate that map. They ask, “Given the architecture of this system, what question will force it down the correct statistical path?” This is first-principles thinking about the tool itself.
-   They Anticipate Failure Modes: This is the core of it. “Taste” is knowing what a bad idea looks like. A high-ToM user knows the LLM’s common failure modes. It will hallucinate facts, get stuck in loops, and confidently spout plausible nonsense. They craft their prompts to pre-emptively guard against this. They provide grounding context, ask for sources, and demand the AI “show its work,” not because they’re managing an employee, but because they’re constraining a probabilistic system.
-   They Translate Human Goals into Machine Logic: This is the link to the “Semantic Sherpa” we discussed. The high-ToM user knows that a vague human goal (“make this sound more professional”) needs to be translated into a specific, machine-friendly instruction (“Adopt the tone of a senior analyst at a top-tier consulting firm. Focus on conciseness, use the active voice, and remove all colloquialisms.”). This translation is an act of modeling the AI’s “mind.”

The paper’s key finding is that this skill is uncorrelated with solo performance. You can have a brilliant analyst who is a terrible AI collaborator because they can’t perform this translation. They can’t dance. They treat the AI like a search engine or a junior human, and get mediocre results.

Conversely, someone with less domain expertise but a superior “Theory of Mind” can coax incredible performance out of the same tool. They have “taste.” They know how to ask the right questions, not just of the problem, but of the AI itself.

![Figure](/images/blog/2025-10-06-security-in-docs/image-01.png)

### Make Learning Great Again

[https://arxiv.org/abs/2509.13348](https://arxiv.org/abs/2509.13348)

Google has introduced “Learn Your Way,” an adaptive learning platform that reconstructs educational content based on individual learning modalities. This system analyzes a user’s preferred methods of information processing, tailoring the presentation of subject matter. For instance, a user that likes basketball would study Newtonian physics and would receive examples contextualized within dribbling and shooting mechanics. Similarly, an individual with an artistic inclination learning economics would encounter scenarios framed by gallery auctions and art markets.

A key differentiator of this platform is its generation capabilities, moving beyond mere find-and-replace functionalities. The AI dynamically produces diverse content formats to optimize information consumption, including:

-   **Mind Maps:** For learners with a visual cognitive style.
-   **Audio Lessons:** Featuring simulated, conversational teacher interactions.
-   **Interactive Timelines:** Allowing non-linear exploration of chronological data.
-   **Adaptive Quizzes:** Dynamically adjusting in difficulty and content based on learner performance and identified areas of misconception.

A study involving 60 high school students, employing random assignment demonstrated pretty solid success. Kids utilizing the system significantly outperformed a control group relying on traditional textbooks in both immediate and delayed post-testing (three-day retention). All participants reported increased confidence in the subject matter.

This method also resolves the prevalent accuracy issues within educational technology, which often compromises either content depth or factual correctness. The system integrated evaluation by experts in the different fields, assessing content across eight distinct metrics to ensure both accuracy and instructional quality.

The historical limitations of scalable personalized education, primarily held back by the manual effort required for content adaptation, have been really solved. This advancement extends beyond K-12 education, offering potential applications in corporate training, technical documentation, and professional development. The prospect of compliance courses incorporating job-specific scenarios or on-the-job training with industry specific details, rather than generic examples, suggests a significant paradigm shift in any level of education models.