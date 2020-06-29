import React, { FC } from 'react';

import { Car } from '../models/Car';
import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';


export interface CarToolProps {
  cars: Car[];
}

export const CarTool: FC<CarToolProps> = ({ cars: initialCars }) => {

  const [ cars, appendCar, deleteCar ] = useList([ ...initialCars ]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
    </>
  );
};