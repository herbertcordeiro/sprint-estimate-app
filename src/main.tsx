import React from 'react';

import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'i18n';
import {App} from 'App';
import {theme} from '@styles/theme';
import {GlobalStyles} from '@styles/GlobalStyles';
import QueryProvider from '@components/providers/QueryProvider';
import RecoilProvider from '@components/providers/RecoilProvider';
import {Home} from '@pages/Home/Home';
import {Room} from '@pages/Room/Room';
import {ErrorPage} from '@pages/ErrorPage/ErrorPage';

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
    <QueryProvider>
      <RecoilProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilProvider>
    </QueryProvider>
  </React.StrictMode>,
);
