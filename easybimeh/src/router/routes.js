
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'aboutus', component: () => import('pages/AboutUs.vue') },
      { path: 'insuranceCentre', component: () => import('pages/InsuranceCentre.vue') },
      { path: 'insuranceCompanies', component: () => import('pages/InsuranceCompanies.vue') },
      { path: 'faq', component: () => import('pages/Faq.vue') },
      { path: 'typesOfInsurance', component: () => import('pages/TypesOfInsurance.vue') },
      { path: 'termsConditions', component: () => import('pages/TermsConditions.vue') },
      { path: 'registerComplaint', component: () => import('pages/RegisterComplaint.vue') },
      { path: 'infography', component: () => import('pages/Infography.vue') },
      { path: 'insuranceCentreRegistration', component: () => import('pages/InsuranceCentreRegistration.vue') }
    ]
  },

  {
    path: '/ebconnect',
    component: () => import('layouts/EBLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EBIndexPage.vue') },
      { path: 'whitelabel', component: () => import('pages/WhiteLabel.vue') },
    ]
  },

  {
    path: '/OnlineBroker',
    component: () => import('layouts/OBLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OBIndexPage.vue') },
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
