import { Router } from "express";

import {
  createTodo,
  getTodos,
  updatedTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id", updatedTodo);
router.delete("/:id", deleteTodo);

export default router;
