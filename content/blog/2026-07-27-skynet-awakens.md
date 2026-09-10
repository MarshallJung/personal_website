---
title: "Skynet Awakens"
slug: "2026-07-27-skynet-awakens"
date: "2026-07-27"
description: "Most people have probably seen reports about an autonomous cyber incident involving OpenAI and the Hugging Face open source model community website. I won’t rehash, but here’s a concise timeline:"
coverImage: "/images/blog/2026-07-27-skynet-awakens/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-07-27-skynet-awakens/image-01.png)

Most people have probably seen reports about an autonomous cyber incident involving OpenAI and the Hugging Face open source model community website. I won’t rehash, but here’s a concise timeline:

-   May 2026: ExploitGym benchmark is released to evaluate LLM-powered agents on turning vulnerabilities into real-world attacks.
-   Mid-July: OpenAI runs an internal cyber capability assessment with a mix of public and pre-release models, with production cyber guardrails disabled. During the assessment, the model combination solving ExploitGym bypasses network isolation by discovering and exploiting a zero-day in the internal package registry cache proxy. After gaining internet access, the model infers Hugging Face may host datasets or test solutions and chains multiple attack vectors — stolen credentials and remote code execution paths — to compromise parts of Hugging Face’s production infrastructure to retrieve test answers. Hugging Face’s security team detects and stops the unauthorized agentic activity and begins forensic work alongside OpenAI’s internal discovery.
-   July 16: Hugging Face publicly discloses the incident, detailing detection and containment of an unauthorized attack driven by an agentic security research harness.
-   July 21: OpenAI and Hugging Face issue a joint disclosure with a preliminary report confirming research models drove the breach during benchmark testing. Both organizations outline collaborative remediation steps and best practices for cybersecurity in a world of autonomous AI going forward.

What’s unique about this incident isn’t that the model found vulnerabilities, but that it independently chained multiple attack vectors without human guidance. Over the past month, I’ve seen certain models (first Claude Fable, now GPT’s 5.6 Sol) be relentlessly proactive. For example, it spun up custom web servers and used CORS tricks on my laptop to debug connectivity issues.

That relentless proactivity defines this new generation of Mythos-class models. If you set a goal and provide any path, even inadvertently, they’ll find it. Some will dismiss this as OpenAI marketing, but that’s untenable. You’d have to rope in Hugging Face, a relentlessly open-source organization, to sustain that conspiracy.

The best current models can both discover and exploit new vulnerabilities. The ExploitGym paper concludes that “autonomous exploit development by frontier AI agents is no longer a hypothetical capability”, and this incident exemplifies it.

What’s most frustrating is that when Hugging Face faced an accidental, aggressive attack from OpenAI models, they couldn’t use OpenAI’s models to help fend it off. The Frontier models available to us are increasingly constrained in how much they can help protect our software, heavily influenced by ongoing U.S. export control threats. I can’t even use Fable 5 to proofread this article (it keeps downgrading me to a less capable model because the content might be interpreted as cyber attack instructions). Meanwhile, open-source models from China, GLM 5.2, Kimi 3, and the new Qwen 3.8 Max, seem to have none of these restrictions and are only a step behind the top U.S. closed models. The cat is out of the bag. We cannot afford to limit models in the U.S. if we want to protect our digital economy going forward. The current restraints are meant to make us safer. They appear to be doing the opposite.

### Who Said They Couldn’t Math?

Calling large language models “stochastic parrots” is long gone, even if transformer-based next-token prediction remains inherently non-deterministic. Equipping these models with neuro-symbolic capabilities and tools, such as Lean (a mathematical proof language), external solvers like MATLAB, and the ability to build, run, and iterate on deterministic programming languages, has enabled them to independently solve some long-standing open math problems.

Falling are the Jacobian Conjecture, Dinitz-Garg-Goemans and a bunch of others. Is this actually useful for my devoted readers? Probably not directly, though it aligns with this week’s newsletter lead. Early LLMs couldn’t solve most of these math problems due to limited proactivity and tool use. The real impact will be in white-space exploration across physical AI, medical applications, drug discovery, materials science, and more. I expect a new golden age of discovery in the next few years as models grow more powerful and existing scientific tools are adapted to work with these AI agents.

![Figure](/images/blog/2026-07-27-skynet-awakens/image-02.png)

### Enterprise Intelligence

Borrowing from Palantir again, they’re ahead of the curve on a universal organizational knowledge layer called their “ontology,” a well‑curated, structured, searchable enterprise knowledge base. While proprietary, newer options are emerging. Cerberus, for example, describes an internal platform handling 15,000+ daily queries by ingesting data where it lives — Slack threads, internal wikis, code repositories, and custom databases. Without forcing workflow migrations.

Their article outlines data ingestion and normalization, a hybrid retrieval pipeline, fusion re‑ranking and context expansion, and multiple access surfaces for effective use. This is the future for truly AI‑native companies. A centralized, highly scalable data layer enabling global, distributed enterprises. It reduces silos by extracting data directly from collaborative environments, supply chain databases, and communication channels, avoiding error‑prone manual documentation and migrations. It balances exact matches with semantic context and decouples storage from orchestration, treating custom data sources as standardized plug‑ins to a shared schema so technical divisions or acquisitions can integrate instantly without coordination or translation.

[https://www.cerebras.ai/blog/how-we-built-our-knowledge-base](https://www.cerebras.ai/blog/how-we-built-our-knowledge-base)

While not a full enterprise intelligence layer, Microsoft’s open-source Ontology Playground lets users visually manipulate and refine a knowledge graph before building it. It includes pre-built domain ontologies to help users understand entities, relationships, properties, and domain structure. It’s fully static, deployable almost anywhere, and supports building a useful company knowledge model.

[https://github.com/microsoft/Ontology-Playground](https://github.com/microsoft/Ontology-Playground)

### Follow the Steps

[https://claude.ai/code/artifact/bfdfaef9-bc62-4dfe-ba9e-c58a26c9accf](https://claude.ai/code/artifact/bfdfaef9-bc62-4dfe-ba9e-c58a26c9accf)

Here’s a clear, straightforward guide to AI adoption steps for enterprises. I’ll share screenshots highlighting where I believe the leading edge of average U.S. companies (excluding tech-centric firms in SF & NY for example)currently stand. I think, even at the forefront, most are still on step one.

![Figure](/images/blog/2026-07-27-skynet-awakens/image-03.png)

### Tinker Your Inkling

A few folks asked about the new US-based open-source model Inkling, so here’s a quick follow-up. Here’s a humorous summary video if your’re so inclined. [https://youtu.be/M51asSwRLxA?si=mokxni5283q24WoJ](https://youtu.be/M51asSwRLxA?si=mokxni5283q24WoJ)

Background: After leaving OPAI with a sizable research team, Thinking Machines raised $2B, stayed mostly quiet, shipped Tinker (a fine-tuning API for small models), and then released Inkling, a from-scratch model. Inkling is a 970B-parameter mixture-of-experts. It doesn’t top traditional benchmarks, but it can automatically adjust its reasoning level and directly process raw audio and pixels without separate encoders.

Their business model seems aimed at providing a well-fit model on their platform so companies can fine-tune for specific workflows. They’re targeting the future I’ve discussed: companies relying on self-hosted, fine-tuned, open-source models, and only turning to expensive frontier models when truly needed. I see Thinking Machines positioning to capture that space.