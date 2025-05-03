import "../styles/Page.css"

type Props = {

}

function Page(props: Props) {
    return (
        <div className="page-container">
            <h1>This is the page title</h1>
            <p>this is the page content</p>
            <hr />
        </div>
    )
}

export default Page;