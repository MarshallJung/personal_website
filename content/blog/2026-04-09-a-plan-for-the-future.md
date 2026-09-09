---
title: "A Plan for the Future"
slug: "2026-04-09-a-plan-for-the-future"
date: "2026-04-09"
description: "A Plan for the Future"
coverImage: "/images/blog/2026-04-09-a-plan-for-the-future/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-04-09-a-plan-for-the-future/image-01.png)

In my previous newsletter, which I released early due to concerns about open source security and AI application development, I called for industry-wide cooperation to secure open source software packages and the common operating systems our society relies on. Annnd then…last week, on April 8, Anthropic issued a press release announcing exactly that.

[**Project Glasswing: Securing critical software for the AI era**  
*A new initiative to secure the world's most critical software and give defenders a durable advantage in the coming…*www.anthropic.com](https://www.anthropic.com/glasswing "https://www.anthropic.com/glasswing")[](https://www.anthropic.com/glasswing)

![Figure](/images/blog/2026-04-09-a-plan-for-the-future/image-02.png)

This has been in the works for some time, so it’s not that my predictions were especially prescient. Still, the recent wave of open source supply chain security incidents made the need clear. From the announcement, it appears most major players across AI, open source, networking, operating systems and even financial systems are participating.

This gives me real comfort about the future. It feels necessary, and it makes sense that Anthropic, long focused on AI safety, would lead the effort. Their announcement explains how, as AI models grow more capable, deep expertise in esoteric programming and complex systems integration becomes less of a barrier. Previously, elite bad actors and white-hat defenders needed to master these intricate systems to find, exploit, or mitigate vulnerabilities. Now, as leading labs’ models grasp the full complexity of software systems, someone with narrow expertise can rely on the models to leapfrog into nuanced exploits outside of their areas of understanding.

Thomas Ptacek wrote an article on how security research is evolving in the age of AI. I’ve included a short excerpt to show how esoteric details can matter — and how AI can exploit them at a pace that wasn’t previously possible.

[https://sockpuppet.org/blog/2026/03/30/vulnerability-research-is-cooked/](https://sockpuppet.org/blog/2026/03/30/vulnerability-research-is-cooked/)

![Figure](/images/blog/2026-04-09-a-plan-for-the-future/image-03.png)

At the core of Project Glasswing is Anthropic’s new model, Claude Mythos. First hinted at during the Claude Code source leak and has been available internally and to select partners (I’m assuming the list of folks involved in Glasswing) for a little over a month. As detailed in its model card (linked below), Mythos shows significant gains in systems understanding and code capability. Glasswing’s real strength is using Claude Mythos to identify and mitigate existing security vulnerabilities.

[https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf](https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf)

The Mythos model card shows eyebrow raising capability gains on industry benchmarks. While the value of benchmarks is perennially debatable, the scale of improvement is hard to dispute. These advances likely explain why Anthropic is keeping Mythos private for now. Other models will likely catch up, but Mythos seems well suited for industry teams maintaining critical systems and for collaboration with the U.S. government to help protect institutions.

![Figure](/images/blog/2026-04-09-a-plan-for-the-future/image-04.png)

![Figure](/images/blog/2026-04-09-a-plan-for-the-future/image-05.png)

I’m usually against private labs keeping capabilities from the public. I get the reasoning here, though. Models will catch up over time, but getting ahead of the potential chaos a model like this could cause likely benefits the AI industry and its public reputation right now. It’s also true that most people don’t use these models to their full potential, even as they are today. There are several reasons for that, which I’ll cover next.

### The System

In my hobby of building fast cars and coaching drivers, people often show up with vehicles whose capabilities far exceed their own ability to drive them at the limit. The same dynamic applies to today’s frontier labs AI models.

Most people don’t fully grasp what these models can do, especially when using the lab-provided chat interfaces. (For today’s discussion, I’ll use “agent” to mean a specific narrow AI solution (roughly equivalent to a code function or a small program) designed to perform a particular task in a reasonably repeatable way.

To use an agent effectively in an AI pipeline, focus on three layers:

-   Model: e.g., Google’s Gemini, OpenAI’s GPT, or Anthropic Claude.
-   Model harness: code that delivers specific prompts, manages standing instructions and tools, and enforces guidelines.
-   Context: per-use instructions, desired outcomes, or skill descriptions that live outside the harness, are typically temporary or one-time, and help the agent solve a specific problem.

For example, use Claude Sonnet as the base model, pair it with Claude Code as the harness, and provide context via CLAUDE.md, /skills or mcp.json.

In a personal AI environment, this is straightforward. (I’ll share Andrej Karpathy’s simple approach next.) For an AI-native organization to show continual improvement, it needs continual learning at the context layer.

Context learning can happen at the agent level, where an agent has persistent memory and updates its own configuration over time — like OpenClaw, which maintains and updates its SOUL.md. More commonly, context learning happens at the tenant level (user, org, or team), where each tenant has its own context that evolves over time.

We need a standard method to capture user interaction results and context changes. In enterprises, the main constraint is that agents must honor access controls. Continuous learning via model-layer context updates is difficult when important information is visible to some users but not others. Access controls must live in the context layer. I’m not aware of a production-ready solution yet, but there are some open-source options.

[**LangSmith docs - Docs by LangChain**  
*LangSmith is a framework-agnostic platform for building, debugging, and deploying AI agents and LLM applications. Trace…*docs.langchain.com](https://docs.langchain.com/langsmith/home "https://docs.langchain.com/langsmith/home")[](https://docs.langchain.com/langsmith/home)

![Figure](/images/blog/2026-04-09-a-plan-for-the-future/image-06.png)

### Get Started

Following the KISS principle, Andrej Karpathy (my AI spirit animal) shared a simple approach to building a personal knowledge base with any AI tool. It’s deceptively simple, and I tend to overcomplicate it with Obsidian plugins and file structures. But with advancing models and their harnesses, setting up a personal knowledge base for context updates is straightforward. I’ll share the setup and the one file that makes it all work. After that, you’re on your own.

Create a project folder anywhere on your computer. Inside it, make three subfolders:

raw/ — Your junk drawer. Articles, notes, screenshots, meeting transcripts, bookmarks, research. Everything goes here. Don’t organize it. That’s the AI’s job.

wiki/ — Where the AI writes the organized version. Summaries, connections between ideas, topic pages. You never edit this by hand.

outputs/ — Answers, reports, and research the AI generates when you ask questions against your knowledge base.

![Figure](/images/blog/2026-04-09-a-plan-for-the-future/image-07.png)

Then prompt your model with this:

“Read everything in raw/. Compile a wiki in wiki/ following the rules in   
CLAUDE.md. Create an INDEX.md first, then one .md file per major   
topic. Link related topics. Summarize every source.”

Once you’re done, you can ask: “Based on everything in wiki/, what are the three biggest gaps in my understanding of \[topic A\]?”