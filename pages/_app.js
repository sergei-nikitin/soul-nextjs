import { Provider } from 'react-redux';

import { store } from '../redux/store';
import '../scss/styles.scss';
import 'swiper/scss';
import 'swiper/css/effect-fade';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Component {...pageProps} />
      </>
    </Provider>
  );
}
