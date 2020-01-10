import React  from 'react';
import IJoke from '../../interfaces/joke';
import './Joke.css';

const Joke: React.FC<IJoke> = (props) => {

  return (
    <div className="joke">
      <p>{props.value.id}</p>
      <p>{props.value.joke}</p>
    </div>
  );

};

export default Joke;