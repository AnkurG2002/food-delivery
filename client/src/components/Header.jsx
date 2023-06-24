import foody from "../assets/images/foody.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "./elements/Button";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Header({ cartCount }) {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const handleLogout = () => {
    // sessionStorage.removeItem("Auth token");
    // sessionStorage.removeItem("User Id");
    // window.dispatchEvent(new Event("storage"));
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => console.log(error));
    navigate("/");
  };

  useEffect(() => {
    // const checkAuthToken = () => {
    //   const token = sessionStorage.getItem("Auth token");
    //   if (token) {
    //     setIsLoggedIn(true);
    //   } else {
    //     setIsLoggedIn(false);
    //   }
    // };

    // window.addEventListener("storage", checkAuthToken);

    // return () => {
    //   window.removeEventListener("storage", checkAuthToken);
    // };

    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <nav id="header" className="bg-slate-800 text-white">
      <div className="container w-full mx-auto flex max-md:flex-col items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center justify-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={foody} alt="logo" className="w-40 h-40 object-cover" />
          </Link>
        </div>
        <div className="nav-menu-wrapper border-b flex items-center space-x-8">
          <Link to="/" className="text-xl border-r pr-8">
            Home
          </Link>
          <a href="/#about" className="text-xl">
            About
          </a>
        </div>
        <div className="flex items-center justify-center space-x-4 max-md:my-6">
          <Link to="/cart" className="mr-4 relative">
            <img src={cartIcon} alt="cart" />
            {cartCount > 0 && (
              <div className="rounded-full bg-red-600 text-white inline-flex justify-center items-center w-[100%] h-[80%] absolute -top-2 -right-3">
                {cartCount}
              </div>
            )}
          </Link>

          {/* {isLoggedIn ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )} */}

          {authUser ? (
            <div>
              <span className="mr-4">{authUser.email}</span>
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
