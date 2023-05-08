const express =require('express') ;

const  Routes= express.Router()

Routes.get('/',(req,res,next)=>{
    res.status(201).json({
        messege:'this is get Route'
    })
})

Routes.post('/',(req,res,next)=>{
    const order ={
        Productid : req.body. Productid ,
        quantity:req.body.quantity
    }
    res.status(201).json({
        messege:'this is get Route',
        order:order
    })
})


Routes.get('/:Orderid',(req,res,next)=>{

    
    res.status(200).json({
        messege:'this is get Route',
        id :req.params.Orderid
    })
})
Routes.get('/:Orderid',(req,res,next)=>{

    
    res.status(200).json({
        messege:'this is get  Route with ID',
        id :req.params.Orderid
    })
})

Routes.delete('/:Orderid',(req,res,next)=>{

    
    res.status(200).json({
        messege:'order deleted',
        id :req.params.Orderid
    })
})

module.exports=Routes
