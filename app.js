import express from "express"

import postgres from "postgres";

import tasksRoute from './Routes/taskRoute.js'

const app = express();

const port = 3000;


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 



// db connection
const db = postgres('postgresql://adminer:1234@localhost:5431/mabase')


try{
    await db `SELECT 1`
    console.log("database connected !!!")

}catch(err){
    console.log("database Not connected !!!")
}
export default db 

app.use(tasksRoute)

//run migration command

app.listen(port, () => {
console.log(`listenning on port: ${port}`)
});

