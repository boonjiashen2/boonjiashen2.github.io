---
layout: page
title: Projects
permalink: /projects/
---

{% assign projects = site.projects | sort: 'date' | reverse %}

<!-- {% assign projects = site.projects %}

{% for project in projects %}
* {{ project.date | date_to_string }} [{{ project.title }}](#{{ project.title | slugify }}) {% endfor %}
 -->
{% for project in projects %}

  ***

  {{ project.title }} {#{{ project.title | slugify }}}
===

   [[PDF]]({{ project.pdf }}) {% if project.github %}[[Github]]({{ project.github }}){% endif %}

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

{% endfor %}