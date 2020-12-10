import MainLayout from 'layouts/MainLayout'
import Requerimento from 'pages/requerimento/Requerimento'

const routes = [
  {
    path: '/',
    component: () => import('pages/login/Login.vue')
  },
  {
    path: '/login',
    component: () => import('pages/login/Login.vue')
  },
  {
    path: '/cadastro',
    component: () => import('pages/cadastro/Cadastro.vue')
  },

  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
    ]
  },

  {
    path: '/pages',
    component: MainLayout,
    children: [
      {
        path: 'requerimento',
        component: Requerimento,
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
