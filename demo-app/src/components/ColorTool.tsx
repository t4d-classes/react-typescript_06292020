import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';
import { useForm } from '../hooks/useForm';

export interface ColorToolProps {
  colors?: Color[];
}

export const ColorTool: FC<any> = ({ colors }) => {

  const [ colorForm, change ] = useForm({
    name: '',
    hexcode: '',
  });

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map((c: Color) => 
          <li key={c.id}>
            {c.name}
          </li>
        )}
      </ul>
      <form>
        <div>
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode</label>
          <input type="text" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
      </form>
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};
