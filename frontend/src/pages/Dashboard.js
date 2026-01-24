import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import api from "../api/axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("tasks/").then((res) => setTasks(res.data));
  }, []);

  const pendingTasks = tasks.filter(t => t.status === "pending");
  const inProgressTasks = tasks.filter(t => t.status === "in_progress");
  const completedTasks = tasks.filter(t => t.status === "completed");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Column title="Pending" tasks={pendingTasks} />
      <Column title="In Progress" tasks={inProgressTasks} />
      <Column title="Completed" tasks={completedTasks} />
    </div>
  );
};

const Column = ({ title, tasks }) => {
  return (
    <div style={{ width: "30%" }}>
      <h3>{title}</h3>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

const TaskCard = ({ task }) => {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "8px" }}>
      <strong>{task.title}</strong>
      <p>{task.description?.slice(0, 50)}</p>
      <small>Due: {task.due_date || "N/A"}</small>
    </div>
  );
};

export default Dashboard;
