// Steps To run the program:
// After running the application open http://localhost:3000/ in 1 browser tab 
// and in another browser tab open http://localhost:3000/load url
// Next open the browsers console / netwroks tab and reload both the page simultaniously and look into the time taken to serve each request
// You can find that the second tab response gets served after the first request gets completed 
// From here you can get to know that server is unable to process both the request parallely
const express = require('express');
const app = express();

function haultTheServer(duration, reqArrivalTime){
    console.log(`haultTheServer() is called from :  ${reqArrivalTime}`);
    const start = Date.now();
    while(Date.now() - start < duration){
        console.log(`Server is Idle from :  ${reqArrivalTime}`);
    }
    console.log("Server released ...");
}
app.get('/', (req, res) => {
    const reqArrivalTime = new Date();
    const duration = 10000;
    haultTheServer(duration, reqArrivalTime);
    res.send(`Whoorey its working --> Req Came at ${reqArrivalTime}, Response Sent At :${new Date()}`);
});

app.get('/load', (req, res) => {
    const reqArrivalTime = new Date();
    res.send(`Loaded the /load route --> Req Came at ${reqArrivalTime}, Response Sent At :${new Date()}`);
});

app.listen(3000);

