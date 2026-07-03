<template>
  <section id="contato" class="section contact-section">
    <div class="section-shell">
      <div class="section-heading">
        <span class="section-kicker">contact</span>
        <h2>Entrar em contato</h2>
        <p>Precisa de uma interface, landing page ou ajuste front-end? Me chama.</p>
      </div>

      <div class="contact-grid">
        <article class="contact-card pixel-card">
          <div class="contact-links">
            <a href="mailto:ju.marquess2023@gmail.com">
              <span>E-mail</span>
              ju.marquess2023@gmail.com
            </a>
            <a href="https://linkedin.com/in/juliana-msouza" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              linkedin.com/in/juliana-msouza
            </a>
            <a href="https://github.com/juliMarquesSouza" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              github.com/juliMarquesSouza
            </a>
            <a href="tel:+5592992828585">
              <span>Telefone</span>
              +55 92 99282-8585
            </a>
          </div>

          <div class="contact-terminal" aria-hidden="true">
            <span>$ npm run connect</span>
            <span>status: available</span>
            <span>location: Manaus/AM</span>
          </div>
        </article>

        <form class="contact-form pixel-card" aria-label="Formulário de contato" @submit.prevent>
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" />
          </label>
          <label>
            E-mail
            <input type="email" name="email" placeholder="seuemail@exemplo.com" />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows="5" placeholder="Conte sobre sua ideia"></textarea>
          </label>
          <button class="btn btn-primary" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </div>
  </section>
</template>
