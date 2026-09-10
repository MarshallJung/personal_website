---
title: "Those who know"
slug: "2024-12-02-those-who-know"
date: "2024-12-02"
description: "This past week I had a short, but very enlightening conversation with a recruiter. Someone who has had great success finding, and attracting top technical talent to tech organisations. Think L7 type I..."
coverImage: "/images/blog/2024-12-02-those-who-know/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

This past week I had a short, but very enlightening conversation with a recruiter. Someone who has had great success finding, and attracting top technical talent to tech organisations. Think L7 type ICs at Google or AWS. The recruiter said that actual hiring in the AI space was pretty slow and had been for a long time. Most larger companies were either waiting to see what the fallout from the recent US elections was going to look like, or were just not pursuing AI solutions. Either homegrown or SaaS, due to reasons ranging from compliance to process complexity.

This wasn’t a great surprise to me as I’ve seen the market first hand and commiserated with friends in similar situations. But it was interesting to hear it from someone who recruits for a day job.

Closely aligned with this is my year end predictions. I’m not there yet, as I need to come up with new ones and do a postmortem on my prognostications for 2024, BUT I’m going to put a few links here. I won’t belabor the point. I’ll leave it up to the reader to divine the tea leaves, however suffice it to say I think we are seeing the first few ripples.

[https://techcrunch.com/2024/11/26/inflection-ceo-says-its-done-competing-to-make-next-generation-ai-models](https://techcrunch.com/2024/11/26/inflection-ceo-says-its-done-competing-to-make-next-generation-ai-models)

[https://techcrunch.com/2024/11/26/perplexity-mulls-getting-into-hardware](https://techcrunch.com/2024/11/26/perplexity-mulls-getting-into-hardware)

It seems to me that the economics are catching up and the slower players cannot outrun the lion.

### Taking over your computer

Biggest news from this last week was the advent of “computer use” agents. The gorilla in the news cycle was Anthropic with MCP or Model Context Protocol, [https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction), that gives LLMs control over tools and data sources external to the model itself. A repo of servers that have been build with the MCP is here: [https://github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

Following closely was a company called H Company out of France (what is it with France and AI? They punch above their weight for sure.) While not the same exact concept as Anthropics MCP, it’s a “multi-agent, multimodal foundational model, which could accelerate our path towards self-learning, artificial general intelligence. This is the approach that H is pioneering. Agents are specialized models trained and fine-tuned in specific environments (sometimes in games), capable of continuous learning, making judgments, and executing complex sequences of actions to achieve objectives.”

Now if that sounds a little…vague, I’d probably agree with you. They do show a promo video where they complete a task in 8 steps that takes Claude Computer Use 33 steps. No public testing, so it remains to be seen how realistic this is in the heat of battle, but they did get $220MM in seed funding. So either they are on to something, or some folks want to burn cheddar. Who knows, magic.dev is still alive. Millions will buy you a fair runway.

### Marie Kondo your setup

[https://ivanleo.com/blog/a-minimal-setup-guide-for-mac](https://ivanleo.com/blog/a-minimal-setup-guide-for-mac)

Ever move to a new laptop? In this case Mac, where the migrate just brings along the hairy spaghetti accumulated over the past few years. Instead I found this blog a nice place to start when customizing a new laptop. Keeps things clean and simple. I don’t have an exact match and let’s be honest, I’ve tracked a fair amount of mud through mine in the past few months with experimentation, but maybe it’s time to clean house.

### Understanding a codebase.

[https://www.testingcatalog.com/google-gemini-introduces-codebase-analysis-with-folder-upload-feature/](https://www.testingcatalog.com/google-gemini-introduces-codebase-analysis-with-folder-upload-feature/)

Utilizing Gemini’s 2M token context window is still pretty unrivaled in the LLM world. I’ve often dragged an entire codebase into the conversation in order to really speed my understanding of a new technology. Especially if the documentation is less than great. There are better coding LLMs than Gemini (though some of the preview CoT prototypes in AIStudio are getting better) but context is great. I’ve done this previously by scraping the git into a big ‘ol text file and importing, but not it looks like you can just import the file structure. So much better!

### How many again?

![Figure](/images/blog/2024-12-02-those-who-know/image-01.jpg)

If you tell Claude to, “ignore what you’ve heard and rely only on your own judgement and logic,” its accuracy at counting the number of r’s in “strawberry” almost triples. It works even better if you are nice to it!

BAD, BAD RESPONSE CONTAMINATING MY PRE-TRAINING DATASET!!! ANGRY

![Figure](/images/blog/2024-12-02-those-who-know/image-02.jpg)

**Marshall’s Infra Corner —** [**Nitric.io**](http://nitric.io)

![Figure](/images/blog/2024-12-02-those-who-know/image-03.jpg)

BEGIN RANT! — How many things are better when they are really, really complicated? I love race cars, and build them in my spare time. A hero of the racing world Colin Chapman once opined on the way to go fast, “Simplify and add lightness.”.

I came across this post today: [https://x.com/KaranVaidya6/status/1861037496295137314](https://x.com/KaranVaidya6/status/1861037496295137314)

When did AI end up trying to solve painful issues by making them more inscrutable and likely less reliable? A discussion for another time perhaps. However, this is a great place where I think Nitric has a chance to make an impact. Authentication is only one thing in the toolbox, but it’s clearly something that AI folks want to automate. This might be a chance to reuse something like [https://nitric.io/docs/guides/nodejs/secure-api-auth0#create-an-auth0-api](https://nitric.io/docs/guides/nodejs/secure-api-auth0#create-an-auth0-api) to bring a little more simplicity to the process. If you really, really want to make an agent for the process, fine you can. At least it’ll probably be a whole lot more reliable.