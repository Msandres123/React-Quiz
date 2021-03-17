//This page is just setting up basic express server
const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 5000
const staticDir = path.resolve('./client/public/build') 

//Set up Static File Server
app.use(express.static(staticDir))

//Create path to './index.html' page, and direxcts user to index.html
app.get('/', (req, res) => {
    
    res.sendFile(staticDir + 'index.html')
})

//Tell the express 
app.listen(port, () => console.log('Quiz Server Running on port', port))