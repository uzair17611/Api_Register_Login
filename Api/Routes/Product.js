const express =require('express')
const mongoose =require('mongoose')
const Routes =express.Router();
const Product =require ('../Routes/model/product')

Routes.get('/',function(req,res,next){
      res.status(200).json({
        message:'this is get routes'
      })
})

Routes.post('/',function(req,res,next){
    
    const product =new Product({
      id  : new mongoose.Types.ObjectId(),
      name:req.body.name,
      price:req.body.price
    })
    product.save()
    .then(result =>{
      console.log(result)
      res.status(201).json({
        message:'this is post routes',
        createdProduc:product
      })
    })
   
    .catch(err =>{
      console.log(err)
    })
    
})
Routes.get('/:Productid',(req,res,next)=>{
    const id =req.params.Productid
    if(id=== 'specail'){
    res.status(200).json({
        messege:'this is special'
    })
}
else{
    res.status(200).json({
        messege:'have your id'
    })
}
})

Routes.patch('/',function(req,res,next){
    
    res.status(200).json({
      message:'this is patch routes'
    })
})
Routes.delete('/',function(req,res,next){
    
    
    res.status(200).json({
      message:'this is Delete routes'
    })
})

module.exports=Routes;