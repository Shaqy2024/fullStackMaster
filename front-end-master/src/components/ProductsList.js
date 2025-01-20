import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () =>{
const [products ,setProducts] = useState([]);

useEffect(()=>{
getProducts();
},[])

const getProducts= async()=>{
let result = await fetch('full-stack-master.vercel.app/products');
result = await result.json();
setProducts(result)
}
 const deleteProduct = async (id) =>{
   let result = await fetch(`full-stack-master.vercel.app/products/${id}`,{
    method: "Delete"
   })
   result =await result.json();
   if(result){
 
    getProducts()
   }
 }

    return(
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Prise</li>
                <li>Category</li>
                <li>Opration</li>
                <li>company</li>
            </ul>
            {
                products.map((item,index)=>
                    <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.prise}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>
                        <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                        <Link to={"/update/" +item._id}>update</Link>
                    </li>
                </ul> 
                )
            }
        </div>
    )
}

export default ProductList;
