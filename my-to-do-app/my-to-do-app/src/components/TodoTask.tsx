
import { ITask } from "../Interfaces";
import { Button } from "antd";


interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>

        <span>{task.date}</span>
      </div>

      <Button
        onClick={() => {
          completeTask(task.taskName);
        }}
       color="green"
       
      >
        {" "}
        clear{" "}
      </Button>
    </div>
  );
};

export default TodoTask;
