import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';

import Landing from './Landing';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const initialState = {};
  const store = mockStore(initialState);

  const wrapper = shallow(<Landing store={store} />).dive();

  expect(wrapper.is('Container')).toBe(true);
});
