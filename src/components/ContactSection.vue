<script setup>
import { computed, reactive, ref } from 'vue'

const contactEmail = 'ju.marquess2023@gmail.com'
const whatsappNumber = '5592992828585'
const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || `https://formsubmit.co/ajax/${contactEmail}`

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const isSending = ref(false)
const feedback = ref({ type: '', message: '' })

const socialLinks = [
  {
    label: 'E-mail',
    description: 'Envie uma mensagem',
    href: `mailto:${contactEmail}`,
    external: false,
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    description: 'Perfil profissional',
    href: 'https://linkedin.com/in/juliana-msouza',
    external: true,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    description: 'Projetos e código',
    href: 'https://github.com/juliMarquesSouza',
    external: true,
    icon: 'github',
  },
  {
    label: 'WhatsApp',
    description: 'Conversa rápida',
    href: `https://wa.me/${whatsappNumber}`,
    external: true,
    icon: 'whatsapp',
  },
]

const feedbackClass = computed(() => ({
  'form-feedback': true,
  'form-feedback-success': feedback.value.type === 'success',
  'form-feedback-error': feedback.value.type === 'error',
}))

function validateForm() {
  errors.name = form.name.trim() ? '' : 'Informe seu nome.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ? ''
    : 'Informe um e-mail válido.'
  errors.message = form.message.trim() ? '' : 'Escreva uma mensagem.'

  return !errors.name && !errors.email && !errors.message
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.message = ''
}

async function handleSubmit() {
  feedback.value = { type: '', message: '' }

  if (!validateForm()) {
    feedback.value = {
      type: 'error',
      message: 'Revise os campos destacados antes de enviar.',
    }
    return
  }

  isSending.value = true

  try {
    const sentAt = new Date().toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    })

    const payload = new FormData()
    payload.append('name', form.name.trim())
    payload.append('email', form.email.trim())
    payload.append('message', form.message.trim())
    payload.append('sentAt', sentAt)
    payload.append('_replyto', form.email.trim())
    payload.append('_subject', `Nova mensagem do portfolio - ${form.name.trim()}`)
    payload.append('_captcha', 'false')

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: payload,
    })

    if (!response.ok) {
      throw new Error('Falha ao enviar mensagem.')
    }

    feedback.value = {
      type: 'success',
      message: 'Mensagem enviada com sucesso. Obrigada pelo contato!',
    }
    resetForm()
  } catch (error) {
    feedback.value = {
      type: 'error',
      message: 'Não foi possível enviar agora. Tente novamente em instantes.',
    }
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <section id="contato" class="section contact-section">
    <div class="section-shell">
      <div class="contact-grid">
        <article class="contact-card pixel-card" aria-labelledby="contact-title">
          <div class="contact-heading">
            <span class="section-kicker">contact</span>
            <h2 id="contact-title">Vamos conversar?</h2>
            <p>Estou disponível para novos projetos, freelas e oportunidades em desenvolvimento front-end.</p>
          </div>

          <div class="contact-status" aria-hidden="true">
            <span class="status-dot"></span>
            <span>Disponivel para novos contatos</span>
          </div>

          <div class="contact-links" aria-label="Canais de contato">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              class="contact-icon-link"
              :href="link.href"
              :aria-label="link.label"
              :title="link.label"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
            >
              <span class="contact-icon">
                <svg v-if="link.icon === 'email'" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <svg v-else-if="link.icon === 'linkedin'" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 9h4v10H5z" />
                  <path d="M5 5h4v3H5z" />
                  <path d="M11 9h4v2c.6-1.2 1.8-2.2 3.5-2.2 2.5 0 4 1.7 4 4.7V19h-4v-5c0-1.2-.5-2-1.6-2-1.2 0-1.9.8-1.9 2v5h-4z" />
                </svg>
                <svg v-else-if="link.icon === 'github'" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3a9 9 0 0 0-3 17c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.1-3.4-1.1-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .9-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 3.7-2.3 4.6-4.5 4.8.4.3.7 1 .7 2v3.3c0 .3.2.6.7.5A9 9 0 0 0 12 3z" />
                </svg>
                <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 20 6.2 16A8 8 0 1 1 9 18.3z" />
                  <path d="M9.4 8.2c.2-.3.4-.3.7-.2l.9 2c.1.2 0 .4-.1.6l-.5.6c.5 1 1.3 1.8 2.4 2.4l.7-.5c.2-.1.4-.2.6-.1l1.9.9c.3.1.4.4.3.7-.2.8-.8 1.4-1.7 1.4-2.8 0-6.5-3.4-6.5-6.4 0-.7.5-1.2 1.3-1.4z" />
                </svg>
              </span>
              <span class="contact-link-copy">
                <strong>{{ link.label }}</strong>
                <small>{{ link.description }}</small>
              </span>
            </a>
          </div>
        </article>

        <form class="contact-form pixel-card" aria-label="Formulário de contato" novalidate @submit.prevent="handleSubmit">
          <div class="contact-form-header">
            <span>Mensagem direta</span>
            <h3>Conte sobre o projeto</h3>
          </div>
          <label for="contact-name">
            Nome
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Seu nome"
              autocomplete="name"
              :aria-invalid="Boolean(errors.name)"
              aria-describedby="name-error"
            />
            <small v-if="errors.name" id="name-error" class="field-error">{{ errors.name }}</small>
          </label>
          <label for="contact-email">
            E-mail
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              autocomplete="email"
              :aria-invalid="Boolean(errors.email)"
              aria-describedby="email-error"
            />
            <small v-if="errors.email" id="email-error" class="field-error">{{ errors.email }}</small>
          </label>
          <label for="contact-message">
            Mensagem
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              rows="5"
              placeholder="Conte sobre sua ideia"
              :aria-invalid="Boolean(errors.message)"
              aria-describedby="message-error"
            ></textarea>
            <small v-if="errors.message" id="message-error" class="field-error">{{ errors.message }}</small>
          </label>
          <button class="btn btn-primary" type="submit" :disabled="isSending">
            {{ isSending ? 'Enviando...' : 'Enviar mensagem' }}
          </button>
          <div v-if="feedback.message" :class="feedbackClass" role="status">
            <span aria-hidden="true">{{ feedback.type === 'success' ? 'ok' : '!' }}</span>
            <p>{{ feedback.message }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
