import React, { FC } from 'react';

import { Color } from '../models/Color';
import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export interface ColorToolProps {
  colors?: Color[];
}

export const ColorTool: FC<ColorToolProps> = ({ colors: initialColors }) => {

  const [ colors, appendColor ] = useList(initialColors!.concat());

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map((c: Color) => 
          <li key={c.id}>
            {c.name}
          </li>
        )}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};
