const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.set("/" , "html")
app.use(express.static(path.join(__dirname, "/")))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/', (req,res) =>{
    res.send('hello world!!!')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})