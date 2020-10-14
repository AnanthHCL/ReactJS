import React from 'react';
import ReactDOM from 'react-dom';

class SampleStateCard extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      name: "React Tutor",
      dateOfBirth: "01/01/2000",
      deparment: "Maths",
      salary: 2000
    };
  }
  changeSalary = () => {
    this.setState({salary: "10000"});
  }
  render() {
    return (
      <div>
		<div class="card" style="width:400px">
		   <h1>Name of employee is {this.state.name}</h1>
		  <div class="card-body">
			<h4 class="card-title">Date of Birth is {this.state.dateOfBirth}</h4>
			<p class="card-text">Working in the {this.state.deparment} Department with salary {this.state.salary}</p>
			 
			<button class="btn btn-primary" type="button"  onClick={this.changeSalary} >Change Salary</button>
		  </div>
		</div>
       </div>
    );
  }
}

ReactDOM.render(<SampleStateCard />, document.getElementById('root'));