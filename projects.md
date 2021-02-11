---
layout: page
title: Projects
permalink: /projects/
---

{% assign projects = site.projects | sort: 'date' | reverse %}

{% for project in projects %}
{{ project.date | date_to_string }} [_{{ project.title }}_](#{{ project.title | slugify }})
{: .linky}
{% endfor %}

{% for project in projects %}

  ***

  {{ project.title }} {#{{ project.title | slugify }}}
===

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

  __Links__:
   {% if project.pdf %}[<i class="fas fa-file-pdf"></i>]({{ project.pdf }}){% endif %}
   {% if project.github %}[<i class="fab fa-github"></i>]({{ project.github }}){% endif %}

{% endfor %}