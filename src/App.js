import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";

function App() {
    return (
        <div>
             <Nav />
             <BrowserRouter>
                 <Routes>
                     <Route exact path="/" element={<Home />} />
                     <Route path="/secured" element={<SecuredPage />} />
                 </Routes>
             </BrowserRouter>
        </div>
    );
}

export default App;