import express from "express"

import postgres from "postgres";

import tasksRoute from './Routes/taskRoute.js'


const app = express();

const port = 3000;


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 




app.use(tasksRoute)

app.use("/tasks" , tasksRoute)


//run migration command

app.listen(port, () => {
console.log(`listenning on port: ${port}`)
});


