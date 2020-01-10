import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Joke from '../../components/joke';
import IJoke from '../../interfaces/joke';

import * as JokeActions from '../../store/actions/joke';

import './Home.css';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(JokeActions.getAllJoke());
  }, []);

  return (
    <div className="Home">
      <p>Joke</p>
      <Joke />
    </div>
  );
}

export default Home;
