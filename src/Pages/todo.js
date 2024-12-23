import React, { useState, useEffect, useContext } from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import TaskFilter from "../components/TaskFilter";
import "./todo.css";
import {FirstContext} from "./Acceuil"


export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const {IsDark,setIsDark} = useContext(FirstContext)
  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks([
      ...tasks,
      { id: Date.now(), name: taskName, status: "Planifié" },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newName) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task))
    );
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "" || task.status === filterStatus)
    );
  });

  return (
    <div>
    <button style={{ border: 'none', float: 'right', background: 'none', cursor: 'pointer' }} className='BlackMode' onClick={() =>setIsDark(!IsDark) }  >
    {!IsDark ? <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/do-not-disturb-2.png" alt="do-not-disturb-2" /> : <img width="48" height="48" src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png" alt="do-not-disturb-2" />}
    </button>
    <div className={IsDark ? "SunMode" : "NightMode" }>
        <div style={{display:"flex"}}>
          
         {IsDark ?<img src="/Logo2-removebg-preview.png" alt="Karim "style={{width:170}} /> :<img src="/Logo2.png" alt="Karim "style={{width:170}} /> } 
        
        </div>
        <h1 style={{justifyContent:"center"}} >FlowPlanner</h1>
      
      <TaskFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <AddTask onAddTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
        onUpdateTaskStatus={updateTaskStatus}
      />
    </div>
    </div>
  );
}
