import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {
  combineForms,
  createForms // optional
} from 'react-redux-form';

const initialUserState = {
  name: '',
  email: '',
  message: ''
};

export default function configureStore(initialState) {
  return createStore(combineReducers({
      rootReducer,
      ...createForms({
        user: initialUserState
      })
    }), 
    initialState, 
    applyMiddleware(reduxImmutableStateInvariant()));
}
