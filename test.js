const http = require("http")

const ourApp = http.createServer(function(req, res){
  if (req.url == "/") {
    res.end("Hello, and welcome to our home page.")
  }
  if (req.url == "/about") {
    res.end("Thank you for your interest in our Company.")
  }
  res.end("The page you've requested does not exist.")
})
ourApp.listen(3000)