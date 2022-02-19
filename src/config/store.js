import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import categoryReducer from '../redux/reducers/categoryReducer';

export const store = createStore(categoryReducer, applyMiddleware(thunk));
