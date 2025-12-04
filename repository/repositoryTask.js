import { db } from '../db_Postgresql/db_Postresql.js'
// import { TasksQueries } from '../services/serviceTask.js'


        export const getTasksRepository = async () => {
            const tasks = await db `SELECT * FROM tasks`;
            return tasks;
        }
        export const createTaskRepository = async (text, isDone, priority) => {
            const createdTask = await db `INSERT INTO tasks (text , "isDone" , priority) VALUES (${text} , ${isDone} , ${priority}) RETURNING *`;
            return createdTask;
        }

        export const updateTaskRepository = async (id, text, isDone, priority) => {
            const updatedTask = await db `UPDATE tasks SET text = ${text} , "isDone" = ${isDone} , priority = ${priority} WHERE id = ${id} RETURNING *`;
            return updatedTask;
        }

        export  const deleteTaskRepository = async (id) => {
            const deletedTask = await db `DELETE FROM tasks WHERE id = ${id} RETURNING *`;
            return deletedTask;
        }