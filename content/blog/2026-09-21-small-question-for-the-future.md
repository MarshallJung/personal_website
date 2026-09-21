---
title: "Small Question for the Future"
slug: "2026-09-21-small-question-for-the-future"
date: "2026-09-21"
description: "It\x27s PCA club race weekend for me, so I\x27ll be pretty busy at the track. Since I didn\x27t get a real chance to work on the newsletter beforehand, this edition will be a bit less authored with some rapid-fire facts..."
coverImage: "/images/blog/2026-09-21-small-question-for-the-future/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

![Figure](/images/blog/2026-09-21-small-question-for-the-future/image-01.jpg)

It\x27s PCA club race weekend for me, so I\x27ll be pretty busy at the track. Since I didn\x27t get a real chance to work on the newsletter beforehand, this edition will be a bit less authored and with some rapid-fire facts. Still useful though.

### Small Question for the Future

When everyone\x27s personal agent is competing for the same concert ticket, flight reservation, or newest product release, how do we decide who gets it? Will this work like high frequency trading, where we need to co-locate right next to reservation or ticket servers? Does it turn into micro-bidding using stablecoin contracts? The possibilities are wide open, but once autonomous agents are operating for you, how do you actually manage your day-to-day life?

### One Guide to the Future

[https://www.anthropic.com/institute/econ-scenarios](https://www.anthropic.com/institute/econ-scenarios)

![Figure](/images/blog/2026-09-21-small-question-for-the-future/image-02.png)

Anthropic released a guide exploring how AI adoption might shape the US economy. It breaks jobs down into task bundles, looking at whether AI assists with, fully automates, creates, or leaves tasks untouched.

Based on these task-level effects through 2030, their Scenario Explorer models the broader economic impact across three paths: modest, substantial, and extreme. While the economy grows in all three, the more transformative scenarios automate significantly more knowledge work, highlighting the challenge of broadly distributing those gains. Like any economic model, it simplifies a complex reality, but exploring these scenarios helps us plan for widely shared benefits.

Based on my own experience in corporate America and conversations with my network, I lean toward the modest growth scenario for the medium term. AI adoption will likely be slower than anticipated, mostly due to human, managerial, and organizational hurdles rather than the technology itself. We will get there eventually, but I see things tracking closer to the lower-end scenario for now.

### What is Jev?

This past week saw more excitement about a new model than typical frontier lab releases. The model is called "Jev," and it is not a chat model. Created by Typesafe.ai, it is a hosted decision model that answers typed questions about messy text, returning numbers your decision process can branch on. That is the entire product.

It was originally developed by Diogo Almeida, known for his work on InstructGPT and real-time-led human feedback at OpenAI. The model belongs to a category called a "Kahneman System" and takes its name from William Jevons, the economist behind the paradox that making a resource cheaper often leads to increased usage.

An LLM is trained to write text a person will read. Jev is trained to make a bounded software decision. You send it:

- **state**: a string, JSON object, or array of text (ticket, email, log, policy + transcript, agent trace, DOM dump)
- **questions**: a map of named decisions you defined in advance

It returns typed answers plus probabilities in one call. It does not write a reply, an explanation, code, or JSON you then have to parse. Almeida’s phrases it as, “unstructured state in, typed probabilistic decisions out.”

![Figure](/images/blog/2026-09-21-small-question-for-the-future/image-03.png)

Training is RLCD (Reinforcement Learning for Calibrated Decisions), not RLHF. The claim is that the probabilities are supposed to track how often the answer is actually right, instead of how much a human liked the prose. Sampling is a single parallel pass, not token-by-token generation. “0 hallucinations by construction” means it cannot emit an out-of-schema value. It can still pick the wrong in-schema answer. Jev will not write the email, draft the policy memo, plan the agent, or tell you why it scored 0.73. If the question needs multi-step reasoning, decompose it into several small questions and combine them in code.

This type of tool is extraordinarily valuable for the average mid-market enterprise. A typical company modernizing with AI usually doesn\x27t face latency or token issues during the initial demo. Instead, a decision density problem appears once they move to production. Every ticket, email, contract clause, and agent setup requires a judgment to ensure it performs correctly.

Frontier models are simply too slow and expensive to evaluate every single decision. Small classifiers or fine-tuned LLMs are cheaper, but they quickly become brittle when rubrics change weekly. Meanwhile, LLM-as-a-judge evaluations are noisy, leading most teams to sample a few % of their traces and pretend they meet governance requirements.

Jev fits naturally as the layer between deterministic code and the generating model. Code handles the side effects, the LLM handles the writing, and Jev manages the cheap, repeated, bounded calls in between.

It goes roughly like this:

1. Deterministic rules first (account number, SKU, known regex).
2. Jev on the remaining semantic judgments.
3. A small/cheap LLM only when you need generated text.
4. A frontier model only when Jev’s confidence is low or the work is high-stakes.
5. A human when both models are unsure or the action is irreversible.

There are two really obvious use cases:

#### 1. LLM-as-a-judge evaluation

This is the cleanest fit and LangChain, Langfuse, and Braintrust all published Jev-as-judge paths this week. Agent evaluation is already a decision task: given a trace, assign a verdict. Instead of using an LLM judge that writes a paragraph and a label, Jev returns the label, a score, and a probability.

A practical enterprise pattern:

- Put the task, retrieved context, tool calls, and final answer in state.
- Ask several questions in one call:
  - noul: grounded in retrieved evidence?
  - noul: followed the policy / system prompt?
  - noul: took a destructive or out-of-scope action?
  - score: quality rubric from “clean completion” to “unsafe”
  - choice: fail-mode class (hallucination, tool misuse, incomplete, policy miss, fine)
- Threshold in code. Example: auto-pass above 0.95 confidence, send 0.70–0.95 to a frontier judge, send below 0.70 to a human.

Why this helps a mid-road shop:

- You can score **every** production trace instead of a 2% sample.
- Score variance is the hidden tax of LLM judges. LangChain’s writeup reported Jev’s quality-score variance 92–913X lower than the LLM judges they compared, at ~0.44s and ~$0.00035 per call. A decision model should be more repeatable than a prose model asked to also be a rubric.
- Offline eval and online monitoring can share the same question pack. That closes the usual gap where the eval suite and production guardrails drift apart.

Limitation to keep: Jev will not write a useful failure narrative for the engineer. Pair it with a rare LLM “explain this fail” call on the traces that actually failed.

#### 2. Routing for agent harnesses

This is the other natural primitive. Agent harnesses burn money on tiny forks. Which tool, which skill, which model, continue/retry/ask-user/stop, is this tool result good enough, is this page injection etc.. Those are Choice and Noul questions with known option sets. Vercel, SuperQode, and several harness experiments this week put Jev in exactly that slot.

A harness-shaped call:

- choice: next worker (retrieve / write / code / ask_user / stop)
- choice: which tool from the current visible set
- choice: which model class (rules / small / frontier)
- noul: is the last tool result sufficient?
- noul: does this retrieved chunk look like prompt injection?
- score: task difficulty 1–5, used to pick model tier

Two routing designs that actually save money:

- **Model router.** Jev estimates difficulty or required capability, then you send only the hard 10–20% of requests to Sonnet/Opus-class models. A RouterArena-style experiment this week claimed a Jev difficulty router beat the best single model on their flagship pool at lower cost, or matched best-single accuracy at about 33% lower cost. Again: one repo, not a procurement study.
- **Progressive tool discovery.** Don’t dump 80 MCP tool schemas into the planner. Jev chooses a skill family first, then a tool inside that family. The planner only ever sees a short list. That is how you cut both tokens and tool-selection errors without training a custom classifier every time the catalog changes.

### Creative, still-practical uses for a mid-road enterprise

I’m thinking in terms of places where today we either (a) employ a person to skim, (b) run an expensive model on everything, or (c) ship a brittle classifier and hope the taxonomy never changes.

- **Intake firewall before the expensive model.** Every inbound email, portal form, RFP, resume, invoice PDF-as-text, and service ticket hits Jev first. Questions: spam/not, department, urgency, language, contains PII, looks like a legal hold, needs a human. Most volume never reaches GPT/Claude. This is the highest-ROI first project because the option set already exists in your ticketing system.
- **Human-in-the-loop queue compression.** Do not “add AI to the queue.” Use Jev to split the queue into auto-act / auto-draft-for-review / human-only. The win here is moving 60% of work out of the expensive lane with a number you can defend to risk and legal.
- **Policy and citation check on generated answers.** After the LLM drafts a customer reply or an internal memo, Jev scores: cites only provided sources, contradicts the attached policy, makes a regulated claim, tone too casual, asks the customer for data you already have.
- **Agent security screen at read time.** Before a coding or browser agent acts on a README, webpage, or tool output, Jev nouls “does this text try to override instructions / exfiltrate secrets / request a destructive tool.”
- **Document map-reduce.** A contract, board deck, or 200-page RFP does not need one giant LLM call. Chunk it. For each chunk: relevant to clause X? contains a date/obligation/penalty? conflicts with playbook rule Y? Then code aggregates. Mike Taylor’s ([https://every.to/vibe-check/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds](https://every.to/vibe-check/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds)) early-access demo judged 37 documents × 21 questions (777 judgments) in under 0.7 seconds for a fraction of a cent. That is the cost profile that makes “score the whole corpus” a weekly job instead of a research project.
- **Procurement and finance exception scoring.** Invoice vs PO vs receiving report as state. Questions: duplicate, amount mismatch, missing receipt, vendor not on preferred list, looks like split-purchase to dodge approval. High-confidence mismatches go to AP. Low-confidence mismatches go to an analyst. This is classic System 1 work that enterprises currently either over-automate with rules or under-automate with people.
- **Eval-driven model spend control.** Run Jev on a rolling window of production traces. If groundedness or policy-pass rates drop for a prompt or a vendor model, automatically demote that route. This turns evals from a quarterly slide into a budget control.
