---
title: "Stay strong"
slug: "2024-11-11-stay-strong"
date: "2024-11-11"
description: "A favorite book of mine by the author C.S. Lewis has a line that I often remember when times get tough."
coverImage: "/images/blog/2024-11-11-stay-strong/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

A favorite book of mine by the author C.S. Lewis has a line that I often remember when times get tough.

“Courage is not simply one of the virtues but the form of every virtue at the testing point”

Whether it is love, understanding or wisdom, when times are tough in the world around us and with the people that we interact with, have courage to stick to what is moral and right. In the end this will see us all through.

### As Shaggy said…

Of course it wasn’t me, but my small voice added to the chorus of calls to be more open, compatible and frictionless with the AI dev ecosystem. Google has made Gemini accessible via the OpenAI libraries.

![Figure](/images/blog/2024-11-11-stay-strong/image-01.jpg)

I think this is a great move from Google and will for sure speed adoption. Extra kudos to Logan Kilpatrick, the Gemini PM that has been hardworking and helpful to the AI community on X and Reddit.

### Maybe you need a little less

[https://arxiv.org/abs/2406.15786](https://arxiv.org/abs/2406.15786)

The march towards efficiency continues, and optimization is definitely low hanging fruit. Especially in larger models the attention blocks in deeper layers are prone to redundancy. Dropping these layers minimally impacts performance. However, accuracy is more of a concern in my mind. I’d imagine this type of method, packaged and easily applied like quantization, could really make the fine tuned models really sing. Lower energy costs is a great result as well. I am happy to say that I continue to be proven wrong, if even just a little bit, in my prediction of asymptotic approach to the ceiling of performance for transformers.

### A self-hosted AI assistant

[https://github.com/khoj-ai/khoj?tab=readme-ov-file](https://github.com/khoj-ai/khoj?tab=readme-ov-file)

There are probably many, many of these out there at the moment, but I liked the simplicity of this implementation including the ability to self host even if you are using an API key for a foundational model to do the heavy lifting. As companies move towards offering secure, company specific AI tools (the ones that aren’t already eaten by the MSFT borg) these types of implementations are really nifty. It’s even compatible with Obsidian as a client which is near and dear to my heart!

### An AI code dev

Anyone remember Magic.dev? Maybe Devin? Or even Poolside? I’m sure the VC’s that have dropped several unicorn’s worth of $$$ between all three are well aware of the challenges of developing a truly useful “AI Dev”. Hopefully one of them will actually create something, but in the meantime the open source community is marching forward. [https://composio.dev/swe-kit/](https://composio.dev/swe-kit/) is an open source software dev kit that seems to be performing well and adopted in a fair number of places. It’s fully open-source, customizable, and simple to use. • You can use any LLM you want (Llama 3, ChatGPT, Claude, etc.). You can customize the prompts, use any agentic framework (llama\_index, LangChainAI, etc.), Python and JavaScript flavors and has agentic tools like Code RAG, Code Analyser, and a Code LSP to interact with your codebase. Interesting!

### Now for something a little bit different

As most of my readers will know, and you really ought to by now, I’m an ML guy. I have been for most of my tech career. I might call myself a data scientist or even an AI specialist depending on my audience, but at the heart I love statistics and machine learning.

Recently I met up with the guys from a company [https://nitric.io/](https://nitric.io/) that have their US based folks located nearby to me here in Colorado. As stated directly on their front page, Nitric is “an open source universal backend framework, with concise infrastructure and pluggable deployment automation.” IaC is normally something that I leave up to the ops guys and I ask for what I need in order to test or deploy a project. But I was always a bit bothered by the fact that I didn’t really have any control over the configuration, costs and security of the systems that I wanted to use. Just like the race cars that I love to build and drive, as an ML guy I felt like a driver and not a mechanic. I should know how to turn the wrenches, so to speak.

Back when I used to work for Istari, when the company pivoted to a cryptography based design interchange product from ML, IaC and Ops became a real focus for the team. The amount of Terraform that needed to be written and managed became a real challenge. I think this tool would have been great to have, and certainly they could use it today. Deploying in a high-side air gapped environment after testing in AWS in a seamless way would for sure be a real timesaver.

Nitric is definitely a developer led, rather than an ops led toolset when it comes to IaC, and it makes it pretty easy all things considered. I plan on doing some DevRel work for them in the coming weeks, so I’ll continue to summarize and repost here in the newsletter for folks to find. In the meantime I had my beloved NotebookLM create a short primer here: [https://notebooklm.google.com/notebook/a02fbe4d-a7ea-4597-83fc-83d4a391dc43/audio](https://notebooklm.google.com/notebook/a02fbe4d-a7ea-4597-83fc-83d4a391dc43/audio)