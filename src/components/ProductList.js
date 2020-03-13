import React,{Component} from "react";
import Product from './Product';
import Total from './Total';


export default class ProductList extends Component{
    constructor(props){
      super(props);
      this.state = {total: 0}
    }
    calculateTotal(price) {
      this.setState((prevState) => ({
        total: prevState.total + price
      }));
    }
    
    render(){
      return(
        <div>
          <Product name="ONE PLUS" price={100}
            
            handleTotal={this.calculateTotal.bind(this)}
          />
          <Product name="I PHONE " price={150}
           
            handleTotal={this.calculateTotal.bind(this)}
          />
          <Product name="SAMSUNG" price={200}
            
            handleTotal={this.calculateTotal.bind(this)}
          />
          <Total total={this.state.total}/>
        </div>
      )
    }
  } 