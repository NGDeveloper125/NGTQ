

function About() {
    return (
        <div>
            <h1>About NGTQ</h1>
            <p>
                Welcome to the NGTQ ecosystem - a new approach to task queue management in Rust.<br/>
                At its core, NGTQ provides a standardized trait interface that defines how task queues should behave,<br/> 
                making it easier for developers to create, use, and switch between different queue implementations.<br/>
            </p>

            <h3>The Core Trait</h3>
            <p>
                The heart of our ecosystem is the NGTQ trait, which defines a comprehensive interface for task queue operations.<br/> 
                This trait provides two primary queue types:<br/>
                <ul>
                    <li>1. ID-Based Queues : Perfect for scenarios where you need to track and retrieve specific tasks by their unique identifiers.</li>
                    <li>2. Category-Based Queues : Ideal for organizing and processing tasks based on their types or categories.</li>
                </ul>
                The trait ensures that all implementations provide essential operations like:<br/>
                <ul>
                    <li>Task enqueueing with both ID and category-based approaches</li>
                    <li>Task retrieval methods</li>
                    <li>Queue size monitoring</li>
                    <li>Robust error handling through the custom NGTQError type</li>
                </ul>
            </p>

            <h3>Task Queue Implementations</h3>
            <p>
                The NGTQ ecosystem includes various implementations of the core trait. Our current flagship implementation is:
                <ul>
                    <li>NGTaskQueue Basic : A lightweight, in-memory implementation perfect for getting started with NGTQ or for applications with straightforward queuing needs.</li>
                </ul>
                Each implementation follows the NGTQ trait specification while potentially adding its own optimizations and features for specific use cases.
            </p>

            <h3>Bus Services</h3>
            <p>
                The NGTQ trait's flexible design allows it to be extended into message bus services.<br/>
                These services implement the NGTQ trait while providing additional messaging and communication capabilities,<br/>
                making them perfect for distributed systems and microservice architectures.
            </p>

            <h3>Open Source and Community-Driven</h3>
            <p>
                NGTQ is proudly open source under the MIT License, welcoming contributions from developers worldwide. Whether you're interested in:
                <ul>
                    <li>Implementing the NGTQ trait for your specific use case</li>
                    <li>Improving existing implementations</li>
                    <li>Creating new tools around the ecosystem</li>
                    <li>Documenting and sharing your experiences</li>
                </ul>
                We encourage you to get involved!
            </p>

            <h3>Getting Started</h3>
            <p>
                To start using NGTQ in your Rust projects, simply add the core trait to your Cargo.toml :
            </p>
            <p className="code">
                toml<br/>
                [dependencies]<br/>
                ngtq = "0.1.0"<br/>
            </p>
            <h3>Join Our Community</h3>
            <p>
                We believe in the power of community-driven development. If you're interested in:
                <ul>
                    <li>Getting help with implementation</li>
                    <li>Sharing your experiences</li>
                    <li>Suggesting new features</li>
                    <li>Reporting issues</li>
                </ul>
                Visit our Community page to connect with other developers and share your thoughts.
            </p>
            <h3>Contributing</h3>
            <p>
                Want to contribute to NGTQ? We'd love your help! Check out our Contributions page for guidelines on:
                <ul>
                    <li>Setting up your development environment</li>
                    <li>Our coding standards</li>
                    <li>The pull request process</li>
                    <li>Ways to contribute beyond code</li>
                </ul>
                Together, we're building the future of task queue management in Rust.<br/>
                Join us in making NGTQ even better!<br/><br/>

                <span>
                    Note: For the latest discussions, announcements, and updates, don't forget to check our Community page.<br/> 
                    If you're interested in contributing, our Contributions page has all the information you need to get started.
                </span>
            </p> 
        </div>
    );
}

export default About;