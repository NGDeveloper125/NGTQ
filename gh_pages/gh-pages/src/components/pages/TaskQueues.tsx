import "../../styles/pages/TaskQueues.css"
import NGTaskQueueBasic from "./task_queues/NGTaskQueueBasic";

function TaskQueues() {
    return (
        <div>
            <h1>Task-Queues</h1>
            <p>
                In this section you can find all the current task queue implementations of the NGTQ trait.<br/>
                This task queues can be uses in monolitic applications or as the domain of a communication service like message buses,<br/>
                Each contains different features and are better for different scnarios.<br/>   
            </p>
            <h3 className="task-queues-container-title">Current Task Queues Implementations</h3>
            <div className="task-queues-container">
                <NGTaskQueueBasic />
            </div>           
        </div>
    );
}

export default TaskQueues;