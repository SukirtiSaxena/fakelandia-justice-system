import { Route, Routes } from "react-router";
import Confession from "../Components/Confession";
import Home from "../Components/Home";
import Misdemeanour from "../Components/Misdemeanour";
import MainLayout from "../Layouts/mainLayout";
import NotFound from "../Components/NotFound";

const Router = () =>
    <Routes>
      
            <Route path="/" element={<Home />} />
            <Route path="/misdemeanour" element={<Misdemeanour />} />
            <Route path="/confession" element={<Confession />} />
            <Route path="*" element={<NotFound />} />
    
    </Routes >;

export default Router;