var Increment = React.createClass({
  getInitialState: function() { 
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  
  decrement: function(){
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return 
	<div>
      <div id='counter'>{this.state.counter}</div> 
      <button onClick = {this.increment}> Increment By 1 </button> 
      <button onClick = {this.decrement}> Decrement By 1 </button> 
     </div>
  }
});

React.render(<Increment />, document.getElementById('Session5'))