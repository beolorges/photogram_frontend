import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login/Login";

function myRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default myRoutes;