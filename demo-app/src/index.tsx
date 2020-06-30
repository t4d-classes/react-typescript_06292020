import React from 'react';
import ReactDOM from 'react-dom';

import { CarToolContainer } from './containers/CarToolContainer';
import { CarToolStoreProvider } from './stores/carToolStore';


ReactDOM.render(
  <>
    <CarToolStoreProvider>
      <CarToolContainer />
    </CarToolStoreProvider>
  </>,
  document.querySelector('#root'),
);
