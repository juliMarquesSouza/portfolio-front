<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Stacks', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <a class="logo" href="#inicio" @click="closeMenu">
      <span class="logo-icon" aria-hidden="true">&lt;/&gt;</span>
      juliana.marques
    </a>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-label="Abrir menu de navegação"
      @click="isOpen = !isOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="nav-menu" :class="{ 'is-open': isOpen }" aria-label="Navegação principal">
      <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
        {{ item.label }}
      </a>
    </nav>

    <a class="header-action" href="#contato">Contato</a>
  </header>
</template>
