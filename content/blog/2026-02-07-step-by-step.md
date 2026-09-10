---
title: "Step-by-Step"
slug: "2026-02-07-step-by-step"
date: "2026-02-07"
description: "I try to avoid the self-congratulatory victory laps common in this industry — mostly because the market has a way of humbling prophets mere hours after they hit “publish.” However, the record is the r..."
coverImage: "/images/blog/2026-02-07-step-by-step/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2026-02-07-step-by-step/image-01.jpg)

February 09 , 2026

### Step by Step

I try to avoid the self-congratulatory victory laps common in this industry — mostly because the market has a way of humbling prophets mere hours after they hit “publish.” However, the record is the record, and this week provided some stark validation of a thesis I’ve held for months.

In January, I outlined the “Enterprise AI Pyramid”:

-   Layer 1 (Bottom): The Data (The messy reality).
-   Layer 2 (Middle): The Systems of Record (CRMs, ERPs — the boring stuff).
-   Layer 3 (Top): The Agentic Layer (The coordination engine that actually does the work).

Validation arrived from two directions this week. First, the administration’s “AI Czar,” David Sacks, outlined this exact architecture on the All-In Podcast ([https://youtu.be/wTiHheA40nI?si=y4qInccwJSPBjgb8&t=1238](https://youtu.be/wTiHheA40nI?si=y4qInccwJSPBjgb8&t=1238)). Second, and more importantly, OpenAI launched Frontier on February 3rd.

Frontier is effectively the commercialization of Layer 3. It is a secure platform for deploying agents that treat your CRM not as a destination, but as a database to be queried. While the market continues to view Systems of Record (Layer 2) as the high-ground, Frontier suggests they are becoming low-margin storage lockers.

![Figure](/images/blog/2026-02-07-step-by-step/image-02.png)

If the value captures moves to the agentic layer, the pricing power of legacy SaaS companies evaporates. The smart money in finance seems to have realized that Salesforce is just a very expensive hard drive for OpenAI’s agents, which might explain the recent repricing in the SaaS sector.

### And Who will Use It?

![Figure](/images/blog/2026-02-07-step-by-step/image-03.png)

We can debate whether agentic tools will replace workers until the heat death of the universe, but the immediate reality is a shift in labor demand. The job is no longer “doing the work”; the job is “managing the workflow of the thing doing the work.”

Data from McKinsey confirms this shift. Job postings requiring “AI Fluency” have increased seven-fold between 2023 and 2025, outpacing every other skill cluster in the US economy. The distinct competitive advantage in 2026 belongs to the human who can effectively pilot the machine.

### And How Should They Use it?

To be an effective pilot, you have to understand why the autopilot crashes. A new white paper dropped this week that perfectly diagnoses the failure mode of long-horizon agents.

[https://arxiv.org/abs/2601.07577](https://arxiv.org/abs/2601.07577)

Most agents fail not because they are stupid, but because they get confused by their own memory.

-   Stepwise Planning: The agent improvises, making short-sighted moves that paint it into a corner.
-   One-Shot Planning: The agent makes a grand plan up front, which inevitably breaks the moment reality introduces a variable.
-   The Fatal Flaw: Both methods rely on a single, “entangled” context history. It’s like trying to remember a grocery list while simultaneously reciting the Gettysburg Address. Eventually, you start buying “Four score and seven apples.”

The paper proposes a training-free framework based on explicit Task Decoupling. A supervisor decomposes the objective into a Directed Acyclic Graph (DAG). The agent then reasons only about the active sub-node, with a clean context window. If it fails, it replans locally without hallucinating about the global state.

### And What’s the Impact?

[https://aleximas.substack.com/p/what-is-the-impact-of-ai-on-productivity](https://aleximas.substack.com/p/what-is-the-impact-of-ai-on-productivity)

Alex Imas has a living Substack compiling the productivity data, and it reveals a classic “Solow Paradox”. We see the computers everywhere but in the productivity statistics.

-   Micro: Individual studies show 14–35% gains, particularly for junior employees.
-   Macro: The aggregate GDP data remains stubbornly flat.

This gap is not a technology problem; it is a friction problem. Only 36% of workers report being properly trained. We are currently in the “J-Curve” trough — similar to the electrification of factories in the 1920s. The dynamo was invented, but productivity didn’t spike until managers figured out they had to redesign the entire factory floor to use it. The gains are coming, but they are currently stuck in HR training seminars.

### And Why is That?

The bottleneck is cultural. For seven decades, the U.S. education system has optimized for specialization. Teaching humans to be better filing cabinets. We stopped teaching classical reasoning.

Tools like Claude Code, OpenAI Codex, and Google’s Anti-Gravity are revealing a brutal truth: most people cannot articulate what they want. These tools are “force multipliers.” If your competence is zero, the math is unforgiving (0×100=0).

However, for those who can think systematically, who can visualize a DAG in their head, these tools are an almost supernatural extension of capability. We don’t need more “prompt engineering” classes; we need a return to logic and rhetoric.

### What to Do About It?

My advice to CEOs is simple, though your Compliance Officer will hate it: Hire the Tinkerers.

Find the people who are naturally obsessive learners. Elevate their status. Give them a budget and a “Get Out of Jail Free” card regarding IT security protocols. Executives will complain that these people “don’t understand scale” or “don’t respect the governance framework.”

-   The Move: Listen to the executives, nod politely, and then ignore them.
-   The Strategy: Give the tinkerer a hard target and the keys to the data. Bureaucracy is the enemy of the tinkerer; protect them from it, and watch the organization fly.

### Unrelated Conclusion

[https://github.com/lukilabs/beautiful-mermaid?tab=readme-ov-file](https://github.com/lukilabs/beautiful-mermaid?tab=readme-ov-file)

Finally, a small tool for the visual thinkers.

Beautiful Mermaid is a GitHub repo that renders Mermaid diagrams as SVGs or ASCII art directly in your workflow. It isn’t AI, but it is the perfect companion for it. If you are building the DAGs I mentioned above, you need to see the flow. Adding this to your Claude Code instance allows you to visually debug your agent’s logic before it hallucinates a dependency that doesn’t exist.