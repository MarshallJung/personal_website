---
title: "TRAINING LLMs — A Taxonomy"
slug: "2023-09-09-training-llms-a-taxonomy"
date: "2023-09-09"
description: "Fully trained, fine-tuned, LoRA, QLoRA, BLoRA, hyper-parameters and everything in between. When someone talks about the newest and best…"
coverImage: "/images/blog/2023-09-09-training-llms-a-taxonomy/image-01.jpg"
tags: ["AI Strategy"]
readTime: "17 min read"
---

![How I felt writing this…](/images/blog/2023-09-09-training-llms-a-taxonomy/image-01.jpg)

*How I felt writing this…*

Fully trained, fine-tuned, LoRA, QLoRA, BLoRA, hyper-parameters and everything in between. When someone talks about the newest and best LLM to hit the market that has been trained with language, code, “The Pile”, proprietary data or something else, what does it actually mean? I’m writing this short article to cover the different ways that an LLM can be trained, what are some of the advantages/disadvantages of each of these methods. This paper is not meant to be deeply technical! Rather it’s meant to be a jumping off point for discussions around methodologies and to kickstart LLM project scoping efforts. Hopefully this will help keep everyone on the same page when it comes to selecting and comparing models for various tasks.

### Foundational Models

A foundational model, also known as a base model, is trained on a vast quantity of data at scale (often by self-supervised learning or semi-supervised learning) such that it can be adapted to a wide range of downstream tasks. Because it is trained on a massive dataset of text and code, which allows it to learn the underlying patterns of language. This makes it more versatile than a pre-trained model, which can only be used for the task it was trained on.

Foundational datasets used for training can be collected from a variety of sources, such as the internet, books, and code repositories. The size of the dataset is important, as a larger dataset will allow the model to learn more patterns of language.

Here are some examples of datasets that are commonly used to train foundational models:

-   **The Pile**: This is a large, diverse, open-source language modeling dataset that was constructed by EleutherAI in 2020. It is composed of 22 smaller datasets, including 14 new ones.
-   **The Common Crawl**: This is a massive dataset of text and code that was collected by the Common Crawl project. It contains over 600 billion words of text and code from the internet.
-   **The Google Books dataset**: This is a dataset of over 100 billion words of text from Google Books. It is a valuable resource for training foundational models, as it contains a wide variety of text genres.
-   **Proprietary data:** A foundational model can be trained on data that is not open source, which does lead to differences in performance on similar tasks between models.

Training a foundational model is a complex and computationally expensive task. It can require a massive amount of data, as well as powerful computing resources. To load a 70 billion parameter model in full precision would require 280 GB of GPU memory. However, the benefits of training a foundational model are significant. These models can be used to solve a wide range of tasks, and they can be adapted to new tasks with relatively little effort.

If we don’t want, or can’t, undertake the process of training a model from scratch, we do have some other methods. These are collectively called “fine-tuning” and fall into numerous categories. We will try and summarise these as succinctly as possible.

### How do I compare these?

Let’s lead with the lede… What if I just want to know how to pick the right “fine-tuning” method? Unfortunately, there is no easy way to do a simple, efficient and repeatable comparison between any of the methods listed in this paper. There are several reasons why:

1.  Lack of consistent benchmarks — From GLUE to XSUM to HumanEVAL there is no industry standard for model performance application. Individual papers evaluate against different benchmarks and even in the papers different implementations of fine-tuning are evaluated against the same benchmark. In addition performance is often reported, but other considerations such as memory usage, or compute efficiency are not included.
2.  Model sizes — Models are constantly growing in size, however fine-tuning methods perform differently against the same model with different parameter sizes. Therefore a Llama2–7B vs Llama2–30B won’t display the same consistency using the same method. Typically larger model sizes require fewer parameters to be updated during fine-tuning so the efficiency gains are not determinable via function interpretation.
3.  Parameter counts? — Actual parameter counts vary from paper to paper even using the same pre-trained model. Reliably and consistently determining the parameter count is a difficult problem in itself. What’s a trainable parameter? What parameters actually changed between the pre-trained model and the fine-tuned one? What’s the rank of the difference in models?

There are some best practices to look for (and implement) when evaluating model fine tuning.

1.  Use a consistent benchmark — Select a benchmark that will match as closely as possible the task proposed for the fine-tuned model. Use standardized data in each iteration and have several standard scales of data volume to evaluate model performance against. In addition, use the same underlying infrastructure to evaluate performance. GPU types, VRAM and memory on a consistent cloud provided VM is a good place to start.
2.  Model size variation — Evaluate with different model sizes to ascertain the performance implications of the PEFT methods.
3.  Report parameter counts explicitly and consistently — It’s less important that the parameters match other implementations as long as the parameter reporting stays the same between different methods.
4.  Compare like methods — Evaluate conceptually similar methods before reporting gains from one method vs another technique from another family. Keep in mind the underlying task that the fine tuned model is required to accomplish. This may lean the evaluation towards one family of methods vs. another.

### Parameter Efficient Fine Tuning

In 2018, BERT Large was the biggest transformer model with 350M parameters. Four years later, open source models grew to 176B parameters, but single-GPU RAM increased less than 10 times. Model size scales much quicker than computational resources, making fine-tuning infeasible for most folks (the GPU poor as my previous articles referenced with regards to Google’s Gemini vs the rest of the market)

In-context learning became standard for passing downstream task data to large language models. However, the limited context size of Transformers limits the training set size to just a few examples. This constraint, coupled with the absence of performance guarantees, presents a challenge. Expanding the context size leads to quadratic increase in inference costs. Even though language models perform well in a few-shot scenario, “get more data” is still the most reliable way to improve. Thus we need efficient ways to train on downstream task data.

Parameter-efficient fine-tuning (PEFT) aims to resolve the problem by training a small set of parameters. These methods differ in parameter efficiency, memory efficiency, training speed, and final model quality. In the last few years dozens of PEFT papers have been published, with several studies (Ding et al., 2022) providing a good overview of the most popular methods, such as Adapters (Houlsby et al., 2019), BitFit (Ben-Zaken et al., 2021), LoRa (Hu et al., 2021), Compacter (Karimi Mahabadi et al., 2021), and Soft Prompts (Liu et al., 2021; Li and Liang, 2021). Recently, Pfeiffer et al. (2023) presented a survey on modular deep learning overviewing similar methods from the perspective of modularity and multi-task inference.

This taxonomy paper presents a systematic overview of 17 PEFT methods, covering over 40 papers. It highlights the unresolved challenges in PEFT, including limited theoretical understanding, the gap between PEFT and fine-tuning performance, and reporting issues. Hopefully this will help narrow the discussions and provide continuity in developing solutions. Afterall, **a common language is the most efficient way of solving any given problem!**

### A PEFT Overview

PEFT methods can be classified in multiple ways. Differentiated by their underlying approach or conceptual framework: does the method introduce new parameters to the model, or does it fine-tune a small subset of existing parameters? Alternatively, they may be categorised according to their primary objective: does the method aim to minimise memory footprint or only storage efficiency? Based on the requirements of most organisations this paper will arrange them based primarily on the former concept as the efficiency considerations typically only present after a methodology is selected as being the most effective for a particular problem.

![Figure](/images/blog/2023-09-09-training-llms-a-taxonomy/image-02.jpg)

Figure 1: There are 3 broad categories of fine-tuning. Additive, Selective and Re-parameterization. There are meaningful subsets of Additive fine-tuning including adapters and soft-prompting. (figure: Vladislav Lialin et al. 2023)

There is far more information on all the specifically labelled methodologies from the above image than is appropriate for this executive overview. Included in the references at the end of this article will be some reference to papers that dive much deeper into the specifics of the individual methodologies, but KEEP IN MIND that the pace of research and work in this field has far outsripped the basic scientific effort for comparison research. So advocating for one method vs. another on the premise that it’s better does not have repeatable data to back the claim, at least at this point in time.

### 1.0 Additive Methods

Additive methods augment the existing foundational models with extra parameters or layers and training only these additions. These are the most commonly used PEFT methods currently. While there are more niche methods like LeTS and LST, we’ll look at the two broadest sub-categories, adapters and soft-prompts.

> Adding Parameters?

> On the surface it would seem that adding parameters to large models is inherently less efficient when there are already a large number of parameters. However on balance these techniques reduce the size of required memory for gradient and optimizer states. Parameter GPU memory needs tend to be multiples higher than model weights. By allowing foundational model parameters to be frozen and quantized (Dettmers et al., 2022), additive methods improve the overall GPU throughput and minimizes communication volume in distributed setups.

### 1.1 Adapters

Adapters involve the addition of small fully connected networks after the transformer sublayers. Variations of these methods include modifying the placement of the adapters within the transformer process, pruning and selective reduction of the transformer parameters.

Originally developed for multi-domain image classification, this method adds domain specific layers between the transformer NN modules. In particular fully connected networks after the attention and FFN layers. Because they have smaller hidden dimensions in the input they have impressive parameter efficiency typically only fine-tuning by less than 4% of the total model parameters.

### 1.1.1 AdaMix

Extending the base idea of adapters, AdaMix uses multiple adapters in a mixture of experts (MoE) fashion. Each adapter layer is a set of layers and for each forward pass only a random small set of those experts is activated. Although this MoE methodology gives better performance than basic adapters, it can use more memory during training.

### 1.2 Soft Prompts

Prompting, or prompt engineering is a topic many of us have heard discussed. IT aims to control the behaviour of a language model by modifying the input text. Typically this entails a task description followed by a few in-context examples. However, this methodology is inherently difficult to optimize due to the black box nature of the results and is limited by the maximum model input length. “Soft” prompts were introduced consisting of fine tuning a model’s input embedding via gradient descent. This changes the black box problem of discrete space to one of continuous optimization.

### 1.2.1 Prompt Tuning

Prompt tuning is a very commonly used phrase, but specifically refers to prepending the model input embeddings with a trainable tensor that is directly optimized through gradient descent. Prompt tuning is far more efficient the larger the model size, though they have some cost to inference overhead compared to other methods.

### 1.2.2 Prefix Tuning

Prefix tuning is an iteration of prompt tuning where the trainable tensors are prepended to the hidden states of all layers within the Transformer rather than simply the model input embeddings.The prepended tensors are parameterized through a feed-forward network during training where the parameters are optimized. The FFN can then be discarded. Model performance is similar to full fine tuning with the tensor parameters consisting of approximately 0.1% of the total.

### 1.2.3 Intrinsic Prompt Tuning

In the n-dimensional space used to define the trainable tensors, there consists an intrinsic task subspace that can differentiate between different tasks. Given a set of tasks, a group of prompts are learned in the same way as the conventional prompt tuning methodology (from above). These trained prompts are used to train an autoencoder that compresses the dimensionality. Essentially IPT uses the autoencoder to compress or decompress the soft prompts. This comes at the computational cost of training the autoencoder which can be a significant fraction of the underlying Transformer model.

### 2.0 Selective Methods

Perhaps the earliest PEFT method, selective fine tuning methods optimize only the first few top layers of a network. These approaches sometimes select for the type of layer or the internal structure, such as tuning only model biases or particular rows. Taken to its extreme these methods can completely ignore the structure of a model and select individual parameters.

### 2.1 Retrieval Augmented Generation (RAG)

RAG methodology combines the powers of pre-trained dense retrieval (DPR) and sequence-to-sequence models. The DPR component of RAG retrieves a set of relevant documents from an external knowledge base which are then passed to the sequence-to-sequence component, which generates the final output.

RAG methodology allows the model to access a wider range of knowledge, which can improve the quality of the generated text as well as a wider range of tasks. It does not require the task-specific data to be present during fine-tuning. RAG is more efficient, as the retriever can be pre-trained and reused for different tasks. However it can be computationally expensive to train the retriever in addition to the fine tuning process for the Transformer.

### 2.2 BitFit

This method works by only fine tuning the biases of the transformer. In each linear or convolutional layer, the weights remain untouched while the bias vector is optimized. While this typically allows fine-tuning by updating <.075% of the model parameters, as model sizes grow the efficiency underperforms other methods.

### 2.3 DiffPruning

Based on learning a binary mask on top of the model weights, the Hadamard product results in the mask enforcing meaningful sparsity. The mask is learned during the model fine-tuning process as part of the regularisation process. While it is efficient in minimizing the number of model parameters optimized, the need to mask all the weights plus the mask itself requires more memory during the tuning process itself.

### 2.4 Freeze and Reconfigure (FAR)

FAR works by pruning select columns of parameter matrices and freezing the parameters of some of the linear layers in the transformer, and then only fine-tuning the parameters of the remaining layers. Frozen layers are typically the ones that are responsible for learning the general language patterns. The layers that are fine-tuned are typically the ones that are responsible for learning the task-specific information. Performance increases by focusing on a selected set of parameters most relevant to the task on hand. However, if too many parameters are frozen, then the model may not be able to learn the task-specific information as effectively. The number of layers that are frozen can be adjusted depending on the computational resources available and the desired performance.

### 3.0 Re-parameterization Methods

These methods make use of low rank representations to minimize the number of parameters that are trained. Structured around the notion that neural networks have low dimensional representations, these low-rank subspaces need smaller adaptations for bigger models or when foundational models are pre-trained for longer. The most common reparameterization based method is low rank adaptation or LoRA. This employs simple low rank matrix decomposition to parameterize the weight updates. LoRA has the advantage of being straightforward to implement and has shown to be effective on models with up to 175 billion parameters.

### 3.1 Intrinsic SAID (If anyone can actually tell me what SAID stands for I have a cookie for you…seriously, I don’t know)

Intrinsic SAID works by reparametrizing the update to the neural network parameters using the Fastfood transform (Le et al. (2013)) which is a decomposition technique that can be used to reduce the rank of a transformer parameter matrices. This can significantly reduce the computational cost of fine-tuning, as only a low-rank approximation of the update needs to be computed. The model can focus on learning the parameters that are most relevant to the task at hand and can be used with any LLM, and it can be adapted to different tasks. If the rank of the approximation is too low, then the model may not be able to learn the task-specific information as effectively and there is no low-cost way to optimize the rank experimentation.

### 3.2 LoRA

Perhaps the most common way of fine-tuning LLMs, LoRA is a derivation of the Intrinsic SAID methodology with a simpler way of low rank fine-tuning where the parameter updates for the model weight matrix is itself decomposed in the product of two low rank matrices. All pre-trained model parameters are frozen and only the two low rank matrices are trainable with a constant scaling factor. Typically the projection matrices in the multi-head attention module are subjected to the LoRA decomposition.

### 4.0 Hybrid Methodologies

As can be imagined, most of the fine-tuning methodologies presented here, as well as many others are not mutually exclusive. Several approaches can be combined to achieve better performance or manoeuvre the model in one direction or another according to the task. The combination of methods can balance the strengths and weaknesses against one another. However it would be up to the Ml engineer to determine if the effort saved adequate compute, memory or experimentation time vs. undertaking pre-training a given model. I will list a few technologies here with respective papers for the user to peruse.

1.  Sparse Adapter — He et al. (2022b)
2.  Mix and Match (MaM) Adapters — He et al. (2022b)
3.  UniPELT — Gated, sequential application of LoRA, prefix-tuing and Adapters (Mao et al., 2021)
4.  Compactor — Uses LoRA, Kroneker products and Parameter tuning (Karimi Mahabadi et al., 2021)

References:

-   [https://www.anyscale.com/blog/fine-tuning-llms-lora-or-full-parameter-an-in-depth-analysis-with-llama-2](https://www.anyscale.com/blog/fine-tuning-llms-lora-or-full-parameter-an-in-depth-analysis-with-llama-2)
-   [https://lightning.ai/pages/community/article/understanding-llama-adapters/](https://lightning.ai/pages/community/article/understanding-llama-adapters/)
-   Armen Aghajanyan, Luke Zettlemoyer, and Sonal Gupta. 2020. Intrinsic dimensionality explains the effectiveness of language model fine-tuning. In Annual Meeting of the Association for Computational Linguistics.
-   Aakanksha Chowdhery, Sharan Narang, Jacob De- vlin, Maarten Bosma, Gaurav Mishra, Adam Roberts, Paul Barham, Hyung Won Chung, Charles Sutton, Sebastian Gehrmann, Parker Schuh, Kensen Shi, Sasha Tsvyashchenko, Joshua Maynez, Abhishek Rao, Parker Barnes, Yi Tay, Noam M. Shazeer, Vinodkumar Prab- hakaran, Emily Reif, Nan Du, Benton C. Hutchinson, Reiner Pope, James Bradbury, Jacob Austin, Michael Isard, Guy Gur-Ari, Pengcheng Yin, Toju Duke, Anselm Lev- skaya, Sanjay Ghemawat, Sunipa Dev, Hen- ryk Michalewski, Xavier García, Vedant Misra, Kevin Robinson, Liam Fedus, Denny Zhou, Daphne Ippolito, David Luan, Hyeontaek Lim, Barret Zoph, Alexander Spiridonov, Ryan Sepassi, David Dohan, Shivani Agrawal, Mark Omernick, Andrew M. Dai, Thanu- malayan Sankaranarayana Pillai, Marie Pel- lat, Aitor Lewkowycz, Erica Moreira, Re- won Child, Oleksandr Polozov, Katherine Lee, Zongwei Zhou, Xuezhi Wang, Brennan Saeta, Mark Díaz, Orhan Firat, Michele Catasta, Ja- son Wei, Kathleen S. Meier-Hellstern, Douglas Eck, Jeff Dean, Slav Petrov, and Noah Fiedel. 2022. Palm: Scaling language modeling with pathways. ArXiv, abs/2204.02311.
-   Brian Lester, Rami Al-Rfou, and Noah Con- stant. 2021. The power of scale for parameter-efficient prompt tuning. ArXiv, abs/2104.08691.
-   Ning Ding, Yujia Qin, Guang Yang, Fu Wei, Zonghan Yang, Yusheng Su, Shengding Hu, Yulin Chen, Chi-Min Chan, Weize Chen, Jing Yi, Weilin Zhao, Xiaozhi Wang, Zhiyuan Liu, Haitao Zheng, Jianfei Chen, Yang Liu, Jie Tang, Juan Li, and Maosong Sun. 2022. Delta tun- ing: A comprehensive study of parameter effi- cient methods for pre-trained language models. ArXiv, abs/2203.06904.
-   Edward J. Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean Wang, and Weizhu Chen. 2021. Lora: Low-rank adaptation of large language models. ArXiv, abs/2106.09685.
-   Wesley J. Maddox, Gregory Benton, and An- drew Gordon Wilson. 2020. Rethinking pa- rameter counting: Effective dimensionality re- visted. arXiv preprint arXiv:2003.02139.