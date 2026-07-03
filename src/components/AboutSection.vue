<script setup>
import { differentials } from '../data/skills'
</script>

<template>
  <section id="sobre" class="section">
    <div class="section-shell">
      <div class="section-heading">
        <h2>Sobre mim</h2>
        <p>Desenvolvimento front-end com atenção a detalhes, organização e experiência de uso.</p>
      </div>

      <div class="about-grid">
        <article class="about-card pixel-card">
          <p>
            Sou Desenvolvedora Front-End apaixonada por tecnologia e pela criação de interfaces
            modernas, acessíveis e funcionais. Tenho experiência no desenvolvimento e manutenção de
            aplicações web utilizando Vue.js, Angular, React, JavaScript, TypeScript, HTML, CSS e
            integração com APIs REST. Gosto de transformar ideias em soluções digitais práticas,
            bonitas e fáceis de navegar.
          </p>

          <div class="badge-list" aria-label="Diferenciais">
            <span v-for="item in differentials" :key="item" class="badge">{{ item }}</span>
          </div>
        </article>

        <aside class="profile-card pixel-card">
          <span class="profile-label">Disponível para</span>
          <h3>Projetos front-end, melhorias de UI e aplicações web modernas.</h3>
          <div class="profile-meta">
            <span>Manaus, AM</span>
            <span>Vue.js</span>
            <span>Angular</span>
            <span>React</span>
            <span>UI responsiva</span>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
