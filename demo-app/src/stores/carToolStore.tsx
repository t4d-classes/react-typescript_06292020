import React, { createContext, FC, useContext } from 'react';

import { Car } from '../models/Car';

import { useCarTool } from '../hooks/useCarTool';

import { RestService } from '../services/RestService';

const carsSvc = new RestService<Car>('http://localhost:3060/cars');

type CarToolStoreContextValue = {
  cars: Car[];
  editCarId: number;
  onRefreshCars: () => void;
  onAddCar: (car: Car) => void;
  onSaveCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
}

const CarToolStoreContext = createContext<CarToolStoreContextValue>({
  cars: [],
  editCarId: -1,
  onRefreshCars: () => null,
  onAddCar: (car: Car) => null,
  onSaveCar: (car: Car) => null,
  onDeleteCar: (carId: number) => null,
  onEditCar: (carId: number) => null,
  onCancelCar: () => null,
});

export const CarToolStoreProvider: FC = ({ children }) => {

  const carTool = useCarTool(carsSvc);

  const carToolStoreContextValue: CarToolStoreContextValue = {
    cars: carTool[0],
    editCarId: carTool[1],
    onRefreshCars: carTool[2],
    onAddCar: carTool[3],
    onSaveCar: carTool[4],
    onDeleteCar: carTool[5],
    onEditCar: carTool[6],
    onCancelCar: carTool[7],
  };

  return (
    <CarToolStoreContext.Provider value={carToolStoreContextValue}>
      {children}
    </CarToolStoreContext.Provider>
  );

};

export const createCarToolContainer = (PresentationalComponent: FC<CarToolStoreContextValue>) => {

  return () => <CarToolStoreContext.Consumer>
    {value => <PresentationalComponent {...value} />}
  </CarToolStoreContext.Consumer>;

};

export const useCarToolStore = () => {
  return useContext(CarToolStoreContext);
};