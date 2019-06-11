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

const Etudiant = Loadable({
  loader: () => import('./views/Pages/Etudiants/Etudiant'),
  loading: Loading,
});

const EtudiantEdit = Loadable({
  loader: () => import('./views/Pages/Etudiants/EtudiantEdit'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', name: 'Users', component: User },
  { path: '/etudiants', name: 'Etudiants', component: Etudiant },
  { path: '/etudiant/:id', name: 'EtudiantEdit', component: EtudiantEdit },
  
];

export default routes;
