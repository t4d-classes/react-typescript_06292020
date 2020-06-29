import React, { FC } from 'react';

import { Color } from '../models/Color';
import { useForm } from '../hooks/useForm';

export interface ColorFormProps {
  buttonText?: string;
  onSubmitColor: (color: Color) => void;
}

export const ColorForm: FC<ColorFormProps> = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, change, resetColorForm ] = useForm<Color>({
    name: '',
    hexcode: '',
  });

  const submitColor = () => {
    onSubmitColor(colorForm);
    resetColorForm();
  };

  return (
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
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};
