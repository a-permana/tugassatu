import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    ReactDOM.render(
      React.createElement(
        'div',
        {},
        React.createElement(
          'h1',
          {},
          'Hello World!'
        ),
        React.createElement(
          'p',
          {},
          'Lorem ipsum sit dolor amet!'
        ),
      ),
      document.getElementById('root')
    )
  );
}

export default App;
