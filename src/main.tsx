import React from 'react';

import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {QueryClient, QueryClientProvider} from 'react-query';

import 'i18n';
import {App} from 'App';
import {theme} from '@styles/theme';
import {GlobalStyles} from '@styles/GlobalStyles';
import {Home} from '@pages/Home/Home';
import {Room} from '@pages/Room/Room';
import {ErrorPage} from '@pages/ErrorPage/ErrorPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {path: 'room', element: <Room />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
