---
title: "The Future of Education"
slug: "2025-02-17-the-future-of-education"
date: "2025-02-17"
description: "This last week I was at my kids school’s junior high orientation for my youngest. I asked the school principal what their stance was on AI. I tried to make it easy to answer my question by offering ex..."
coverImage: "/images/blog/2025-02-17-the-future-of-education/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

This last week I was at my kids school’s junior high orientation for my youngest. I asked the school principal what their stance was on AI. I tried to make it easy to answer my question by offering examples. How is AI being allowed for homework and capstone projects? Is AI being used in the sciences to help build base knowledge around existing well known areas of knowledge? Are they considering concepts like AI prompting, best practices for various areas of knowledge, methods around fact checking, etc. etc. The answer was, disappointingly, no they didn’t have an approach, nor did they understand how AI was likely to deeply and permanently alter education as we know it.

I think that education in general will need to look very different. Gone are the days of homework and memorization. Afterall, when tools like Gemini/OAI Deep Research combined with context awareness, personalized understanding per user, and reasoning models that can be deeply applied to any field of study are available cheaply to each student, traditional testing is no longer useful in determining competence. Of course there will be people who are better than others in engaging with AI, but overall SAT scores, for example, will no longer be particularly useful to determine who will be the most productive people. I believe that education will come full circle to the classical Greek methodology credited to Socrates. Socratic debate itself is a method for demonstrating “true understanding” because it requires students to not just know facts, but to articulate their reasoning, defend their positions, and engage critically with others’ ideas. Finding those students that use AI to quickly and effectively build this type of rigorous understanding and then be able to communicate it will be the star employees of the future.

### A Quick Thought

Grok 3 is slated to release this week. This should be the first full model released, that is at least publicly, an order of magnitude larger than the last set of Gen3 models (GPT-4, Llama3 etc.). It will be very interesting to see how it stacks up in the benchmarking menagerie. It will be the first meaningful test of scaling foundational models (pre-training). I’ll keep you posted.

### A Quick Link

[https://ocw.mit.edu/courses/18-098-street-fighting-mathematics-january-iap-2008/pages/readings/](https://ocw.mit.edu/courses/18-098-street-fighting-mathematics-january-iap-2008/pages/readings/)

![Figure](/images/blog/2025-02-17-the-future-of-education/image-01.jpg)

Riffing on my AI in education discourse, one of the best tools that a human in modern society can possess is the ability to do quick “napkin” math. Keeps the propagandists from bedazzling you with “statistics”, allows you to do do fast GTM calcs for a start-up, negotiate better deals with a car loan, win arguments on the internet and generally be a “smarter” human being. Now, if we all end up with AR via neuralink then maybe this isn’t a requirement, but for now you can at least be better at winning technical arguments.

### Speaking of Street Fighting Concepts

I was surprised to see how quickly MCTS was abandoned as a methodology for exploring unique solution spaces as well as organizing CoT methods. Deepseek R1 inspired a bunch of people in the space to abandon search in favor of pure RL. The issue here is that RL requires a good set of priors, and that comes from the derivation of R1 from existing pre-trainied models. Search methods are optimal, but scale poorly. Since enumerating over all possible character combinations would also find the optimal solution. But if your rollouts are multi-step & include tool calls, updates the environment state as a result, and then you need another action based on that, and you need to explore what the alternative actions do to create the reward (repeat until max depth or goal met), it kinda has to be tree search of some kind.

![Figure](/images/blog/2025-02-17-the-future-of-education/image-02.jpg)

### Another Quick Tool

For those who haven’t come across it yet, here’s a handy trick to discuss an entire GitHub repo with an LLM: Just replace “github” with “gitingest” in the url, and you get the whole repo as a single string that you can then paste in your LLMs. Similar to [https://repo2txt.simplebasedomain.com/](https://repo2txt.simplebasedomain.com/) that I’ve linked to before. These are really useful tools for building documentation or exploring capabilities. Be careful though. Big repos can easily be 500k tokens and this far exceeds most context windows.

### Huggingface for the Lead

You’d think GitHub might be a leader in this space, but Huggingface seems to be a real darkhorse when it comes to AI powered apps. With 400k apps available, this is a real treasure trove of tools that can do some cool stuff. Inspiration, some open, and a bunch of crazy to wade through it’s no wonder that AI apps are tough to make it big with these days. It isn’t a full blown SaaS provider by any means, but a cool place to see which direction the community is thinking in.

[https://huggingface.co/spaces](https://huggingface.co/spaces)

### A better GUI for LLMs?

For a log time now I’ve been wanting a different user interface for working with chat based LLMs. Oftentimes I’ll end up starting a particular project and in the process of getting to my end goal I’ll take a few multithreaded steps.

[https://www.rabbithole.chat/](https://www.rabbithole.chat/)

The models are not the important part of Rabbithole. It uses a more visually expansive way to learn about anything on my mind — without having to switch back and forth between tabs or chats. The knowledge graph like UI is really useful and cool. I’d like to see this implemented by one of the AI labs, or an open source version that can be layered atop your own API key based engagement.

### A glance into the economic impact of AI

[https://assets.anthropic.com/m/2e23255f1e84ca97/original/Economic\_Tasks\_AI\_Paper.pdf](https://assets.anthropic.com/m/2e23255f1e84ca97/original/Economic_Tasks_AI_Paper.pdf)

![Figure](/images/blog/2025-02-17-the-future-of-education/image-03.jpg)

![Figure](/images/blog/2025-02-17-the-future-of-education/image-04.jpg)

There is a lot of important stuff in this new paper by Anthropic that shows how people are actually using Claude. 1) The tasks that people are asking AI to do are some of the highest-value (& often intellectually challenging. 2) Adoption is uneven, but many fields are already high. This is just based on Claude usage, which is why adoption by field is less of a big deal (Claude is popular in different fields than ChatGPT) than the breakdowns at the task level, because they represent what people are willing to let AI do for them. Interesting that programming isn’t higher given that Claude has been arguably the best at code for a while now, but again, different demographics will use different AI tools. Plus as we saw a few weeks ago, Claude usage is a tiny fraction of ChatGPT so this is apples to oranges. Still, it’s interesting.