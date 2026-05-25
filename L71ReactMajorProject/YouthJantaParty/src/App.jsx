import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YouthJantaForm from "./components/YouthJantaForm";
import SuccessPage from "./components/SuccessPage";
import { CssBaseline } from "@mui/material";

function App() {
    return (
        <Router>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<YouthJantaForm />} />
                <Route path="/form/:id" element={<YouthJantaForm />} />
                <Route path="/success/:id" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;
