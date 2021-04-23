// After running the application open http://localhost:3000/ in 2 browser tabs
// Next open the browser console / netwroks tab and reload both the page simultaniously and look into the time taken for each request
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
    const duration = 5000;
    haultTheServer(duration, reqArrivalTime);
    res.send("Whoorey its working ...");
});

app.listen(3000);
