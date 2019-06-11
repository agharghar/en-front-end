import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';






function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});

const Inscription = Loadable({
  loader: () => import('./views/Pages/Etudiants/ValidationForms/ValidationForms'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register/Register'),
  loading: Loading,
});

const Etudiant = Loadable({
  loader: () => import('./views/Pages/Etudiants/Listes/Etudiant'),
  loading: Loading,
});

const EtudiantEdit = Loadable({
  loader: () => import('./views/Pages/Etudiants/Edit/EtudiantEdit'),
  loading: Loading,
});


/*********************** */

const EnvoieDocument = Loadable({
  loader: () => import('./views/Pages/Document/Envoie/EnvoieDocument'),
  loading: Loading,
});

const Categories = Loadable({
  loader: () => import('./views/Pages/Document/Categorie/Categories'),
  loading: Loading,
});

const CategorieNew = Loadable({
  loader: () => import('./views/Pages/Document/Categorie/CategorieNew'),
  loading: Loading,
}); 

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500/Page500'),
  loading: Loading,
}); 



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/listes', name: 'Users', component: User },
  { path: '/inscription', name: 'Inscription', component: Inscription },
  { path: '/register', name: 'Register', component: Register },
  { path: '/etudiants', name: 'Etudiants', component: Etudiant },
  { path: '/etudiant/:id', name: 'EtudiantEdit', component: EtudiantEdit },
  
  
  { path: '/document/categories/new', name: 'Nouvelle Catégorie', component: CategorieNew },
  { path: '/document/envoie', name: 'Envoie Document', component: EnvoieDocument },
  { path: '/document/categories', name: 'Catégorie', component: Categories },
  { path: '/erreurServeur', name: 'Erreur Serveur', component: Page500 },
  Page500
];

export default routes;
