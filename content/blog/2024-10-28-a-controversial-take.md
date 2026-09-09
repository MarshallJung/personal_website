---
title: "A Controversial Take"
slug: "2024-10-28-a-controversial-take"
date: "2024-10-28"
description: "A Controversial Take"
coverImage: "/images/blog/2024-10-28-a-controversial-take/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

Last Sunday I listened to a sermon that I think has some crossover to the world of AI and ultimately the pursuit of AGI. While the words were not specifically, nor generally, aimed at the world of technology, I could not help but recall the message when I saw Anthropic’s tweet ([https://x.com/AnthropicAI/status/1849840149196050697](https://x.com/AnthropicAI/status/1849840149196050697)) from this past Friday.

![Figure](/images/blog/2024-10-28-a-controversial-take/image-01.jpg)

Anthropic’s work in removing bias seems to me a way of imposing a particular set of views on others. In Biblical circles this is called “legalism” and it isn’t exactly a successful way to conduct one’s personal life or collective society. For one, others will probably never live up to your dearly held beliefs and second, you’ll likely dislike conducting yourself by others directives. Instead of legalism we should each strive towards wisdom. Attaining wisdom, which is never really reachable in totality, gives each of us the ability to sympathize with others’ choices even if we might find those decisions incompatible with our own beliefs.

Technically what Anthropic has done here is remove or de-emphasise language that they find to be offensive from the original data set and likely manipulated weights (didn’t say this explicitly) during the training process. As a result, the model does not perform as well on standard benchmarks as the unredacted model. They have made the model purposely worse in order to not offend groups that they choose to be important. While the obvious conclusion is that the world hurts our feelings sometimes, and that’s not an excuse to make a product worse, IT IS a private company and they are under no obligation to tell the truth even if that is making a choice for their users. I’m just saying that they could use a bit less legalism and a bit more wisdom.

### A Few Degrees of Separation

Everyone is probably aware of the concept of “7 Degrees of Separation”, but for those who do not it’s the idea that within 7 connections you can get from yourself to anyone else on the planet. That might be true (or not) but what is true is that in the readers of this newsletter I have an honest 3 degrees to Sundar Pichai. So while this part of the newsletter is meant for him, let it serve as a soapbox for the rest of the readership.

Google, please, please figure out your product lines and marketing strategy in AI. Like a sucker I always keep going back to the Goog, hoping that finally, they’ll change. The AI industry is always changing fast and after a slowish start Google responded pretty well to OpenAI with Gemini which was SOTA for a bit and still the out-and-out winner in context length. But time has moved on and both OAI and especially Anthropic has continued to improve.

Let’s focus on Claude. The tool now has a well integrated API structure and agent building, code generation, chatbot, visual data extraction and process automation in a one stop shop. We’ll touch on the computer use later in the newsletter, but to do (most, but not all) the same things with Google I have the following:

Gemini Advanced — [https://gemini.google.com/app  
](https://gemini.google.com/app)Google AI Studio — [https://aistudio.google.com/  
](https://aistudio.google.com/)Notebook LM — [https://notebooklm.google.com/  
](https://notebooklm.google.com/)AI based code notebook for data science — [https://labs.google.com/code/dsa  
](https://labs.google.com/code/dsa)AI Code Refactoring — [https://labs.google.com/code/transformer  
](https://labs.google.com/code/transformer)(I’m probably missing something here, tbh)

All of these have different models, different UIs, various states of documentation and undefined overlap and capabilities. It’s really frustrating and difficult to tell a consistent story to customers about ease of adoption when the tools are confusing to the people who are supposed to understand them. A big company, whose brand is staked on the image of being the leader in ML/AI has to be better at this. I understand that internally there has been some serious restructuring at the company and changing course in what has become a 100k+ employee behemoth isn’t easy. For the love of all that is good, Google please consolidate and get your marketing sorted. There is a lot of good to be had here. But people don’t know about the tools because the marketing is thin and scattershot when I do see it, and then the UI/UX is confusing and difficult to apply compared to competitors.

*So if my 3 degrees of separation is successful. Please, Sundar sort this out.*

### I found a good one

Reaching back to last week’s installment/article, a friend of the newsletter let me know that a particular company he’s working with has in fact found measurable improvement ~40% to profitability and efficiency by implementing AI based tools. This is in a low-level customer service/intake/eval pipeline that deals with a repeatable and standardized process with reasonably structured data. IF I told you what industry they were working in, you’d go, “ahhh…yea, that makes sense.” So, yes indeed there is at least one company that is growing the bottom line without having to add people. So where there is one, I’d imagine there are others as well.

What’s the common denominator here? Bottom up, granular models, highly specialized and fit for purpose working on structured data in repeatable tasks. Those are the jobs that will be affected first and most deeply. Does that make a multi billion dollar market? Don’t know, maybe. Who are the companies providing this? Again, not sure. If my readers know who these AI companies/SI’s are, please let me know.

P.S. — Here’s AJ talking on podcast about small distilled models being very good for fit for purpose tasks. Interesting listen: [https://youtu.be/hM\_h0UA7upI?si=FbFi1Km7DBX9R4rE](https://youtu.be/hM_h0UA7upI?si=FbFi1Km7DBX9R4rE)

### Tool Use

As promised above, this week saw Claude get an upgrade allowing for screenshot+language tool use. [https://techcrunch.com/2024/10/22/anthropics-new-ai-can-control-your-pc/](https://techcrunch.com/2024/10/22/anthropics-new-ai-can-control-your-pc/)

This is the equivalent of having your grandma sit at the computer and you tell her what to do, and what to click on to accomplish a task. Anyone with a parent of a certain age will know that this is a frustrating task, however this is the worst that this tool will ever be. AI agents is a poorly defined term, but this one seems to be going down the anthropomorphic route, and is a natural way for humans to understand AI capabilities. It joins MSFT, [https://blogs.microsoft.com/blog/2024/10/21/new-autonomous-agents-scale-your-team-like-never-before/](https://blogs.microsoft.com/blog/2024/10/21/new-autonomous-agents-scale-your-team-like-never-before/) and Google [https://blog.google/products/gemini/google-gems-tips/](https://blog.google/products/gemini/google-gems-tips/) in having customizable AI interactions without having to do retraining or RAG. It does hint for me what Klarna is up to, though I somehow doubt they had this tech internally before Anthropic. Well…they do now.

### I continue to be vindicated

[https://arxiv.org/abs/2410.04840](https://arxiv.org/abs/2410.04840)

This research paper from Meta backs up my thoughts about the dangers of synthetic data. It looks into the mechanisms behind model collapse, it also suggests that current methods for mixing real and synthetic data are insufficient. Even 1% synthetic data can cause model collapse and scaling doesn’t help.. More advanced strategies are needed to ensure that models trained on synthetic data can still generalize effectively to real-world scenarios.

### Playing Locally!

After some vociferous suggestions Ollama and HF have made running GGUF models on your box a snap. Just point to the Hugging Face repository and run it! Here is how to run.

1.  Find your GGUF weights on the hub, e.g. Llama 3.2 3B
2.  \`ollama run hf(.)co/hugging-quants/Llama-3.2–3B-Instruct-Q4\_K\_M-GGUF\` remove ()
3.  Chat with your model locally using the power of llama.cpp