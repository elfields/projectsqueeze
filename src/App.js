import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Listen from "./pages/Listen/Listen";
import User from "./pages/User/User";
import LoginModal from "./components/Modal/LoginModals/LoginModal";
import AccountCreateModal from "./components/Modal/AccountModals/AccountCreationModal";
import Navbar from "./components/Navbar/NavbarMain";

// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/listen/:id" element={<Listen />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" component={<AccountCreateModal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

