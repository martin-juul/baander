import { BrowserRouter } from 'react-router-dom';
import ToastNotifications from '@/components/ToastNotifications';

import '@fontsource/open-sans';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import { ErrorBoundary } from 'react-error-boundary';
import { AppRoutes } from '@/routes';
import { useSelector } from 'react-redux';
import { selectToken } from '@/store/users/auth-slice.ts';
import { useContext, useEffect } from 'react';
import { PersonalTokenContext } from '@/providers';

function App() {
  const token = useSelector(selectToken);
  const personalTokenContext = useContext(PersonalTokenContext);

  useEffect(() => {
    if (token?.access_token && personalTokenContext.token !== token.access_token) {
      personalTokenContext.setToken(token.access_token);
    }
  }, [token, token?.access_token, personalTokenContext.setToken]);

  return (

    <ApolloProvider client={client}>
      <ErrorBoundary fallback={<div>App error</div>}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <ToastNotifications/>
      </ErrorBoundary>
    </ApolloProvider>

  );
}

export default App;
