import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import Root from './router';
import App from './App'
import './index.css'
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
