import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AdrianS from './AdrianS'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('render Adrian component without crashing', () => {
  const div = document.createElement("div")
  ReactDOM.render(<AdrianS />, div)
  ReactDOM.unmountComponentAtNode(div)
})



