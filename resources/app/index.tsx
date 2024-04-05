import React from 'react';
import ReactDOM from 'react-dom/client';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import { LocaleProvider } from '@douyinfe/semi-ui';
import 'reset-css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('baanderapproot') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocaleProvider locale={en_US}>
        <App/>
      </LocaleProvider>
    </Provider>
  </React.StrictMode>,
);
