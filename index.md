---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<h1>Inwestycje</h1>

{% for investment in site.investments %}
<div>
  <h2>{{ investment.title }}</h2>
  <p>{{ investment.description | markdownify }}</p>
  <p><strong>Ilość mieszkań:</strong> {{ investment.properties_count }}</p>
  <button><a href="{{ site.baseurl }}{{ investment.url }}">Zobacz inwestycję</a></button>
</div>
{% endfor %}