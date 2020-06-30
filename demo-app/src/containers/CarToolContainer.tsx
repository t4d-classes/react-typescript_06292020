import React from 'react';
import { /* createCarToolContainer, */ useCarToolStore } from '../stores/carToolStore';

import { CarTool } from '../components/CarTool';


// export const CarToolContainer = createCarToolContainer(CarTool);

export const CarToolContainer = () => {

  const contextValue = useCarToolStore();

  return <CarTool {...contextValue} />;

};
