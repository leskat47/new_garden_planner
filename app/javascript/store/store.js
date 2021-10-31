import { configureStore } from '@reduxjs/toolkit';
import areas from './reducers/areas-reducer'

export default configureStore({
  reducer: { areas: areas},
})