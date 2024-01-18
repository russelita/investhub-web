import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./pages/NoMatchScreen/NoMatch";
import Home from "./pages/HomeScreen/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import EmailConfirm from "./pages/EmailConfirm/EmailConfirm";
import ChangeEmail from "./pages/ChangeEmail/ChangeEmail";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ForgotPasswordForm from "./pages/ForgotPasswordForm/ForgotPasswordForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email-confirm" element={<EmailConfirm />} />
          <Route path="/email-change" element={<ChangeEmail />} />
          <Route path="/password-forgot" element={<ForgotPassword />} />
          <Route
            path="/password-forgot-form"
            element={<ForgotPasswordForm />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
