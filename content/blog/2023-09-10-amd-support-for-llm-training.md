---
title: "AMD Support for LLM training"
slug: "2023-09-10-amd-support-for-llm-training"
date: "2023-09-10"
description: "AMD Support for LLM training"
coverImage: "/images/blog/2023-09-10-amd-support-for-llm-training/image-01.jpg"
tags: ["AI Strategy"]
readTime: "2 min read"
---

[https://github.com/ggerganov/llama.cpp/pull/1087](https://github.com/ggerganov/llama.cpp/pull/1087)

If anyone has been following the shady, shady business with Blackrock, Magnetar and NVIDIA ([Follow the drama here](https://themadking.com/article/nvidia-the-red-flags/))it would probably behoove folks to get some of the LLM [fine tuning techniques](https://medium.com/@jung.marshall/training-llms-a-taxonomy-76a7488c4163) working on other GPU’s. AMD GPU’s are now supported for some of the basic efforts.

### Better IDE integration for DE Tools

[https://www.cursor.so/](https://www.cursor.so/)

![Figure](/images/blog/2023-09-10-amd-support-for-llm-training/image-01.jpg)

I’ve been using the free version of this VSCode fork and the integration with API docs is great. For $20/month this would likely make any continuing DE Tools development or third party dev much easier. I’m sure there will be an open source plugin at some point as well. Definitely a space to keep an eye on.

### More 3D tools for classification

[https://dinov2.metademolab.com/?utm\_source=twitter&utm\_medium=organic\_social&utm\_campaign=blog&utm\_content=video](https://dinov2.metademolab.com/?utm_source=twitter&utm_medium=organic_social&utm_campaign=blog&utm_content=video)

Feeding existing parts or getting Istari plugged into a current pipeline where there may already be a library of components might need a method for fast classification. I imagine being able to run a 360 degree video capture for an existing subsystem part through a classification process derived from the above concept to quickly build the digital twin library and get the components into a optimization loop.

### Speculative Execution of LLMs

[https://arxiv.org/abs/2302.01318](https://arxiv.org/abs/2302.01318)

Interesting observation that LLMs are memory bound during inference execution. Therefore by using a small and cheap model to pre-generate a batch of X tokens that are likely to work *GIVEN* that LLMs require N-1 knowledge of input token streams. Since memory constraints apply to reading model weights NOT the input vectors, let’s generate a batch of probable tokens and feed them all into the larger model and select from the most accurate results.

### Embeddings Search

[https://www.leebutterman.com/2023/06/01/offline-realtime-embedding-search.html](https://www.leebutterman.com/2023/06/01/offline-realtime-embedding-search.html)

For working with customer documents or project specific searches (especially in on-prem arenas) this seems like a pretty cool and lightweight implementation of an embedding search. Does require the embedding effort (listed) as well as storage in Arrow format ([https://arrow.apache.org/docs/index.html](https://arrow.apache.org/docs/index.html)) which is more memory efficient, but might be incompatible with other document engine solutions.

### Free All Hands joke!

![Figure](/images/blog/2023-09-10-amd-support-for-llm-training/image-02.jpg)