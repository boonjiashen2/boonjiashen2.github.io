---
layout: page
title: Projects
permalink: /projects/
---

{% assign projects = site.projects | sort: 'date' | reverse %}

{% for project in projects %}

  __{{ project.title }}__

  {{ project.content }}

  Date: {{ project.date | date_to_string }}


{% capture authors %} {% if project.authors %} Authors: {% for author in project.authors %} {{ author }}{% unless forloop.last %}, {% endunless %} {% endfor %} {% endif %} {% endcapture %}

{% capture pdf %}PDF: [[link]({{ project.pdf }})]{% endcapture %}


  {{pdf}}

{{ authors }}

  {% unless forloop.last %}
***
  {% endunless %}

{% endfor %}