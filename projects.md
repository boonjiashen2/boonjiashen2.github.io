---
layout: page
title: Projects
permalink: /projects/
---
{% for project in site.projects %}

  <h3>{{ project.title }}</h3>

  {{ project.content }}

  Date: {{ project.date | date_to_string }}

  [[pdf]({{ project.pdf }})]

{% endfor %}