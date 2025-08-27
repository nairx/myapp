import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1 style={{ backgroundColor: "orange" }}>My Application</h1>
         <Link to="/">Home</Link>&nbsp;|&nbsp;
         <Link to="/cart">Cart</Link>&nbsp;|&nbsp;
        <Link to="/login">Login</Link>&nbsp;|&nbsp;
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
