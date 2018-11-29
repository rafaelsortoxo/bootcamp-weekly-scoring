import { CHANGE_WEEK, SET_CURRENT_CANDIDATE } from '../actions/types';

function calculateCurrentWeekAndTeam(candidate) {
  const currentDate = Date.now();
  if (candidate.week4Data.startDate && candidate.week4Data.getTime() < currentDate) {
    return { currentWeek: 4, currentTeam: candidate.week4Data.team };
  } else if (candidate.week3Data.startDate && candidate.week4Data.getTime() < currentDate) {
    return { currentWeek: 3, currentTeam: candidate.week3Data.team };
  } else if (candidate.week3Data.startDate && candidate.week4Data.getTime() < currentDate) {
    return { currentWeek: 2, currentTeam: candidate.week2Data.team };
  } else if (candidate.week3Data.startDate && candidate.week4Data.getTime() < currentDate) {
    return { currentWeek: 1, currentTeam: candidate.week1Data.team };
  } else {
    return { currentWeek: 1, currentTeam: null };
  }
}

export default function(state = null, action) {
  switch (action.type) {
    case CHANGE_WEEK:
      return { ...state, viewWeek: action.payload || 1 };
    case SET_CURRENT_CANDIDATE:
      const { currentWeek, currentTeam } = calculateCurrentWeekAndTeam(action.payload);
      return { ...action.payload, viewWeek: currentWeek, currentWeek, currentTeam };
    default:
      return state;
  }
}
