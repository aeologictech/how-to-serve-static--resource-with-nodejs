// Requiring Express from node modules
const express = require('express');

// Requiring Path from node modules
const path = require('path')

// @ADD this, to require dotenv and configure it
const dotenv = require('dotenv').config();

// Creating express instance and save it to app variable
const app = express()

// Setup the app to serve static files
app.use(express.static(path.join(__dirname, './public')))

// Setup our express server with env port
let port = process.env.PORT;
app.listen(port, ()=>{
  console.log(`App is running on port ${ port }`)
})

//An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer.

