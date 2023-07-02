import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from './store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;