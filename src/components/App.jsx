import "../styles/App.css";
import Layout from "./Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home"

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Login/> */}
      <Quiz />
    </Layout>
  );
}

export default App;
