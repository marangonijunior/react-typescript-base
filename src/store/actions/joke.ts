
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import IJoke from '../../interfaces/joke';
import { IJokeState } from '../reducers/joke';

export enum JokeActionTypes {
  GET_ALL = 'GET_ALL',
}

export interface IJokeGetAllAction {
  type: JokeActionTypes.GET_ALL;
  joke: IJoke[];
}

export type JokeActions = IJokeGetAllAction;

export const getAllJoke: ActionCreator<
  ThunkAction<Promise<any>, IJokeState, null, IJokeGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://swapi.co/api/people/');
      dispatch({
        joke: response.data.results,
        type: JokeActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};