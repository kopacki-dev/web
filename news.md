---
layout: page
title: Aktualności
permalink: /news/
---

{% for new_news in site.news %}
<div>
  <h2>{{ new_news.title }}</h2>
  <p>{{ new_news.description | markdownify }}</p>
  <button><a href="{{ site.baseurl }}{{ new_news.url }}">Czytaj</a></button>
</div>
{% endfor %}
