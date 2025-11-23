import { db } from '../db_Postgresql/db_Postresql.js'
import { TasksQueries } from '../services/serviceTask.js'


        export const getTasksRepository = async () => {
            const tasks = await db.unsafe(TasksQueries.getTask);
            return tasks;
        }
        export const createTaskRepository = async (text, isDone, priority) => {
            const createdTask = await db.unsafe(TasksQueries.createTask, text, isDone, priority);
            return createdTask;
        }

        export const updateTaskRepository = async (id, text, isDone, priority) => {
            const updatedTask = await db.unsafe(TasksQueries.updateTask, id, text, isDone, priority);
            return updatedTask;
        }

        export  const deleteTaskRepository = async (id) => {
            const deletedTask = await db.unsafe(TasksQueries.deleteTask, id);
            return deletedTask;
        }