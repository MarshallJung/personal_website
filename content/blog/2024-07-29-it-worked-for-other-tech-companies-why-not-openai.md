---
title: "It worked for other tech companies, why not OpenAI"
slug: "2024-07-29-it-worked-for-other-tech-companies-why-not-openai"
date: "2024-07-29"
description: "OpenAI may lose $5B this year & may run out of cash in 12 months, unless they raise more $, per analysis by The Information (above link). What is their moat? Unique tech? What is their route in profit..."
coverImage: "/images/blog/2024-07-29-it-worked-for-other-tech-companies-why-not-openai/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

[https://www.theinformation.com/articles/why-openai-could-lose-5-billion-this-year](https://www.theinformation.com/articles/why-openai-could-lose-5-billion-this-year)

OpenAI may lose $5B this year & may run out of cash in 12 months, unless they raise more $, per analysis by The Information (above link). What is their moat? Unique tech? What is their route in profitability when Meta is giving away similar tech for free with the new release of Llama 3.1? Do they have a killer app? Will the tech ever be reliable? What is real and what is just demo? Where is GPT-5!?

Aside from the shine wearing pretty thin on the AI over-investment story, in a world where hurdle rates are substantially higher and cash holdings are likely to stay higher I have trouble understanding where the substantial investments will come from. When FB and Google (and perhaps even Apple) have major reserves and similar tech with the opportunity to roll it out to an existing user base I think we may be getting ever so closer to one of my predictions coming true.

![Figure](/images/blog/2024-07-29-it-worked-for-other-tech-companies-why-not-openai/image-01.jpg)

Of course AMZN didn’t make any profit either and look where they are at now, so it’s not out of the realm of possibility.

Transformers plus, plus

[https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level)

TL:DR: For non-geometry, it uses AlphaProof, which can create proofs in Lean. It couples a pre-trained language model with the AlphaZero reinforcement learning algorithm, which previously taught itself to master games like chess, shogi and Go. Math programming languages like Lean allow answers to be formally verified. But their use has been limited by a lack of human-written data available. So we fine-tuned a Gemini model to translate natural language problems into a set of formal ones for training AlphaProof. When presented with a problem, AlphaProof attempts to prove or disprove it by searching over possible steps in Lean. Each success is then used to reinforce its neural network, making it better at tackling subsequent, harder problems. With geometry, it deploys AlphaGeometry 2: a neuro-symbolic hybrid system. Its Gemini-based language model was trained on increased synthetic data, enabling it to tackle more types of problems — such as looking at movements of objects. Powered with a novel search algorithm, AlphaGeometry 2 can now solve 83% of all historical problems from the past 25 years — compared to the 53% rate by its predecessor.

A few observations here: Reason engines based off of previous solutions like AlphaGo -> AlphaZero are a good compliment to the transformer based models. Two, highly structured knowledge like mathematics is a good place to apply synthetic data since the steps can be accurately understood and there are no “outliers” as such.

Very high level

After looking through many proposed “knowledge systems” for enterprise RAG, the overall picture was well boiled down by X user @chipro.

![Figure](/images/blog/2024-07-29-it-worked-for-other-tech-companies-why-not-openai/image-02.jpg)

The bulk of the effort is not in the model, but in the pipeline. I think the ability to build this pipeline (enabled perhaps by DAG based tools) is really the key to getting the process functional. I think it also points to the concept that data is very important and the underlying DB’s are actually the long pole in the tent. Any readers familiar with someone trying to build this concept as a SaaS based solution?

More controversy

[https://www.nature.com/articles/s41586-024-07566-y](https://www.nature.com/articles/s41586-024-07566-y)

A new paper in Nature found that you cannot, in fact, train AIs on AI-generated data and expect them to continue improving. What happens is actually that the model collapses and ends up producing nonsense. I’ve noticed people interpreting this result as ‘synthetic data cannot be useful’ and some others insinuating that ‘synthetic data strategies actually are naïve in implementation like the strategy shown in this paper’ Neither is true. As we’ve seen in the DeepMind paper above, there are roles for which synthetic data is a good fit and places where it is not well suited. Satisfyingly, the determination for the places that these applications should be used are largely up to human feedback.