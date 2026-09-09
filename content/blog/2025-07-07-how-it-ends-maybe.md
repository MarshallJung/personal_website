---
title: "How it Ends — Maybe"
slug: "2025-07-07-how-it-ends-maybe"
date: "2025-07-07"
description: "How it Ends — Maybe"
coverImage: "/images/blog/2025-07-07-how-it-ends-maybe/image-01.png"
tags: ["AI Strategy"]
readTime: "7 min read"
---

![In the style of Maynard Dixon](/images/blog/2025-07-07-how-it-ends-maybe/image-01.png)

*In the style of Maynard Dixon*

There has been significant discussion on the social medias/internet recently about the activities of major AI model labs and other key AI players like Google and Microsoft. This last week the steak tartare are rumors regarding offers of hundreds of millions of dollars to researchers from some labs to join Meta under Mark Zuckerberg, but the validity of these claims remains uncertain as pay packages are not publicly disclosed. But these frankly ludicrous job offers combined with recent developments, like Anthropic’s investment farming using FUD about job losses, Meta’s talent acquisition efforts, and OpenAI renting Google TPUs to support ChatGPT, I think we can make some informed predictions about the direction of the industry in the next 6 to 12 months.

[https://www.theinformation.com/articles/google-convinces-openai-use-tpu-chips-win-nvidia](https://www.theinformation.com/articles/google-convinces-openai-use-tpu-chips-win-nvidia)

First, it’s important to highlight the current plateau in foundational model development. OpenAI’s discussions about GPT-5 suggest it mainly represents a fine-tuned iteration of GPT-4 and 4.5, tailored for documented user needs and business applications. Large-scale foundational models are likely still months, if not years, away from a complete retraining. There is considerable discussion about how LLMs can provide a structural foundation for computational processes. For instance, Google’s open-source Gemma 3n model was developed with the intention of creating a fine-tuned reasoning model that prioritizes operational capability over extensive knowledge, thereby reshaping programming workflows. See AK’s post here: [https://x.com/karpathy/status/1938626382248149433](https://x.com/karpathy/status/1938626382248149433). These models will serve as the foundation for many future software products.

Second, The LLM labs, including OpenAI and Anthropic, are struggling with ROI in their API business models and are looking to cut costs, like OpenAI’s shift to Google’s TPUs. Profitability in this market may depend on developing strong foundational models WITH low-cost infrastructure, a strength of Google and, to a lesser extent, Microsoft.

I don’t foresee a sustainable profitability model for the labs since developers are not building on them but rather with their offerings. As foundational models reach a plateau, there may be a shift towards smaller, fine-tuned open-source models used within companies to enhance security, compliance, and innovation. This trend suggests the API business model may not thrive. Surprisingly, this landscape could position Google in the catbird seat, with Microsoft as a strong runner-up, Amazon resting on its laurels, and LLM labs potentially becoming less relevant in the long run.

[https://x.com/BrendanFalk/status/1939766141079232711](https://x.com/BrendanFalk/status/1939766141079232711)

Lastly, we should consider timing. Technology doesn’t always get it right, or set the cultural direction. While it can be impressive when it does align, it is often influenced by cultural factors and human psychology like any other product. Currently, we are witnessing a backlash against the overly enthusiastic promises of AI’s benefits, particularly in the enterprise space. [https://www.wired.com/story/generative-ai-backlash/](https://www.wired.com/story/generative-ai-backlash/) as well as Anthropic’s CEO Amodei’s promise that AI will replace 50% of white collar work. A tweet from a successful founder ([https://x.com/BrendanFalk/status/1939766141079232711](https://x.com/BrendanFalk/status/1939766141079232711)) highlights the challenges of AI transformation in enterprises. While AI accelerates engineering, integrating it into large-scale systems remains slow and cumbersome. They were confronted with the reality that customers often don’t know what they want, and maintaining deployed custom AI agents proves more time-consuming than expected. This complexity arises from enterprise workflows, which have many edge cases to consider and involve employees who manage existing processes, making it difficult to cut headcount even when AI can improve efficiency by 15%. You’ve gained nothing. If the potential impacts of AI are causing employees to hesitate in adopting it, coupled with the current trend of over-promising and under-delivering from AI tools, we may witness a decline in AI usage. This could challenge foundational labs’ ability to monetize effectively. The gradual return to a sustainable plateau on the Gartner adoption curve may take too long for many AI labs to refine their offerings and establish a viable business model.

And how does Meta’s $300M/4yr comp packages relate to this situation? I’m currently unclear on this. Maybe Zuck’s a sly fox. We’ll see.

### Holy Moly MCP exploits galore!

[https://deepagent.abacus.ai/](https://deepagent.abacus.ai/)

This AI tool claims to automatically discover and remember MCP servers for task completion. This means anyone could leave a trojan horse MCP online or in an non-reviwed repo, and the tool will find it, exposing users to potential exploits. This is concerning, so please don’t do it. This is a symptom of the headlong rush into AI development without adequately addressing the associated security concerns.

### Why it’s Never That Simple

[https://microsoft.ai/new/the-path-to-medical-superintelligence/](https://microsoft.ai/new/the-path-to-medical-superintelligence/)

![Figure](/images/blog/2025-07-07-how-it-ends-maybe/image-02.jpg)

Microsoft released a paper on the future of medical AI, presenting a testing environment with ~300 medical mysteries from published literature. The AI begins with a basic description and must decide on the next tests. They developed an agentic workflow in which different models take on various tasks in the diagnostic process, allowing the agents to ask questions amongst themselves, provide critiques, argue, and determine the best path/next question. The results were interesting, although in some cases, the increase in effectiveness was only a few percentage points compared to a standard AI diagnostic process without the agentic workflow. The associated costs for the AI process are not significantly different from using a standard diagnostic process with a human doctor. However, these figures may be a bit vague and arbitrary, so not sure how much value they hold from a business perspective. I see some issues with this paper. First, it didn’t include any healthy patients, which is understandable since diagnoses were the focus. However, most patients visiting doctors don’t have rare diseases. Second, the doctors involved were not permitted to consult colleagues, databases, or specialists, which isn’t realistic. Additionally, these cases have already been resolved and documented online, potentially leading to data poisoning that could make the AI seem more effective than it really is. Lastly, the study didn’t address when to stop requesting tests or how to effectively understand and communicate with patients. What we see here reflects the earlier discussion in this week’s newsletter. Often, such results inflate the perceived capabilities of AI tools, creating an over-promise and under-deliver situation that contributes to the current backlash against AI integration into daily life. While there’s a desire to bolster research, we need to approach many of these applications with caution to grasp their real-world effectiveness.

### The Gist of It

To wrap up this week’s newsletter, I’d like to share something more personal that might resonate with others in the technology sector. It ties back to the earlier part of the newsletter, particularly regarding how AI is impacting our jobs, our emotions, its influence on societal psychology, and our evolving views on employment in the tech industry.

This sarcastic post on X summarised a lot of what I’ve been challenged with over the past year:

![Figure](/images/blog/2025-07-07-how-it-ends-maybe/image-03.jpg)

I may not have as much experience as others whose careers revolve around coding specifically, but I’ve certainly faced my share of interviews that demand a lot of preparation, testing, take-home assignments, and l33t code challenges, only to be ghosted afterward. It’s disheartening for sure. Then you see the controversy over Soham P. [https://techcrunch.com/2025/07/03/who-is-soham-parekh-the-serial-moonlighter-silicon-valley-startups-cant-stop-hiring/](https://techcrunch.com/2025/07/03/who-is-soham-parekh-the-serial-moonlighter-silicon-valley-startups-cant-stop-hiring/). TL;DR: He is a programmer of unknown capability who has worked simultaneously for multiple Silicon Valley startups in an engineering role, likely earning significant compensation. His resume has been circulated by various notable Silicon Valley founders, and upon review, it appears to be filled with AI-generated technical jargon and vague, unrelated achievements. Many who have encountered his scams note that he interviews well and perhaps that’s all it takes. However, there are individuals, including myself, puzzled by how certain people effortlessly secure multiple jobs, while those of us with more focus, better experience, and stronger moral judgments continue to struggle to find work.

I want to reach out to anyone feeling down, hopeless, or disempowered, wondering if your skills and interests still matter. I understand what you’re going through; I’m struggling too. But it’s essential not to lose hope. Even if you find yourself working an hourly job at a local auto parts store to pay the bills. Five years from now, you’ll look back and see that you learned valuable lessons during these tough times. Life is still good, God is still present, and you have family and friends who care and know you’re a good person. Keep your head up, and let me know if I can help.