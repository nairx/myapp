import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import LoginUseState from "./components/LoginUseState.jsx";
import LoginUseRef from "./components/LoginUseRef.jsx";
import Counter from "./components/Counter.jsx";
import Cart from "./components/Cart.jsx";
import Register from "./components/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScoreBoard from "./components/ScoreBoard.jsx";
import SpinButton from "./components/SpinButton.jsx";
import LifeCycle from "./components/LifeCycle.jsx";
import Title from "./components/Title.jsx";
import Students from "./components/Students.jsx";
import UseEffectExample from "./components/useEffectExample.jsx";
import Users from "./components/Users.jsx";
import NavButton from "./components/NavButton.jsx";
import Profile from "./components/Profile.jsx";
export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState({});
  return (
    <div>
      <AppContext.Provider
        value={{
          cart,
          setCart,
          customers,
          setCustomers,
          currentCustomer,
          setCurrentCustomer,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginUseState />} />
            <Route path="register" element={<Register />} />
            <Route path="scoreboard" element={<ScoreBoard />} />
            <Route path="cart" element={<Cart />} />
            <Route path="spin" element={<SpinButton />} />
            <Route path="lifecycle" element={<LifeCycle />} />
            <Route path="title" element={<Title />} />
            <Route path="students" element={<Students />} />
            <Route path="useEffectExample" element={<UseEffectExample />} />
            <Route path="navbutton" element={<NavButton />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
