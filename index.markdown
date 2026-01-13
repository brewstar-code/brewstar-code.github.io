---
layout: default
title: Brewstar
---

<div class="bs-container">
  <div class="bs-hero">
    <h1 class="bs-hero__title">Brewstar <span class="bs-muted">브루스타</span></h1>
    <p class="bs-hero__subtitle">하늘의 별을 우려내듯, 복잡함에서 본질을 추출해 사용자에게는 명료한 경험으로 전달합니다. 브루스타는 B2C를 우선으로 신뢰할 수 있는 제품을 만듭니다.</p>
    <div class="bs-hero__cta">
      <a class="bs-btn is-primary" href="{{ "/services/" | relative_url }}">서비스 보기</a>
      <a class="bs-btn" href="#contact">문의</a>
    </div>
  </div>

  <section class="bs-section" aria-label="Principles">
    <h2 class="bs-section__title">원칙</h2>
    <p class="bs-section__hint">만드는 과정은 단단하게, 결과는 단순하게.</p>
    <div class="bs-grid">
      <div class="bs-card bs-service" style="grid-column: span 12;">
        <div class="bs-service__head">
          <div class="bs-service__names">
            <div class="bs-service__ko">정성으로 우려냄</div>
            <div class="bs-service__en">Brew with Care</div>
          </div>
          <div class="bs-badge">원칙</div>
        </div>
        <p class="bs-service__tagline">복잡한 문제를 끝까지 다루고, 사용자는 단순한 결과만 얻도록 설계합니다.</p>
      </div>

      <div class="bs-card bs-service" style="grid-column: span 12;">
        <div class="bs-service__head">
          <div class="bs-service__names">
            <div class="bs-service__ko">신뢰를 기본값으로</div>
            <div class="bs-service__en">Trust by Default</div>
          </div>
          <div class="bs-badge">보안</div>
        </div>
        <p class="bs-service__tagline">서비스별로 개인정보 처리방침과 고객지원 채널을 명확히 제공하고, 책임 있는 운영을 우선합니다.</p>
      </div>

      <div class="bs-card bs-service" style="grid-column: span 12;">
        <div class="bs-service__head">
          <div class="bs-service__names">
            <div class="bs-service__ko">현실의 성능</div>
            <div class="bs-service__en">Real-world Performance</div>
          </div>
          <div class="bs-badge">품질</div>
        </div>
        <p class="bs-service__tagline">불안정한 네트워크와 다양한 기기 환경에서도 사용 흐름이 끊기지 않도록 품질을 끌어올립니다.</p>
      </div>
    </div>
  </section>

  <section class="bs-section" aria-label="Services Preview">
    <h2 class="bs-section__title">제품</h2>
    <p class="bs-section__hint">각 서비스는 독립적인 정책/지원 페이지를 운영합니다.</p>
    <div class="bs-grid">
      {% assign services = site.data.services | sort: "order" %}
      {% for service in services %}
        {% include service-card.html service=service %}
      {% endfor %}
    </div>
  </section>

  <section id="contact" class="bs-section" aria-label="Contact">
    <h2 class="bs-section__title">문의</h2>
    <p class="bs-section__hint">이메일로 연락 주시면 확인 후 답변드립니다.</p>
    <div class="bs-card" style="padding: 18px; border-radius: var(--radius);">
      <div class="bs-meta__row">
        <span class="bs-meta__label">이메일</span>
        <span class="bs-meta__value"><a href="mailto:{{ site.email }}">{{ site.email }}</a></span>
      </div>
      <div class="bs-meta__row" style="margin-top: 10px;">
        <span class="bs-meta__label">대표</span>
        <span class="bs-meta__value">윤창원</span>
      </div>
      <div class="bs-meta__row" style="margin-top: 10px;">
        <span class="bs-meta__label">상호</span>
        <span class="bs-meta__value">브루스타(Brewstar)</span>
      </div>
      <div class="bs-meta__row" style="margin-top: 10px;">
        <span class="bs-meta__label">사업자등록번호</span>
        <span class="bs-meta__value">108-230-66945</span>
      </div>
    </div>
  </section>
</div>
