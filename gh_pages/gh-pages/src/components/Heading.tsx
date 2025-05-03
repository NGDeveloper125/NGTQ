import "../styles/Heading.css"

type Props = {
    pages: string[],
    currentPage: string
}

function Heading(props: Props) {
    return (
     <div className="heading-container">
        <div className="title">
            <h1>NGTQ Eco-System</h1>
        </div>
        <div className="bar-container">
        <ul  className="bar">
            {props.pages.map((page, index) => (
                <li key={index} className={ page === props.currentPage ? 'selected bar-item' : 'non-selsected bar-item'}>{page}</li>
            ))}
        </ul>
        </div>
     </div>   
    )
}

export default Heading;