const express = require('express')
const app = express()
const bodyParser = require("body-parser");
//Using body-parser allows you to access req.body from within routes and use that data.
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//your code goes here

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })


app.post("/add", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    if(isNaN(num1>1000000) || isNaN(num2)>1000000 ||(num1+num2>1000000)){
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }
    if(isNaN(num1<-1000000) || isNaN(num2)<-1000000 ||(num1+num2<(-1000000))){
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }
    let sum =0;
    res.status(200).json({
        status: "Sucess",
        message: "the sum of given two numbers",
        sum : num1 +num2
    }) 
})
app.post("/sub", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    if(isNaN(num1>1000000) || isNaN(num2)>1000000 ||(num1+num2>1000000)){
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }
    if(isNaN(num1<-1000000) || isNaN(num2)<-1000000 ||(num1+num2<(-1000000))){
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }
    let sub =0;
    res.status(200).json({
        status: "Sucess",
        message: "the subtraction of given two numbers",
        sub : Math.abs(num1 - num2)
    }) 
})
app.post("/mul", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    if(isNaN(num1>1000000) || isNaN(num2)>1000000 ||(num1*num2>1000000)){
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }
    if(isNaN(num1<-1000000) || isNaN(num2)<-1000000 ||(num1*num2<(-1000000))){
        return res.status(400).json({
            status: "Error",
            message: "Underflow"
        })
    }
    let mul =0;
    res.status(200).json({
        status: "Sucess",
        message: "the multiplication of given two numbers",
        mul : num1 * num2
    }) 
})
app.post("/div", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric"
        })
    }
    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    if(num2 === 0){
        return res.status(400).json({
            status: "Error",
            message: "Cannot divide by zero"
        })
    }
    if(isNaN(num1>1000000) || isNaN(num2)>1000000 ||(num1*num2>1000000)){
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }
    if(isNaN(num1<-1000000) || isNaN(num2)<-1000000 ||(num1*num2<(-1000000))){
        return res.status(400).json({
            status: "Error",
            message: "Underflow"
        })
    }
    let div =0;
    res.status(200).json({
        status: "Sucess",
        message: "the Division of given two numbers",
        div : num1 / num2
    }) 
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

 //module.exports = app;
