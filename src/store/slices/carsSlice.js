import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',

  initialState: {
    searchTerm: '',
    cars: [],
  },

  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
