import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeekScoresViewerEditor from './WeekScoresViewerEditor';

configure({ adapter: new Adapter() });

describe('WeekDetails', () => {
  const defaultProps = {
    candidate: {
      week1Data: {
        ftar: [],
        productivity: [],
        scores: []
      },
      week2Data: {
        ftar: [],
        productivity: [],
        scores: []
      },
      week3Data: {
        ftar: [],
        productivity: [],
        scores: []
      },
      week4Data: {
        ftar: [],
        productivity: [],
        scores: []
      },
      viewWeek: 1,
      currentWeek: 1
    },
    auth: {
      role: 'manager'
    }
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<WeekScoresViewerEditor {...defaultProps} />);

    expect(wrapper.find('Row').length).toBe(5);
  });
});
