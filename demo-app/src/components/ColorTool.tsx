import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

export interface ColorToolProps {
  colors?: Color[];
}

export const ColorTool: FC<any> = ({ colors }) => {

  const [
    colorForm, // state data
    setColorForm, // function to update the state data, and re-render the component
  ] = useState({
    name: '',
    hexcode: '',
  } /* initial state data */);

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    // updates the color form state and re-renders
    setColorForm({
      // copy over the original color form
      ...colorForm,

      // update the one property I am typing into
      // computed property, the expression in the square braces
      // will be evaluated to specify the property name which
      // is being updated
      [ e.target.name ]: e.target.type === 'number' ? e.target.valueAsNumber : e.target.value,
    });

  };

  // output to the console on each re-render
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
          <input type="number" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
      </form>
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};
