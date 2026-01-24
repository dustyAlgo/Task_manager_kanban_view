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
    <DragDropContext onDragEnd={() => {}}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Column title="Pending" droppableId="pending" tasks={pendingTasks} />
        <Column title="In Progress" droppableId="in_progress" tasks={inProgressTasks} />
        <Column title="Completed" droppableId="completed" tasks={completedTasks} />
      </div>
    </DragDropContext>
  );
};


const Column = ({ title, tasks, droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ width: "30%", minHeight: "300px" }}
        >
          <h3>{title}</h3>

          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};


const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "8px",
            background: "#fff",
            ...provided.draggableProps.style,
          }}
        >
          <strong>{task.title}</strong>
          <p>{task.description?.slice(0, 50)}</p>
          <small>Due: {task.due_date || "N/A"}</small>
        </div>
      )}
    </Draggable>
  );
};

export default Dashboard;
