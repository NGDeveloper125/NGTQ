import "../styles/Page.css"
import About from "./pages/About";
import BusServices from "./pages/BusServices";
import Community from "./pages/Community";
import Conteributions from "./pages/Conteributions";
import PageNotFound from "./pages/PageNotFound";
import TaskQueues from "./pages/TaskQueues";

type Props = {
    currentPage: string
}

function GetPageContent(currentPage: string) {
    switch (currentPage) {
        case "About":
            return <About />;
        case "Task-Queues":
            return <TaskQueues />
        case "Bus-Services":
            return <BusServices />   
        case "Community":
            return <Community />
        case "Conteributions":
            return <Conteributions />
        default:
            return <PageNotFound />;
    }
}

function Page(props: Props) {
    return (
        <div className="page-container">
            {GetPageContent(props.currentPage)}
        </div>
    )
}

export default Page;