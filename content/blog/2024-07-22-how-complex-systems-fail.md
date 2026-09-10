---
title: "How Complex Systems Fail"
slug: "2024-07-22-how-complex-systems-fail"
date: "2024-07-22"
description: "News in the tech space comes fast. I am mostly interested in the world of machine learning, but occasionally something that crosses paths with the future of technology as I see it piques my interest. ..."
coverImage: "/images/blog/2024-07-22-how-complex-systems-fail/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

News in the tech space comes fast. I am mostly interested in the world of machine learning, but occasionally something that crosses paths with the future of technology as I see it piques my interest. It’s hard to miss the Crowdstrike software deployment debacle. Perhaps having a single SaaS company trusted enough to be symbiotically tied to the OS with no review needed before pushing updates is a bad idea? Maybe this will be one of those teachable moments for DevOps that will point to needed changes. I don’t know what it will look like. However, when things like this happen I am reminded to revisit this paper by Richard Cook from 2002, “How Complex Systems Fail”.

[https://www.researchgate.net/publication/228797158\_How\_complex\_systems\_fail](https://www.researchgate.net/publication/228797158_How_complex_systems_fail)

The paper challenges the common assumption that accidents can be attributed to a single “root cause” and highlights the dynamic and adaptive nature of these systems, where human practitioners play a crucial role in maintaining safety. The downside of failures in complex systems is that while rare, they tend also to be difficult to diagnose and remedy. Every failure tends to be an outlier.

This unique and uncommon set of failure modes is where I find some interesting overlaps in the world of AI. I have seen numerous suggestions that this C++ memory error might have been avoided if LLM based tools were involved in the coding or review process. While at this point I don’t know for certain AI was not involved in the process, should these types of errors or best practices not be in the training data there is a good chance that the error might be propagated by the AI tool itself. I’ll address the idea of synthetic data in the next section as my opinions might be changing a bit in that space, but the concept that I will stake my flag on is that AI tools cannot and should not replace the idea of human based review in mission critical situations. I think it will end up being too easy to trust an AI tool that is only as good as the humans that provided the data in the first place.

### A tweak to my concepts

![Figure](/images/blog/2024-07-22-how-complex-systems-fail/image-01.jpg)

Models seem to be getting both smaller and smarter at the same time. This is demonstrated by improvements seen even in what people would consider the older models. Models got really large, really fast because we were lazy and blessed by riches in the form of GPU supply. Most models were very wasteful during training where most foundational companies like OpenAI, Google etc. asked them to just memorize the internet. It turns out they are pretty good at doing memorization where they can recite a paragraph from anywhere based on the first few words. However model “intelligence” in solving more unique problems is not improving with the size of data seen in the training methodology. Demonstrations of logical problem solving are indistinguishable from the training data. As the models get larger they also have the ability to help refactor the training data into ideal formats. By definition this new data is “synthetic” AND here is where I have had a change of heart. Specialized models, specifically in applications where logic and problem solving can be very useful may need data that simply does not exist and cannot be easily generated except by larger models helping to automate the refactor of training data into specific synthetic formats.

Models training models, where even older GPT2 era models can be smarter than what we have today. The fundamental architectures didn’t change, but the sculpting of the training process is so much more refined. Pair this with the idea of MOE concepts and I think we see marked improvement.

### ColPali to the rescue

[https://arxiv.org/abs/2407.01449v2](https://arxiv.org/abs/2407.01449v2)

Anyone that has tried to actually build and deploy a usable enterprise RAG will very quickly run into the issue of complex documents. Sure, indexing emails and plain text is easy enough, but what about PDF’s or slide decks with tables? The steps often look like:

1.  Extracting text and metadata
2.  OCR (Optical Character Recognition)
3.  Layout analys, extracting tables, charts, pie charts etc.

Every step is a pain in itself and prone to introduce errors. In the following notebook built by the folks over at Vespa.ai [https://pyvespa.readthedocs.io/en/latest/examples/colpali-document-retrieval-vision-language-models.html#  
](https://pyvespa.readthedocs.io/en/latest/examples/colpali-document-retrieval-vision-language-models.html#)They show how to use ColPali with their vector DB to create, store and retrieve using the ColPali embeddings. I guess it’s just easier to embed the images right?

### Roll your own

Building your own Chrome browser extensions is actually pretty easy.

1.  Grab the boilerplate: [https://github.com/guocaoyi/create-chrome-ext](https://github.com/guocaoyi/create-chrome-ext)
2.  Create a prompt for your preferred LLM: [https://github.com/raphaelmansuy/code2prompt](https://github.com/raphaelmansuy/code2prompt)
3.  Or use a preexisitng tool: [https://www.plasmo.com/](https://www.plasmo.com/)

If you’ve ever just wanted to tweak something that you do often, but haven’t found out a way to do it without copy, paste, ctrl-f etc…now you can make your own productivity improvements.

### I’m not Troy Lee

Was asked to paint a helmet for someone in my PCA chapter. I can’t say that it’s amazing quality, but I do like the design.

![Figure](/images/blog/2024-07-22-how-complex-systems-fail/image-02.jpg)