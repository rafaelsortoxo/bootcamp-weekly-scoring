import axios from 'axios';
import {
  FETCH_USER,
  CHANGE_WEEK,
  FETCH_CANDIDATES,
  SET_CURRENT_CANDIDATE,
  UPDATE_CURRENT_CANDIDATE
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/v1/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCandidateData = () => async dispatch => {
  const res = await axios.get('/api/v1/candidates');

  dispatch({ type: FETCH_CANDIDATES, payload: res.data.candidates });
};

export const setCurrentCandidate = params => async dispatch => {
  const { resourceId } = params;
  dispatch({ type: SET_CURRENT_CANDIDATE, payload: resourceId });
};

export const updateProfile = candidate => async dispatch => {
  try {
    const {
      _id,
      displayName,
      bootcampStartDate,
      bootcampCompleted,
      bootcampPassed,
      bootcampReason,
      aureaEmail,
      privateEmail,
      hiringManager,
      currentWeek,
      currentTeam,
      notes
    } = candidate;

    let res = await axios.patch(`/api/v1/candidates/${_id}`, {
      displayName,
      bootcampStartDate,
      bootcampCompleted,
      bootcampPassed,
      bootcampReason,
      aureaEmail,
      privateEmail,
      hiringManager,
      currentWeek,
      currentTeam,
      notes
    });

    // let resAll = await axios.get(`/api/v1/candidates`);
    // dispatch({ type: FETCH_CANDIDATES, payload: resAll.data.candidates });
    // dispatch({ type: SET_CURRENT_CANDIDATE, payload: res.data.candidate._id });
    dispatch({ type: UPDATE_CURRENT_CANDIDATE, payload: res.data.candidate });

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const saveWeekDetails = ({ candidateId, weekId, body }) => async dispatch => {
  try {
    let res = await axios.patch(`/api/v1/candidates/${candidateId}/weeks/${weekId}`, {
      ...body
    });

    // dispatch({ type: FETCH_CANDIDATES, payload: resAll.data.candidates });
    // dispatch({ type: SET_CURRENT_CANDIDATE, payload: res.data.candidate._id });
    dispatch({ type: UPDATE_CURRENT_CANDIDATE, payload: res.data.candidate });

    return true;
  } catch (e) {
    return e;
  }
};

export const saveWeekScores = ({ candidateId, weekId, body }) => async dispatch => {
  try {
    let res = await axios.patch(`/api/v1/candidates/${candidateId}/weeks/${weekId}`, {
      ...body
    });

    dispatch({ type: UPDATE_CURRENT_CANDIDATE, payload: res.data.candidate });

    return true;
  } catch (e) {
    return e;
  }
};

export const changeWeek = newWeek => ({
  type: CHANGE_WEEK,
  payload: newWeek
});

export const addNewSem = data => async dispatch => {
  try {
    let res = await axios.post(`/api/v1/candidates/?role=sem`, {
      ...data
    });

    //dispatch({ type: UPDATE_CURRENT_CANDIDATE, payload: res.data.candidate });
    const resAll = await axios.get('/api/v1/candidates');
    dispatch({ type: FETCH_CANDIDATES, payload: resAll.data.candidates });

    return res.data;
  } catch (e) {
    return e;
  }
};

export const addNewIc = data => async dispatch => {
  try {
    let res = await axios.post(`/api/v1/candidates/?role=ic`, {
      ...data
    });

    // dispatch({ type: UPDATE_CURRENT_CANDIDATE, payload: res.data.candidate });
    const resAll = await axios.get('/api/v1/candidates');
    dispatch({ type: FETCH_CANDIDATES, payload: resAll.data.candidates });

    return res.data;
  } catch (e) {
    return e;
  }
};
