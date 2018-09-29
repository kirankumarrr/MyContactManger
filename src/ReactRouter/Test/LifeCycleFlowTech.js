import React, {Component} from "react";
class LifeCycleFlowTech extends Component {
	constructor(){
		super();
		console.log("1) --> Constructor is the First to run before Initial Mount in Life Cycle Hook")
	}
	componentWillMount(){
		console.log("2) --> ComponentWillMount states that Mount is about to happen after this")
	}
	
	componentDidMount(){
		console.log("4) --> componentDidMount will call after render is done!!!")
		console.log("4) a--> componentDidMount is the best palce to call api calls")
	}
	render(){
		console.log("3) --> render states that Mount happened after this")
		console.log("3--a) -->Never Ever call your state in render because you may end in infinte loop")
		return (
		<div>
		  <h1 className="display-4">LifeCycleFlowTech</h1>
		</div>
	  );
	}
}
export default LifeCycleFlowTech;
