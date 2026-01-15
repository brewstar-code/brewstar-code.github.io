---
layout: default
title: Brewstar
---

<div class="bs-container">
  
  <div class="bs-hero">
    <h1 class="bs-hero__title">Brewstar <span class="bs-muted">브루스타</span></h1>
    <p class="bs-hero__subtitle">
      <strong>"Brew the Star, Be the Standard."</strong><br>
      별을 우려내어 표준이 됩니다. 우리는 반짝이는 영감을 진하게 추출해, 
      당신의 일상 속 가장 익숙한 도구(Tool)로 만듭니다.
    </p>
    <div class="bs-hero__cta">
      <a class="bs-btn is-primary" href="{{ "/services/" | relative_url }}">서비스 보기</a>
      <a class="bs-btn" href="#contact">문의</a>
    </div>
  </div>

  <section class="bs-section" aria-label="Brand Origin">
    <h2 class="bs-section__title">브랜드 스토리</h2>
    <p class="bs-section__hint">From a Star to the Noun.</p>
    
    <div class="bs-card" style="padding: 24px; border-radius: var(--radius); background: linear-gradient(135deg, #1f2329 0%, #2d343f 100%); color: #fff;">
      <h3 style="font-size: 1.2rem; margin-bottom: 12px; font-weight: 700; color: #60a5fa;">왜 '브루스타'인가요?</h3>
      <p style="line-height: 1.6; color: #e2e8f0; margin-bottom: 16px;">
        한국 사람들은 휴대용 가스버너를 <strong style="color: #fff;">'부루스타'</strong>라고 부릅니다. 
        사실 그것은 미국의 가스기기 회사 'BlueStar'의 브랜드명이었습니다. 
        특정 브랜드가 너무나 강력해서, 제품 그 자체를 지칭하는 <strong>보통명사</strong>가 되어버린 것입니다.
      </p>
      <p style="line-height: 1.6; color: #e2e8f0;">
        <strong style="color: #fff;">우리는 그 지점을 지향합니다.</strong><br>
        어디서든 불을 켜는 기동성(BlueStar)과 별의 본질을 우려내는 장인정신(Brewing).<br>
        우리가 출시하는 앱들이 처음엔 낯선 별처럼 보여도, 결국엔 여러분의 스마트폰 속에서 
        가스버너처럼 당연하고 필수적인 존재가 되기를 꿈꿉니다.
      </p>
    </div>
  </section>

  <section class="bs-section" aria-label="Principles">
    <h2 class="bs-section__title">원칙</h2>
    <p class="bs-section__hint">일상의 연금술(The Essential Alchemy)을 위한 3가지 약속</p>
    <div class="bs-grid">
      
      <div class="bs-card bs-service" style="grid-column: span 12;">
        <div class="bs-service__head">
          <div class="bs-service__names">
            <div class="bs-service__ko">즉각적인 점화</div>
            <div class="bs-service__en">Ignite First</div>
          </div>
          <div class="bs-badge">기동성</div>
        </div>
        <p class="bs-service__tagline">
          부루스타는 언제 어디서든 불을 켤 수 있어야 합니다. 
          우리는 복잡한 설정 없이, 켜는 순간 바로 가치를 제공하는 직관적인 서비스를 만듭니다.
        </p>
      </div>

      <div class="bs-card bs-service" style="grid-column: span 12;">
        <div class="bs-service__head">
          <div class="bs-service__names">
            <div class="bs-service__ko">진하게 우려냄</div>
            <div class="bs-service__en">Deep Brewing</div>
          </div>
          <div class="bs-badge">본질</div>
        </div>
        <p class="bs-service__tagline">
          겉핥기 식 기능은 담지 않습니다. 
          반짝이는 아이디어(Star)를 끈기 있게 우려내어(Brew), 사용자가 맛볼 결과물은 
          복잡함 없는 순수한 '엑기스'여야 합니다.
        </p>
      </div>

      <div class="bs-card bs-service" style="grid-column: span 12;">
        <div class="bs-service__head">
          <div class="bs-service__names">
            <div class="bs-service__ko">신뢰라는 표준</div>
            <div class="bs-service__en">Trust by Default</div>
          </div>
          <div class="bs-badge">보안</div>
        </div>
        <p class="bs-service__tagline">
          우리의 목표는 '보통명사'가 되는 것입니다. 
          그러기 위해 가장 기본이 되는 개인정보 보호와 안정성을 
          타협할 수 없는 표준으로 지킵니다.
        </p>
      </div>

    </div>
  </section>

  <section class="bs-section" aria-label="Services Preview">
    <h2 class="bs-section__title">제품</h2>
    <p class="bs-section__hint">일상의 온도를 높이는 브루스타의 라인업</p>
    <div class="bs-grid">
      {% assign services = site.data.services | sort: "order" %}
      {% for service in services %}
        {% include service-card.html service=service %}
      {% endfor %}
    </div>
  </section>

  <!-- <section id="contact" class="bs-section" aria-label="Contact">
    <h2 class="bs-section__title">문의</h2>
    <p class="bs-section__hint">새로운 별을 발견하셨나요? 언제든 연락주세요.</p>
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
  </section> -->
</div>