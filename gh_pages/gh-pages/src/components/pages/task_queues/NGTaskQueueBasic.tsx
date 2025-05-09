import { useState } from "react";
import "../../../styles/pages/TaskQueue.css"

function NGTaskQueueBasic() {
    let [expend, setExpend] = useState(false);
    return (
        <div className={expend ? "queue-container-extended" : "queue-container"}>
            <div className="queue-title-container">
                <h3 className="queue-title">NGTask Queue Basic</h3>
                <a className="see-details-btn" onClick={() => setExpend(expend ? false : true)}>{expend ? 'Less Details' : 'More Details'}</a>
            </div>
            <div>
                {expend && (
                <div className="expended-section-titles-container">
                    <div className="description-containr">
                        <h4 className="description-title">Description</h4>
                        <p className="description-text">
                            An in memory queues manager, <br />
                            Allowing simple and fast push and pull <br />
                            Of tasks and following of the queues size.
                        </p>
                    </div>
                    <div className="include-container">
                        <h4 className="include-title">Include</h4>
                        <ul>
                            <li>In memory queue</li>
                            <li>Id based queue</li>
                            <li>Category based queue</li>
                            <li>Single thread task manager</li>
                        </ul>
                    </div>
                    <div className="not-include-container">
                        <h4 className="not-include-title">Not-Include</h4>
                        <ul>
                            <li>Database based queue</li>
                            <li>Recover tasks after crash</li>
                            <li>Multithreaded task manager</li>
                        </ul>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default NGTaskQueueBasic;