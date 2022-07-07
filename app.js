//to run http://localhost:8080/number/5
// import express 
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;
var mynum;
let isPrime = true;
let isinvalid =false;
// create a route for the app
app.get('/number/:num', (req, res) => {
  
 mynum =req.params.num;
 //check for -ve , 0 and 1
 if (mynum < 2) {
    isinvalid =true;
    }
// check to find prime
 for (let i = 2; i < mynum; i++) {
    if (mynum % i == 0) {
        isPrime = false;
        break;
    }
}
if (isinvalid) {
    isPrime = true;
    isinvalid =false;
    res.send("The number  "+ mynum + " is neither prime nor composite");
} else if (isPrime && !isinvalid) {
    isPrime = true;
    res.send("The number  "+ mynum + " is prime");
} else  {
    isPrime = true;
    res.send("The number  "+ mynum + " is composite");
}

});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
  console.log('Ashmit kaushik');
  
});
//BY ASHMIT KAUSHIK 10D
