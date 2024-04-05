import ReactDOM from 'react-dom/client';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import { LocaleProvider } from '@douyinfe/semi-ui';
import 'reset-css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@/store';

// We can't use strict mode due to
// https://github.com/DouyinFE/semi-design/issues/2006
// https://github.com/DouyinFE/semi-design/issues/201

ReactDOM.createRoot(document.getElementById('baanderapproot') as HTMLElement).render(
  <Provider store={store}>
    <LocaleProvider locale={en_US}>
      <App/>
    </LocaleProvider>
  </Provider>
);
