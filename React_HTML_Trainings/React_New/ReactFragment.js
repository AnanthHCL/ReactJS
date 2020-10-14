import React from 'react'; 
import ReactDOM from 'react-dom';

class ReactFragment extends React.Component { 
render() { 
	return ( 
	<React.Fragment> 
		<h2>This is a sample to check fragment</h2> 
		<p>Make use of render method inside a component whenever we want to render.</p>
		<h3>We may render a single or multiple html elments by using div tag as well</h3>
	</React.Fragment> 
	); 
} 
} 

ReactDOM.render(<ReactFragment />, document.getElementById('root'));