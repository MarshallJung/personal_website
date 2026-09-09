---
title: "Unable or Canny?"
slug: "2025-03-17-unable-or-canny"
date: "2025-03-17"
description: "I’m back from driving my race car at Circuit of the Americas in Texas. It was a great weekend where I got to learn more about my winter modifications and how well they performed at..."
coverImage: "/images/blog/2025-03-17-unable-or-canny/image-01.jpg"
tags: ["AI Strategy"]
readTime: "8 min read"
---

I’m back from driving my race car at Circuit of the Americas in Texas. It was a great weekend where I got to learn more about my winter modifications and how well they performed at the limit. There’s nothing like real-world testing. No reliability issues which makes me proud. The weak point was brakes as usual. We’ll get to some ML applications at the end of the newsletter. First some industry news.

I am working on breaking down some LLM “agentic” concepts. Even defining what “agentic” means can be challenging. For our purposes, let’s assume it refers to an LLM’s ability to independently operate tools like browsers. This seems to be dominated by MCPs from Anthropic and a more robust implementation from the Chinese lab called Manus. I’ll prepare a summary for next week’s newsletter.

[https://www.macrumors.com/2024/03/18/apple-google-gemini-ios-18-iphone/?s=01](https://www.macrumors.com/2024/03/18/apple-google-gemini-ios-18-iphone/?s=01)

What can we learn from the article? Should we assume that Apple cannot create its own transformer-based AI tech and integrate it into iOS? Or is it possible that Apple recognizes that pursuing training foundation models, infrastructure, and all the associated costs of developing their own models is ultimately a losing game?

A bit of rumor and sentiment: The API model is becoming obsolete for foundation model creators, as models are increasingly interchangeable. This shift has led the majors/big labs to focus on developing and selling their own tools for end users, making artificial general intelligence (AGI) less of a priority. Therefore, creating general-purpose models with a user-friendly API is actually against their self-interests. It seems that coding is really the only primary use case for language models with significant business impact. However, anyone can train a frontier code model affordably using GRPO and code from GitHub or internal repositories (a la Deepseek-R1 demo). The current big LLM companies may not see substantial benefits from this effort, as access to frontier performance will be available to many for the basic cost of renting GPUs. As a result, the main revenue stream may lie in selling or renting GPUs, given that inference on GPUs is unlikely to change unless a method is developed to run a 500 billion parameter model on alternative hardware.

Back to the Apple and Google partnership about integrating Gemini into their next iOS operating system. This seems like a smart move from Apple. By recognizing and avoiding the investment costs around LLMs and instead leveraging existing frontier models, they can focus on enhancing the UI/UX and hardware for users. This aligns with their strengths and helps reduce capital investment while preserving their market position.

### The Real Slim Shady

Remember back when Satya announced the discovery of a new phase of matter that could revolutionize quantum computing with a “topological qubit”? It all seemed a bit unbelievable, and even the style of tweet felt somewhat fabricated at the time. Well it turns out that others seem to think so as well. The main issue with Microsoft’s Majorana protocol, as highlighted by Henry Lee in a comment on the arXiv for the paper, is that the identification of the topological phase depends on arbitrarily chosen cutoffs in the data range. This means that the protocol’s output (which supposedly identifies the region where Majorana states should exist) changes depending on the chosen range of the data plotted. This shouldn’t be the case because the existence of a topological phase should be independent of the data range being analyzed. (But really, who hasn’t adjusted a few graphs to make a point?) Henry Lee’s critique points to a fundamental flaw in the protocol, suggesting it might not be reliable for identifying Majorana states. It highlights a lack of robustness and objectivity in the analysis, casting doubt on MSFT’s claim of having successfully created topological qubits.

### It’s all Postgres

In the ongoing debate over whether SQL vs noSQL will determine the fate of the universe, I found it amusing that Fireship, the video and programming creator, made a humorous yet likely accurate video about building almost anything you need in Postgres..

[https://youtu.be/3JW732GrMdg?si=RiMfsaFLDG21\_p8i](https://youtu.be/3JW732GrMdg?si=RiMfsaFLDG21_p8i)

You can use PostgreSQL as a full-stack solution, eliminating the need for many other services. It has advanced data types, is extensible, and has a massive ecosystem of extensions that add new features regularly.

-   It supports binary JSON, allowing you to store and query unstructured data.
-   Using the PG Cron extension, you can schedule tasks to run on a regular basis.
-   You can create a simple cache by using unlog tables.
-   Vector databases -The PG Vector extension allows you to store and query multi-dimensional data.
-   PostgreSQL supports full-text search using the TS Vector type.
-   The PG GraphQL extension can turn your database into a GraphQL API.
-   Electric SQL acts as a sync layer between your database and frontend code for real-time updates.
-   Combining extensions like PG Crypto and PG JWT allows you to implement robust authentication and authorization.
-   PG Mooncake transforms PostgreSQL into a time-series database.
-   PostREST automatically turns your database into a RESTful API.
-   You can store your entire frontend code in PostgreSQL, making it truly full-stack.

### Diffusion for Structured Data

Diffusion-based methodologies may not seem well suited to structured data, but they are actually effective for creating synthetic datasets. Structured data tends to be verifiable, and synthetic data can enhance smaller datasets while maintaining fidelity and variety.

[https://openreview.net/forum?id=swvURjrt8z  
](https://openreview.net/forum?id=swvURjrt8z)[https://github.com/MinkaiXu/TabDiff](https://github.com/MinkaiXu/TabDiff)

![Figure](/images/blog/2025-03-17-unable-or-canny/image-01.jpg)

### A Few Dashes of Wisdom

![Figure](/images/blog/2025-03-17-unable-or-canny/image-02.jpg)

![Figure](/images/blog/2025-03-17-unable-or-canny/image-03.jpg)

Last: [https://www.pnas.org/doi/10.1073/pnas.2021636118](https://www.pnas.org/doi/10.1073/pnas.2021636118)

The paper above aligns well with the tweet regarding the AI skills gap and the importance of hiring individuals with systems thinking. In reality, LLMs can provide valuable recombinatory innovations, even if they don’t create entirely new concepts. I encourage my readers to explore the relationship between two fields of science and using a SOTA LLM, discover the interesting observations you can make.

### Race Cars as a Basis for Machine Learning

As any of my dear readers that truly know me would know, I believe that all technology can be derived from or directly applied to race cars. One of my long-standing projects is creating a true digital twin of my race car in 3D, allowing me to perform various calculations and computations. For example, I have followed best practices in aerodynamic engineering, but I’m uncertain about the downforce my car generates at different speeds. To determine this, I need to create a three-dimensional model using computational fluid dynamics software like Airshaper. To accomplish this, most people will use a handheld scanner typically using laser light or infrared to build a model in real time. Since I don’t own one, I chose to experiment with an algorithm developed by Meta Research ([https://arxiv.org/abs/2501.13928](https://arxiv.org/abs/2501.13928)). This algorithm utilizes transformer-based methodologies to reconstruct three-dimensional objects from various 2D images taken from different angles. Here are some pictures I took for the methodology.

![Figure](/images/blog/2025-03-17-unable-or-canny/image-04.jpg)

As the paper states you can use 1000 or more, but that takes a bit more processing power than I possess on my laptop.

![Figure](/images/blog/2025-03-17-unable-or-canny/image-05.jpg)

After some considerable futzing with the code, I was able to output a result, as shown below.

![Figure](/images/blog/2025-03-17-unable-or-canny/image-06.jpg)

Clearly the results won’t be sufficient for creating a digital twin for aerodynamic modeling. Some features render better than others. For example, the rear wing of the race car is not rendered well at all, possibly because it appears narrow and difficult to see from certain angles, while it is more noticeable from others. In some pictures, where a feature may disappear and then reappear, the simultaneous processing of the images might not highlight that feature as much. This is only a hypothesis, however. I did learned a bunch about the methodology, particularly bi-directional flow in the transformer architecture, and how it helps achieve a global understanding of the scene from all input images simultaneously. I also gained insights into the use of index embeddings to provide “metadata”, which explains the origin coordinates of the resulting 3D image from individual 2D images, along with local and global point maps, position interpolation, and image context.

Stepping back from my race car for a moment, what are the potential business applications of this algorithm? There’s the opportunity to create digital twins of objects using just a camera phone, and also to reconstruct three-dimensional objects from sources like satellite images or UAV cameras. The speed of this methodology also enables applications in robotics, allowing robots to learn novel scenes and manipulate objects or perform tasks within those environments quickly and accurately.

This was a fun side project, but I still have a long way to go to create a digital twin of my race car to understand how much downforce it generates. But as we all know, the answer is a lot!