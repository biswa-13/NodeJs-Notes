// Below is the program to demonstrate the Clustering
// After running the application open http://localhost:3000/ in 1 browser tab 
// and in another browser tab open http://localhost:3000/load url
// Next open the browsers console / netwroks tab and reload both the page simultaniously and look into the time taken to serve each request
// You can find that the second tab response gets served paralley with the first request
// From here you can get to know that the application is running on a cluster

const express = require('express');
const cluster = require('cluster');
const app = express();
console.log("cluster.isMaster -->",cluster.isMaster);

if(cluster.isMaster){
    // It will act like the Cluster Manager
    cluster.fork(); // cause index.js to be exceuted again in child mode/ slave mode
    cluster.fork(); // creating workerThreads
    cluster.fork(); // creating workerThreads
}else{
    // It will act as a child which will behave like am express server

    if (process.send === undefined) { 
        console.log('started directly');
      } else {
        console.log('started from fork()');
      }


    function haultTheServer(duration, reqArrivalTime){
        console.log(`haultTheServer() is called from :  ${reqArrivalTime}`);
        const start = Date.now();
        while(Date.now() - start < duration){
           // console.log(`Server is Idle from :  ${reqArrivalTime}`);
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
}
