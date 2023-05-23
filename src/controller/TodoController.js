
export const getAll= (req, res) => {
      // console.log(todos)
      // res.send(`<h1>hello world again from routes</h1>`)
      res.send(todos);
    }

export const createTodo= (req, res) => {
    // console.log(req.body)
    // res.send("POST ROUTE REACHED");
    try {
      console.log("POST ROUTE REACHED");
      const todo = req.body;
      const todoId = uuidv4();
      const todoWithId = { ...todo, id: todoId };
      todos.push(todoWithId);
      res.status(200).json(todoWithId);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  export const getTodoById=(req, res) => {
    // console.log(req.params)
    // res.send(`<h1>THE GET ID ROUTE => Id : ${req.params.id}</h1>`)
   try{
      const { id } = req.params;
      const foundTodo = todos.find((todo) => todo.id == id);
      res.send(foundTodo);
   }catch(error){
      res.status(500).json({message:error.message})
   }
  }

  export const deleteTodo=(req,res)=>{
    const {id}=req.params;
    const deletedTodos=todos.filter((todo)=>todo.id!=id)
    res.send(deletedTodos)
}

export const updatedTodo=(req,res)=>{
    const {id}=req.params;
    const {fname,lname,email,age}=req.body
    const todoUpdated=todos.find((todo)=>todo.id==id)

    if(fname) todoUpdated.fname=fname;
    if(lname) todoUpdated.lname=lname;
    if(email) todoUpdated.email=email;
    if(age) todoUpdated.age=age;

    console.log(todos[5].fname)
    res.send(todoUpdated)
}
  