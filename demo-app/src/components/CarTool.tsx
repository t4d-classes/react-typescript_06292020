import React, { FC } from 'react';

import { Car } from '../models/Car';
import { useCarTool } from '../hooks/useCarTool';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export interface CarToolProps {
  cars: Car[];
}

export const CarTool: FC<CarToolProps> = ({ cars: initialCars }) => {

  const [
    cars, editCarId, addCar, saveCar, deleteCar, editCar, cancelCar,
  ] = useCarTool(initialCars);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm onSubmitCar={addCar} buttonText="Add Car" />
    </>
  );
};