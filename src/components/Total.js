import React,{Component} from "react";



export default class Total extends Component{
  
    render(){
      return(
        <div>
          <h4> Total Cash : Rs. {this.props.total} </h4>
        </div>
      )
    }
  } 