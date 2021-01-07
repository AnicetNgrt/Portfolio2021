import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"
import CenterBody from "../src/components/CenterBody/CenterBody"
import CodeResume from "../src/components/CodeResume/CodeResume"

export default function HomePage({props}) {
    return <div className="page-container">
        <Header/>
        <CenterBody>
            <HomePageContent/>
            <CodeResume/>
        </CenterBody>
        <Footer/>
    </div>
}

function HomePageContent({props}) {
    return <div>
        <h1>Anicet Nougaret</h1>
        
    </div>
}