---
layout: page
title: Projects
permalink: /projects/
---

{% assign projects = site.projects | sort: 'date' | reverse %}

{% for project in projects %}

  __{{ project.title }}__

  {{ project.content }}

{% capture github %} {% endcapture %}

<!-- {% if project.github %}
Github: [link]({{ project.github }})
{% endif %}
 -->
  {% capture info %}
    Submission date: {{ project.date | date_to_string }}
    PDF: [[link]({{ project.pdf }})]
    Author(s): {{ project.authors | join: ", " | default: "Jia-Shen Boon" }}
  {% endcapture %}

  {{ info | strip | newline_to_br }}



  {% unless forloop.last %}***{% endunless %}
{% endfor %}