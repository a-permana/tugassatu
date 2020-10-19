import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return (
        ReactDOM.render(
            React.createElement(
                'h1',
                {
                    style: { color: 'red' }
                },
                'Hello World!'
            ),
            document.getElementById('root')
        )
    );
}

export default App;