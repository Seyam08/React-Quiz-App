import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
            <Route exact path="/" element={<Home />} />
            <Route path="/" element={<PublicOutlet />}>
              <Route exact path="signup" element={<Signup />} />
              <Route exact path="login" element={<Login />} />
            </Route>
            <Route path="/" element={<PrivateOutlet />}>
              <Route exact path="quiz/:id" element={<Quiz />} />
              <Route exact path="result" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
