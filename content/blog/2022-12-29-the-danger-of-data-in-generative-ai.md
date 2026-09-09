---
title: "The Danger of Data in Generative AI"
slug: "2022-12-29-the-danger-of-data-in-generative-ai"
date: "2022-12-29"
description: "Sometimes I write articles that I believe are unnecessary. I feel like my words have been spoken many, many times before by people far more…"
coverImage: "/images/blog/2022-12-29-the-danger-of-data-in-generative-ai/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Are we doing this again?](/images/blog/2022-12-29-the-danger-of-data-in-generative-ai/image-01.jpg)

*Are we doing this again?*

Sometimes I write articles that I believe are unnecessary. I feel like my words have been spoken many, many times before by people far more intelligent and experienced than myself. I’ve also been through the “hype” cycle in several different careers, often more than once. Today I find myself there yet again, and strangely I see the same mistakes being committed in the same way. It’s not because people are unethical or unintelligent, far from it. The real reason is because of our human nature.

When each of us closes the car door, turns the key and motors off to work, go shopping or to visit someone we very rarely consider all the grimbly details of life that go into making that process work smoothly. Who builds the roads? Fixes the potholes, tends to the traffic signals, road signs or the electricity grid that ties all of it together. There is a backbone that most take for granted.

And this is the same with Generative AI. Sure it’s all the hype today. After blockchain and crypto, VR and AR have come and gone, Generative AI is the newest, best thing to change the world. If I take the first derivative of the tech hype cycle perhaps I end up with something approximating the number of articles written about how Generative AI is going to revolutionize and replace humans in (choose your) technology. I’ve always been the guy that dislikes writing about the same thing as everyone else, but in this case I can be the curmudgeon and bring up a topic that is very apropos and near to my heart…data quality.

![Hype cycle vs article quantity…an approximation.](/images/blog/2022-12-29-the-danger-of-data-in-generative-ai/image-02.png)

*Hype cycle vs article quantity…an approximation.*

I recently read a LinkedIn post from someone that purported to sit through seven hours of student presentation on AI based solutions. This author’s conclusion told us that today’s businesses were not ready for the epic awesomeness that these kids were bringing. I asked how many of those kids had prefaced their sexy AI presentations with the mundane discussions of the statistical analysis and quality control of the training data fed to their algorithms. I didn’t get an answer, but based on my many years of experience I’m willing to say that the answer is not many, if any.

Why is this? Well, because data science is the equivalent of patching roadways, or fixing the electrical grid. It’s hard, honest work that no-one really wants to do because it doesn’t get the accolades and hype cycle articles. But it is crucially important! And we are running into yet another problem. As the NL based transformer models such as ChatGPT become the darling of the tech media as the next greatest thing, the data used to train these models is growing at an exponential rate. Typical issues with data quality (as listed [here\_1](https://hbr.org/2018/04/if-your-data-is-bad-your-machine-learning-tools-are-useless), [here\_2](https://www.precisely.com/blog/data-quality/data-quality-impact-machine-learning), and [here\_3](https://research.aimultiple.com/ai-fail/)) are still applicable but even these potentially addressable issues become unmanageable as the training dataset reaches petabytes in size. Even “bad” data for these tools can go unnoticed because the data set is just too big and the “bad” data isn’t actual junk but simply vulnerable to exploitation. See this article about Microsoft Copilot: [Issues](https://www.securityweek.com/code-generated-github-copilot-can-introduce-vulnerabilities-researchers)

And when the training dataset becomes “everything, everywhere”, including the input of humans using the output of the AI cycling back into the next iteration of the training dataset we can get a feedback loop of garbage that pushes the generative AI tool farther and farther from useful. See this article on ChatGPT’s poor contributions to its own training dataset: [Feedback-GIGO](https://www.zdnet.com/article/stack-overflow-temporarily-bans-answers-from-openais-chatgpt-chatbot/)

Users might think that I’m souring on Generative AI. I will assure you it’s not the case. I believe that the technology holds immense potential when applied correctly. I’ll talk my own book for a moment and look at the company that is my day job. [Tabnine](https://www.tabnine.com/) is an AI pair programming tool that uses NL generative AI to help programmers be more efficient and productive. Where Tabnine really shines is when we build training datasets dedicated and curated by our individual customers. Their code, reviewed and compliant is a great place to start with a quality QC’d data set that we know will not generate potential issues when used in a day-to-day team situation. It’s this kind of deep, narrow and well understood application that will prove to be Generative AI’s sweet spot, regardless of the industry.

Data has become so big, so varied and so unwieldy when it comes to Generative AI that we are committing the same fundamental errors that our computer science professors and ML pioneers warned us about. When we don’t understand and curate the data used for training we cannot trust the results of the algorithm. It’s not the most fashionable part of machine learning, but data science is the foundation that good AI is built on. Let’s fix it now and then we won’t have to rewrite these kinds of articles the next time the hype curve starts to go vertical.