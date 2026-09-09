---
title: "Same as it always was…"
slug: "2024-05-10-same-as-it-always-was"
date: "2024-05-10"
description: "Synthetic Data — Meet the new Oops…same as the old one."
coverImage: "/images/blog/2024-05-10-same-as-it-always-was/image-01.jpg"
tags: ["AI Strategy"]
readTime: "3 min read"
---

![Figure](/images/blog/2024-05-10-same-as-it-always-was/image-01.jpg)

#### Synthetic Data — Meet the new oops…same as the old one.

I recently had a conversation with a startup that was pitching the idea of synthetic data as a service. While the business case was a bit light on details I think the idea revolved around companies that wanted to use LLM based products, but were not well served by existing API based models from hyperscalers and couldn’t find an open source model that fit their particular need. So this startup would offer to construct synthetic data with which they could fine tune a fit for purpose model.

The more the AI hype curve trickles down into the SMB space the more the old mistakes that grizzled ML folks like myself see repeated. What is it they say about repeating history? In theory synthetic data isn’t necessarily a bad thing. BUT it falls foul of the age old issue of ignoring statistics and data science fundamentals. We will never have enough data to do perfect machine learning (or AI if you insist…) there will always be outliers and low occurrence samples. The reason that they are low probability is that they don’t occur that often and each is unique. The answer is not to use those rare examples to trick a model into overtraining on rare occurrences. Sure you might have a model that can help you with that unique instance, but how helpful is that? It didn’t happen often in the past, and likely if you run into an outlier again it won’t be similar to what has come before…BECAUSE it is rare and unusual. I’ll risk being old and curmudgeonly here and say that we should do some data science first and look at uni/multi variate, normal non-normal distributions. These methods apply to data for LLMs just as much as your traditional non-transformer based efforts.

And lastly if you are using synthetic data in place of a large context window and RAG based solutions for business intelligence (we can have the debate on those two methods later) you are committing an even more silly error. The point of getting knowledge well embedded and in an appropriate vector DB for similarity is that it allows you to access those outliers without confusing the output with information that may not be useful or even real. Think about this from a company with legal documents, financial investments or medical diagnoses. There is real danger in synthetic data where the unusual and unique are really important standing on their own.

The point is that not having enough data on the ends of your distributions is not something to be solved by making more synthetic data that may lose the tree for the forest. We have had traditional data science methods for dealing with this type of data for many years, and it is a bit sad to see the proposed solution of creating massive amounts of synthetic data (likely without any real human oversight and potential pollution of the broader training dataset when this data inevitably escapes its initial use) in order to build an LLM. This is a hot topic and I welcome any comments and discussion.