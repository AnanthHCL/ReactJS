import React from 'react';
import ReactDOM from 'react-dom';
 
class Sample extends React.Component {
  render() {
    return <h1>Hello Sample Test Page on React!</h1>;
  }
}

ReactDOM.render(<Sample />, document.getElementById('sampleId'));