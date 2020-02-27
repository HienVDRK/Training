import React, {Component} from 'react'

class BaiLifecycle extends Component {

	constructor(props)
	{
		super(props);
		this.state = { seconds: 0, mm:0};
	}
	componentDidMount(){
 		console.log("componentDidMount da chay");
 		this.timeID= setInterval(
 			() => this.counter(),
 			1000
 		);
	}
	componentWillUnmount(){
 		console.log("componentWillUnmount da chay");
 		clearInterval();
	}
	counter(){
		this.setState({seconds: this.state.seconds + 1});
	}
	render(){
		console.log('render da chay');
		return(
			<div>
				<h2>Bai Lifecycle</h2>
				<h3>Counter seconds: {this.state.seconds} s</h3>
			</div>
		)
	}
}

export default BaiLifecycle;