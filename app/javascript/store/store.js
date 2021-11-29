import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import areas from './reducers/areas-reducer';
import plants from './reducers/plants-reducer';
import loading from './reducers/loading-reducer';

export default configureStore({
  reducer: { 
    areas: areas,
    plants: plants,
    loadingStatus: loading
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})