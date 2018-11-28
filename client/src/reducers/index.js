import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import bootcampReducer from './bootcampReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  bootcamp: bootcampReducer
});
