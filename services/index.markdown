---
layout: page
title: 서비스
permalink: /services/
---

<div class="bs-hero">
  <h1 class="bs-hero__title">서비스</h1>
  <p class="bs-hero__subtitle">브루스타는 B2C 경험을 중심으로, 신뢰할 수 있는 제품을 만듭니다. 각 서비스는 개인정보 처리방침과 고객지원 채널을 독립적으로 운영합니다.</p>
  <div class="bs-hero__cta">
    <a class="bs-btn is-primary" href="{{ "/" | relative_url }}">브루스타 소개</a>
    <a class="bs-btn" href="{{ "/#contact" | relative_url }}">문의</a>
  </div>
</div>

<section class="bs-section">
  <h2 class="bs-section__title">Brewstar Products</h2>
  <p class="bs-section__hint">서비스가 추가될수록, 같은 품질의 정보 구조로 확장됩니다.</p>

  <div class="bs-grid">
    {% assign services = site.data.services | sort: "order" %}
    {% for service in services %}
      {% include service-card.html service=service %}
    {% endfor %}
  </div>
</section>
