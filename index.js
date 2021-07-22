const express=require('express')
const app=express()
// const cors=require('cors')
const port =  3005 ;
const {mongoose}=require('./config/database')
// const {routes}=require('./config/routes')





app.use(express.json())
// app.use(cors())
// app.use('/',routes)
app.use('/users',require('./routes/user'))
app.use('/product',require('./routes/product'))
app.use('/brand',require('./routes/brand'))
app.use('/category',require('./routes/category'))
app.use('/address',require('./routes/address'))
app.use('/order',require('./routes/order'))

// const path = require('path')
// app.use(express.static(path.join(__dirname, 'client/build')))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'))
// }) 
app.listen(port,()=>{
    console.log('lisiting on port',port)
})
