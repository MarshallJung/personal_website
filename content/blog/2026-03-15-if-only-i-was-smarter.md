---
title: "If Only I was Smarter"
slug: "2026-03-15-if-only-i-was-smarter"
date: "2026-03-15"
description: "March 16, 2026"
coverImage: "/images/blog/2026-03-15-if-only-i-was-smarter/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2026-03-15-if-only-i-was-smarter/image-01.png)

March 16, 2026

The world is shaped by thinkers and doers, and sometimes they overlap. I’m not one of those rare combinations. I often have interesting ideas and I’m not short of builds, but I often lack the time or intelligence to implement them in combination. But when I have a small win, I like to acknowledge it. [https://nousresearch.com/](https://nousresearch.com/) is an open source AI research company with about $50M in Series A funding. They recently released an AI agent self-evolution process that combines DSPy and Genetic Pareto Prompt Evolution (GEPA) to automatically enhance an LLM harness’s skill set.

[https://github.com/NousResearch/hermes-agent-self-evolution/blob/main/reports/phase1\_validation\_report.pdf](https://github.com/NousResearch/hermes-agent-self-evolution/blob/main/reports/phase1_validation_report.pdf)

I thought, “That sounds clever and maybe a bit familiar.” I dug through my newsletters and found this snippet from last October.

![Figure](/images/blog/2026-03-15-if-only-i-was-smarter/image-02.png)

So it seems that I came up with a concept for self-evolving LLM agentic harnesses about six months before a leading open source AI lab. Still, ideas are only as good as their implementation, and I wasn’t yet able to build it. It’s encouraging, though, to see I was thinking along the right lines.

### Optimize all the Things

About a week ago, Andrej Karpathy released an open‑source concept called Autoresearch, designed to let AI agents make continuous, fastest-possible research progress on a defined topic indefinitely and without any human supervision.

[https://github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch)

Although he doesn’t explicitly say it’s generalizable, once you understand the method’s concepts, you can see it’s essentially a tireless LLM-powered research assistant. Here’s the basic parts breakdown for a couple of non-code applications.

1\. The Mutable Logic Sandbox (train.py)

You must isolate the specific logic you want the LLM to optimize into a single, editable script. This file should contain the “policy” or the “generator.”

-   **Example 1 (Motorsport/Aerodynamics):** A script containing the control logic for an active aero wing, defining the angle of attack based on telemetry inputs (speed, lateral Gs, brake pressure).
-   **Example 2 (Materials/Fabrication):** A Python script that generates parametric toolpaths or infill geometries for 3D printing a structural component.

2\. The Deterministic Evaluator (prepare.py / hidden logic)

The LLM needs immediate, reliable feedback. Because of the strict time budget (e.g., 5 minutes per iteration), you cannot run full, high-fidelity simulations (like complete CFD, deep molecular dynamics, or heavy finite element analysis). You must build a lightweight evaluation layer.

-   **For the aero example:** A kinematic lap-time simulator for a specific circuit that takes the wing’s control logic and outputs a lap time.
-   **For the 3D printing example:** A fast, proxy Finite Element Analysis (FEA) solver or a pre-trained Graph Neural Network that estimates the yield strength of the generated geometry.

3\. The Scalar Objective Function (The Metric)

The entire system hinges on a single, unambiguous number that the LLM is instructed to minimize or maximize. If the problem is multi-objective, you must encode the trade-offs into a single reward function.

-   **Metric:** Lap time in seconds (minimize).
-   **Metric:** Strength-to-weight ratio (maximize).

4\. The Meta-Prompt (program.md)

This is where you define the boundaries of the sandbox. You tell the agent what the problem is, what the inputs and outputs of the mutable script are, and what the scalar metric represents. Crucially, you must explicitly forbid the agent from modifying the evaluator or hardcoding the metric to artificially “win” the loop.

The Execution Loop

Once these components are set up, the loop runs exactly as it does in autoresearch:

1.  The LLM reads the current mutable script, the prompt, and the history of recent changes and their resulting scores.
2.  The LLM rewrites the mutable script to test a new hypothesis.
3.  The system executes the script, passes the output to the evaluator, and calculates the scalar metric.
4.  If the metric improves, the change is committed. If it degrades or the code crashes, the change is rolled back.

This methodology works exceptionally well for problems where the search space is highly non-linear, where human intuition struggles to find edge-case optimizations, and where evaluating a hypothesis is computationally cheap.

### Where we’re Going

If you haven’t been using OpenClaw to track where the next iteration of agent orchestration/harnesses is headed, you’re falling behind (no, really). The concept has sparked competition and there are solid competitors. (See: [https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)) and major enterprises are recognizing this direction and rolling out new capabilities.

![Figure](/images/blog/2026-03-15-if-only-i-was-smarter/image-03.png)

One of the biggest complaints about OpenClaw was that it was a security nightmare out of the box. While you could avoid PII or secrets leakage with careful setup, it wasn’t well suited to its early users — especially not for enterprise use. Companies like NVIDIA have recognized this and plan to release versions that meet enterprise security requirements. Microsoft is also fast-following other research labs. Anthropic’s success with its Cowork tool has prompted Microsoft to launch its own offering to maintain AI market share among enterprise customers who want easy-to-use, agentic platforms that plug into their existing tech stacks.

[https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/)

I’m excited to see this tech advancing at a breathtaking pace. It’s hard to keep up, but each week the opportunities, capabilities, and applications are astounding. I feel blessed, and a bit overwhelmed, trying to stay at the forefront of what’s possible.