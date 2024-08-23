import  {useState} from 'react';

const Product = () => {
    const [count, setCount] = useState(0);
    const list=[<li>item one</li>,<li>item two</li>,<li>item three</li>]
    return (<div> 
        <span className='m-2  text-info'>productName</span>
        <span className='m-2 badge bg-primary'>{format()}</span>
        <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning '>-</button>
        <button onClick={handleDelete} className='m-2 btn btn-sm btn-danger '>delete</button>
        <ul className='list-group'>
            {list}
        </ul>
        </div>
        );

        function handleIncrement  (){
           setCount(count+1);
        }
        function handleDecrement  (){
            setCount(count-1);
    
        }
        function handleDelete  (){
           setCount(count=0);

        }
        function format(){
            if (count===0) {
                return  "zero";
                    
            }else{
                    return count ;
                }
            }
        }

export default Product;