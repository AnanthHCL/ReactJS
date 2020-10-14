import React from 'react';
import ReactDOM from 'react-dom';

class SampleState extends React.Component {
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
        <h1>Name of employee is {this.state.name}</h1>
        <p>
          Date of Birth is {this.state.dateOfBirth}, Working in the {this.state.deparment} Department with salary {this.state.salary}.
        </p>
        <button
          type="button"
          onClick={this.changeSalary}
        >Change Salary</button>
      </div>
    );
  }
}

ReactDOM.render(<SampleState />, document.getElementById('root'));