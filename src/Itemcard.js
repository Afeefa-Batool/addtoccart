import React from 'react';
import { useCart } from 'react-use-cart';
const Itemcard = (props) => {
    const { addItem } = useCart();



    return (
        <div className='col-lg-4 col-md-12 col-sm-12 ml-2 mb-4'>
                  <div className="card p-0 overflow-hidden h-100 shadow" style={{width: '18rem'}}>
        <img src={props.img} className="card-img-top img-fluid img-responsive" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-text">${props.price}</h5>

          <p className="card-text">{props.desc}</p>
          <button href="#" className="btn btn-success" onClick={()=>(props.item)}>Add to Cart</button>
        </div>
      </div>
        </div>
    );
};

export default Itemcard;