import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

function App() {
  var user = useSelector((state) => state.register.userLogin.loggedIn);
  console.log(user);

  return (
    <div className="App">
      <style>{"body   {background-color: rgba(135, 224, 236, 0.137)};"}</style>
      {user ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
