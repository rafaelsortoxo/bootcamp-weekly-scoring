import axios from 'axios';
import { FETCH_USER, CHANGE_WEEK, FETCH_CANDIDATES, SET_CURRENT_CANDIDATE } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/v1/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCandidateData = () => async dispatch => {
  const res = await axios.get('/api/v1/candidates');

  dispatch({ type: FETCH_CANDIDATES, payload: res.data.candidates });
  dispatch({ type: SET_CURRENT_CANDIDATE, payload: res.data.candidates[0] });
};

export const changeWeek = newWeek => ({
  type: CHANGE_WEEK,
  payload: newWeek
});
