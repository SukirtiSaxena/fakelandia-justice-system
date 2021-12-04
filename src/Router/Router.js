import { Route, Routes } from "react-router";
import Confession from "../Components/Confession";
import Home from "../Components/Home";
import Misdemeanour from "../Components/Misdemeanour";
import MainLayout from "../Layouts/mainLayout";

const Router = () =>
    <Routes>
      
            <Route path="/" element={<Home />} />
            <Route path="/misdemeanour" element={<Misdemeanour />} />
            <Route path="/confession" element={<Confession />} />
            <Route path="/*" element={<Home />} />
    
    </Routes >;

export default Router;