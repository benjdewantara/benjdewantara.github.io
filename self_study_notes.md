---
layout: page
title: List of self-study notes
permalink: /self-study-notes/
isHiddenInHeader: true
---

I'm thinking of putting a few study notes that should be grouped together. Below is a list of self-study notes from an online Probability course that I'm currently taking


{% for note in site.self_study_notes %}
1. [{{ note.title }}]({{ note.url }})
{% endfor %}

