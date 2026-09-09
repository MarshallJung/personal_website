---
title: "When the Low Hanging Fruit is Rotten"
slug: "2024-10-21-when-the-low-hanging-fruit-is-rotten"
date: "2024-10-21"
description: "So, dear readers…I’ll ask you the same question I’ve seen posed in several places across the bleeding edge of the internet over the past 3…"
coverImage: "/images/blog/2024-10-21-when-the-low-hanging-fruit-is-rotten/image-01.jpg"
tags: ["AI Strategy"]
readTime: "9 min read"
---

![Figure](/images/blog/2024-10-21-when-the-low-hanging-fruit-is-rotten/image-01.jpg)

So, dear readers…I’ll ask you the same question I’ve seen posed in several places across the bleeding edge of the internet over the past 3 months or so, most famously by @Jason on X.

***What AI applications are you engineering or adopting that improve efficiency drastically enough that you are either; laying off employees OR not hiring additional employees as your business grows?***

We have spoke about Klarna in a recent newsletter ([https://www.inc.com/sam-blum/klarna-plans-to-shut-down-saas-providers-and-replace-them-with-ai.html](https://www.inc.com/sam-blum/klarna-plans-to-shut-down-saas-providers-and-replace-them-with-ai.html)) where they claim that they will be replacing several systems of record SaaS tools like Salesforce and Workday with internally developed AI tools. Now, the details are pretty light from Klarna’s side and there are no shortage of skeptics, but the idea is something like this: Observe human/SaaS interactions and capture the data and methods. Use this data as a basis for a training set that an AI can mimic. I.e. — Let it see the HR folks answer enough benefits questions and the AI can then reasonably predict the likely answers to the most common questions. Now, as with everything, the devil is in the details and I have no doubt that it’s harder than this in practice, but it is the future. However, this isn’t probably the easiest place to start.

So what else is “low hanging fruit” for modern transformer based AI systems? Better chatbots? Conversational search? Pretty much everything was based on the idea that we can have more efficient access to and summary of data specific to the questions that we want answered. So I think most of us can agree that RAG based systems were to fill this role. A company of any real size will have enormous stores of documents, presentations and spreadsheets that represent the combined knowledge of the company. Having ready access to this at the end of a prompt seemed like an amazing productivity tool that would revolutionize any number of roles within a company. From the aforementioned HR repetitiveness to collating lessons learned from past sales engagements to help smooth the way with a new customer. You name it, getting access to the most relevant internal company data in a timely fashion seemed like a real winner. But to this day, there is no unicorn startup, open source process or even the hint of vapor-ware SaaS that offers this capability to the masses. Sure, you can roll your own in a dozen different ways, and Gemini on top of Google workspace is sort of useful (and maybe Copilot, but I don’t MSFT) but where is the product market? What went wrong?

It’s probably good to summarize what technologies a RAG based system actually consists of, surficially how it’s built and what its intended applications might be. I can’t get into the epic level of details here, as it would be a much longer paper, and that’s not really the intent of the newsletter. But I’ll provide, as always, a number of hyperlinks to research and articles that will get you pareto informed.

Core components

RAG has a few core components, including:

-   Pre-trained LLM: Responsible for generating text, images, audio, and video
-   Vector search: A retrieval system that uses vector embeddings to find relevant information. Dense for semantic boosting or sparse for key term matches and speed.
-   Vector embeddings: Numerical representations of the underlying meaning of data in natural language

The parts fit together like this (from AWS):

![Figure](/images/blog/2024-10-21-when-the-low-hanging-fruit-is-rotten/image-02.jpg)

Here are a few sources to better explain:

[https://aws.amazon.com/what-is/retrieval-augmented-generation/  
](https://aws.amazon.com/what-is/retrieval-augmented-generation/)Video: [https://youtu.be/\_sq3ixXMQTc?si=PvcfJCozi41PHMSh  
](https://youtu.be/_sq3ixXMQTc?si=PvcfJCozi41PHMSh)[https://www.databricks.com/glossary/retrieval-augmented-generation-rag](https://www.databricks.com/glossary/retrieval-augmented-generation-rag)

So as straightforward as RAG sounds (and maybe even looks) there are some gotchas here and they don’t even specifically revolve around the LLM. Some of the issues are: There are several downsides to RAG.

You need to create the vector embeddings, which can be done via the hyperscalers or you can roll your own (see here: [https://huggingface.co/spaces/mteb/leaderboard](https://huggingface.co/spaces/mteb/leaderboard), [https://arxiv.org/abs/2210.07316](https://arxiv.org/abs/2210.07316)) but it’s expensive if SaaS’ed on lots of docs and the results will differ depending on your algorithm choice. What’s more right for your gigabytes? Lots of experimentation here.

In comparison to traditional text search engines there is no measure of correctness. How many documents to retrieve per query. What is the similarity measure that you are comfortable with achieving?

Furthermore, if you want to guarantee to find the n nearest neighbors of vectors in a vector space that contains many vectors you’ll end up sequentially scanning through all vectors for each query. That’s very inefficient. Hence, modern systems use approximate nearest neighbors like FIASS or HNSW which will approximate K-NN and are speedy at the sacrifice of accuracy. Is that acceptable? If you want to combine text and embedding similarity, you can use Enterprise Elastic Search or AWS open search but you’ll see added cost.

Notice that we haven’t even talked about multimodal documents. What happens if you have a bunch of informationally valuable images or tables? Traditional OCR tools are…variable at best.

### We could use ColPali?

Based on the concept of Vision as a retrieval method we could use [https://arxiv.org/abs/2407.01449](https://arxiv.org/abs/2407.01449) where documents are retrieved via a different method than conventional text embedding.

![Figure](/images/blog/2024-10-21-when-the-low-hanging-fruit-is-rotten/image-03.jpg)

As the lead author describes, “During indexing, we aim to strip away a lot of the complexity by using images (“screenshots”) of the document pages directly. A Vision LLM (PaliGemma-3B) encodes the image by splitting it into a series of patches, which are fed to a vision transformer (SigLIP-So400m). These patch embeddings are linearly projected and inputted as “soft” tokens to a language model (Gemma 2B), in order to obtain high-quality contextualized patch embeddings in the language model space, which we then project to a lower dimension (D=128) for more efficient storage. We thus construct and store a multi-vector document representation for each page image. During runtime querying, a user query is embedded by the language model, to obtain token embeddings. We are able to run a ColBERT-style “late interaction” (LI) operation to efficiently match query tokens to document patches. To compute a LI(query, document) score, for each term in the query, we search for the document patch that has the most similar ColPali representation. We then sum the scores of the most similar patches for all terms of the query, to obtain the final query-document score. Intuitively, this late-interaction operation allows for a rich interaction between all terms of the query and document patches, all the while benefiting from the fast matching and offline computation offloading that more standard (bi-encoder) embedding models enable.”

So the method uses the decomposed patches as a “language” for embedding. Very nifty. If you want to use this in production I suggest using the [https://github.com/AnswerDotAI/byaldi](https://github.com/AnswerDotAI/byaldi) package, which is a lightweight wrapper around the colpali-engine package developed by the author of the popular RAGatouille repository.

While this might handle more complex documents (assuming you can render them as images, and in a big company with lots of docs, you’ll need a transformation pipeline to get this all started, which may be far from trivial) **AND**, this isn’t particularly helpful when you need to deal with structured data, which in of itself might be very relevant to a user’s query. Think of asking about business earnings or expenses where .CSV tables etc. are required.

### It’s all going to be PostgreSQL anyway

We can use structured data for our RAG systems, and in some ways it’s easier than dealing with unstructured data. Humans are pretty darn good at recognizing fancy documents, as well as intuiting data from tables. And there is an awful lot of data in company databases. When we eventually query the database table with the user’s query, we ideally want to perform a hybrid search: both a full text search and a vector search of any columns that might match the user’s intent. In order to perform a vector search, we also need a column that stores a vector embedding of the target columns. We use the user’s question to query a single PostgreSQL table and send the matching rows to the LLM. This can be largely implemented with PgVector ([https://github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)) although the embeddings for any existing tables still need to be generated with your algorithm of choice and results…again will vary. For really big databases this can be almost unauditable.

![Example of a structured hybrid search model.](/images/blog/2024-10-21-when-the-low-hanging-fruit-is-rotten/image-04.jpg)

*Example of a structured hybrid search model.*

### So the problem with adoption is?

I’m going to say it and it’s going to sound so old school, you’re going to roll your eyes. It’s a data problem. Always has been.

In the above sections we looked at both structured and unstructured data. And we looked at tools that can deal with each. In net new development where the amount of data is low this can be a surmountable problem. But we don’t really have much enterprise value in that solution. In an existing company where there are masses of valuable but unorganized documents and databases lying about it’s possible to access this data by embedding it, but there is no real way of guaranteeing that the results of our RAG systems are in any way accurate without continuous auditing. This might be acceptable in certain situations, but trust is a thing and if the system hallucinates a few too many times, or leads to a costly business mistake the implementation can be easily scrapped. And let’s not even get into compliance and security concerns.

It boils down to ROI. There is no one-and-done RAG method and many, many different processes (embedding, LLM model etc.) to choose from in building. It requires time, people and iteration to settle on the best one, and with the tech moving really fast, it might be better for a company to let the dust settle a bit. I’m bullish on these tools in the future, but the one thing that they can’t solve is existing data quality issues and as we all know garbage in, garbage out.