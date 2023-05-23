import express, { application } from "express";
import todos from "../../todos.js";
import { v4 as uuidv4 } from "uuid";
import { createTodo,getTodoById,deleteTodo,updatedTodo,getAll } from "../controller/TodoController.js";
const router = express.Router();

const eg = [
  {
    fname: "John",
    lname: "Doe",
    age: 35,
  },
  {
    fname: "Jane",
    lname: "Doe",
    age: 30,
  },
];

//@ getting all todos
// router.get("/", (req, res) => {
//   // console.log(todos)
//   // res.send(`<h1>hello world again from routes</h1>`)
//   res.send(todos);
// });

//@ getting todo by id
// router.get("/:id", deleteTodo);

//@ adding a todo
// router.post("/",createTodo);

//@ deleting a todo
// router.delete('/:id',deleteTodo)

//@ updated a particular value in a todo
// router.patch('/:id',updatedTodo)
router.route("/").get(getAll)
.post
.apply(createTodo)

router.route("/:id")
.get(deleteTodo)
.delete(deleteTodo)
.patch(updatedTodo)

export default router;
