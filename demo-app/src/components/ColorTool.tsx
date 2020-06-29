import React, { FC } from 'react';

import { Color } from '../models/Color';
import { useForm } from '../hooks/useForm';
import { useList } from '../hooks/useList';

export interface ColorToolProps {
  colors?: Color[];
}

export const ColorTool: FC<ColorToolProps> = ({ colors: initialColors }) => {

  const [ colorForm, change, resetColorForm ] = useForm<Color>({
    name: '',
    hexcode: '',
  });

  const [ colors, appendColor ] = useList(initialColors!.concat());

  const addColor = () => {
    appendColor(colorForm);
    resetColorForm();
  };

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
          <input type="text" id="name-input" name="name"
            value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode</label>
          <input type="text" id="hexcode-input" name="hexcode"
            value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};
