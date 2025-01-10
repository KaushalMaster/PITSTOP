import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import RegisterComplainService from "./Pages/RegisterComplainService/RegisterComplainService";
import NotFound from "./Pages/NotFound/NotFound"; // Import the NotFound component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user/sign-in/login" element={<SignIn />} />
          <Route path="/user/register/sign-up" element={<SignUp />} />
          <Route path="/user/data/dashboard" element={<Dashboard />} />
          <Route
            path="/user/vehicle/problem"
            element={<RegisterComplainService />}
          />

          {/* Catch-all route for 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
