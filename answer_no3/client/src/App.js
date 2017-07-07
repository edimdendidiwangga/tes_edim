import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}

	componentWillMount(){
		let self = this
		axios.get('http://localhost:3000/api/v1/famous-people')
	  .then(function (response) {
	    self.setState({
				data : response.data
			})

	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

  render() {
		console.log(this.state.data)
			if(this.state.data.length === 0){
				return (<p>Loading....</p>)
			}else{
				return (
					<div>
					{ this.state.data.data.map((item, index)=>{
						return (
							<div class="list-group" key={index}>
							  <a href="#" class="list-group-item active">
							    <h4 class="list-group-item-heading">{ item.name }</h4> <span class="label label-warning">{ item.company }</span>
							    <p class="list-group-item-text">{ item.age } years old</p>
							  </a>

							</div>
							);
						})
					}
						</div>
				)
			}
  }
}

export default App;
