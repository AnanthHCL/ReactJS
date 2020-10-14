import React from 'react';
import ReactDOM from 'react-dom'; 

const StrictComponent = React.createElement('h1', {}, 'This is a Sample Strict Component for Embed!');

ReactDOM.render(StrictComponent, document.getElementById('root'));