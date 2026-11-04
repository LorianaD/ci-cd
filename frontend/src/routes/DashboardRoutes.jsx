import { Route, Routes } from "react-router";
import { DashboardHomePage } from "../pages";
import { Sidebar } from "../components";

function DashboardRoutes() {
    return (
        <Routes>
            <Route element={<Sidebar/>}>
                <Route index element={<DashboardHomePage/>}/>
            </Route>
        </Routes>
    )
}

export default DashboardRoutes;