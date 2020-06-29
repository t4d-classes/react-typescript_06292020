import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';
import { Car } from './models/Car';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'blue', hexcode: '#0000FF' },
  { id: 2, name: 'black', hexcode: '#000000' },
  { id: 3, name: 'green', hexcode: '#00FF00' },
  { id: 4, name: 'pink', hexcode: '#FFC0CB' },
];

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
];

ReactDOM.render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);
