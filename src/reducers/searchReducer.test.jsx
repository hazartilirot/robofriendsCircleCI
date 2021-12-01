import { SEARCH_ROBOT } from '../constants';
import { searchReducer } from './searchReducer';

const initialState = {
  search: '',
};

it('should return an initialState', () => {
  expect(searchReducer(undefined, {})).toEqual({ search: ''})
})

it('should handle SEARCH_ROBOT', () => {
  expect(searchReducer(initialState, {
    type: SEARCH_ROBOT,
    payload: 'Charlie'
  })).toEqual({ search: 'Charlie' })
})