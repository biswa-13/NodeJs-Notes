# NodeJs-Notes
It will work as a nodeJS notes for reference.
#### Note : IF you want the video series then please go through this link (https://www.youtube.com/watch?v=7GKzby-LhHo&list=PLKu4a5OPnvu6-u8-w7D_QAQg2FmCCvC5-&index=1) here the author has described it so nicely about all the concepts.
###### How the code in nodejs runs.
![image](https://user-images.githubusercontent.com/8691837/115772225-7a925b80-a3cc-11eb-9f2e-230e5904c652.png)

#### Is NodeJs is Single Threading or Multiple Threading:
* Though the NodeJs is said to be single threaded but there are some pre-defined functions available in it which runs in multi threaded way with the help of UV library.


##### How Event Loop Works
![image](https://user-images.githubusercontent.com/8691837/115775605-ba5b4200-a3d0-11eb-94e1-9eda05c4c3dc.png)

### NodeJs Performance Enhancements :
We can enhance the performance of the Node application in two ways <br/>
1. By Clustering
2. Through Worker Threads
* If the application includes complex processing its always advicable to start the node application in Clustering mode, in which their will be multiple copy of the same application created and runs, where as in 
![image](https://user-images.githubusercontent.com/8691837/115824343-69296d80-a425-11eb-949b-2a2a1fd6690e.png)

#### Demonstaration of Single Thread Problem (https://github.com/biswa-13/NodeJs-Notes/blob/main/2_Node_SingleThreadRunningProblemDemo.js)

![image](https://user-images.githubusercontent.com/8691837/115834653-15258580-a433-11eb-9300-81308ca57137.png)
###### img: Demonstaration of Single Thread Problem

#### 1. Clustering in Node:
* Clustering can be enabled in the node by  "fork()" available in the "cluster" module which is a default pkg available and does not needs any installation.
![image](https://user-images.githubusercontent.com/8691837/115836052-a47f6880-a434-11eb-864d-4fde23a68a46.png)
###### Node Clustering Architecture


