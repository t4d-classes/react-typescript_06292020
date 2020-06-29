import React from 'react';

import { Color } from '../models/Color';

export const ColorTool = () => {

  const colors: Color[] = [
    { id: 1, name: 'blue', hexcode: '#0000FF' },
    { id: 2, name: 'black', hexcode: '#000000' },
    { id: 3, name: 'green', hexcode: '#00FF00' },
    { id: 4, name: 'pink', hexcode: '#FFC0CB' },
  ];

  // const colorListItems = [];

  // for (let x=0; x<colors.length; x++) {
  //   colorListItems.push(
  //     <li key={colors[x].id}>
  //       {colors[x].name}
  //     </li>);
  // }

  const colorListItems = colors.map(c => 
    <li key={c.id}>
      {c.name}
    </li>
  );

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
    </>
  );
};