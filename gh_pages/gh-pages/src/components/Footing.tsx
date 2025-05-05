import "../styles/Footing.css"

type Props = {

}

function Footing(props: Props) {
    return (
        <div className="footing-container">
            <hr/>
            <div className="footing-sections">
                <div className="conterbuters-section">
                    <p>Project Contributers</p>
                    <ul>
                        <li>NGDeveloper | ngdeveloper125@outlook.com</li>
                    </ul>
                </div>
                <div className="related-projects-section">
                    <p>Related Projects</p>
                    <ul>
                        <li>NGTQ - <a href="https://github.com/NGDeveloper125/NGTQ">go to repo</a></li>
                        <li>NGTaskQueue Basic - <a href="https://github.com/NGDeveloper125/NGTaskQueue_Basic">go to repo</a></li>
                        <li>NGTQ-Unix-Bus-Service - <a href="https://github.com/NGDeveloper125/NGTQ-Unix-Bus-Service">go to repo</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footing;