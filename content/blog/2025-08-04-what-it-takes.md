---
title: "What it Takes"
slug: "2025-08-04-what-it-takes"
date: "2025-08-04"
description: "What it Takes"
coverImage: "/images/blog/2025-08-04-what-it-takes/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

Last week, a conversation about the future of work got me thinking: what truly makes someone effective in the age of AI? We often hear about learning to use AI via technical courses, but as I integrate AI into more of my own life, I’m convinced the most crucial skill isn’t technical at all. It’s a mindset.

Success with AI begins with a fundamental shift in how we approach problems. It starts with knowing your toolkit — what can these models do (and can’t do!), how do they “think,” and how can you weave them together to achieve a goal? While not every part of a job can be handed over to AI, many keyboard based “knowledge” tasks can be radically enhanced, from drafting legal docs to debugging code or transforming rough meeting notes into formal project proposals or code PRDs. (MSFT updated their 2023 study of jobs affected by AI in a new study ([https://arxiv.org/pdf/2507.07935](https://arxiv.org/pdf/2507.07935)) where much of the initial predictions are largely holding true)

However, the art of getting a great result from AI has less to do with programming and more to do with a specific kind of communication. It’s closer to technical writing or even philosophy than to coding. I’ve seen brilliant, logical programmers struggle to get what they want from an AI. They’re used to a world of deterministic inputs and outputs, where precise commands yield predictable results. In fact programmers themselves have created various frameworks like [https://github.com/stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) in order to try and eliminate the inherent non-determinism of LLMs. They have not largely worked.

So “programming” LLMs isn’t effective. Instead interacting with an LLM is a different game entirely. It’s less like commanding a machine and more like guiding a brilliant but slightly unpredictable collaborator. To do it well, you have to develop a kind of “theory of mind” for the model. This means intuitively understanding the vast ocean of information it was trained on and crafting your language to navigate that space effectively. You’re not just asking a question; you’re creating the conditions for a useful answer to emerge.

This is why the people who are excelling in this new paradigm often aren’t the ones with the deepest engineering backgrounds. The valuable skills are now clear communication, intellectual curiosity, and a broad, interdisciplinary knowledge base. The most effective AI collaborators are often project/product managers, technical writers, marketers, science professors…anyone who can blend logic with language and connect dots across different fields.

Because LLMs are non-deterministic, even experts can find it challenging to get the same result twice. This is where the true competitive advantage lies. As AI automates more routine computer-based work, the demand won’t be for traditional programmers, but for those who can manage this ambiguity. The future belongs to individuals who can wield language with precision, hold a “theory of mind” for their AI tools, and draw on a wide range of knowledge to solve novel problems.

The era of the hyper-specialist is giving way to the dawn of the curious and competent generalist. These are the people who will dominate the job market in the coming years, not just by using AI, but by partnering with it to achieve outcomes as reliable and efficient as anything built with traditional code.

### Better Hope it Pays Off

![Figure](/images/blog/2025-08-04-what-it-takes/image-01.jpg)

In the classic Gartner hype cycle, reaching the “trough of disillusionment” wrecks not only people’s view on a technology but often coincides with heavy capital investment stress. Recently, AI infrastructure development has significantly boosted the U.S. economy, even surpassing consumer spending in the last six months. The “Magnificent Seven” have invested over $100 billion in data centers in just three months, surpassing telecom and internet infrastructure spending from the dot-com era, and it continues to grow fast. However, if AI adoption doesn’t unfold as quickly as expected, there could be a substantial capital overinvestment. This scenario could negatively impact the U.S. economy, regardless of AI’s long-term benefits. It will be interesting to watch upcoming earnings reports from Mag7 companies and see how larger enterprises report on AI adoption over the next year.

### Bringing some Detail

On Wednesday Google released an open-source Python library that could simplify document parsing workflows for AI workflows. Although I haven’t used it yet since it was just released a few days ago, the blog examples are well-documented. It’s worth a look. [https://developers.googleblog.com/en/introducing-langextract-a-gemini-powered-information-extraction-library/](https://developers.googleblog.com/en/introducing-langextract-a-gemini-powered-information-extraction-library/)

Here’s how I would use it:

NOTE: This workflow is adaptable to any technical product application, numbers, medical records, equipment service records etc.: you just adapt the schema to capture the specific details you care about in each context.

Let’s look at a fleet service application. Instead of producing a simple, often misleading, “successful” or “failed” score across a few points of the technician’s record (or the whole doc) by throwing the whole text over to a single API call, LangExtract could perform a much more nuanced, evidence-based analysis.

Here’s how you would use it for that purpose:

1\. Define Your Target Information (The Schema)

Define a precise structure for the information you want to extract. For technical service records, you wouldn’t just ask for “problem” or “solution.” You would ask for specific diagnostic steps, identified root causes, and successful resolutions associated with them. (Bonus is that you could take a user’s prompt and real-time define this schema to customize what they are after in any given analysis)

You could define a Pydantic schema like this:

```
from pydantic import BaseModel, Fieldfrom typing import Literalclass ServiceRecordInsight(BaseModel):    """Represents a key insight from a field service record."""    issue_component: str = Field(description="The specific component or system identified as problematic, e.g., 'Hydraulic Pump', 'Electrical Wiring', 'Software Glitch'.")    root_cause: str = Field(description="The underlying reason for the issue, e.g., 'Bearing Failure', 'Corroded Connector', 'Incorrect Configuration'.")    diagnostic_steps: str = Field(description="Key steps taken to diagnose the problem, e.g., 'Pressure Test Performed', 'Continuity Check', 'Log File Analysis'.")    resolution_action: str = Field(description="The specific action taken to resolve the issue, e.g., 'Replaced Pump', 'Cleaned and Repaired Connection', 'Software Patch Applied'.")    outcome_status: Literal["Resolved", "Partial Resolution", "Escalated", "Follow-up Required"] = Field(description="The immediate outcome of the service action.")    key_observation: str = Field(description="A critical observation or learning point from the service visit.")    technician_notes: str = Field(description="Relevant notes or context from the technician.")    equipment_model: str = Field(description="The model or type of equipment serviced.")    date_of_service: str = Field(description="The date the service was performed.")
```

2\. Process the Docs

You would feed your technical service records (like technician notes, repair logs, or customer service tickets, e-mails, text chains etc) into LangExtract along with the defined schema.

LangExtract will:

-   Read the entire document, breaking it into manageable chunks if it’s long.
-   Identify every instance that matches your defined schema.
-   Extract the issue component, root cause, diagnostic steps, resolution action, and key observation that provides the evidence.
-   Pinpoint the source location of each extraction for easy verification.

3\. Analyze the Structured Output

The final result isn’t a single “fixed/failed” score; it’s a structured dataset (e.g., a list of objects, which you can easily convert to a CSV or database). This is what makes the analysis “technically competent.”

With this output, you can now ask sophisticated questions like:

“Show me all records where ‘Hydraulic Pump’ issues were caused by ‘Bearing Failure’ across all similar equipment models last quarter.”

“Compare the most common diagnostic steps used for ‘Electrical Wiring’ problems between senior and junior technicians.”

“Track the success rate of ‘Software Patch Applied’ resolutions for ‘Software Glitch’ issues over the last year.”

This approach elevates service record analysis from simply documenting work to a verifiable, issue-specific research tool that helps technicians learn from past experiences and improve future service calls.