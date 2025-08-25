import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1 style={{ backgroundColor: "orange" }}>My Application</h1>
         <Link to="/">Home</Link>&nbsp;|&nbsp;
         <Link to="/cart">Cart</Link>&nbsp;|&nbsp;
        <Link to="/login">Login</Link>
      <hr />
    </div>
  );
}
