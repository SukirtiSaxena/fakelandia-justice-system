import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () =>
    <>
        <Header />
        <Outlet/>
        <p>Welcome to the home of the Justice Department of Fakelandia.</p>
        <p>Here you can browse a list of recent misdemeanours committed by our citizens, or
            you can confess to your own misdemeanour.
        </p>
        <Footer />
    </>;

export default MainLayout;