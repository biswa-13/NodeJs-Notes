# NodeJs-Notes
It will work as a nodeJS notes for reference.
## 1. NodeJS Performance 🦖
#### Note : IF you want the video series then please go through this link (https://www.youtube.com/watch?v=7GKzby-LhHo&list=PLKu4a5OPnvu6-u8-w7D_QAQg2FmCCvC5-&index=1) here the author has described it so nicely about all the concepts.

###### How the code in nodejs runs.
![image](https://user-images.githubusercontent.com/8691837/115772225-7a925b80-a3cc-11eb-9f2e-230e5904c652.png)

##### 1.0. How Event Loop Works
![image](https://user-images.githubusercontent.com/8691837/115775605-ba5b4200-a3d0-11eb-94e1-9eda05c4c3dc.png)

#### 1.1. Is NodeJs is Single Threading or Multiple Threading:
* Though the NodeJs is said to be single threaded but there are some pre-defined functions available in it which runs in multi threaded way with the help of UV library.

#### 1.2. NodeJS Single Thread Demonstration :
* If the application includes complex processing its always advicable to start the node application in Clustering mode, in which their will be multiple copy of the same application created and runs, where as in 

![image](https://user-images.githubusercontent.com/8691837/115834653-15258580-a433-11eb-9300-81308ca57137.png)
###### img: Demonstaration of Single Thread Problem
* The flow of a node applicatioin without enabling the cluster looks like below, in which whenevere the node application starts and the index.js file gets executted a Single Node Instance used to be created and it is responssible for handling all the operations/requests. Which may lead to above problem.

![image](https://user-images.githubusercontent.com/8691837/115837372-22903f00-a436-11eb-9d85-f67ae19b0a45.png)
###### Single Threaded Node application execution 

##### Demonstaration of Single Thread Problem (https://github.com/biswa-13/NodeJs-Notes/blob/main/2_Node_SingleThreadRunningProblemDemo.js)

#### 1.2. NodeJs Performance Enhancements :
We can enhance the performance of the Node application in two ways <br/>
1. By Clustering
2. Through Worker Threads
![image](https://user-images.githubusercontent.com/8691837/115824343-69296d80-a425-11eb-949b-2a2a1fd6690e.png)
#### 1.3. Clustering in Node:
* Clustering can be enabled in the node by  "cluster.fork()" available in the "cluster" module which is a default pkg available and does not needs any installation.


![image](https://user-images.githubusercontent.com/8691837/115836052-a47f6880-a434-11eb-864d-4fde23a68a46.png)
###### Node Clustering Architecture
* Whenever the node application runs with the clustering below depicted execution happends, in which first the index.js gets executed and it creates a "Cluster Manager" and this "Cluster Manager" is responssible to run multiple copies of the index.js in "Worker Threads" with the help of the "cluster.fork()".

![image](https://user-images.githubusercontent.com/8691837/115836962-b44b7c80-a435-11eb-9aeb-88082b18b88f.png)
* Clustering demo using the core cluster module (https://github.com/biswa-13/NodeJs-Notes/blob/main/3_CoreClusteringDemo.js) , it is not advicable in real-life scenario, it's good only for the study prupose.

#### 1.4. Using Worker Threads:
![image](https://user-images.githubusercontent.com/8691837/115878149-d6f58980-a465-11eb-80df-afea5e7862bd.png)
##### Worker-thread architecture
* Follow this short tutorial for setup and execution (https://www.youtube.com/watch?v=JZgQeS03d-U&list=PLKu4a5OPnvu6-u8-w7D_QAQg2FmCCvC5-&index=31)

