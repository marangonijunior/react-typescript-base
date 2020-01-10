import { Reducer } from 'redux';
import {
    JokeActions,
    JokeActionTypes,
} from '../actions/joke';

import IJoke from '../../interfaces/joke';

export interface IJokeState {
  readonly joke: IJoke[];
}

const initialJoketate: IJokeState = {
  joke: [],
};

export const jokeReducer: Reducer<IJokeState, JokeActions> = (
  state = initialJoketate,
  action
) => {
  switch (action.type) {
    case JokeActionTypes.GET_ALL: {
      return {
        ...state,
        joke: action.joke,
      };
    }
    default:
      return state;
  }
};