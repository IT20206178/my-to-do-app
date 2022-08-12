import React, { FC, ChangeEvent, useState } from "react";
import "../styles/todo.css";
import TodoTask from "./TodoTask";
import { ITask } from "../Interfaces";


import { PageHeader } from "antd";

const TodoList: FC = () => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDate((event.target.value));
    }
  };
 

  const addTask = (): void => {
    const newTask = { taskName: task, date: date };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDate("");
   
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
       
      <PageHeader
        
        className="site-page-header"
        onBack={() => null}
        title="TO-DO Application"
        subTitle="Manage your TO-DO tasks here!!"
      />
     
      <div></div>
      <div className="header">
        <div className="inputContainer">
          <input
            placeholder="Enter Your TO-DO Item"
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
          />

          <input
           placeholder="Enter Your deadline"
            type="date"
            name="Priority"
            value={date}
            onChange={handleChange}
          />
           
          <br/>
           <button className="button" onClick={addTask} >
          Add TO-DO
        </button>
        </div>
       
       
        
      </div>
     
      
      <div className="todoList">
        <h1>Your TO-DO List</h1>
        {todoList.map((task: ITask ) => {          
            return <TodoTask  task={task}  completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
