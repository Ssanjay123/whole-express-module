const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
const adminRouter = require("./router/admin")
const shopRouter = require("./router/shop")

app.use('/admin',adminRouter)
app.use('/shop',shopRouter)

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})
app.listen(3000);