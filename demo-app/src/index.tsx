import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'blue', hexcode: '#0000FF' },
  { id: 2, name: 'black', hexcode: '#000000' },
  { id: 3, name: 'green', hexcode: '#00FF00' },
  { id: 4, name: 'pink', hexcode: '#FFC0CB' },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
