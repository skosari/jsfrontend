var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { response } = require('express');
//var app = require('express')();//If you need to reference it again seperate the var from the function

app.use(bodyParser.json());//app.use is middleware - layer of code that your requests will go through to get to the code below - bodyParser.json will prep the incoming data to be clean JSON formated data
app.use(bodyParser.urlencoded({extended: false}));//when data comes in we work with arrays and strings and reject other stuff http://expressjs.com/en/resources/middleware/body-parser.html

var ingredients = [{"id":"432rrd","text":"Eggs"},{"id":"432rrf","text":"Butter"},{"id":"432rrg","text":"Milk"},{"id":"432rrh","text":"Salt"},{"id":"432rrj","text":"Ketchup"}]//Since were not usingt a database yet

app.get('/', function(require,response){//When a get request hits the root ('/') we run a function with a request and a response - the browser can read raw get requests
  // response.send('My First API Using the request.send command');//You MUST have a response for a get request
  response.send(ingredients)
});// the .send will convert our string to JSON

//This is how we post to our server - were using postman to do it since the browser doesnt suppost raw post requests.?.
app.post('/', function(request, response){//when post to root url '/'
  var ingredient = request.body;//assign the data request.body to our variable
    if (!ingredient || ingredient.text === ''){//if there is no data coming in or the text element is an empty string
      response.status(500).send({error: "Your ingredient must have som freakin text"})//send an error in a key so it can be looked up
    } else {//else add this ingredient to our ingredients array and respond with a 200(everything ok) and send back the ingredient we just pushed
      ingredients.push(ingredient);
      response.status(200).send(ingredients);
    }
  })

//the :colon means its a URL parameter then in postman body we just enter in our new text {"text":"Bacon"}
//localhost:3000/ingredients/432rrd  
app.put('/ingredients/:ingredientId', function(request,response){//Modify data using a 'put'
      //Notice the syntax of the url and how we append the :ingredientId - we pass this in as a paramenter on the url
  let newText = request.body.text;//grab the text from the body
  if(!newText || newText === "") {//if the text is empty or null
    response.status(500).send({error: 'Nothing to modify'})//respond with an error
  } else {//else set ing to the ingredients object[x] and if their id's match we can modify our ingredient[x].text and stop/break our loop
      for (let x = 0; x < ingredients.length; x++) {
        let ing = ingredients[x];
        if(ing.id === request.params.ingredientId) {//express is grabbing the info we need from the request.params
          ingredients[x].text = newText;
          break;
        }
      }
      response.send(ingredients)//now we send back the new ingredients array to the user
  }
});//

app.delete('/ingredients/:id', function(request, response){
  let idCheck = request.params.id;
  const myReg = new RegExp(/^\d{3}[a-zA-Z]{3}$/);
  
  // console.log(idCheck)
  // console.log(myReg.test(idCheck))
  // console.log(idCheck)
  // console.log(request.params.id)
  // console.log(myReg.test(idCheck))
  
  if(!myReg.test(idCheck)){
    response.status(500).send({error: "please enter a correct id number "});
  } else {
    var objectFound = false;
    for (let i=0; i < ingredients.length; i++) {
      if(ingredients[i].id === request.params.id){
        ingredients.splice(i,1)
        objectFound = true;
        break;
      } 
    }
    if(!objectFound){
      response.status(500).send({error: 'That object does not exist'});
    } else{
      response.send(ingredients);
    }
  }
});

app.get('/nottheroot', function(req, res){
  res.send('Wow this is like REST API I think?');
})

app.listen(3000, function() {//listen on port 3000 and run our function
  console.log("first API running on port 3000")
});




