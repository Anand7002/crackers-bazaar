import React from 'react';
import Product_data from '../../Data/Productdata';


const Product = () =>{
    console.log(Product_data);
    const listItems = Product_data.map((item)=>
    <div className='card' key="">

    </div>
    );
    return(
        <div className='product'>
            {listItems}
        </div>
    )
}
export default Product; 