import React from 'react';
import { Route, useParams } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import DishesList from './components/DishesList';
import DishDetail from './components/DishDetail';
import { About as Ex22About, Contact as Ex22Contact, Profile as Ex22Profile } from './components/ex22/Pages';

export const routes = [
  {
    path: '/',
    component: DishesList,
    exact: true,
  },
  {
    path: '/dishes',
    component: DishesList,
  },
  {
    path: '/dishes/:dishId',
    component: DishDetail,
  },
  {
    path: '/users/:userId?',
    component: UsersPage,
  },
  {
    path: '/profile/:id?',
    component: Ex22Profile,
  },
  {
    path: '/products',
    component: () => <h1 className="placeholder-title">Products Page</h1>,
  },
  {
    path: '/about',
    component: Ex22About,
  },
  {
    path: '/contact',
    component: Ex22Contact,
  },
];

// Helper wrapper to support component functions with params in React Router v6
const RouteComponent = ({ Component }) => {
  const params = useParams();
  if (typeof Component === 'function') {
    return <Component params={params} />;
  }
  return Component;
};

export const renderRoutes = () => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<RouteComponent Component={route.component} />}
      exact={route.exact}
    />
  ));
};
