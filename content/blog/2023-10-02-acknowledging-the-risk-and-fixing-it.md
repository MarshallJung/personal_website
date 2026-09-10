---
title: "Acknowledging the risk…and fixing it"
slug: "2023-10-02-acknowledging-the-risk-and-fixing-it"
date: "2023-10-02"
description: "“The best thing I did as a manager at PayPal was to make every person in the company responsible for doing just one thing."
coverImage: "/images/blog/2023-10-02-acknowledging-the-risk-and-fixing-it/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

Peter Thiel — Zero to One

“The best thing I did as a manager at PayPal was to make every person in the company responsible for doing just one thing.

Every employee’s one thing was unique, and everyone knew I would evaluate them only on that one thing.

I had started doing this just to simplify the task of managing people.

But then I noticed a deeper result: defining roles reduced conflict.

Most fights inside a company happen when colleagues compete for the same responsibilities.

Startups face an especially high risk of this since job roles are fluid at the early stages.

Eliminating competition makes it easier for everyone to build the kinds of long-term relationships that transcend mere professionalism.

More than that, internal peace is what enables a startup to survive at all.

When a startup fails, we often imagine it succumbing to predatory rivals in a competitive ecosystem.

But every company is also its own ecosystem, and factional strife makes it vulnerable to outside threats.

Internal conflict is like an autoimmune disease: the technical cause of death may be pneumonia, but the real cause remains hidden from plain view.”

### What is old is new again — Part One: Trees for 3D

I’m looking at two 3D objects: A high downforce front wing next to a Monza spec wing. OR I’m looking at a 3D geo-seismic volume of the Bakken and one in the Midland basin. Maybe a P&W turbofan next to a GE one… Are these similar? How similar? What if I want to compare more than two? A hundred? Ten thousand?

Here’s a workflow:

KD-trees and ball trees are spatial partitioning data structures that can be used to efficiently search for points in a high-dimensional space. KD-trees work by recursively dividing the data space into two halves along one of the dimensions. This process continues until each leaf node contains a small number of points. To search for a point in a KD-tree, we start at the root node and recursively traverse the tree until we find a leaf node that contains the point. Ball trees work by constructing a hierarchical graph of points, where each node in the graph represents a hypersphere around a point. The graph is constructed by connecting nearby points with edges. To search for a point in a ball tree, we start at the root node and recursively traverse the graph, visiting the nodes that intersect with a hypersphere around the search point.

Basic pipeline for importing 3D shapes and using KD-trees and ball trees to classify the objects against a catalog of other 3D objects:

1.  Import the 3D shapes. This can be done using a variety of different 3D file formats, such as OBJ, STL, or PLY. This can be done using a variety of different Python libraries, such as: trimesh, Open3D or PyMesh
2.  Rescale 3D objects so that the point cloud based trees will have similar distances or similar features:

```
import trimeshdef rescale_3d_object(object, desired_bounding_box_size):"""Rescales a 3D object using a bounding box.Args:object: A trimesh.Trimesh object.desired_bounding_box_size: The desired size of the object's bounding box.Returns:A rescaled trimesh.Trimesh object."""bounding_box = object.bounding_boxscale_factor = desired_bounding_box_size / bounding_box.extentrescaled_object = object.scaled(scale_factor)return rescaled_object# Example usage:object = trimesh.load('object.obj')rescaled_object = rescale_3d_object(object, desired_bounding_box_size=1.0)
```

\[Note that rescaling 3D objects can affect the features of the objects. For example, if we rescale an object so that it is much smaller than its original size, then the features of the object may become less distinctive. It is important to choose a rescaling factor that preserves the features of the objects as much as possible.\]

1.  Represent the 3D shapes as point clouds. This can be done by sampling points from the surface of the shapes. Use the same Python libraries as above.
2.  Construct a KD-tree or ball tree for the point cloud of each shape. This will allow us to efficiently search for points in the shape. Use scikit-learn, flann or ANN
3.  Compare the KD-trees or ball trees of the two shapes. This can be done by computing the distance between the corresponding points in the two trees.
4.  Classify the shapes based on the distance between their KD-trees or ball trees. If the distance is small, then the shapes are similar. If the distance is large, then the shapes are different.

This is a basic pipeline for using KD-trees and ball trees to classify 3D objects. There are a number of different ways to improve the accuracy and performance of this pipeline. For example, we can use more sophisticated distance metrics to compare the shapes, and we can use machine learning techniques to train a classifier to classify the shapes based on the distance between their KD-trees or ball trees.

### MSFT uses Llama-2?

From here: [https://www.theinformation.com/articles/how-microsoft-is-trying-to-lessen-its-addiction-to-openai-as-ai-costs-soar](https://www.theinformation.com/articles/how-microsoft-is-trying-to-lessen-its-addiction-to-openai-as-ai-costs-soar)

See the screen cap below:

![Figure](/images/blog/2023-10-02-acknowledging-the-risk-and-fixing-it/image-01.jpg)

Providing massive LLMs is not really getting cheaper, and getting locked-in with NVIDIA isn’t helping matters. ([See my article on Google’s Gemini](https://medium.com/@jung.marshall/we-need-to-have-the-talk-about-gemini-18ef6f9e781)) So are fine-tuned OSS models the way to capture revenue and be profitable? Can we also have the debate on benchmarking and the coprophagiastic activity of feeding fine-tuned models training data from larger LLMs?

### Car control

[https://youtu.be/Fw-9gXwys5E?si=JmGcA-la0PwIqBxw](https://youtu.be/Fw-9gXwys5E?si=JmGcA-la0PwIqBxw)