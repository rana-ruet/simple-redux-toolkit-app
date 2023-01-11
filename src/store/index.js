import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './slices/carsSlice';
import { formReducer } from './slices/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store };
export { changeName, changeCost } from './slices/formSlice';
export { changeSearchTerm, addCar, removeCar } from './slices/carsSlice';
