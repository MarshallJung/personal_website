---
title: "Where it all makes a difference"
slug: "2024-08-26-where-it-all-makes-a-difference"
date: "2024-08-26"
description: "Where it all makes a difference"
coverImage: "/images/blog/2024-08-26-where-it-all-makes-a-difference/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

[https://x.com/ajassy/status/1826608791741493281](https://x.com/ajassy/status/1826608791741493281)

Those longer term readers of the newsletter will know that I am very bullish on LLM based tools making a real impact in industry verticals rather than broad based “AGI” type tools. The more structured the knowledge base in a particular industry the more these tools will have an impact. Programming is ripe for this mixup, but any STEM based field is likely to be disrupted. Very interestings times for the knowledge economy. Some of you may have seen Any Jassy’s announcement about the impact of AI coding tools on AWS internal dev. Highlights are:

“The average time to upgrade an application to Java 17 plummeted from what’s typically 50 developer-days to just a few hours. We estimate this has saved us the equivalent of 4,500 developer-years of work.”  
“In under six months, we’ve been able to upgrade more than 50% of our production Java systems to modernized Java versions at a fraction of the usual time and effort. And, our developers shipped 79% of the auto-generated code reviews without any additional changes.”  
“The upgrades have enhanced security and reduced infrastructure costs, providing an estimated $260M in annualized efficiency gains.”

These are some very impressive numbers, and while not all companies have nearly the codebase of AWS, the ROI on these tools should be very good. It also starts to surface questions of who do you need to hire? If a pure programmer can be replaced, perhaps the business/strategy employee with a bit of technical acumen given an IDE+AI tool set is really the best person to be hiring for the next 5 years?

### Not investment advice…but

So I think the top really was NVDIA’s CEO putting sharpie marker to breasts, and I tweeted that for posterity. But this last week I was shown OCI quotes offering NVIDIA GPU’s for a 1/4 of GCP costs as well as totally unsolicited e-mails from an infra broker asking to bid on LLM training workloads. “We will make it competitive!” they say.

Sure it’s just anecdotal, but with the asymptotic improvements in LLM model performance and the commoditization of AI platforms, I think we are seeing a demand for GPU’s fall off running headlong into both adoption skepticism as well as global macro slowdowns. Looking at the chart we’re into triple top territory under lower volume. Either it’s a breakout or back down to test the 95–75 range. January 75 puts are 1.49. Pretty cheap and you’ll know if you’re wrong quickly enough to cut losses. Worth a roll IMHO (not investment advice…haha!)

![Figure](/images/blog/2024-08-26-where-it-all-makes-a-difference/image-01.jpg)

![Figure](/images/blog/2024-08-26-where-it-all-makes-a-difference/image-02.jpg)

### Remembering is all you need

[https://arxiv.org/abs/2407.01178](https://arxiv.org/abs/2407.01178)

LLMs struggle with inefficient knowledge storage and retrieval, leading to high training and inference costs. The paper aims to address this by introducing a more efficient memory format. Memory3 introduces explicit memory as a third memory format for LLMs, alongside model parameters (implicit memory) and context key-values (working memory). This explicit memory is implemented as sparse attention key-values, allowing for more efficient knowledge storage and retrieval.

Now I think there is a version of this as represented in KANs that could be repurposed with the b-spline function serving as the memory, but I’m not totally sure. Adding a bit of memory to help keep the context fresher internalizes the idea of caching but in a more rigid implementation. Another of those curious ideas that helps add just that bit more efficiency.

![Figure](/images/blog/2024-08-26-where-it-all-makes-a-difference/image-03.jpg)

### Lessons learned from Enercom 2024

[https://blog.vespa.ai/the-rise-of-vision-driven-document-retrieval-for-rag/](https://blog.vespa.ai/the-rise-of-vision-driven-document-retrieval-for-rag/)

A lot of companies would love to use an LLM based tool to reliably interact with company documents. One company that I spoke to this past week had over 9 million docs that were acquired through asset purchases and these dictated legal, environmental and operational specifics for thousands of these assets. Efficiency was the name of the game for this company and being able to quickly query the docs means lower operational costs and fewer mistakes. However, as the Vespa blog states the issue with traditional RAG efforts, “The process of indexing a standard PDF document involves multiple steps, including PDF parsing, optical character recognition (OCR), layout detection, chunking, and captioning. These steps are time-consuming and can introduce errors that impact the overall retrieval performance. Beyond PDF, other document formats like images, web pages, and handwritten notes pose additional challenges, requiring specialized processing pipelines to extract and index the content effectively.” CoPali gets the embeddings directly from the images of the pdf pages, negating the need for many of the otherwise tortuous pipelines. Definitely a big time saver. Link to a Colab for getting it setup is at the end of the blog post above.

### RAG all the things! Except maybe don’t

[https://www.theregister.com/2024/08/21/microsoft\_ai\_copilots/](https://www.theregister.com/2024/08/21/microsoft_ai_copilots/)

Microsoft’s use of the term “Copilot” is pretty confusing these days — this article appears to be about Microsoft 365 Copilot, which is effectively an internal RAG chatbot with access to your company’s private data from tools like SharePoint. The concern here isn’t the usual fear of data leaked to the model or prompt injection security concerns. It’s something much more banal. It turns out many companies don’t have the right privacy controls in place to safely enable these tools. Now, maybe if you set up a totally clean Microsoft environment from day one, that would be alleviated. But nobody has that. If your document permissions aren’t properly locked down, anyone in the company who asks the chatbot “how much does everyone get paid here?” might get an instant answer! This is a fun example of a problem with AI systems caused by them working exactly as advertised. This is also not a new problem: the article mentions similar concerns introduced when companies tried adopting Google Search Appliance for internal search more than twenty years ago.