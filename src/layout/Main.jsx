import { Outlet } from "react-router-dom";
import Home from "../pages/home/Home";

const Main = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Main;