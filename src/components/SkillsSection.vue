<script setup>
import { skillGroups } from '../data/skills'
</script>

<template>
  <section id="tecnologias" class="section">
    <div class="section-shell">
      <div class="section-heading">
        <span class="section-kicker">&lt;/&gt;</span>
        <h2>Minhas stacks</h2>
        <p>Ferramentas que uso no desenvolvimento de interfaces e aplicações web.</p>
      </div>

      <div class="skill-groups">
        <article v-for="group in skillGroups" :key="group.title" class="skill-group pixel-card">
          <h3>{{ group.title }}</h3>
          <div class="skill-list stack-grid">
            <span v-for="skill in group.items" :key="skill" class="skill-pill">
              <span class="tiny-icon" aria-hidden="true"></span>
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
