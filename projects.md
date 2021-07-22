---
layout: page
title: Projects
permalink: /projects/
---

聴・忍者(chou.ninja)
===

__Creation date__\\
30 May 2019

__Description__

Before I relocated to Tokyo, I had already studied Japanese for a couple of years, both in college and a little after graduation. But I quickly realized upon arrival that my listening comprehension was lacking, especially when it came to numbers. That's when a waitress at a restaurant tells you how much the bill is (e.g., ¥2294), or when friends share the dates of events, like July 4, or 1964.

Looking for solutions, I came across a site called [Gou Ninja](http://gou.ninja/) which is a sort of trainer for listening comprehension, but it had some quirks which I didn't like. For example, it could throw at you inapplicable numbers like ５５時 or 55 o'clock; it didn't support the days of the week, which were of particular interest to me; the UX was also such that you couldn't use the app as you were walking down the street.

To that end, I hacked together a webapp that fit my needs, and named it 聴・忍者 or _chou ninja_, a shameless derivative of its inspiration.

__Links__:
[<i class="fas fa-globe"></i>]({{ "/chou.ninja" | prepend: site.baseurl | prepend: site.url }})
[<i class="fab fa-github"></i>](https://github.com/boonjiashen/chou.ninja)

<div class="divider div-transparent"></div>

Photographic mosaicker
===

__Creation date__\\
28 March 2016

__Description__

<img src="/assets/sunset-640px.jpg" width="50%"><img src="/assets/sunset_mosaic-640px.png" width="50%">

This was an experiment in exposing image processing algorithms to the web.

__Links__:
[<i class="fas fa-globe"></i>](https://mosaic.boonjiashen.com)
[<i class="fab fa-github"></i>](https://github.com/boonjiashen/heroku_simple_image_processing)
[[post 1](/2016/03/27/online-demo-of-photographic-mosaicker/)]
[[post 2](/2016/01/18/how-to-write-a-simple-photographic-mosaicker/)]

{% assign projects = site.projects | sort: 'date' | reverse %}

{% for project in projects %}

<div class="divider div-transparent"></div>

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
   {% if project.pdf %}[<i class="fas fa-file-pdf"></i>](https://s3.amazonaws.com/boonjiashen.com/{{ project.pdf }}){% endif %}
   {% if project.github %}[<i class="fab fa-github"></i>]({{ project.github }}){% endif %}

{% endfor %}