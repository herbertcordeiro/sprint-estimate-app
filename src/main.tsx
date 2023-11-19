import React from 'react';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import 'i18n';
import { App } from 'App';
import { Theme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles';
import RecoilProvider from 'components/providers/RecoilProvider';
import QueryProvider from 'components/providers/QueryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryProvider>
      <RecoilProvider>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </RecoilProvider>
    </QueryProvider>
  </React.StrictMode>,
);
