import React from 'react'
import { fetchRobotsReducer } from './fetchRobotsReducer';
import { 
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from '../constants';

const initialState = {
  isPending: false, 
  robots: [],
  error: ''
}

it('should return an initialState', () => {
  expect(fetchRobotsReducer(undefined, {})).toEqual(initialState)
})


it('should handle FETCH_ROBOTS_PENDING', () => {
  expect(fetchRobotsReducer(initialState, {
    type: FETCH_ROBOTS_PENDING
  })).toEqual({ 
    isPending: true, 
    robots: [],
    error: ''
  })
})

it('should handle FETCH_ROBOTS_SUCCESS', () => {
  expect(fetchRobotsReducer({}, {
    type: FETCH_ROBOTS_SUCCESS,
    payload: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
    }]
  })).toEqual({ 
    isPending: false, 
    robots: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
    }]
  })
})

it('should handle FETCH_ROBOTS_FAILED', () => {
  expect(fetchRobotsReducer({}, {
    type: FETCH_ROBOTS_FAILED,
    payload: 'couldn\'t fetch data',
  })).toEqual({ 
    isPending: false,
    error: 'couldn\'t fetch data'
  })
})
