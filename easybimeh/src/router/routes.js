
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'aboutus', component: () => import('pages/AboutUs.vue') },
      { path: 'insuranceCentre', component: () => import('pages/InsuranceCentre.vue') },
      { path: 'insuranceCompanies', component: () => import('pages/InsuranceCompanies.vue') },
      { path: 'faq', component: () => import('pages/Faq.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
