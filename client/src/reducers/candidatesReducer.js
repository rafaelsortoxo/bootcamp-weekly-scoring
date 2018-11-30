import { CHANGE_WEEK, FETCH_CANDIDATES, SET_CURRENT_CANDIDATE } from '../actions/types';

function calculateCurrentWeekAndTeam(candidate) {
  const currentDate = Date.now();
  if (
    candidate.week4Data.startDate &&
    new Date(candidate.week4Data.startDate).getTime() < currentDate
  ) {
    return { currentWeek: 4, currentTeam: candidate.week4Data.team };
  } else if (
    candidate.week3Data.startDate &&
    new Date(candidate.week3Data.startDate).getTime() < currentDate
  ) {
    return { currentWeek: 3, currentTeam: candidate.week3Data.team };
  } else if (
    candidate.week2Data.startDate &&
    new Date(candidate.week2Data.startDate).getTime() < currentDate
  ) {
    return { currentWeek: 2, currentTeam: candidate.week2Data.team };
  } else if (
    candidate.week1Data.startDate &&
    new Date(candidate.week1Data.startDate).getTime() < currentDate
  ) {
    return { currentWeek: 1, currentTeam: candidate.week1Data.team };
  } else {
    return { currentWeek: 1, currentTeam: null };
  }
}

function getFirstIc(candidates) {
  for (let candidate of candidates) {
    if (candidate.role === 'ic') {
      return candidate;
    }
  }
  return null;
}

export default function(state = { candidates: [], currentCandidate: null }, action) {
  switch (action.type) {
    case FETCH_CANDIDATES:
      return {
        candidates: [...action.payload],
        currentCandidate: state.currentCandidate
      };
    case CHANGE_WEEK:
      return {
        candidates: [...state.candidates],
        currentCandidate: {
          ...state.currentCandidate,
          viewWeek: action.payload || 1
        }
      };
    case SET_CURRENT_CANDIDATE:
      let currentCandidate = state.candidates.filter(candidate => candidate._id === action.payload);
      currentCandidate = currentCandidate.length
        ? currentCandidate[0]
        : getFirstIc(state.candidates);
      const { currentWeek, currentTeam } = calculateCurrentWeekAndTeam(currentCandidate);
      return {
        candidates: [...state.candidates],
        currentCandidate: {
          ...currentCandidate,
          currentWeek,
          currentTeam,
          viewWeek: currentWeek
        }
      };

    default:
      return state;
  }
}
