import { getTasksRepository , createTaskRepository , updateTaskRepository , deleteTaskRepository } from '../repository/repositoryTask.js'

export const getTasksService = async () => {
    const tasks = await getTasksRepository();
    return tasks;
}

export const createTaskService = async (text, isDone, priority) => {
    const task = await createTaskRepository(text, isDone, priority);
    return task;
}

export const updateTaskService = async (id, text, isDone, priority) => {
    const task = await updateTaskRepository(id, text, isDone, priority);
    return task;
}

export const deleteTaskService = async (id) => {
    const task = await deleteTaskRepository(id);
    return task;
}