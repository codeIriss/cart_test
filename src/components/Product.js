import React,{Component} from "react";



export default class Product extends Component{
  
    constructor(props){
      super(props);
      this.state = {qty: 0}
    }
    
    add(){
      this.setState((prevState) => ({
        qty: prevState.qty +1
      }));
      this.props.handleTotal(this.props.price);
    }
  
    remove(){
        this.setState((prevState) => ({
            qty: prevState.qty -1
        
        }));
        this.props.handleTotal(-this.props.price);
    }
  
    render(){
      
      return(
        <div>
          <h2> {this.props.name}</h2>
          <h3> Price : Rs.{this.props.price}</h3>
          <h4>Qty : {this.state.qty}</h4>
          <button onClick={this.add.bind(this)}>add</button>
          <button onClick={this.remove.bind(this)} disabled={this.state.qty < 1}>remove</button>
          <hr/>
        </div>
      )
    }
  }