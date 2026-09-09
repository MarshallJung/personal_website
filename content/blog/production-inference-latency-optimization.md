---
title: "Production LLM Inference: Memory Bandwidth, PagedAttention, and Latency"
slug: "production-inference-latency-optimization"
date: "2024-05-12"
description: "A deep-dive into GPU memory bandwidth bottlenecks during LLM generation, KV-cache fragmentation, and real-world optimizations for real-time applications."
coverImage: "/images/blog/scaling-inference.svg"
tags: ["Inference", "GPU", "Performance", "PyTorch"]
canonicalUrl: "https://medium.com/@marshalljung/production-inference-latency-optimization"
readTime: "8 min read"
---

# Production LLM Inference: Memory Bandwidth, PagedAttention, and Latency

In modern generative AI systems, cost and latency are governed by a fundamental hardware constraint that many high-level software engineers overlook: **LLM generation during the autoregressive phase is memory-bandwidth bound, not compute bound**.

![Inference Latency Optimization Benchmarks](/images/blog/scaling-inference.svg)
*Figure 1: Latency improvements achieved via continuous batching and PagedAttention memory management.*

## The Two Phases of LLM Inference

Every generative token pipeline operates in two distinct operational regimes:

1. **The Prefill Phase (Prompt Evaluation)**: Highly compute bound. The model processes all input tokens concurrently via matrix multiplications ($O(N^2)$ attention, optimized via FlashAttention kernels). GPU Tensor Cores are fully saturated.
2. **The Decode Phase (Autoregressive Token Generation)**: Strictly memory-bandwidth bound. To generate a single token, all parameter weights (billions of parameters) and the accumulated Key-Value (KV) cache of preceding tokens must be loaded from High Bandwidth Memory (HBM) into SRAM.

## Overcoming KV-Cache Fragmentation

In naive serving implementations, memory for the KV-cache of each sequence is allocated contiguously for the theoretical maximum context length. Because sequence lengths are unpredictable, up to 60–80% of GPU memory ends up wasted due to internal and external fragmentation.

Virtual memory paging principles applied to KV-cache allocation (as implemented in vLLM's PagedAttention) partition cache states into non-contiguous blocks:

- Memory wastage falls from ~70% to under 4%.
- Batch capacity increases by 3x–4x on the same hardware envelope.
- Time-To-First-Token (TTFT) and throughput improve dramatically under concurrent user load.

Understanding the underlying silicon constraints transforms how we architect real-time AI products.
