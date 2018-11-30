import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import candidatesReducer from './candidatesReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  candidates: candidatesReducer
});
