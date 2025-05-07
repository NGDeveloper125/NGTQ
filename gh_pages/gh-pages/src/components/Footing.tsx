import "../styles/Footing.css"

type Props = {

}

function Footing(props: Props) {
    return (
        <div className="footing-container">
            <div className="footing-sections">
                <div className="conterbuters-section">
                    <h3 className="title">Project Contributers</h3>
                    <ul className="list">
                        <li>NGDeveloper | ngdeveloper125@outlook.com</li>
                    </ul>
                </div>
                <div className="related-projects-section">
                    <h3 className="title">Related Projects</h3>
                    <ul className="list">
                        <li>NGTQ - <a className="link" href="https://github.com/NGDeveloper125/NGTQ">go to repo</a></li>
                        <li>NGTaskQueue Basic - <a className="link" href="https://github.com/NGDeveloper125/NGTaskQueue_Basic">go to repo</a></li>
                        <li>NGTQ-Unix-Bus-Service - <a className="link" href="https://github.com/NGDeveloper125/NGTQ-Unix-Bus-Service">go to repo</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footing;