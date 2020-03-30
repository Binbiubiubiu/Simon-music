import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import App, { AppContext } from 'next/app';
import { persistStore, Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import '@/global.less';
import configureStore from '@/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class MyApp extends App<any> {
  // persistor: Persistor;

  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    // this.persistor = persistStore(props.store);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return <Component {...pageProps} />;

    return (
      <Provider store={store}>
        {/* <PersistGate loading={<Component {...pageProps} />} persistor={this.persistor}> */}
        <Component {...pageProps} />
        {/* </PersistGate> */}
      </Provider>
    );
  }
}

export default MyApp;

// export default withRedux(configureStore, {
//   storeKey: '__NEXT_REDUX_STORE__',
//   debug: false,
//   serializeState: (state) => state,
//   deserializeState: (state) => state,
// })(MyApp);
