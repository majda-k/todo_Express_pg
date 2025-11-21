import express, { Router } from "express"
import db from '../app.js'

const router = express.Router()


router.get("/tasks", async (req, res) => {

    try {
        const tasks = await db `SELECT * FROM tasks`
        res.status(200).json(tasks)
    }
    catch (err) {
        res.status(500).json({ error: err.message })

    }

})

router.post("/tasks", async(req, res) => {
    try {
        const {text , isDone , priority} = req.body
        const [task] = await db `INSERT INTO tasks (text , "isDone" , priority) VALUES (${text || ""} , ${isDone || false} , ${priority || null})
        RETURNING*`
        res.status(200).json({message: "Added succesfuly" , task})

    }catch(err){
        res.status(500).json({ error: err.message })
    }

})

router.put("/tasks/:id", async(req, res) => {
    try {
        const id = req.params.id
        const {text , isDone , priority} = req.body
        
        const [task] = await db `UPDATE tasks SET text = ${text} , "isDone"=${isDone} , priority=${priority}
        WHERE id =${id}
        RETURNING*`
        res.status(200).json({message: "updated succesfuly" , task})
       

    }catch(err){
        res.status(500).json({ error: err.message })
    }

})

router.delete("/tasks/:id", async(req, res) => {
    try {
        const id = req.params.id
        await db `DELETE FROM tasks Where id= ${id}`
        res.status(200).json({message: "deleted succesfuly !!" })

    }catch(err){
        res.status(500).json({ error: err.message })
    }
});

export default router