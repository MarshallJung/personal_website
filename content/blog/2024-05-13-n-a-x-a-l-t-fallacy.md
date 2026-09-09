---
title: "N.A.X.A.L.T Fallacy"
slug: "2024-05-13-n-a-x-a-l-t-fallacy"
date: "2024-05-13"
description: "A few observational paragraphs this week before we get into the news. The observation and the opinion piece are related."
coverImage: "/images/blog/2024-05-13-n-a-x-a-l-t-fallacy/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

A few observational paragraphs this week before we get into the news. The observation and the opinion piece are related.

N.A.X.A.L.T, or *Not All X Are Like That* fallacy occurs when someone can name a person, or event that is an outlier and because of that single observation they assume that the rest of the distribution does not exist.

![Figure](/images/blog/2024-05-13-n-a-x-a-l-t-fallacy/image-01.jpg)

Remember that just because each of us have experiences, data or acquaintances that might be relatively unique does not negate the truth of distributions.

### Same as it always was

This is a short article that I posted (LinkedIn, X and Medium) this week in response to a cold call from a company looking to hire as a DevRel.

### Synthetic Data — Meet the new oops…same as the old one.

I recently had a conversation with a startup that was pitching the idea of synthetic data as a service. While the business case was a bit light on details I think the idea revolved around companies that wanted to use LLM based products, but were not well served by existing API based models from hyperscalers and couldn’t find an open source model that fit their particular need. So this startup would offer to construct synthetic data with which they could fine tune a fit for purpose model.

The more the AI hype curve trickles down into the SMB space the more the old mistakes that grizzled ML folks like myself see repeated. What is it they say about repeating history? In theory synthetic data isn’t necessarily a bad thing. BUT it falls foul of the age old issue of ignoring statistics and data science fundamentals. We will never have enough data to do perfect machine learning (or AI if you insist…) there will always be outliers and low occurrence samples. The reason that they are low probability is that they don’t occur that often and each is unique. The answer is not to use those rare examples to trick a model into overtraining on rare occurrences. Sure you might have a model that can help you with that unique instance, but how helpful is that? It didn’t happen often in the past, and likely if you run into an outlier again it won’t be similar to what has come before…BECAUSE it is rare and unusual. I’ll risk being old and curmudgeonly here and say that we should do some data science first and look at uni/multi variate, normal non-normal distributions. These methods apply to data for LLMs just as much as your traditional non-transformer based efforts.

And lastly if you are using synthetic data in place of a large context window and RAG based solutions for business intelligence (we can have the debate on those two methods later) you are committing an even more silly error. The point of getting knowledge well embedded and in an appropriate vector DB for similarity is that it allows you to access those outliers without confusing the output with information that may not be useful or even real. Think about this from a company with legal documents, financial investments or medical diagnoses. There is real danger in synthetic data where the unusual and unique are really important standing on their own.

The point is that not having enough data on the ends of your distributions is not something to be solved by making more synthetic data that may lose the tree for the forest. We have had traditional data science methods for dealing with this type of data for many years, and it is a bit sad to see the proposed solution of creating massive amounts of synthetic data (likely without any real human oversight and potential pollution of the broader training dataset when this data inevitably escapes its initial use) in order to build an LLM. This is a hot topic and I welcome any comments and discussion.

It’s hard to sell nuance in a hype cycle

“Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make matters worse: complexity sells better.” — Edsger Dijkstra

I remember with great fondness in an undergrad mathematics class working a proof with what I thought was a particularly elegant linear algebra solution. It was so easy to understand that I demonstrated it to many people, even over beers at frat parties. I was truly the ladies desire, I tell ya. However, elegant simplicity is so often seen as less valuable. See my article above. When tech moves fast oftimes, the hand wavy sales folks, the VC money hunters and the questionable startups make so much noise that some of us older ML/data scientists are left shaking our heads. I hope that the coming disillusionment with AI tools won’t preclude companies working with people like myself to find elegant, cost effective solutions with the new crop (and old school) techniques.

### Just one more observation I promise

![Figure](/images/blog/2024-05-13-n-a-x-a-l-t-fallacy/image-02.jpg)

In my career as a Statistician -> Big Data Expert -> Machine Learning Engineer -> AI “Dude?” I’ve found that getting data prepared properly is usually a 2:1 ratio with actually building the models. And yes…it’s usually formatting .csv’s.

### Non-linear LLM conversations

![Figure](/images/blog/2024-05-13-n-a-x-a-l-t-fallacy/image-03.jpg)

[https://x.com/JacobColling/status/1787659433431994392](https://x.com/JacobColling/status/1787659433431994392)

So this guy implemented a branching conversion feature to Llama3 + MLX local. I love Obsidian as a note taking app so this is extra cool. Long context models will remember past prompting, but I have found myself backtracking sometimes when a particular effort changes direction. This method makes that much more elegant and useable for smaller local LLMs that might not have the same context. Or if your brain doesn’t have the context either…

### Super useful tool

[https://github.com/andrewgcodes/repo2prompt/tree/main](https://github.com/andrewgcodes/repo2prompt/tree/main)

For models capable of long context and larger prompts Opus, Gemini, this tool will take an entire Github repo and turn it into accessible knowledge. Ive found it particularly useful for some of the frontend work that I’ve been struggling with lately. Drop this into Gemini with a video or two of what I’m trying to accomplish and I get really, really far with no real frontend skills at all. I think this is the best way to use some of the new models that have been released.