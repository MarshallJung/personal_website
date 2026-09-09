---
title: "Choose Your Champ"
slug: "2025-04-21-choose-your-champ"
date: "2025-04-21"
description: "Choose Your Champ"
coverImage: "/images/blog/2025-04-21-choose-your-champ/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

If you’re not using these tools as a programmer, it’s only a matter of time before you’re replaced. While none of the tools we’ll discuss today can do everything, they are essential resources. So buckle up, we’re doing a speed run.

(Note: Now, before someone complains, today we’re focusing on evaluating native offerings from model providers, rather than derivative tools. While offerings like Lovable, Cursor, Bolt, Windsurf, Copilot, Tabnine, Zencoder, Cline etc, etc. are well known-ish, our current emphasis is on direct offerings from the original labs. In the future, we may explore other popular coding tools. There may be an additional issue related to the pursuit of profit in this space. Many third-party IDE tools, like Cursor, are incentivized to utilize fewer tokens when accessing the foundational model to increase their profit. As a result, you might find that IDE-based AI solutions provide less context. In many of the tools you can bring your own API key and disconnect the $$ aspect, but if the IDE itself is mediating between the user and the model prompting in any way there is a layer here to consider. This is something to note when seeing significant performance differences between native lab offerings and third-party tools utilizing those models.)

(Note: Note: Yes I’ve been reading Douglas Adams again)

*Claude Code: The Fussy Librarian*

Claude Code, powered by Anthropic’s Claude 3.7 Sonnet, is a 200K-token fussbudget that debugs your code with the precision of a stuffy NY architect. It scores 64% on coding tests, its Artifacts window previews web frippery, but it’s prissy. At $20/month, it’s stingy with usage and demands ethical purity. Perfect for complex projects, if you can stomach the sermons.

[https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview)

*Google Firebase Studio: The Nosy Megacorp New Kid*

Google’s Firebase Studio previously known as Google IDX, born 2024 with Gemini Code Assist, is a toolkit for web and mobile apps, wired to Google Cloud like a gum in your hair. Its CLI and citations scream efficiency. Usage-based pricing can be sneaky, and non-web languages aren’t its forte. Ideal for Google devotees.

[https://firebase.google.com/docs/studio](https://firebase.google.com/docs/studio)

*OpenAI Codex: The Creaky Rock Star*

OpenAI’s Codex, fueling GitHub Copilot and the new Codex CLI, is a GPT-4o-powered veteran churning Python or COBOL with a 72.9% LiveCodeBench score. It marks a meaningful separation from MSFT, and being open-source sets up OpenAI to offer something more subscription worthy (just you wait!!) Ubiquitous in IDEs, it’s versatile but pricey ($10-$19/month), and its hallucinations rival your sketchy uncle’s stories. Good for general coding, but it’s losing its sheen.

[https://github.com/openai/codex](https://github.com/openai/codex)

*Grok Studio: The Cheeky Scamp*

Grok Studio, xAI’s 2025 rebel powered by Grok 3, scores 79.4% on LiveCodeBench. Its Think and DeepSearch modes zip through prototyping, and at $16/month (X Premium+), it’s cheapest. But it’s rougher than 60 grit sandpaper, with errors and a clunky UI. Great for budget coders who don’t mind a wild ride.

[https://grok.com/](https://grok.com/)

### Buying Users, or an admission that models don’t pay?

[https://www.bloomberg.com/news/articles/2025-04-16/openai-said-to-be-in-talks-to-buy-windsurf-for-about-3-billion](https://www.bloomberg.com/news/articles/2025-04-16/openai-said-to-be-in-talks-to-buy-windsurf-for-about-3-billion)

OpenAI, is reportedly in talks to snap up Windsurf, an AI-powered coding tool formerly known as Codeium, for $3 billion. This would be OpenAI’s biggest acquisition yet, aimed at grabbing a part of the AI coding assistant market. It saddens me, but it seems that vibe coding is here to stay. The deal’s not sealed, and talks could fizzle, but it’s a bold move to own the developer canvas, not just the AI brains.

The better observation here is that OpenAI’s efforts to acquire companies utilizing their API indicates a limitation in extracting further value from offering APIs for foundational models. Does this delay OpenAI’s potential downfall? It’s a valid question and reflects a significant shift in how foundational model labs approach profitability.

### A new leader in the 3D CAD space?

[https://mecagent.com/](https://mecagent.com/)

I’ve joined the waitlist for this new tool announced last week. It approaches computer-aided design and 3D objects as a language in a unique way. I didn’t expect this concept (I’m not so smart), but it could be a valuable addition to the LLM to CAD space in a unique way.

The tool promises to provide the holy grail of speaking parametric objects into your 3D modeling software (similar to [https://www.adamcad.com/](https://www.adamcad.com/) and a few other offerings out there). However, I think its true value lies in its ability to comprehend three-dimensional objects, making previous CAD files searchable and allowing for the efficient integration of standardized parts into your CAD model. Imagine being able to easily search for and import accurate models of bearing assemblies or cap head screws for your project, without the hassle of searching McMaster-Carr, downloading, and importing files. That’s a real time saver.

### The Downside of RL

![Figure](/images/blog/2025-04-21-choose-your-champ/image-01.jpg)

I’ve noticed I’m not alone in observing issues with some of the newer post-trained models using reinforcement learning methodologies. Another user on X reported a non-standard ASCII character replacing a standard code symbol. Typically, the IDE’s linting process catches this and flags it for review (only in an IDE though! Think about the beginning of the newsletter…), but the issue seems more concerning than it initially appears. I think we can look at this in two ways. First, the goal of reinforcement learning on foundational models is to enhance their performance and align them with human preferences. However, this may not be suitable for language like code, as some standard rules exist outside human preferences. Second, the topic of specialization raises concerns, as it’s unclear whether there is an effective method for aligning individual foundational models with training data. Reinforcement efforts should be more structured around specific end goals.

### Still some Confusion

[https://youtu.be/J1YCdVogd14?si=pOSQzgo1iEehGkZI](https://youtu.be/J1YCdVogd14?si=pOSQzgo1iEehGkZI)

Many in the industry are now familiar with the basic explanation of how large language models work. However, due to rapid advancements, many leading labs are making significant changes behind the scenes. Since this information isn’t open-sourced, we rely on their recommendations for effectively using the models. It’s well known that there are some limitations associated with the classic implementation of these types of transformers and those limitations are still applicable. For instance, OpenAI recently released a new prompting style guide, which suggests placing instructions for the language model at both the beginning and end of the provided context.

![Figure](/images/blog/2025-04-21-choose-your-champ/image-02.jpg)

Why is this? The main issue is the excessive focus on first tokens. This occurs because first token information travels continuously through the attention graph, leading to ongoing reinforcement. While Softmax serves as a mitigation strategy, it cannot effectively address problems with very long inputs.

![Figure](/images/blog/2025-04-21-choose-your-champ/image-03.jpg)

It’s essential to understand how these tools work to achieve the solutions we expect from them.