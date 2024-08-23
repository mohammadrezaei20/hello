import  { Component } from 'react';
const count = 5;
const list =[<li>item one</li>,<li>item two</li>,<li>item three</li>]
 

class Product extends Component {
    state = {
    count:6 ,
}
    imageUrl = "https://picsum.photos/80";
    render() { 
        const {productName}= this.props;
        return (<div> 
        <span className='m-2  text-info'>{productName}</span>
        <span className='m-2 badge bg-primary'>{this.format()}</span>
        <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
        <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger '>delete</button>
        <ul className='list-group'>
            {list}
        </ul>
        <img src={this.imageUrl}style={{borderRadius:"50%"}} alt=""/>
        </div>
        );
    }
    handleIncrement = ()=>{
        this.setState({count: this.state.count +1 })
       
    }
    handleDecrement = ()=>{
        this.setState({count: this.state.count -1 })

    }
    handleDelete = ()=>{
        this.setState({count: this.state.count =0 })
    }

    format(){
        if (this.state.count===0) {
            return  "zero";
                
        }else{
                return this.state.count ;
            }
        }
    }


 
export default Product;