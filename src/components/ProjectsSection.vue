<script setup>
import { projects } from '../data/projects'
</script>

<template>
  <section id="projetos" class="section">
    <div class="section-shell">
      <div class="section-heading">
        <span class="section-kicker">{ projects }</span>
        <h2>Projetos em destaque</h2>
        <p>Projetos pensados para mostrar organização visual, responsividade e construção front-end.</p>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.title" class="project-card pixel-card">
          <div class="project-preview">
            <img class="project-image" :src="project.image" :alt="project.imageAlt" loading="lazy" />
          </div>

          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div class="tag-list">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>

            <div class="project-actions">
              <a class="btn btn-small btn-primary" :href="project.projectUrl" target="_blank" rel="noreferrer">
                Ver projeto
              </a>
              <a class="icon-link" href="https://github.com/juliMarquesSouza" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
