import React from 'react';
import ReactDOM from 'react-dom';

class SampleCartForm extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
		items : [{
		  name: "React Tutor Book",
		  description: "React Tutor Book Published on 01/01/2020",
		  quantity: "5",
		  cost: "1000"
		}],
		name: "",
		description: "",
		quantity: "1",
		cost: "10"
	
	};
  }
  addToCard = () => {
	let state = this.state;
	let item = {name:"", description:"", quantity:"", cost:""};
	item.name = state.name;
	item.description = state.description;
	item.quantity = state.quantity;
	item.cost = state.cost;
	
	state.items.push(item);
	
    this.setState(state);
  }
  
  setName = (event) => {
    this.setState({name: event.target.value});
  }
  
  setDesc = (event) => {
    this.setState({description: event.target.value});
  }
  
  setQuantity = (event) => {
    this.setState({quantity: event.target.value});
  }
  
  setCost = (event) => {
    this.setState({cost: event.target.value});
  }
  
  
  render() {
    return (
      <div>
		 <form onSubmit={this.addToCard}>
			<h1>Add Books To Your Cart</h1>
			<p>Name of Your Book:</p>  <input type='text' name='name' onChange={this.setName}/>
			<p>Description:</p>  <input type='text' name='description' onChange={this.setDesc}/>
			<p>Quantity:</p>  <input type='text' name='quantity' onChange={this.setQuantity}/>
			<p>Cost of Book:</p>  <input type='text' name='cost' onChange={this.setCost}/>
			
			<button class="btn btn-primary" type="submit"  >Add To Cart</button>
		  </form>
		  {items.map(function(item, index){
			<div class="card" style="width:400px" id={index}>
				<h1>Name of Book is {item.name}</h1>
				<div class="card-body">
					<h4 class="card-title">About Book {item.description}</h4>
					<p class="card-text">Purchased Quantity {item.quantity} and Cost of Each Book is {item.cost}</p>
				</div>
			</div>
		  }
       </div>
    );
  }
}

ReactDOM.render(<SampleCartForm />, document.getElementById('root'));