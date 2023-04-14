const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{

   const query = req.body.cityName;

   const apiKey = 'ad57b38323b8e02cad35fcdd2aceb0d4';
   const unit = "metric";
   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid= " + apiKey +"&units=" + unit;
   https.get(url, (response)=>{
     console.log(response);

     response.on("data", (data)=>{
       const weatherDetails = JSON.parse(data);
       //console.log(weatherDetails);
       // converts JSON string to JavaScript Object, JSON.stringify does the opposite
       console.log(weatherDetails);
       // var temp = weatherDetails.main.temp;
       // //console.log(temp);
       // const description = weatherDetails.weather[0].description;
       // const icon = weatherDetails.weather[0].icon;
       // const icon_url = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
       // //console.log(description);
       // res.write("<p>The weather is currently " + description + "<p>");
       // res.write("<h1>The temperature in " + query +" is " + temp + "</h1>");
       // res.write("<img src=" + icon_url + ">")
       // res.send();
     });
   });
 })




app.listen(3000, ()=>{
  console.log("Server is running on port 3000");
})
