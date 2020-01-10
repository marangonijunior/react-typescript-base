import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import {
  jokeReducer,
  IJokeState,
} from '../store/reducers/joke';

export interface IAppState {
  jokeState: IJokeState;
}

const rootReducer = combineReducers<IAppState>({
    jokeState: jokeReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}