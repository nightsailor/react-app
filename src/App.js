import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = localStorage.getItem("user")
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">{user ? <Home /> : <Register />}</Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>

        {user && (
          <>
            <Route path="/chat" exact><Home /></Route>

            <Route path="/travel" exact><Home /></Route>

            <Route path="/tourista" exact><Home /></Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
