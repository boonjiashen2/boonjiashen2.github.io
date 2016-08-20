---
layout: page
title: Projects
permalink: /projects/
---

{% assign projects = site.projects | sort: 'date' | reverse %}

{% for project in projects %}

  <big>__{{ project.title }}__</big>

[[PDF]]({{ project.pdf }})
{% if project.github %}[[Github]]({{ project.github }}){% endif %}

  __Submission date__\\
  {{ project.date | date_to_string }}

  __Author(s)__\\
  {{ project.authors | join: ", " | default: "Jia-Shen Boon" }}

  {% if project.type %}
  __Project type__\\
  {{ project.type }}
  {% endif %}

  __Abstract__
  {{ project.content }}

  {% unless forloop.last %}***{% endunless %}
{% endfor %}