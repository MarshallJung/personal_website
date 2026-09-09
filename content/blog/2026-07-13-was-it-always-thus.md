---
title: "Was it Always Thus?"
slug: "2026-07-13-was-it-always-thus"
date: "2026-07-13"
description: "jung.marshall@gmail.com"
coverImage: "/images/blog/2026-07-13-was-it-always-thus/image-01.png"
tags: ["AI Strategy"]
readTime: "7 min read"
---

![Figure](/images/blog/2026-07-13-was-it-always-thus/image-01.png)

jung.marshall@gmail.com

Wild West, Colorado

(720)315–6713

(Archive​s available here: [https://medium.com/@jung.marshall](https://medium.com/@jung.marshall/marshalls-monday-morning-ml-archive-002-3f54812a7b37))

July 13, 2026

### It Was Always About Management?

Even before agents became the main way to do productive work — coding or knowledge tasks — prompting tricks had already lost much of their value. The Wharton research linked below details this.

[https://gail.wharton.upenn.edu/research-and-insights/](https://gail.wharton.upenn.edu/research-and-insights/)

The most reliable way to work with AI tools right now is to clearly state your goals, precisely define the output, specify what “good” and “bad” look like, and describe how to test results to verify the goal was met.

If this sounds a lot like being a manager, that’s because it is. If you lead a team or collaborate with others (defining projects, managing people, and evaluating outputs toward a goal) you’re likely good at using AI. The format of your management methodology matters far less than the content, so use whatever you know best (RFP, PRD, SOP, or any other TLA). What matters is maintaining consistent, deep context and direction across the entire process from start to finish.

For example, instead of saying “Help me write a marketing email”, a skilled AI user might define a project’s scope and goals like this, “Collaborate with me as a B2B SaaS copywriter. Write a 3-email cold sequence targeting CTOs of mid-sized healthcare companies to book a 15-minute demo. The tone must be urgent but compliant with medical data standards.”

For leadership in established enterprises, it’s helpful to identify people who are naturally inclined and skilled at this work. Because the interface for AI is natural language, the barrier to entry is zero, but the barrier to *mastery* is incredibly high. Certain backgrounds give people a big advantage.

Here are characteristics of groups that often thrive immediately with AI without formal training, because their day jobs already require them to manage messy, unpredictable human inputs or strict logical structures.

-   **Product & Project Managers:** Obviously. Their entire career is spent translating vague executive mandates into explicit tickets for developers. They already speak “Specification.”
-   **Editors and Creative Directors:** They are used to taking a rough draft from a human writer or designer and giving precise, actionable feedback (*“Make this sharper,” “The pacing is off in section two, expand the conflict”*). They excel at the iterative prompting loop.
-   **Lawyers:** Legal training is entirely based on edge cases, strict definitions, and closing loopholes. A lawyer writing a prompt treats it like a contract, leaving the AI zero room for unwanted interpretation.
-   **People with High Conscientiousness & Low Agreeableness (Personality Traits):** Conscientious people naturally organize information logically. Crucially, *low agreeableness* is a superpower here. Agreeable people accept mediocre AI answers because they don’t want to “bother” the tool or feel rude. Disagreeable users ruthlessly reject bad outputs and demand revisions until it’s perfect.

BUT, certain mindsets find the current state of AI deeply frustrating because it conflicts with how they usually solve problems.

-   **The “Individual Contributor” Visual/Technical Expert:** People who are used to doing the craft entirely themselves (e.g., pure execution-focused developers or illustrators) sometimes struggle because they want to grab the steering wheel. They find it hard to *delegate* the execution and focus purely on direction.
-   **Highly Intuitive / Non-Verbal Thinkers:** People who operate on “vibes,” feelings, or visual intuition without translating it into structured language find AI incredibly frustrating. If you cannot articulate *why* something looks or feels wrong in explicit words, you cannot guide an LLM to fix it.
-   **The “Google Generation”:** Users who grew up treating search boxes as magic portals where you type 2–3 keywords and browse results. They treat AI like an advanced search engine, get a generic paragraph back, and conclude that “AI is overhyped.”

AI is shifting the human role in enterprise from creator to editor-in-chief. The leaders of the next decade in white-collar knowledge work won’t necessarily be the best coders or fastest writers, but those who excel at organizing thoughts, delegating tasks, defining parameters, and enforcing quality control.

### The Individual Human Downside of AI

There’s a downside to being good with AI. In the past, managing a team meant exercising executive function only occasionally or at least sparsely. Now, with AI’s speed and a heavy multitasking environment, your executive function is constantly taxed, and work becomes less enjoyable. There’s a distinct kind of burnout among heavy AI users that differs from the old model of overwork driven by singular-task hyperfocus. Just something to consider.

### Can we rely on Open Source for AI?

[**https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07/**](https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07/)

Open source in AI doesn’t mirror traditional open source. Classic software scales because code is cheap to copy and run. AI models break this in three ways:

\- Infrastructure: With Linux (for example), a developer on a cheap laptop could contribute to the kernel. Frontier AI demands not just talent but billions in compute and infrastructure.

\- Policy: Software was historically commercial or logistical; frontier AI is treated as dual-use and national security.

\- Depreciation: A linux build five years old still works. AI models rapidly become functionally obsolete. An open-weight model from 12 months ago can be twice as expensive and half as capable as a modern API, discouraging enterprises from heavy self-maintenance.

How should enterprises consume AI? The dynamics push a shift from open vs. closed to a pragmatic hybrid model. Call it “good-enough localism”. Most companies realize they don’t need trillion-parameter closed models to summarize invoices. The market bifurcates along concepts that I’ve previously written about. Orchestration layers calling closed hosted APIs, plus a utility layer of smaller, optimized open-weight models running locally or in private clouds for specific, repetitive tasks.

Data gravity further reshapes choices. In traditional open source, value comes from customizing code. In AI, it comes from shielding data. Consumption will depend on where data resides. If open weights fragment or face restrictions, enterprises will favor vendors who bring closed models to enterprise data securely, rather than sending data or usage metadata to public APIs.

The result is model-agnostic middleware. Abstraction layers that let enterprises swap a closed API for a local open-weights model without rewriting core applications.

### Either Duh or I’m Dumb

[https://www.anthropic.com/research/global-workspace](https://www.anthropic.com/research/global-workspace)

Over my vacation I’ve been noodling Anthropic’s latest paper. In very brief summary… neuroscience suggests thoughts become conscious when they enter a privileged, brain-wide broadcast workspace. Anthropic reports a similar mechanism in Claude models, which they call the J-space.

I’m sure this research will prompt people far smarter than me to explore ways to make frontier large-parameter models more efficient or easier to steer toward specific solutions. Still, as I read it, I couldn’t help thinking back to my linear algebra and NN days… So, are Anthropic researchers really surprised that intermediate LLM layers manipulate concepts tied to inputs and outputs? Layered matrix transformations have always worked this way. Maybe I’m missing the brilliance of the paper — my readers will have to tell me what I’m not seeing.

### The Data Moat

I tend to repeat myself on points I find crucial, so forgive the redundancy. The data used to train AI models is the key determinant of their success. Companies with proprietary data will have an edge in their industries. The recent release of Grok 4.5 from XAI (and its collaboration with the newly acquired Cursor) suggests that internal engineering concepts unique to the SpaceX, Tesla, and XAI group can benefit training a model that excels at real-world engineering tasks. I’m eager to see how XAI continues improving Grok by focusing on concepts drawn from the core businesses supplying data to the model.

![Figure](/images/blog/2026-07-13-was-it-always-thus/image-02.png)

### LOL!

![Figure](/images/blog/2026-07-13-was-it-always-thus/image-03.png)