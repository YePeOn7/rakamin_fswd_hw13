import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./pages/Login";
import RoootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Register from "./pages/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RoootLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="create" element={<Create />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
