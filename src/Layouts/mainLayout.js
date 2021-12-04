import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Home from "../Components/Home"

const MainLayout = () =>
    <>
        <Header/>
        <main style={{flex:'1'}}>
            <Home/>
        </main>
        <Footer/>
    </>;

export default MainLayout;