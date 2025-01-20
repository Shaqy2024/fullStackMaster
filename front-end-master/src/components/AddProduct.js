import React from "react";
import { useNavigate } from "react-router-dom";
const AddProduct=()=>{
const [name, setName]=React.useState("")
const [prise, setPrise]=React.useState("")
const [category, setCategory]=React.useState("")
const [company, setCompany]=React.useState("")
const [error, setError] = React.useState(false);

const navigate = useNavigate();
const addproduct = async ()=>{
    console.log(!name)
    if(!name || !prise || !category || company){
        setError(true)
        
    }


    console.log(name,prise,category,company)
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("full-stack-master.vercel.app/add-product", {
        method:'post',
        body: JSON.stringify({name,prise,category,company,userId}),
        headers:{
            'Content-Type' : 'application/json'
        },
        });
        result = await result.json()
        console.warn(result);
        if (result){
       setName ("")
       setCategory("")
       setCompany("")
       setPrise("")
navigate("/")
        }
}

    return(
        <div className="product">
            <h2>Add product</h2>

            <input type="text" placeholder="Enter product name" className="inputBoxP"
            value={name} onChange={(e)=>{setName(e.target.value)}} 
            />
            { error && !name && <span className="invalid-input">Enter valid name</span>}
            <input type="text" placeholder="Enter product prise" className="inputBoxP"
            value={prise} onChange={(e)=>{setPrise(e.target.value)}}
            />
             { error && !prise && <span className="invalid-input">Enter valid prise</span>}
            <input type="text" placeholder="Enter product category" className="inputBoxP"
            value={category} onChange={(e)=>{setCategory(e.target.value)}} 
            />
             { error && !category && <span className="invalid-input">Enter valid category</span>}
            <input type="text" placeholder="Enter product company" className="inputBoxP"
            value={company} onChange={(e)=>{setCompany (e.target.value)}}
            />
             { error && !company && <span className="invalid-input">Enter valid company</span>}
            <button onClick={addproduct} className="appbuttonP">Add Product</button>
        </div>
    )
}
export default AddProduct;
