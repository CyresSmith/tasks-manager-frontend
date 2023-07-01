import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import store, { persistor } from './redux/store';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="task-manager-frontend">
          {children}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
