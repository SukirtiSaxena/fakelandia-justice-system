import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () =>
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>;

export default MainLayout;