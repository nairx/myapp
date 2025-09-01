import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
export default function Header() {
  const { currentCustomer, setCurrentCustomer } = useContext(AppContext);
  return (
    <div>
      <h1 style={{ backgroundColor: "orange" }}>My Application</h1>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/cart">Cart</Link>&nbsp;|&nbsp;
      {Object.keys(currentCustomer).length === 0 ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/profile">Profile</Link>
      )}
      &nbsp;|&nbsp;
      <Link to="/scoreboard">ScoreBoard</Link>&nbsp;|&nbsp;
      <Link to="/spin">SpinButton</Link>&nbsp;|&nbsp;
      <Link to="/lifecycle">LifeCycle</Link>&nbsp;|&nbsp;
      <Link to="/title">Title</Link>&nbsp;|&nbsp;
      <Link to="/students">Students</Link>&nbsp;|&nbsp;
      <Link to="/useEffectExample">UseEffectExample</Link>&nbsp;|&nbsp;
      <Link to="/navbutton">Navbutton</Link>&nbsp;|&nbsp;
      <Link to="/users">Users</Link>
      <hr />
    </div>
  );
}
