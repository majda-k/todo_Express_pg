import { getTasksService , createTaskService , updateTaskService , deleteTaskService  } from '../services/serviceTask.js' 




export const getTask = async (req, res) => {

    try {
        const tasks = await getTasksService();
        res.status(200).json(tasks)
    }
    catch (err) {
        res.status(500).json({ error: err.message})

    }

}


export const createTask = async(req, res) => {
    try {
        const {text , isDone , priority} = req.body
        const task = await createTaskService(text, isDone, priority) 
        res.status(200).json({message: "Added succesfuly" , task})

    }catch(err){
        res.status(500).json({ error: err.message })
    }

}


export const updateTask = async(req, res) => {
    try {
        const id = req.params.id
        const {text , isDone , priority} = req.body
        
          const updatedTask = await updateTaskService(id, text, isDone, priority)

        res.status(200).json({message: "updated succesfuly" , updatedTask})
       

    }catch(err){
        res.status(500).json({ error: err.message })
    }

}



export const deleteTask = async(req, res) => {
    
        try {
            const id = req.params.id
            const deletedTask = await deleteTaskService(id)
            res.status(200).json({message: "deleted succesfuly !!" , deletedTask})
    
        }catch(err){
            res.status(500).json({ error: err.message })
        }
    
}   