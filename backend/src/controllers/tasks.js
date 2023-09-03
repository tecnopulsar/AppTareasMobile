import { connectDB } from "../database";

export const getTasks = async (req, res) => {
  const connectionDB = await connectDB();
  const [rows] = await connectionDB.query("SELECT * FROM tasks");
  res.json(rows);
};
export const getTask = async (req, res) => {
  const connectionDB = await connectDB();
  const [rows] = await connectionDB.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  res.send(rows[0]);
};
export const getTasksCount = async (req, res) => {
  const connectionDB = await connectDB();
  const [rows] = await connectionDB.query("SELECT COUNT(*) FROM tasks");
  res.json(Object.values(rows[0])[0]);
};

export const createTask = async (req, res) => {
  res.send("Hello World!");
};
export const deleteTask = async (req, res) => {
  const connectionDB = await connectDB();
  await connectionDB.query("DELETE FROM tasks WHERE id = ?", [
    req.params.id])
    res.sendStatus(204);
};
export const saveTask = async (req, res) => {
  const connectionDB = await connectDB();
  const result = await connectionDB.query(
    "INSERT INTO tasks(title, description) values (?,?)",
    [req.body.title, req.body.description]
  );
  // console.log(result[0].insertId);
  res.json({
    id: result[0].insertId,
    title: req.body.title,
    description: req.body.description,
  });
};
export const updateTask = async (req, res) => {
  const connectionDB = await connectDB();
  await connectionDB.query('UPDATE tasks SET ? WHERE id = ?',
  [req.body, req.params.id])
  res.sendStatus(204);
};
