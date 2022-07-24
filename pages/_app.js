import { Provider } from 'react-redux';

import { store } from '../redux/store';
import '../scss/styles.scss';
import 'swiper/scss';
import 'swiper/css/effect-fade';
import DataProvider from "../components/dataProvider/DataProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </Provider>
  );
}
