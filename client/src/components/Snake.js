import React from 'react';
import ReactDOM from 'react-dom';
import Snake from 'react-snake-game';

const WRAPPER_STYLE = {
    margin: '30px auto',
    height: 1000,
    width: 1000
};

const Snakes = () => (
    <div style={WRAPPER_STYLE}>
        <Snake sound={true} />
    </div>
);

ReactDOM.render(<Snake />, document.getElementById('root'));
export default Snakes
