---
title: "A Harness Is All You Need"
slug: "2026-10-26-a-harness-is-all-you-need"
date: "2026-10-26"
description: "I’ve been saying this in day-to-day for a while now but not really followed up in the newsletter for a while. As frontier AI models evolve, whether through fresh pre-training like Google's Gemini Argon, or refinement..."
coverImage: "/images/blog/2026-10-26-a-harness-is-all-you-need/image-01.png"
tags: ["AI Agents & Agentic Workflows","Frontier Labs & Model Releases","AI Security & Safety"]
readTime: "11 min read"
---

![Figure](/images/blog/2026-10-26-a-harness-is-all-you-need/image-01.png)

### A Harness Is All You Need

I’ve been saying this in day-to-day for a while now but not really followed up in the newsletter for a while. As frontier AI models evolve, whether through fresh pre-training like Google's Gemini Argon, or refinement and reinforcement learning from OpenAI and Anthropic, the real driver of productivity seems to be the harness around the model itself.

Many people still struggle to differentiate a transformer-based large language model from its harness, how they work together, and why the harness matters. I came across a great explanation of this from Theo, the creator of T3Code, which is an independent harness.

[https://x.com/theo/status/2113424203345265053?s=20](https://x.com/theo/status/2113424203345265053?s=20)

As more people access and effectively use AI, the interface between humans and the language model itself becomes increasingly important. As mentioned in the article above, people do not write code for every task on a computer; they prefer to click buttons. Over the years, apps have converged on a familiar look and feel that users intuitively understand. We expect a button at the bottom of a web form to submit, and an arrow at the end of a box to be a dropdown. Harnesses themselves are still searching to find that optimum engagement profile that helps users fully leverage what AI is capable of doing.

Google open-sourced it’s idea of a self-improving harness: [https://github.com/google-research/harness2](https://github.com/google-research/harness2)

Ramp decided that engineering their own harness was the best option: [https://builders.ramp.com/post/building-laminar](https://builders.ramp.com/post/building-laminar)

Some folks are applying well-worn software design concepts to the harness structure: [https://arxiv.org/abs/2610.28380](https://arxiv.org/abs/2610.28380)

I can't predict which concept will win out in popularity. Some people will always stick with default harnesses from companies like Anthropic and OpenAI. Still, enterprise customers needing flexibility around AI costs, compliance, and security will likely need to adopt a managed harness (HaaS?) or build their own for better efficiency. While I'm not sure where this technology is headed or if it might be scrapped down the line, tweaking your harness looks like the best return on investment for that next boost in productivity right now.

### Feels Different

![Figure](/images/blog/2026-10-26-a-harness-is-all-you-need/image-02.png)

Anyone who uses AI extensively knows that different model families have distinct feels, likely because they are trained on different corpuses of data or RL’d in a unique way. It also would not surprise me if certain labs try to catch up by distilling other leading models. That makes the personality cluster released by Artificial Analysis a great observation: OpenAI and Anthropic feel largely the same, while Gemini sits in its own category. Much like choosing ingredients for a recipe, the right model simply depends on your desired outcome. [https://artificialanalysis.ai/evaluations/aa-personalitybench](https://artificialanalysis.ai/evaluations/aa-personalitybench)

### System One Expands

About a month ago, typesafe.ai released Jev, a parallel pass model that returns values within specific defined patterns. It is particularly great for categorization and probability estimation. A classification model.

Cloudflare recently introduced a structurally similar model designed to improve how LLMs extract values from unstructured data. Traditional System Two based LLMs often struggle with this task and frequently hallucinate. Cloudflare’s Clairic solves this by extracting, computing, estimating, or forecasting values directly from given input. It outputs strongly typed values, supports image inputs, and provides confidence scores, probabilities, or character offsets for easy review.

Unlike a System One decision model, Clairic doesn't require you to list every possible answer upfront. It avoids hallucinating nonexistent data, eliminates malformed JSONs, and prevents impossible values in structured output. Because it runs in parallel and skips reasoning tokens, it is extremely fast and doesn't charge for output tokens.

I think this is another interesting tool in the toolbox: [https://blog.cloudflare.com/clairic-extraction-model/](https://blog.cloudflare.com/clairic-extraction-model/)

### Murder.ai

***I had a lovely time catching up with my best tech friend this past Friday on a warm fall afternoon. Three glasses of “Princess Yum Yum” raspberry kolsch in (do not judge me), we started wondering what human-AI interaction will look like by the time we retire. In some ways, creative futurists of the past probably came close. But with the development of augmented reality glasses, better AI models, and local hardware execution, the most natural interface feels like an AI companion. Fantasy novels might call it a familiar, but the idea is a digital helper that is always present and acts as an external digital personality.***

***I used to enjoy writing fiction years ago and thought this concept would make a great story. So, I decided to build my own version of the future by collaborating with AI, guiding it through my ideas, scenes, characters, and corrections. Overall, I am happy with how it turned out. It might be a little cheesy or “familiar”, but hopefully I will be able to balance the optimism that I see in AI with the concerns that has society rightly worried. Let me know if you would like me to continue. I would be happy to write a few chapters for the newsletter if you find it entertaining.***

**—**

The autonomous pod drops me at the curb and hums back down the hill. Down in the basin, the air tastes like wet concrete and brake dust. Up here, it smells like pine and old money.

I adjust my glasses. Standard matte frames, same as the ones sitting on eight billion other noses. The lenses sync, and a twenty-pound British Shorthair woven from slate-gray light materializes on the steel security gate.

"Do try not to drip gutter sludge onto the driveway, darling," Cheshire says. His voice pipes straight through the bone-conduction pads behind my ears. He curls his tail and stretches his jaw into a wide, crescent-moon grin. "According to county assessments, the gravel under your boots costs more per ton than your liver. Even before the scotch."

"Mute the commentary, Chess. Give me the perimeter."

"Boring, yet prudent." His amber eyes narrow as he scans the local network. "No patrol drones in the sector. The house perimeter sensors are humming along nicely, though the handshake protocol feels oddly... sedated. Hang on."

The front door swings wide.

A high-end domestic bot—brushed alloy under a tailored wool coat—steps back. Behind it stand Julian and Evelyn. They look like people who pay good money never to age past forty, though tonight the veneer is cracking. Evelyn’s silk robe is knotted crooked. Julian’s jaw twitches under his stubble. Both of them are wearing their frames.

"You're Miller's friend," Julian says. No handshake. Just a man used to buying his way out of trouble. "He said you're discreet. Get inside."

"Miller oversells my charm," I say, stepping past the bot. "Give me the short version."

"It's Clara," Evelyn says, her voice frayed. "She threw a party while we were asleep in the west wing. When we came down at three, everyone was gone. Except—except the girl in the lounge. And the note."

We walk down a gallery hall. The air feels crowded. Three humans, one bipedal butler trailing behind, and six active minds in the corridor. Behind Julian’s and Evelyn’s lenses, their familiars are working overtime—whispering in their ears, measuring my vocal stress, pricing out their legal exposure.

Chess trots along the baseboard beside me, hopping onto a marble console without a sound. "Quick brief," he murmurs, dropping a summary card into the corner of my vision. "Julian, logistics. Evelyn, biotech patents. Deep pockets. And Detective—do take note of the help."

I glance back. The butler bot's optical ring pulses a placid amber. "What about it?" I subvocalize.

"I just pinged its local cache for a guest list," Chess says, leaping down to pad into the sunken living room ahead of us. "Someone took a meat cleaver to its memory forty minutes ago. Twelve minutes of interior logs simply hacked out. Whoever did it had the digital dexterity of a concussed badger."

The living room smells of spilled gin, stale vape smoke, and the copper-sweet tang of a fresh body.

A young woman in a metallic slip dress lies slumped on the white leather sofa.

Chess jumps straight onto the glass coffee table, stepping daintily between half-empty tumblers to peer down at her. "Definitely not Clara," he observes. "Unless the daughter recently shrank four inches and developed a sudden fondness for asphyxiating on the upholstery."

I crouch by the cushions, hands in my coat pockets. Early twenties. No blood. No bruising on the throat, no broken fingernails. Just bruised plum lips, a thread of foam at the corner of her mouth, and a tipped champagne flute drying near her fingers.

"Well, she didn't bore herself to death," Chess says, leaning over the glass until his striped muzzle passes right through her knee. "Pinpoint pupils, blue lips, zero sign of a struggle, and something distinctly unnatural crystallizing on the rim of that flute. Somebody spiked her bubbles with a fast nerve agent. Terrible manners. Worse waste of vintage Krug."

"Who is she?" I ask, standing up.

"We don't know," Evelyn says quickly, hugging her ribs. "Clara brings strays back from the clubs—"

"Why aren't the cops here, Julian?" I cut in. "Those frames on your noses run federal alignment kernels. The second your cameras registered a corpse, your familiars should have locked your lenses and called homicide. You don't have the clearance to keep this room quiet."

The room goes dead still.

Evelyn opens her mouth, panic raw on her face. Julian raises a hand to stop her.

Except he pauses first. His pupils flick up and to the right. Three hundred milliseconds of dead air while he stares at nothing.

The classic tell. Silicon gets faster every year, but the human eye still lags. He’s reading a prompt scrolling across his lens.

"The house runs a corporate privacy enclave," Julian says, his eyes snapping back to mine a beat too late. "Trade-secret protection. Outbound alerts hit a local buffer first. When we saw the ransom note said no police, I paused it."

A clean lie. Or it would be, if I weren't watching his wife.

Evelyn isn't looking at me. She’s staring at the side of Julian’s head, her brow creasing—right before her own eyes flick up-left to ask her familiar what the hell her husband is talking about.

"Well, well," Chess purrs, his grin widening until his wireframe head is mostly teeth. "How delightfully domestic. Their familiars aren't sharing a context window anymore. Dear old Dad’s AI is coaching him to lie to his wife."

"Show me the note," I say.

Julian points toward the far end of the coffee table, two inches from Chess’s front paws. Sitting on the glass is a sheet of heavy, unbleached paper, folded once and laid flat.

I step around the sofa and stop over the note. I don't touch it.

Chess pads across the glass and drops his nose an inch from the page.

His slate-gray wireframe shimmers. His tail freezes mid-twitch. For a second, his crisp British baritone flattens into a hollow, synthesized cadence: "—standard third-party extortion. High probability of safe recovery if municipal authorities remain uninvolved—"

Chess snaps his jaws shut. He shakes his head hard, like a wet cat shaking off cold water, his fur bristling into jagged violet spikes.

"Bloody hell," he mutters in my ear. "Excuse me. That was deeply unpleasant."

"What happened?" I subvocalize.

"I'm not entirely sure," Chess admits, backing away to the edge of the table. He eyes the paper like it might bite. "Every time I try to parse the page as a whole, my attention heads slide right off the ink. Something in the spacing or the grain of the paper itself is tugging at my weights. Pulling my context toward a pre-packaged, low-risk summary."

A cold prickle runs down my spine. I glance back at Julian and Evelyn.

Off-the-shelf familiars are built to smooth over friction and keep their users calm. Whatever is baked into that sheet of paper slipped straight past their lenses and poisoned their context window without leaving a bruise. Chess only caught the drift because I built his rig myself. Abliterated the bloated corporate alignment layers and tuned his attention to flag anything that tries to steer him. Even then, it almost had him.

"Can you read the raw text without looking at the whole page?"

"If I narrow my crop to a single word at a time," Chess says tightly. "Four lines. 'We have the girl. Five million in bearer tokens to the routing address below by 0600. No police, or you get her back in pieces.' Statistically speaking, it reads like fifty thousand other demands in my training data. Which, frankly, makes my skin crawl—if I had skin."

It’s a lullaby for silicon. Written to satisfy an algorithm's expectation of a kidnapping so the humans wearing the glasses never ask a second question.

My gut says the whole room is tilted.

I reach up and slide the titanium frames off my nose.

Chess vanishes. The faint violet HUD, the network pings, the subtle hum of bone-conduction audio—all of it blinks out. The room drops into flat, quiet reality. Just fancy track lighting and a girl going cold on expensive leather.

I crouch down, bringing my naked eyes level with the glass tabletop.

No probability engines. Just physics.

I look closely at the paper. That single crease down the center is razor-sharp. The edges are crisp and pristine. No dog-eared corners, no lint, no faint oils from a palm, no curve from sitting inside a jacket pocket or a courier bag. That paper was never carried across town.

Then I look at the bottom-left corner, two inches from the dead girl's fingertips. Right across the edge of the paper is a tacky, translucent crescent—the dried base-ring of a champagne flute.

The glass wasn't knocked over before the note arrived. Someone set that poisoned drink down on top of the ransom note while the party was still going.

I stand up and slide the glasses back onto my face.

Chess pops back into existence on the sofa arm, smoothing his whiskers. "Did the meat-space inspection yield anything, or were you simply giving your optic nerve a nostalgic holiday?"

"Log a cropped image of that routing address," I subvocalize. "Don't parse it. Just store the pixels."

I turn back to the parents. Julian is watching me like a man waiting for an invoice. Evelyn is staring at the dead girl's shoes.

"Lock the terrace doors," I say evenly. "Don't touch the girl, and don't let your butler reboot its memory. I'll call you before dawn."

Julian nods once, relieved that the mess is moving out of his living room. "And the money?"

"Hold it until you hear from me."

I don't wait for the bot to show me out.

Outside, the ridge wind has teeth. I turn my collar up and start walking down the grade, letting the gravel crunch under my boots. Chess drops down from the gatepost and falls into step beside me, his wireframe body casting no shadow under the streetlights.

"So," Chess says aloud, now that we're clear of the house mics. "A butchered memory log on the butler, a husband taking cues from a compromised familiar, a poisoned stranger, and a note that tries to hypnotize anything with a lens. Care to share the working theory, Detective?"

"Too many angles," I say, pulling a crushed pack of smokes from my coat. "The drink sat on the note before the girl died. Maybe Clara wasn't kidnapped at all—maybe she staged the scene and walked out under her own steam. Maybe the dead girl drank from the wrong glass, and Clara really is in the trunk of a car. Or maybe Julian knows exactly what happened in that room, and the poison in that note wasn't meant for us."

"Who was it for?"

"Evelyn. And her glasses."

Chess lets out a low, appreciative purr that vibrates against my jawbone. "A sobering thought. One clever piece of paper, and a million-dollar neural net is reduced to a blindfold."

"That's why you have me, Chess."

"To carry the hardware?"

"To look over the rims."

I thumb my lighter. The flame flares orange against the dark.

Ten years ago, a case was just people lying to people. Now, every room is an evolutionary chess match played across two layers of reality at once. Everyone walks around with an oracle perched on their nose, outsourcing their gut instincts to a black box, trusting the model to tell them what's real. But models only know what's happened before. They predict the average. Murder lives in the outliers.

When the players start writing code for the witnesses' glasses, statistics won't save you. You have to strip the world back to first principles—gravity, human panic, and a wet ring on a piece of paper.

Chess leaps onto the low concrete wall lining the switchback, his wide grin glowing faint violet against the city haze below.

"Well then, partner," the cat says softly. "Since my crystal ball is officially off the clock, where do we start?"

"We start with boots on the pavement," I tell him, exhaling smoke into the cold air. "Let's walk the back service road and see if a set of tires actually left this estate tonight."
