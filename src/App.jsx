import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
    console.log(props);

    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks?.map((task) => (
      <Todo id={task.id} 
            name={task.name} 
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
      />
    ));

    function toggleTaskCompleted(id) {
      console.log(tasks[0]);
    }

    function addTask(name) {
      const newTask = { id: `todo-${nanoid()}`, name, completed: false };
      setTasks([...tasks, newTask]); //añadimos al array existente la nueva tarea
    }

    const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} tasks remaining`;

    return (
    <div className="todoapp stack-large">
      <h1 hidden={false}>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
    </div>
  );
}

export default App;
