---
title: "Risk and Security"
slug: "2025-04-28-risk-and-security"
date: "2025-04-28"
description: "Risk and Security"
coverImage: ""
tags: ["AI Strategy"]
readTime: "6 min read"
---

We often explore various topics here, and recently, I’ve been researching security in AI-enabled platforms and tools. Security has never been my strong suit; I usually defer to the cybersecurity experts, who I often see as mysterious yet exceptionally skilled. However, the rise of AI is creating new opportunities for people to develop and publish tools, where the hard learned lessons of security failures are not well understood or even really thought about. We take security far too lightly. This brings cyber-security concerns back into focus for our future AI society.

This week’s newsletter will be a bit shorter and primarily focused on the research I’ve done in the AI sec space. While it’s not exhaustive, it serves as a starting point for further exploration. I hope you find it useful based on my limited experience. That’s to say that you should really consult with your trusted cyber-person before nailing your actions entirely to my words here.

### A New Playbook

I’m told the age of autonomous AI agents is upon us. And while I remain skeptical that these agents can truly replace humans in meaningful ways right now, they are becoming increasingly capable every day. They promise productivity by interacting with various tools, data sources, and even other agents via protocols like the Model Context Protocol (MCP) and agent-to-agent (A2A) communication frameworks. However, this leap in capability brings a significant evolution in security challenges.

[https://www.ibm.com/think/topics/ai-security](https://www.ibm.com/think/topics/ai-security)

### The Current Landscape: Convenience vs. Concentrated Risk

To manage the complexity of connecting AI models to countless external tools (think databases, SaaS apps via APIs, internal systems), new platforms are making a play for enterprise. These platforms offer SDKs and centralized services to handle tricky authentication flows (like OAuth) and tool discovery, aiming to simplify development. Many of these platforms closely resemble existing security offerings from established security companies or even the big cloud players. However, AI-enabled products do present unique threats (which we will cover), but most basic concepts, AND concerns, align with existing security frameworks.

(Note: I believe that Google understands the security challenges that come with large amounts of AI-generated code being made public. I’ve mentioned this before, but Google’s awareness likely influenced their recent acquisition of the security company Wiz for over $30 billion.)

[https://www.traceable.ai/blog-post/to-secure-generative-ai-applications-start-with-api-security](https://www.traceable.ai/blog-post/to-secure-generative-ai-applications-start-with-api-security)

Many principles of API security are directly applicable:

-   Authentication: Robustly identifying users and agents (OAuth, OIDC/SSO).
-   Authorization: Enforcing who can access what (scopes, policies).
-   Credential Management: Securely storing and rotating tokens/keys (using dedicated vaults).
-   Proxy/Gateway Pattern: Centralizing access control, routing, and potentially some policy enforcement.

So it’s not surprising to see the typical AI security platforms to offer the following features:

-   A Platform Token: Often a single credential issued to the client application/agent, granting access to the central platform.
-   An Identity Service: Manages user authentication (often via SSO) and securely stores downstream credentials (like third-party API keys/OAuth tokens, potentially using tools like HashiCorp Vault).
-   A Proxy Service: Validates the platform token, injects the necessary downstream credentials, enforces policies, and routes requests to the appropriate external tool or MCP server.

Concerns Arising:

-   Overly Broad Platform Tokens: A compromised platform token could potentially act as a “god key” for that user, enabling access to all tools integrated through the platform, highlighting the “Excessive Agency” risk (OWASP Top 10 for LLMs). Robust lifecycle management (scoping, expiry, revocation) for this primary token is critical but often overlooked.
-   Centralized Credential Stores: While convenient, these become high-value targets. A breach could expose numerous downstream credentials. Secure implementation (e.g., proper Vault usage, encryption, key management, auditing) is paramount. Forks of standard tools like Vault warrant scrutiny regarding maintenance and security patching.
-   Downstream Risks (Tool Poisoning & Malicious Responses): The platform often connects to external tools or MCP servers that it may not fully control or vet. Malicious servers (“Tool Poisoning”) can leak credentials or inject malware. Critically, responses from compromised tools can contain prompt injections designed to manipulate the AI model connected via the platform, potentially causing data exfiltration or unauthorized actions — a threat vector traditional security often misses.

### Why AI Needs More

[https://perception-point.io/guides/ai-security/ai-security-risks-frameworks-and-best-practices/](https://perception-point.io/guides/ai-security/ai-security-risks-frameworks-and-best-practices/)

Where AI security diverges significantly:

-   Unstructured Payloads: Unlike rigidly defined API calls, interactions often involve natural language prompts and responses, or generated code. Validating these unstructured payloads for embedded threats (like prompt injection hidden in a seemingly benign summary requested from a tool) is incredibly difficult. Standard input sanitization often fails.
-   Response Validation Blind Spot: Much focus is often on securing the request to a tool. However, as seen with platforms like our hypothetical “AI Gateway,” validating the response coming back from the tool is often immature. This is a critical gap, as a compromised tool can easily attack the AI model via its output.
-   Complex Agency & Intent: AI agents can chain multiple tool calls or actions based on probabilistic reasoning. Defining and enforcing security policies based on intent or complex workflows is far harder than simple API endpoint permissions.
-   Supply Chain for AI Components: Vetting the security of third-party MCP servers, tools, or even foundational models becomes part of the security challenge.

Keys to look for in AI Security Development

-   AI platform governance requires centralized logging, monitoring, and anomaly detection for AI interactions, alongside rigorous credential lifecycle management.
-   Prioritize response validation using sandboxing, content analysis, and AI filtering before data reaches the core model.
-   Implement granular, context-aware policies evaluating runtime context for tool actions.
-   Establish robust human-in-the-loop approval workflows for high-risk actions, resisting auto-confirmation.
-   Vet AI components (tools, servers, models) through processes or trusted sources.

### Conclusion

We all love startups right? And while the rizz of specialized startups tackling novel AI security problems is strong, we must question if this focus outweighs the inherent advantages of established cybersecurity leaders. With deep customer integrations, comprehensive threat data, and proven ability to operate at enterprise scale, incumbents arguably possess the crucial assets needed to extend robust security to AI systems. The challenge for them lies in adapting quickly and deeply to AI’s unique facets. Conversely, while startups may grasp the AI-specific nuances rapidly, can they realistically build the foundational trust, scale, and broad protection enterprises demand? Perhaps the most effective solutions will ultimately emerge not from a wholesale replacement, but from how effectively the established players can innovate or acquire this specialized AI security DNA. I’m always searching for interesting startups that tackle AI’s unique problems while also integrating with larger established platforms setting the stage for potential acquisition.