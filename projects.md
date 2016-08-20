---
permalink: /projects/
---
{% for project in site.projects %}
  {{ project.title }} [[pdf]({{ project.pdf }})]
{% endfor %}