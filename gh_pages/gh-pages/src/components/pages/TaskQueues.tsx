import NGTaskQueueBasic from "./task_queues/ngtask_queue_basic";

function TaskQueues() {
    return (
        <div>
            <h1>Task-Queues</h1>
            <p>
                In this section you can find all the current task queue implementations of the NGTQ trait.<br/>
                This task queues can be uses in monolitic applications or as the domain of a communication service like message buses,<br/>
                Each contains different features and are better for different scnarios.<br/>
                You can find implementaion instructions, pros and cons and banchmark for each task queue. <br/>   
            </p>
            <h3>Current Task Queues Implementations</h3>
            <div>
                <NGTaskQueueBasic />
            </div>           
        </div>
    );
}

export default TaskQueues;