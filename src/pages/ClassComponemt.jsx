import { Component } from "react";


class ClassComponent extends Component{
    constructor (){
        super();
        this.state={
            count:0,
        }
    }

    componentDidMount(){
        console.log("just started with mounting");
    }
    handleBtnClick=()=>{
        console.log(this);
        this.setState({count: this.state.count+1});
    }   
    render(){
        return(
            <div>
                <h1>Hello world {this.state.count}</h1>
                <button onClick={this.handleBtnClick}>increment</button>
            </div>
        )

    }
}
export default ClassComponent;
