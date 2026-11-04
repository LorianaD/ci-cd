import { Route, Routes } from "react-router"
import AuthRoutes from "./AuthRoutes.jsx";
import DashboardRoutes from "./DashboardRoutes.jsx";

function AppRoutes () {
    return (
        <Routes>
            <Route path="/*" element={<AuthRoutes />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
    );
}

export default AppRoutes