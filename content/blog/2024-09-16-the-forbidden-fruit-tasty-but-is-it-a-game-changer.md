---
title: "The forbidden fruit. Tasty but is it a game changer?"
slug: "2024-09-16-the-forbidden-fruit-tasty-but-is-it-a-game-changer"
date: "2024-09-16"
description: "It’s always important to acknowledge when events that change your paradigm happen. Does o1/Strawberry/Q*/Orion change the outlook that I had with regards to plateauing of AI models? In a way yes it do..."
coverImage: "/images/blog/2024-09-16-the-forbidden-fruit-tasty-but-is-it-a-game-changer/image-01.jpg"
tags: ["AI Strategy"]
readTime: "8 min read"
---

It’s always important to acknowledge when events that change your paradigm happen. Does o1/Strawberry/Q\*/Orion change the outlook that I had with regards to plateauing of AI models? In a way yes it does, and also kinda no as well. It’s important to recognize the advancement made in how OpenAI has reimagined the deep learning/reasoning structure of transformer based models, and what this might mean to the evolution of AI. So let’s take a deepish dive into the results, some how-did-they-do-it and also a few predictions and prognostications. Hopefully you’ll be pareto knowledgeable by the end of this read. We’ll address the following sections.

1.  What is o1 and how is it different?
2.  What has it changed/revolutionized in capabilities and why.
3.  What are the real world business implications of o1?

### What is o1 and how is it different?

First, let’s say that o1 is the first (publically at least, but we’ll get to that) available reinforcement learning optimized transformer model. When presented with a complex problem o1 produces a “chain-of-thought” before presenting these results to the model in an iterative process as in the diagram below. While that covers the implementation, the training process included using reinforcement based deep learning techniques to establish correct/incorrect relationships between token outputs. There may also be some sort of a beam/tree/monte-carlo based search method to implement the reasoning steps at inference time. This focus on the inference optimization is a departure from the more classical hyperscaler methods of the past.

![Figure](/images/blog/2024-09-16-the-forbidden-fruit-tasty-but-is-it-a-game-changer/image-01.jpg)

Open AI is keeping most of the details obscure, but this isn’t all that different from what more highly involved and skilled LLM users were already doing by guiding and redirecting a particular chat interaction with existing LLMs. It’s now just abstracted and more automatic. The “reasoning tokens” are part of each turn and help the model refine its steps and backtrack when necessary. This allows for more complex solutions with fewer hallucinations. You do have to pay for those reasoning tokens, and no you can’t see them so you don’t know how o1 reached the final answer. Not the most transparent model then…OPENAI!!!. BUT, BUT people have already jailbroken the reasoning process, so some visibility is already coming to light. Just say you’re a cat: [https://huggingface.co/posts/nisten/520824119529412](https://huggingface.co/posts/nisten/520824119529412)

The trade off for the additional capabilities is that each prompt takes more time to complete and more computing power per user prompt. The next image below roughly tells you where the money now ends up based on the compute needs for the models. Most LLMs (Gemini, Claude, GPT-4) leaned in hard on the parameter scaling. Lots and lots of data on the front end, and big expensive training runs. OpenAI’s o1 actually uses a smaller foundational model (not entirely sure what that is, as they didn’t really say) and pushes a bunch of the compute out to inference time.

![Figure](/images/blog/2024-09-16-the-forbidden-fruit-tasty-but-is-it-a-game-changer/image-02.jpg)

### What has it changed/revolutionized in capabilities and why.

As the diagram given by OpenAI demonstrates, o1 has shown remarkable improvements on many of the most used LLM benchmarks. Now, say what you will about benchmark applicability, but this is a meaningful improvement.

![Figure](/images/blog/2024-09-16-the-forbidden-fruit-tasty-but-is-it-a-game-changer/image-03.jpg)

As I mentioned earlier, this isn’t the first RL based LLM tool that has shown major potential. Google has been dominating the math/coding space for a while now with AlphaProof and AlphaCoder (using synthetic data) but hasn’t made those types of models available for the general public. Digging a bit deeper OpenAI has also revealed that o1 does not improve, or does a little worse, on language based tasks. This makes sense as RL training, especially involving synthetic data, and inference time “reasoning” will show the most improvements on structured data. Back in August Google even published a paper ([https://arxiv.org/pdf/2408.03314](https://arxiv.org/pdf/2408.03314)) that spoke specifically about this methodology, so *revolutionary* isn’t exactly a description of o1.

Probably the most important aspect of o1 is the information provided around the math benchmarks AIME. The improvement in accuracy seems to scale better with inference scaling vs pretraining. This hints at the idea of tools that might be more accurate but trading slowness in return. Large parameter fast models vs. smaller slower inference accurate models. Specialized tools. Thinking fast and slow indeed.

![Figure](/images/blog/2024-09-16-the-forbidden-fruit-tasty-but-is-it-a-game-changer/image-04.jpg)

To wrap this section there are two observations.   
One, depth seems to beat width in structured data tasks. o1 is a GPU-poor inference scaling method you’d want to leave running for the night on a 4090. Whether MCTS, trees or beam search, this shows that Google really aught to straight kill at retooling Gemini-inference on all those TPU’s. I’d be surprised if they don’t respond. (They’ll f’up the marketing, but they always do.)  
Second, while there was a lot of noise associated with o1 release, it’s been surprising that there has not been a really meaningful set of post-bois all over the ether talking about “‘mazing examples!1!!” of how o1 has really changed the game substantially. Sure, code tools (Cursor, Replit, Tabnine, etc.) will probably see a boost in effectiveness, but other applications are few and far between. One sort of nifty one was given in the OpenAI cookbook ([https://cookbook.openai.com/examples/o1/using\_reasoning\_for\_data\_validation](https://cookbook.openai.com/examples/o1/using_reasoning_for_data_validation)) where data validation on medical records was demonstrated. Overall, I’m not yet convinced this is truly transformational.

### What are the business real world implications of o1?

So, the mind-blowing, earth shattering demos of o1 are not falling out of the woodwork. Maybe the hype train was a little overblown considering OpenAI has been trying to hint at this release for many months. It’s not GPT-5. Granted it’s still early days, but what can we say about the tool in terms of its impact on business.

First, what we have here is a model method (we’ll probably have to start using some language to distinguish RL, inference optimized transformer based models from the bog standard LLMs, maybe iLLMs?) that captures the fundamental value add of a logical, curious, descriptive, technically competent generalist. Think a good coder, medical doctor, engineer, or some other human that would be really good at building things that require pulling information from many different fields of science and math. So basically…someone like me. This person used to be really good at prompting and correcting a model in order to narrow the parameter space and get a solid, demonstrable solution. o1 just does this way faster. While o1 is opaque about its process, you can be guaranteed that OSS will have something similar in the near future.

So certain types of knowledge workers are again in the crosshairs. This will certainly inspire businesses to think about what types of employees are really, actually needed. Combine the inevitable fine-tuned LLM with the RL/search inference structure on top and you are much closer to having a dedicated advisor, general physician, AI programmer and/or engineer then we have been before. With reduced hallucinations, CoT visibility and the ability to self-check things like security and compliance, the future tools may be more adoptable with less legal bitterness.

The only thing that might throw a few sticky roadblocks in the way is the infrastructure and energy costs of heading down this direction. In some ways we have simply traded pre-training GPU’s and electricity for consumption of those same resources at inference time. I don’t actually know how that works out in the wash since foundational model training is expensive but happens once, vs. inference which scales with demand. Either way it seems bullish for energy and GPU/TPU demand.

Pricing is also somewhat of a mystery, but since the costs can be atomic per user at inference, vs. ROI on a big training run, the economics will probably look better. It’s also bullish on the data and model collapse fronts. Both concepts that I have been banging on about for a while now. With smaller models that are less data hungry and can maybe focus on deep QA (especially in narrow industry vertical applications) we don’t run into the problem of running out of new tokens, or getting garbage in such great quantities that it cannot be sorted.

### Conclusion

TL;DR — OpenAI’s o1 is essentially a model replacement for a current human that knocks it out of the park on prompt engineering via chain of thought. It trades pre-training parameter complexity for inference compute via RL. It has some pro’s from a business perspective, but it hasn’t yet changed the game towards AGI. Expect competition followup soon and OSS to make this type of iLLM fully transparent. People like me (curious, engineering minded generalists) are in real trouble. Plan accordingly.