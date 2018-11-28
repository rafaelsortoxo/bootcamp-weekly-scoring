import axios from 'axios';
import { FETCH_USER, FETCH_BOOTCAMPERS_DATA } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/v1/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBootcampersData = () => async dispatch => {
  const res = await axios.get('/api/v1/bootcampers');

  dispatch({ type: FETCH_BOOTCAMPERS_DATA, payload: res.data });
};
