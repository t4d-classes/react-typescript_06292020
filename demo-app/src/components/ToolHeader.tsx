import React, { FC, memo } from 'react';
import styled from 'styled-components';

export interface ToolHeaderProps {
  headerText?: string;
}

const PageHeader = styled.h1`
  color: blue;
  font-family: arial;
`;

export const ToolHeader: FC<ToolHeaderProps> = memo(({ headerText }) => {

  console.log('tool header being rendered');

  return(
    <header>
      <PageHeader>{headerText}</PageHeader>
    </header>
  );

});

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};