import React from 'react';
import ReactDOM from 'react-dom';
import Etudiant from './Etudiant';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Etudiant />, div);
  ReactDOM.unmountComponentAtNode(div);
});
