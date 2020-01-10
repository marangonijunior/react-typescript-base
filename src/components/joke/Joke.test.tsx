import React from 'react';
import ReactDOM from 'react-dom';
import Joke from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Joke />, div);
  ReactDOM.unmountComponentAtNode(div);
});
