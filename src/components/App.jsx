import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="/" element={<PublicOutlet />}>
              <Route path="signup" element={<Signup />} />
              <Route exact path="login" element={<Login />} />
            </Route>
            <Route path="/" element={<PrivateOutlet />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
              <Route path="/quiz" element={<Navigate to="/" />} />
              <Route path="/result" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
