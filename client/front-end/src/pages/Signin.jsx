import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import carrotImage from "../assets/carrot.png";

const Signin = () => {
  const { currentUser } = useContext(UserContext);

  const determinePath = () => {
    switch (currentUser) {
      case "business":
        return "/business";
      case "not-for-profit":
        return "/not-for-profit";
      case "donate":
        return "/donate";
    }
  };

  let path = determinePath();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-pink-400 to-yellow-400 via-white text-white">
      <div className="text-center">
        <h1 className="font-bold text-7xl mb-10">Login</h1>
        <div className="flex flex-col space-y-10">
          <div className="flex items-center mr-20 text-black">
            <span className="mr-2">Username:</span>
            <input type="text" className="bg-blue-200 p-2 rounded-md" />
          </div>

          <div className="flex items-center text-black mr-20">
            <span className="mr-2">Password:</span>
            <input type="text" className="bg-blue-200 p-2 rounded-md" />
          </div>

          <Link to={path}>
            <button className="btn btn-primary btn-lg">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
