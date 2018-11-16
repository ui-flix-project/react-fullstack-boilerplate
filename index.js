import React from 'react';
import reactDOM from 'react-dom';

const App = () => {
    const textStyle = {width: '100%', textAlign: 'center', fontFamily: 'Segoe UI light'};
    return (
        <div style={textStyle}>
            <h1>Welcome from ui-flix</h1>
            <h3>A scalable fullstack boilerplate for react, redux, redux-saga.</h3>
        </div>
    );
};

reactDOM.render(<App/>, document.getElementById('root'));

