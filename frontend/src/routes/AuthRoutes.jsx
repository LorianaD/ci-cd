import { Route, Routes } from "react-router";
import { LoginPage, RegisterPage } from "../pages";

function AuthRoutes() {
    return (
        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
        </Routes>
    )
}

export default AuthRoutes;