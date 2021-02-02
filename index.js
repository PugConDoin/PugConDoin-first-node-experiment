// standard setup variables to call and express
const express = require("express")
const ourApp = express()

// boilerplate express to enable request on html post line 23
ourApp.use(express.urlencoded({extended: false}))

// get request on server from browser homepage "/"
// function(req, res) res is the response wesend 
ourApp.get('/', function(req, res){
  res.send(`
  <form action="/answer" method="POST">
    <p>What color is the sky on a clear and sunny day?</p>
    <input name="skyColor" autocomplete="off">
    <button>Sumbit Answer</button>
  </form>
  `)
})

// requires express.urlencoded line 6
// if statement to check value of input 'skyColor' = name of form input from line 14 
ourApp.post('/answer', function(req, res){
  if (req.body.skyColor.trim().toUpperCase() == "BLUE"){
    res.send(`
      <p>Congrats, that's the correct answer</p>
      <a href="/">Back to Homepage</a>
    `)
  } else {
    res.send(`
      <p>Sorry, that's not right</p>
      <a href="/">Back to Homepage</a>
    `)
  }
})

ourApp.get('/answer', function(req, res){
  res.send("Are you lost? Nothing to see here.")
})

ourApp.listen(3000)