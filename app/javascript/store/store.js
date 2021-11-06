import { configureStore } from '@reduxjs/toolkit';
import areas from './reducers/areas-reducer';
import plants from './reducers/plants-reducer'

export default configureStore({
  reducer: { 
    areas: areas,
    plants: plants
  },
})