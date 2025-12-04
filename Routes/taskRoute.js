import express, { Router } from "express"

import { getTask, createTask, updateTask, deleteTask } from '../controllers/taskController.js'


const router = express.Router()


router.get("/", getTask);

router.post("/", createTask)

router.put("/:id", updateTask)

router.delete("/:id", deleteTask);

export default router