import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { tokenVar } from '@/providers/personal-token-provider.tsx';

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_APP_URL}/graphql`
})

const authLink = setContext((_, { headers }) => {
  const accessToken = tokenVar();

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    }
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  connectToDevTools: true,
})
