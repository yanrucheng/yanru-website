---
title: "Semantic Segmentation on Roads"
date:   2019-04-17 23:38:48 +0800
excerpt: "Exploring semantic segmentation techniques for road scenes using advanced DNN architectures, including GCN, PSPNet, and DUC-HDC."
header:
  # image: /assets/images/projects/2018-04-17-semantic-seg/danet_landscape_resized.png
  caption: "Semantic Segmentation on Roads - Visualizing Road Scene Segmentation"
  teaser: /assets/images/projects/2018-04-17-semantic-seg/semanticseg_thumb_resized.png
sidebar:
  - title: "Role"
    text: "Developer and Researcher"
  - title: "Supervisor"
    text: "Prof. Rynson W. H. Lau"
  - title: "Technologies"
    text: "Deep Learning, Semantic Segmentation, Encoder-Decoder DNN"
gallery:
  - url: /assets/images/projects/2018-04-17-semantic-seg/danet_landscape_resized.png
    image_path: /assets/images/projects/2018-04-17-semantic-seg/danet_landscape_resized.png
    alt: "Road Scene Segmentation Architecture"
---

## Project Overview

The **Semantic Segmentation on Roads** project aimed to improve segmentation accuracy on road scenes by leveraging an encoder-decoder DNN structure. Various architectures, including **GCN (Graph Convolutional Network)**, **PSPNet (Pyramid Scene Parsing Network)**, and **DUC-HDC (Dense Upsampling Convolution & Hybrid Dilated Convolution)**, were implemented and compared to assess their performance improvements on road scene datasets.

### Objectives
- **Enhanced Segmentation Accuracy**: Apply and evaluate advanced segmentation models for detailed road scene analysis.
- **Architecture Comparison**: Examine the impact of GCN, PSPNet, and DUC-HDC on segmentation accuracy.

## Highlights

Project achievements include:
- A comparative study revealing the strengths of each architecture in terms of segmentation detail, speed, and resource consumption.
- Enhanced accuracy in road lane and vehicle segmentation through DNN optimizations.
- Insights into architecture trade-offs, supporting further research in semantic segmentation.

## Gallery

<div class="gallery">
  {% for image in page.gallery %}
  <figure>
    <a href="{{ image.url }}"><img src="{{ image.image_path }}" alt="{{ image.alt }}"></a>
    <figcaption>{{ image.alt }}</figcaption>
  </figure>
  {% endfor %}
</div>

## Additional Resources

For more information, view the project's [GitHub repository](#).

<button type="button" onclick="window.location.href='#';">View Project</button>
