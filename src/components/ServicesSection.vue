<script setup>
const services = [
  {
    title: 'Landing pages',
    description: 'Páginas modernas, responsivas e focadas em apresentação clara do seu produto ou serviço.',
  },
  {
    title: 'Interfaces para sistemas',
    description: 'Telas organizadas para dashboards, painéis administrativos e fluxos de uso recorrente.',
  },
  {
    title: 'Ajustes e manutenção',
    description: 'Correções visuais, melhorias de responsividade, componentes e integração com APIs.',
  },
]
</script>

<template>
  <section id="servicos" class="section">
    <div class="section-shell">
      <div class="section-heading">
        <h2>Meus serviços</h2>
        <p>Soluções front-end simples, bem estruturadas e prontas para evoluir.</p>
      </div>

      <div class="services-grid">
        <article v-for="service in services" :key="service.title" class="service-card pixel-card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
