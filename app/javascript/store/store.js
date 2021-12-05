import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import plants from './reducers/plants-reducer';
import loading from './reducers/loading-reducer';
import garden from './reducers/garden-reducer';

export default configureStore({
  reducer: { 
    garden: garden,
    plants: plants,
    loadingStatus: loading
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});