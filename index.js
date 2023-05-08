const express= require ('express')
const morgan =require ('morgan')
const bodyParser =require('body-parser');
const mongoose =require('mongoose')


const app =express();
const CreateRoute =require ('./Api/Routes/Product')
const OrderRoutes =require('./Api/Routes/Order')

mongoose.connect('mongodb+srv://myAdmin:OqLjdkqcoTCLl01u@cluster12.dzst6cc.mongodb.net/test')
    // useMongoClient:true

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

// app.use((req,res,next)=>{
// res.header('Access-Control-Allow-Origin', '*')
// res.header ('Access-Control-Allow-Header',
//             'origin X-Requested-With ,Content-Type ,Accept ,Authorization '
// )
// if (req.method = 'OPTIONS'){
//     res.header ('Access-Control-Allow-Method' ,'PUT ,POST ,PATCH , GET ,DELETE')
//     res.status(200).json({})
// }
// next()
// })

app.use('/Product' ,CreateRoute);
app.use('/Order' ,OrderRoutes);
app.use((req,res,next)=>{
    const error =new Error ('Not Found');
    error.status=404;
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})

module.exports=app