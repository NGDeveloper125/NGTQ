import "../../styles/pages/About.css"
import NGTQLayerArc from "../../assets/NGTQLayerArc.png";

type Props = {
    setCurrentPage: (currentPage: string) => void
}

function About(props: Props) {
    return (
        <div>
            <div className="top-page-section">
                <div className="top-page-section-left">
                    <h1 className="title">About NGTQ</h1>
                    <p>
                        Welcome to the NGTQ ecosystem - a new approach to task queue management in Rust.<br/>
                        At its core, NGTQ provides a standardized trait interface that defines how task queues should behave<br/> 
                        And creating an abstraction layer between services and task queues implementation. <br /> 
                        Making it easier for developers to create, use, and switch between different queue implementations.<br/>
                    </p>

                    <h3 className="title">The Core Trait</h3>
                    <p>
                        The heart of our ecosystem is the NGTQ trait, which defines a comprehensive interface for task queue operations.<br/> 
                        This trait provides two primary queue types:<br/>
                        <ul>
                            <li>ID-Based Queues : Perfect for scenarios where you need to track and retrieve specific tasks by their unique identifiers.</li>
                            <li>Category-Based Queues : Ideal for organizing and processing tasks based on their types or categories.</li>
                        </ul>
                        The trait ensures that all implementations provide essential operations like:<br/>
                        <ul>
                            <li>Task enqueueing with both ID and category-based approaches</li>
                            <li>Task retrieval methods</li>
                            <li>Queue size monitoring</li>
                            <li>Robust error handling through the custom NGTQError type</li>
                        </ul>
                    </p>
                </div>
                <div className="top-page-section-right">
                <img className="diagram-image" src={NGTQLayerArc} alt="NGTQ Layer Architecture" />
                </div>
            </div>
            <h3 className="title">Task Queue Implementations</h3>
            <p>
                The NGTQ ecosystem includes various implementations of the core trait.<br/>
                To check our task queues implementations: <span className="task-queues-page-button" onClick={() => props.setCurrentPage("Task-Queues")}>Task-Queues</span>
                <br/>Each implementation follows the NGTQ trait specification while potentially adding its own optimizations and features for specific use cases.
            </p>

            <h3 className="title">Bus Services</h3>
            <p>
                The NGTQ trait's flexible design allows it to be extended into message bus services.<br/>
                These services implement the NGTQ trait while providing additional messaging and communication capabilities,<br/>
                Making them perfect for distributed systems and microservice architectures.<br/>
                To check out Bus-Services: <span className="bus-services-page-button" onClick={() => props.setCurrentPage("Bus-Services")}>Bus-Services</span>
            </p>

            <div className="open-source-section">
                <h3 className="open-source-section-title">Open Source and Community-Driven</h3>
                <p>
                    NGTQ is an open source under the MIT License, welcoming contributions from developers worldwide.
                    <br/> Whether you're interested in:
                    <ul className="open-source-section-list">
                        <li>Implementing the NGTQ trait for your specific use case</li>
                        <li>Improving existing implementations</li>
                        <li>Creating new tools around the ecosystem</li>
                        <li>Documenting and sharing your experiences</li>
                    </ul>
                    Check it out at: <a href="https://github.com/NGDeveloper125/NGTQ">NGTQ Github Repo</a><br />
                    We encourage you to get involved!
                </p>
            </div>
            <div className="community-contribution-section">
                <div>
                    <h3 className="title">Join Our Community</h3>
                    <p>
                        We believe in the power of community-driven development.<br /> If you're interested in:
                        <ul>
                            <li>Getting help with implementation</li>
                            <li>Sharing your experiences</li>
                            <li>Suggesting new features</li>
                            <li>Reporting issues</li>
                        </ul>
                        <p>
                            Go to - 
                            <span className="community-page-button" onClick={() => props.setCurrentPage("Community")}> Community Page</span> 
                        </p>
                    </p>
                </div>
                <div>
                    <h3 className="title">Contributing To The Project</h3>
                    <p>
                        New Contributers are welcom!<br/> Check out our Contributions page for guidelines on:
                        <ul>
                            <li>Setting up your development environment</li>
                            <li>Our coding standards</li>
                            <li>The pull request process</li>
                            <li>Ways to contribute beyond code</li>
                        </ul>
                        <p>
                            Go to - <span className="contribution-page-button" onClick={() => props.setCurrentPage("Contribution")}> Contribution Page</span> 
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;