---
title: "By another name"
slug: "2024-03-11-by-another-name"
date: "2024-03-11"
description: "By another name"
coverImage: "/images/blog/2024-03-11-by-another-name/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

![Figure](/images/blog/2024-03-11-by-another-name/image-01.jpg)

Recently Jensen Huang, CEO of NVIDIA, claimed that programming languages are a thing of the past. He believes that in the future humans will interact with computer systems using prompting via LLM type tools. This last week Claude3 from Anthropic was released and was largely competitive with OpenAI and Google’s models. One of the suggestions that came from Anthropic when working with the new model was to use markup to structure the query. In the case of a text analysis it was suggested to sandwich it via <txt> and </txt>.

Two observations from this suggestion. One, it tells me that the structure of the training dataset was scraped or stored in a particular manner and hewing closely to the training data gives better answers. This makes sense in LLMs. Second, the idea that we should carefully structure our prompts in a uniform and repeatable manner seems like a … programming language? That’s why I’m suggesting the name “Socrato” derived from the philosopher Socrates and the questioning methodology named after him. We’ll dee if it sticks.

### One more lesson

[https://t.co/VC1jWTSbur](https://t.co/VC1jWTSbur)

Here is a video with a step by step guide to building a RAG LLM. The video is about helping you understand the reason for every component and how to build a chain to solve the problem. It uses Langchain, Pinecone and OpenAI, though I suspect you could substitute any other VDB or LLM API (local?) in if you’d like. Until the possibility of hallucination free “needle in a haystack” ultra-long context prompting is more robust, this is still the way to build a RAG for a company or industry with specific required knowledge.

### Creative, but could you do physics?

[https://x.com/MartinNebelong/status/1765018767170383946?s=20](https://x.com/MartinNebelong/status/1765018767170383946?s=20)

In this post (it lacks specifics on the actual implementation) the author looks at the creative process of sculpting 3D assets for gaming. Inserted into the steps is a diffusion model and an LLM. So the base sketch is enhanced and detailed through the process. [https://github.com/VAST-AI-Research/TripoSR](https://github.com/VAST-AI-Research/TripoSR) this repo has the heavy lifting. I think there is a distinct possibility that these tools could be used to enhance the process for industrial work. Again, the data used to train the model comes from here: [https://yiconghong.me/LRM/](https://yiconghong.me/LRM/) and the NeRF via transformer. I would still love to do this in collaboration with McMaster Carr.

### Great work

![Figure](/images/blog/2024-03-11-by-another-name/image-02.jpg)

Thanks to Jason Shen, the map of Paul Grahams recent essay on how to do great work is a solid summary. Read the source here: [https://paulgraham.com/greatwork.html](https://paulgraham.com/greatwork.html) Of course it’s good advice for individuals looking to improve or explore their own nature, but I think the best application is in building a strong hiring process. Structure the job requirements and sort for candidates that really work this way and you are much more likely to put together an amazing team.

### Diffusion for better weather prediction models

[https://wapo.st/3IrdTD0](https://wapo.st/3IrdTD0)

A co-worker sent me this article about a new Google DeepMind developed weather model. The article doesn’t get super technical, but by the name of the method “GraphCast” I’ll assume that they are using graph based ML algorithms. Graph embedding involves generating numeric or binary feature vectors to represent nodes, relationships, paths, or entire graphs, though in the case of weather we’d probably lean towards non-GNN due to the size and complexity of the data. Non-GNN embeddings often require hyperparameter tuning to get right, they tend to be easier to automate and generalize across different graphs. Additionally, some non-GNN embeddings like FastRP and HashGNN can scale incredibly well to large graphs on commodity hardware since they don’t require model training.

My question is in the case of weather prediction would a diffusion based method like SORA based on historical concepts be something that could be computationally achieved?