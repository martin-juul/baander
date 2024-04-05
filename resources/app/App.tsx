import { BrowserRouter } from 'react-router-dom';
import ToastNotifications from '@/components/ToastNotifications';

import '@fontsource/open-sans';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import { ErrorBoundary } from 'react-error-boundary';
import { AppRoutes } from '@/routes';

function App() {
  return (
    <ApolloProvider client={client}>
        <ErrorBoundary fallback={<div>App error</div>}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ErrorBoundary>

        <ToastNotifications/>
    </ApolloProvider>

  );
}

export default App;
