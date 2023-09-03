import { Router } from "express";
import {
  deleteTask,
  getTask,
  getTasks,
  getTasksCount,
  saveTask,
  updateTask,
} from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: tasks
 *   description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Summary all tasks
 *    tags: [tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *    get:
 *      summary: Summary count all tasks
 *      tags: [tasks]
 */
router.get("/tasks/count", getTasksCount);

/**
 * @swagger
 * /tasks:
 *    get:
 *      summary: get task by id
 *      tags: [tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 *    post:
 *      summary: save a new task
 *      tags: [tasks]
 */
router.post("/tasks", saveTask);

/**
 * @swagger
 * /tasks:
 *    delete:
 *      summary: delete especific id task
 *      tags: [tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks:
 *    put:
 *      summary: update specific id task
 *      tags: [tasks]
 */
router.put("/tasks/:id", updateTask);

export default router;
