const express = require("express");
const cors = require("cors")

require('./db/config');
const User = require("./db/User")
const Product = require("./db/product");
const product = require("./db/product");


const app = express();
app.use(express.json());
app.use(cors())


app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
result = result.toObject();
delete result.password;

    res.send(result)
})

app.post("/login", async (req, res) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            res.send(user)
        } else {
            res.send({ result: "No User found" })
        }
    } else {
        res.send({ result: "No User found" })
    }


})
app.post ("/add-product" , async  (req,res)=>{
let product = new Product(req.body);
let result = await product.save();
res.send(result)
});


app.get("/products" , async (req,res)=>{
    let product = await Product.find();
  
    if (product.length>0){
        res.send(product)
    }else{
        res.send({result : "no products found"})
    }
});


app.delete("/products/:id" , async (req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
});



app.get("/products/:id", async (req,res)=>{
    let result =await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send("No record found")
    }
})

app.put("/products/:id",async (req,res)=>{
let result =await Product.updateOne(
    {_id: req.params.id},
    {
        $set : req.body
    }
)
res.send(result)
})



app.listen(5000);