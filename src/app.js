const express = require('express')
const app = express()
require('./database/database')



const port = process.env.PORT || 4000

app.use(require('./middleware/Authenticate'))

if(process.env.NODE_ENV == "production"){
    const path = require('path')
    app.use(express.static("frontend/build"))
    
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}



app.listen(port , ()=>{
console.log(`Server connected at port no ${port}`)
})
