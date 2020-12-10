const routes = [
  {
    path: '/login',
    component: () => import('pages/login/Login.vue')
  },
  {
    path: '/login-dois',
    component: () => import('pages/login/Login-dois.vue')
  },
  {
    path: '/login-backup',
    component: () => import('pages/login/Login-backup.vue')
  },
  {
    path: '/cadastro',
    component: () => import('pages/cadastro/Cadastro.vue')
  },
  {
    path: '/cadastro-dois',
    component: () => import('pages/cadastro/Cadastro-dois.vue')
  },
  {
    path: '/cadastro-backup',
    component: () => import('pages/cadastro/Cadastro-backup.vue')
  },

  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/requerimento',
        component: () => import('pages/requerimento/Requerimento.vue')
      }
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
