---
title: "Do the thing"
slug: "2023-09-18-do-the-thing"
date: "2023-09-18"
description: "Do the thing"
coverImage: "/images/blog/2023-09-18-do-the-thing/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

*Here is a list of things that are not doing the thing:*

“Preparing to do the thing isn’t doing the thing.

Scheduling time to do the thing isn’t doing the thing.

Making a to-do list for the thing isn’t doing the thing.

Telling people you’re going to do the thing isn’t doing the thing.

Messaging friends who may or may not be doing the thing isn’t doing the thing.

Writing a banger tweet about how you’re going to do the thing isn’t doing the thing.

Hating on yourself for not doing the thing isn’t doing the thing.

Hating on other people who have done the thing isn’t doing the thing.

Hating on the obstacles in the way of doing the thing isn’t doing the thing.

Fantasizing about all of the adoration you’ll receive once you do the thing isn’t doing the thing.

Reading about how to do the thing isn’t doing the thing.

Reading about how other people did the thing isn’t doing the thing.

Reading this list isn’t doing the thing.

The only thing that is doing the thing is doing the thing.” — Strangest Loop

In Alex Hormozi’s words…

“Instead of spending time “getting in the mood to work”… just start working.

Confront the work.

People think they need perfect conditions to start when in reality, starting is the perfect condition.”

*Go do the thing.*

### Mini Deep Dive on Vector Embedding and VDBs

We all want our own personal AI, and soon that may be a reality. But in order to use a transformer based model on modern or near modern infrastructure in a cost effective manner we need to have an efficient way of storing vector embeddings that provide the model with a base of predictive and relevant data to do the work that we request.

Let’s look at a quick example and then if y’all have time you can read on for a summary of some of the technical terms and state of the art. Let’s say that you’ve fine tuned an LLM to do code documentation. Essentially a text summary task. We can use a vector database to store the vector embeddings of proprietary and high quality code documentation and corresponding code blocks. When a user submits a new code block to the LLM, the LLM can use the vector database to retrieve the vector embeddings of similar code blocks/documentation. The LLM can then use these vector embeddings to generate a more accurate and informative documentation of the code block.

So what is a vector embedding? Vector embeddings are a way to represent data as vectors of numbers. See here: ([https://www.pinecone.io/learn/vector-embeddings/](https://www.pinecone.io/learn/vector-embeddings/)) This allows for efficient similarity search and other machine learning tasks. There are many different types of vector embeddings, including image embeddings, text embeddings, audio embeddings, video embeddings, and multimodal embeddings.

![Figure](/images/blog/2023-09-18-do-the-thing/image-01.jpg)

Popular open source models for generating vector embeddings include ResNet-50 and Whisper. For image vector embeddings here’s a code snippet using HF:

```
# Load model directlyfrom transformers import AutoFeatureExtractor, AutoModelForImageClassificationextractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-50")model = AutoModelForImageClassification.from_pretrained("microsoft/resnet-50")from PIL import Imageimage = Image.open("<image path>")# image = Resize(size=(256, 256))(image)inputs = extractor(images=image, return_tensors="pt")# print(inputs)outputs = model(**inputs)vector_embeddings = outputs[1][-1].squeeze()
```

Think about how this embeddings model might be used for storage of images for use in 3D reconstruction via a Gaussian Splatting methodology.

What are common Vector DBs and why should we use them? Some of the more common open source Vector DB’s are [Weaviate](https://weaviate.io/) and [Chroma](https://www.trychroma.com/). Vector embeddings are typically very large and complex, and they require specialized indexing and search algorithms much different than that of relational DB’s or noSQL. That does make them specialized and adds to underlying complexity and maintenance. However, giving a fine tuned LLM speedy access to a well curated set of vector embeddings in the same space as the problem set can greatly increase accuracy of the model.

### How do I write those job reqs again?

From here: [https://newsletter.pragmaticengineer.com/p/engineering-leadership-skillset-overlaps](https://newsletter.pragmaticengineer.com/p/engineering-leadership-skillset-overlaps)

![Figure](/images/blog/2023-09-18-do-the-thing/image-02.jpg)

### Racecar Aero Visualized

I had the rear diffuser off my race car for some routine maintenance after a wet drive back from a track weekend. (Note to self: Figure out better windshield defrost methodology to not die…anyway) Like the flow viz paint F1 teams use to “see” airflow on body surfaces, the dirt from the road is telling the story of the air here on my car. The diffuser is standing on end with the back of the car on the top of the picture. You can see the air traveling from the front coalesse towards the center section as the lower control arm cutouts in the diffuser cause some airflow turbulence. The diffuser throat expands here vertically so the overall airflow does not seem to detach. A basic, but on balance successful design. I would encourage everyone to inspect their cars after a rainy highway drive to see where the air flows. Fascinating lessons!

![Figure](/images/blog/2023-09-18-do-the-thing/image-03.jpg)