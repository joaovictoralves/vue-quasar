const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login/Login.vue')
  },
  {
    path: '/login-dois',
    component: () => import('pages/login/Login-dois.vue')
  },
  {
    path: '/cadastro',
    component: () => import('pages/cadastro/Cadastro.vue')
  },
  {
    path: '/cadastro-dois',
    component: () => import('pages/cadastro/Cadastro-dois.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
