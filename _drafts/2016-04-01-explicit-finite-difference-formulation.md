---
layout: post
title: "Explicit Finite-difference Formulation"
date: 2016-3-30 22:26:00 +0700
comments: true
permalink: 2016-04-01-explicit-finite-difference-formulation
disqus_identifier: eae32ea8-f80c-11e5-8b08-080027d1c431
---

This post will present the answer to Example 5.8 from the book *Basic Applied Reservoir Simulation* on explicit calculation procedure in solving a reservoir simulation problem.

Example 5.8 is stated as

> For the 1D, block-centered grid shown in Fig. 5.26, determine the pressure distribution during the first year of production. The initial reservoir pressure is 6,000 psia. The rock and fluid properties for this problem are $$\Delta{x}=1,000\ \text{ft}$$, $$\Delta{y}=1,000\ \text{ft}$$, $$\Delta{z}=75\ \text{ft}$$, $$B_{l}=1\ \text{RB/STB}$$, $$c_{l}=3.5\times10^{-6}\ \text{psi}^{-1}$$, $$k_{x}=15\ \text{mD}$$, $$\psi=0.18$$, $$\mu_{l}=10\ \text{cP}$$, and $$B_{l}^o = 1\ \text{RB/STB}$$. <br><br>
Use time step sizes of $$\Delta{t}=10$$, $$15$$, and $$30\ \text{days}$$. Assume $$B_{l}$$ acts as a constant whithin the pressure range of interest.<br><br>
![Fig. 5.26][img-fig-5-26]


Test




{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}







[img-fig-5-26]: {{ site.url }}/assets/2016-04-01-fig-5-26.JPG
