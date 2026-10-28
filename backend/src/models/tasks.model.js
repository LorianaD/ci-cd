import db from "../db/db.js";

async function createTaskModel({ title, description, status, userId }) {
    const [result] = await db.query(
        "INSERT INTO tasks(title, description, status, user_id) VALUES (?,?,?,?)", 
        [title, description, status, userId]
    );
    return result;
}

async function getAllTaskModel(userId) {
    const [tasks] = await db.query(
        "SELECT * FROM tasks WHERE user_id = ?",
        [userId]
    );
    return tasks;
}

async function getByIdModel(id, userId) {
    const tasks = await db.query(
        "SELECT * FROM tasks WHERE id = ? AND user_id = ?",
        [id, userId]
    )
    return tasks[0] ?? null;
}

async function updateTaskModel(id, userId, data ){
    await db.query(
        "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ? AND user_id = ?",
        [data.title, data.description, data.status, id, userId]
    );
};

async function deleteTaskModel(id, userId) {
    await db.query(
        "DELETE FROM tasks WHERE id = ? AND user_id = ?"
        [id, userId]
    );
};

export {
    createTaskModel,
    getAllTaskModel,
    getByIdModel,
    updateTaskModel,
    deleteTaskModel
}