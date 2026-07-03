import finpibbleDashboard from '../assets/finpibble-dashboard.png'
import muirasoftLanding from '../assets/images/muirasoft-landing.png'

export const projects = [
  {
    title: 'Sistema Financeiro',
    description:
      'Sistema para controle financeiro com visão de receitas, despesas, filtros e interface objetiva para acompanhar dados importantes.',
    tags: ['Vue.js', 'JavaScript', 'Axios', 'CSS'],
    image: finpibbleDashboard,
    imageAlt: 'Tela do dashboard do sistema financeiro FinPibble',
    projectUrl: 'https://appfinpibble-production.up.railway.app',
  },
  {
    title: 'Landing Page E-commerce',
    description:
      'Página responsiva para apresentação de produtos, chamada para compra e experiência visual simples e moderna.',
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
    image: muirasoftLanding,
    imageAlt: 'Tela da landing page da Muirasoft',
    projectUrl: 'https://muirasoft.com.br',
  },
]
