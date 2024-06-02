import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import Index from './pages/Index.jsx';
import Stock from './pages/Stock.jsx';
import Contacts from './pages/Contacts.jsx';
import PersonalAccountLogin from './pages/PersonalAccountLogin.jsx';
import PersonalAccount from './pages/PersonalAccount.jsx';
import PersonalAccountRegister from './pages/PersonalAccountRegister.jsx';
import PasswordRecovery from './pages/PasswordRecovery.jsx';
import Administrator from './pages/Administrator.jsx';
import MakingAnOrder from './pages/MakingAnOrder.jsx';
import PageEdit from './pages/PageEdit.jsx';
import PageEditStocks from './pages/PageEditStocs.jsx';
import CartPage from './pages/CartPage.jsx';

const routes = [
  {
    index: true,
    path: '/',
    element: <Index />,
    title: 'Каталог',
  },
  {
    path: '/stock',
    element: <Stock />,
    title: 'Акции',
  },
  {
    path: '/contacts',
    element: <Contacts />,
    title: 'Контакты',
  },
  {
    path: '/personalAccountLogin',
    element: <PersonalAccountLogin />,
  },
  {
    path: '/personalAccount',
    element: <PersonalAccount />,
  },
  {
    path: '/personalAccountRegister',
    element: <PersonalAccountRegister/>,
  },
  {
    path: '/PasswordRecovery',
    element: <PasswordRecovery/>,
  },
  {
    path: '/Administrator',
    element: <Administrator/>,
  },
  {
    path: '/Basket',
    element: <CartPage/>,
  },
  {
    path: '/MakingAnOrder',
    element: <MakingAnOrder/>,
  },
  {
    path: '/PageEdit/:id?',
    element: <PageEdit/>,
  },
  {
    path: '/PageEditStocks/:id?',
    element: <PageEditStocks/>,
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App routes={routes} />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
