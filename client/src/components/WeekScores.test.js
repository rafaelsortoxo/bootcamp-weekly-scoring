import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';

import WeekScores from './WeekScores';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
configure({ adapter: new Adapter() });

describe('WeekDetails', () => {
  it('renders without crashing', () => {
    const initialState = {
      auth: null,
      candidates: {
        candidates: [],
        currentCandidate: null
      }
    };
    const store = mockStore(initialState);

    const wrapper = shallow(<WeekScores store={store} />).dive();

    expect(wrapper.find('div').length).toBe(1);
  });
});
