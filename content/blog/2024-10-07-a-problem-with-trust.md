---
title: "A problem with trust"
slug: "2024-10-07-a-problem-with-trust"
date: "2024-10-07"
description: "Two stories and a tweet to read this week that touch on the transition to an AI powered knowledge economy. While some might see them as a bit negative, I prefer to see them through a glass half full."
coverImage: "/images/blog/2024-10-07-a-problem-with-trust/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

Two stories and a tweet to read this week that touch on the transition to an AI powered knowledge economy. While some might see them as a bit negative, I prefer to see them through a glass half full.

1.  [https://www.medrxiv.org/content/10.1101/2024.03.12.24303785v1.full.pdf](https://www.medrxiv.org/content/10.1101/2024.03.12.24303785v1.full.pdf) — Doctors were given cases to diagnose, with half getting GPT-4 access to help. The control group got 73% score in diagnostic accuracy (a measure of diagnostic reasoning) & the GPT-4 group 77%. No big difference. But GPT-4 alone got 88%. The doctors didn’t change their opinions when working with AI. To be clear, this doesn’t say AI will always beat doctors — this is a narrow test. It is much more about what this means for the future. As AI models get better, and match or exceed human level performance, what happens? This is one example where it is happening, and we see the issues emerging.
2.  A friend of the newsletter was at a tech conference recently where he was questioning the CISOs of large financial organizations in regards to using foundational LLM models to help build internal tooling. While all the CISOs recognized the potential for malicious/bad or even copyrighted code to make into their tools, they all had shrugged collectively and signed the security waivers. It was either SEP (Someone Else’s Problem) or they were counting on grabbing their bag and being out of the line of fire when something went wrong. I suppose this isn’t any different than any other new technology benign introduced (aside from the well known issues, not zero day etc) and FOMO on the AI front.

I see these two anecdotal observations as bookending the potential issues with AI we should all wisely comprehend. On one hand the expert class will find this a tough pill to swallow and fight even if it is on balance a good thing, and on the other end the potential benefits cause people who should know better to look the other way in regards to risk to make more $$. There is a middle ground here, people.

I found the responses to this tweet enlightening: [https://x.com/Jason/status/1841146326500692458](https://x.com/Jason/status/1841146326500692458) — I didn’t read all 200 replies, but at least in the first 50 or so there were no detailed descriptions of a use of AI tools that were so good as to eliminate headcount or even delay the need to hire more as the business is expanding.

### NotebookLM

For those not living under a rock you have undoubtedly heard about Google’s NotebookLM. In fact, if you go back to my newsletter over the past few months (including last week prior to some of the new feature drops) I pointed to NotebookLM as the dark horse in the SaaS RAG space. In fact it was (and is AFAIK) the only RAG in your browser available. Well it has gotten significantly more powerful with recent upgrades in the past week or so. I’m going to spend a bit today talking about it, as I actually believe this is the second truly unique and transformational LLM tool since ChatGPT. There is a lesson here about accessible magic.

1.  The podcast effect: Some of you, like me, may be podcast junkies. I find it is an amazing way to absorb information in a way that facilitates multitasking or even getting outside and walking. I gave NotebookLM the full archive of my newsletters and asked it to make a deepdive podcast on the contents. Here is the link: [https://notebooklm.google.com/notebook/6be7a3b7-9184-4081-a196-5ea699bb4501/audio](https://notebooklm.google.com/notebook/6be7a3b7-9184-4081-a196-5ea699bb4501/audio)
2.  Besides a sneaky SOTA TTS drop with the voices, more than a few people were convinced these are real people, there is real and I mean REAL interesting content here. Two observations from the beginning few minutes: One, I talk somewhat often about embeddings in my newsletters, but from a very technical level. The AI added the basic explanation of embeddings for the audience to set the stage. Embeddings being the “Rosetta Stone” of LLMs is not an explanation that I wrote. I occasionally post race car content because I’m a racer and fabricator. All the analogies the AI created seemed to revolve around cars. Again, I DIDN’T WRITE ANY OF THAT…IT DID UNPROMPTED!! So cool, and hugely transformational.
3.  Think of the product and productivity opportunities here: Need to know everything about a new GCP product so that you can talk about it to a customer? Done. Need to understand a customer’s problem. Load up that code documentation and let NotebookLM talk you through it. I’m also thinking that it’s an amazing way to keep up to date with everything you have going on at work. Just get a summary of all the notes, documents, emails and meetings for the week and have it build a “week in review” for you that you can then listen to on Sunday afternoon to get right back up to speed. Real hidden game changer here and I can see lots of nifty applications.
4.  There are some other very cool (upcoming) features as well.
5.  An agentic and personalized writing workflow, especially using YOUR style and formats, is another type of “transform” that I’m really excited about. Can’t tell you how often I take a pile of research and some haphazard notes to write my POV on it — this streamlines that flow massively. Gemini 1.5 is really good at this and a well-done UX is what’s needed to connect the user to this capability.
6.  Custom chatbots…I have a lot to say. From a Googler friend of the newsletter this feature is pretty widely used internally at Google and literally every day someone pings me to say “This has 10x’d our team’s productivity.” Think Google’s version of custom GPTs. If it turns out that google solved custom gpts just as OAI gives up on them on their one year anniversary this would be the most entertaining outcome.

I would say that NotebookLM is the UI/UX that makes AI accessible and magic. While we can argue about the best underlying foundational model for various tasks (code, reasoning, multimodal, language) NotebookLM is a step forward for adoption.

### Code accelerators

[https://github.com/abinthomasonline/repo2txt](https://github.com/abinthomasonline/repo2txt)

For those of us with some time and intellect challenges in coding, the ability to get open source code into a format that can then be queried, modified or reused is a real time saver. The above link to repo2text is similar to one that I covered earlier this year: [https://github.com/mufeedvh/code2prompt](https://github.com/mufeedvh/code2prompt) but perhaps a bit more fungible. Give it a try!

### Now why didn’t someone think of that earlier?

![Figure](/images/blog/2024-10-07-a-problem-with-trust/image-01.jpg)

[https://github.com/getzep/zep](https://github.com/getzep/zep)

So knowledge graphs as RAG tooling backend isn’t exactly anything new, but this has temporal relevance as a first class concept. Great idea to keep the RAG fresh as we typically refer to recent knowledge more regularly than older knowledge. Open source and built on top of the same company’s Graphitti KG.

### Always has been.

![Figure](/images/blog/2024-10-07-a-problem-with-trust/image-02.jpg)

[https://arxiv.org/pdf/2402.19427](https://arxiv.org/pdf/2402.19427)

@fchollet — “…in general the fact that there are many recent architectures coming from different directions that roughly match Transformers is proof that architectures aren’t fundamentally important in the curve-fitting paradigm (aka deep learning) Curve-fitting is about embedding a dataset on a curve. The critical factor is the dataset, not the specific hard-coded bells and whistles that constrain the curve’s shape. As long as your curve is sufficiently expressive all architectures will converge to the same performance in the large-data regime.”

So there are more and less efficient architectures to accomplish the task, but ultimately if we are to move towards the reasoning, creative extensive concept of AGI the magic link isn’t yet here.