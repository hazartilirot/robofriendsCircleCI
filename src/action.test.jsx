import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { setSearchRobot, fetchRobots } from './action';

import { 
  SEARCH_ROBOT,
  FETCH_ROBOTS_PENDING
} from './constants'

const mockStore = configureStore([thunk])

it('should create an action to search robots', () => {
  const text = 'robot';
  const expectedAction = {
    type: SEARCH_ROBOT,
    payload: text
  }
  expect(setSearchRobot(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(fetchRobots())
  const action = store.getActions();
  
  const expectedAction = { type: 'FETCH_ROBOTS_PENDING' }
  
  expect(action[0]).toEqual(expectedAction)
});
