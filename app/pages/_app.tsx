import '../styles/globals.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'; 
import type { AppProps } from 'next/app';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App;
