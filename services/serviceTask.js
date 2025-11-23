

export const TasksQueries = {

     getTask: `SELECT * FROM tasks`,  
    createTask: `INSERT INTO tasks (text , "isDone" , priority) VALUES ($1 , $2 , $3) RETURNING *`,
    updateTask: `UPDATE tasks SET text = $1 , "isDone" = $2 , priority = $3 WHERE id = $4 RETURNING *`,
    deleteTask: `DELETE FROM tasks WHERE id = $1 RETURNING *`,

}

