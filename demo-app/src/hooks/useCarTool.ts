import { useState, useCallback, useEffect } from 'react';

import { Car } from '../models/Car';
import { RestService } from '../services/RestService';

type RefreshCars = () => Promise<void>;
type AddCar = (car: Car) => Promise<void>;
type SaveCar = AddCar;
type DeleteCar = (carId: number) => Promise<void>;
type EditCar = (carId: number) => void;
type CancelCar = () => void;

type UseCarTool = (carsSvc: RestService<Car>) => ([
  Car[], number, RefreshCars, AddCar, SaveCar, DeleteCar, EditCar, CancelCar
]) 

export const useCarTool: UseCarTool = (carsSvc: RestService<Car>) => {

  const [ cars, setCars ] = useState<Car[]>([]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const refreshCars = useCallback(async () => {
    setCars(await carsSvc.all());
    setEditCarId(-1);
  }, [ carsSvc ]);

  const addCar = useCallback(async (car: Car) => {
    await carsSvc.append(car);
    await refreshCars();
  }, [ carsSvc, refreshCars ]);

  const saveCar = useCallback(async (car: Car) => {
    await carsSvc.replace(car);
    await refreshCars();
  }, [ carsSvc, refreshCars ]);

  const deleteCar = useCallback(async (carId: number) => {
    await carsSvc.remove(carId);
    await refreshCars();
  }, [ carsSvc, refreshCars ]);

  useEffect(() => {
    refreshCars();
  }, [ refreshCars ]);

  return [
    cars, editCarId,
    refreshCars, addCar, saveCar, deleteCar,
    setEditCarId, () => setEditCarId(-1),
  ];


};