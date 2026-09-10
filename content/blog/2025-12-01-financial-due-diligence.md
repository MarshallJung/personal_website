---
title: "Financial Due Diligence"
slug: "2025-12-01-financial-due-diligence"
date: "2025-12-01"
description: "First, it goes without saying that nothing in these newsletters is investment advice. That said, because money drives economic opportunity and growth in the United States, and because AI and its secon..."
coverImage: "/images/blog/2025-12-01-financial-due-diligence/image-01.png"
tags: ["AI Strategy"]
readTime: "7 min read"
---

First, it goes without saying that nothing in these newsletters is investment advice. That said, because money drives economic opportunity and growth in the United States, and because AI and its second order effects has been the key economic driver for nearly two years, it’s worth occasionally examining how the market is financing ongoing investment. (For proprietary reasons I’ll change the names in the analysis, but the astute and well connected should be able to infer the required bits as it’s all out there on the internet.)

A recent investment opportunity was shown to me which centers on participating in the Acme Compute Infrastructure L.P. (ACI) fund, which is structured to capitalize on the massive demand for AI hardware. ACI, led by Acme Equity Partners, is raising capital to acquire Data Center Compute Infrastructure (DCCI) — including racks, GPUs, servers, and networking equipment — and then lease these critical assets exclusively to BigAI for its “BigAss” data center located in Anytown, USA. Many small/medium venture companies are investing directly in this vehicle, alongside major investment and hardware players. The fund is designed as an ownership structure, not a lending vehicle, aiming to provide quarterly cash distributions from the lease income. The Base Case scenario projects an attractive net pre-tax Internal Rate of Return (IRR) of approximately 23% over a five-year lease term.

The financial structure is highly advantageous, largely due to current U.S. tax policy. The investment is dependent on the ability to leverage 100% bonus depreciation in the first year under the One Big Beautiful Bill Act, which provides significant tax benefits. Because the DCCI purchase is leveraged, investors expect to receive roughly $2.70 in recognised depreciation for every $1.00 invested. This results in a superior projected Tax Equivalent Net IRR ranging from 32% to 39%. This massive deduction is particularly attractive as it can offset passive income.

The **Bull Case** for the investment relies on the core belief that the AI technological revolution will continue its exponential growth trajectory, validating the massive infrastructure spending. Proponents argue that the underlying assets (DCCI) are essential for AI training, processing, and inference. From this perspective, the current capital outlay is justified as a “front-loaded investment in future growth,” where BigAI is effectively “founding another company that’s much more expensive” every cycle, eventually leading to revenue growth that outpaces cost growth. BigAI has demonstrated access to capital, raising over $XX billion in equity and an oversubscribed $X billion debt facility, suggesting strong market confidence in its ability to execute. If BigAI’s sophisticated models, such as BigMind, which delivered strong capabilities in reasoning and coding, succeed in monetization, the lease payments will be secure, and the residual value of the DCCI assets could be maintained or even exceeded over the long term.

However, the **Bear Case** highlights several fundamental structural flaws that threaten the projected returns. The primary risk is the Asset Vulnerability related to the DCCI equipment, specifically the GPUs. High-end GPUs depreciate rapidly and face accelerating technological obsolescence, with the chipmakers product cycles now nearing 18 months. The ACI fund’s Base Case assumes a DCCI residual value of 35% after the initial five-year lease. In contrast, market analysis suggests that residual values could collapse toward zero, especially as newer chips are released. For example, the rental price for older chips has already seen dramatic reductions (e.g., 88% from their peak). If this obsolescence occurs, the residual value component required for the 23% IRR projection would be “shattered”.

Furthermore, the entire investment is exposed to extreme counterparty concentration risk, relying entirely on BigAI. BigAI itself has shown signs of financial fragility, with its valuation (reportedly $XXX billion) doubling without a commensurate step-up in revenue, potentially signaling an inflated “hope trade”. Moreover, BigAI employs complex financing, planning a $XX billion SPV for chip leases, which uses off-balance-sheet mechanisms to obscure leverage. If BigAI defaults or struggles with liquidity, a high probability given the “AI cash flow paradox” where 95% of generative AI pilots fail to deliver measurable value, the ACI revenue stream ceases immediately. This scenario is exacerbated by the reliance on leveraged tax benefits; if the current 100% bonus depreciation policy were to be revoked or altered, the superior Tax Equivalent IRR would collapse, rendering the investment less appealing relative to its risks. This entire structure is likened to a high-yield loan collateralized by assets that depreciate at speeds that outpace the loan term, highly sensitive to demand fluctuations or unexpected shifts in the cost of capital.

![Figure](/images/blog/2025-12-01-financial-due-diligence/image-01.png)

Again, this isn’t financial advice. That said, we’ve all seen the extraordinarily complex, circular, and oftimes opaque financing behind much of this year’s AI growth. When an industry leans on such structures, it may be a bit over its skis. I still believe in AI’s future, we just need a financial house cleaning before we see where AI can be truly transformational for enterprise opportunities.

### You Are Not Making It Smarter

There is a prevailing myth in the AI engineering space that you can “fix” a model’s behavior by shouting at it in the system prompt. We treat the context window like a rebellious teenager: if we just list enough rules, it will surely behave.

The indefatigable researcher Gwern has highlighted a sobering reality: heavy-handed custom system prompts often degrade performance.

![Figure](/images/blog/2025-12-01-financial-due-diligence/image-02.png)

-   The Mechanism: Modern models (like the recently tuned GPT-5 and Gemini 3 variants) undergo massive Reinforcement Learning from Human Feedback (RLHF). When you overlay a complex, idiosyncratic system prompt, you are effectively introducing conflicting vectors into the inference path.
-   The Evidence: Gwern noted that a detailed “writing coach” prompt actually blinded Claude to comma splices that the unprompted, raw model spotted immediately.

We are interfering with the weights, not optimizing them. If you must prompt-engineer, strip it down.

The “Surgical” Approach (Do this):

-   Define Output format: JSON, Markdown, Python list. The model respects structure.
-   Set the Stakes: “This is for a verified technical audience.” This adjusts the perplexity/temperature settings implicitly.
-   Provide Examples (Few-Shot): Show, don’t tell. One example is worth a thousand adjectives.

The “Micromanager” Approach (Stop doing this):

-   Don’t cognitively load the model: Avoid massive “persona” descriptions unless you actually need a roleplay.
-   Don’t over-constrain the logic: Telling a model how to think (step-by-step instructions for internal logic) often conflicts with its internal chain-of-thought training.
-   Don’t threaten it: Current research suggests that while emotional blackmail worked on GPT-4, newer models are becoming immune to user frustration.

### Prototype to Production

[https://www.kaggle.com/whitepaper-prototype-to-production](https://www.kaggle.com/whitepaper-prototype-to-production)

Many people misuse or misunderstand the recent “AI failure” numbers, but it’s long been true that machine learning and AI prototypes often don’t make it to production. Reasons range from data freshness and access issues to security concerns, as well as a lack of political will or opportunity in large enterprises. Google released a paper that, in my view, usefully clarifies the requirements for getting an AI agent into production. It’s worth reading and can be summarized into organizational best practices with your preferred LLM and summarization tool.

### Science Acceleration

[https://arxiv.org/abs/2511.16072](https://arxiv.org/abs/2511.16072)

Two years ago, Microsoft released the “Sparks of AGI” paper regarding GPT-4. This month, we have the spiritual successor from Sebastien Bubeck and team regarding GPT-5. The headline is that the model has assisted in generating four novel, human-verified mathematical proofs.

This is a phase shift. We are moving from “retrieval and synthesis” to “novelty generation.” However, the paper inadvertently highlights a growing divide in the labor market.

The Trade-off: The model did not solve these problems autonomously. It required an expert human loop to verify the steps and guide the search.

-   Who wins? Subject matter experts that understand the “Theory of Mind” when it comes to using AI models. And the “Curious Generalist” with high agency and a robust Theory of Mind for the AI. These operators understand how to nudge the model through the latent space to find the solution.
-   Who loses? The passive operator expecting a “Solve” button.

There is currently no scalable protocol for non-experts to replicate these discoveries. The tool is powerful, but it effectively acts as a multiplier on human competence. If your input is zero, the multiplication remains zero.