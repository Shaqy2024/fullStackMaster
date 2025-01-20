import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct=()=>{
const [name, setName]=React.useState("")
const [prise, setPrise]=React.useState("")
const [category, setCategory]=React.useState("")
const [company, setCompany]=React.useState("")
const params = useParams();
const navigate = useNavigate();

useEffect(()=>{

getProductDelete();
},[])

const getProductDelete = async () =>{
    console.log(params)
    let result=await fetch(`full-stack-master.vercel.app/products/${params.id}`);
    result = await result.json();
    console.log(result)
    setName(result.name)
    setPrise(result.prise)
    setCategory(result.category)
    setCompany(result.company)
}


const updateProduct = async ()=>{
console.log(name,prise,category,company)
let  result = await fetch(`http://localhost:5000/products/${params.id}`,{
    method:'Put',
    body:JSON.stringify({name,prise,category,company}),
    headers:{
        'Content-Type' : "application/json"
    }

}
    
);
result = await result.json();
console.log(result)
navigate('/')


}

    return(
        <div className="product">
            <h2>Update product</h2>

            <input type="text" placeholder="Enter product name" className="inputBoxP"
            value={name} onChange={(e)=>{setName(e.target.value)}} 
            />
            <input type="text" placeholder="Enter product prise" className="inputBoxP"
            value={prise} onChange={(e)=>{setPrise(e.target.value)}}
            />
            <input type="text" placeholder="Enter product category" className="inputBoxP"
            value={category} onChange={(e)=>{setCategory(e.target.value)}} 
            />
            <input type="text" placeholder="Enter product company" className="inputBoxP"
            value={company} onChange={(e)=>{setCompany (e.target.value)}}
            />
            <button onClick={updateProduct} className="appbuttonP">update Product</button>
        </div>
    )
}
export default UpdateProduct;
