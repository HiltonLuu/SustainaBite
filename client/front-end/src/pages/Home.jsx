import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import carrotImage from "../assets/carrot.png";

const Home = () => {
  const { setCurrentUser } = useContext(UserContext);

  const setOrg = (org) => {
    setCurrentUser(org);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-pink-400 to-yellow-400 via-white text-white">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <h1 className="text-8xl">SustainaBite</h1>
          <img src={carrotImage} width={300} alt="Carrot" />
        </div>
        <h1 className="font-bold text-7xl mb-10">
          The marketplace for food surplus
        </h1>
        <div className="flex justify-center space-x-4">
          <Link to="/sign-in">
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => setOrg("business")}
            >
              Business
            </button>
          </Link>

          <Link to="/sign-in">
            <button
              className="btn btn-accent btn-lg"
              onClick={() => setOrg("not-for-profit")}
            >
              Non-Profit
            </button>
          </Link>

          <Link to="/sign-in">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setOrg("donate")}
            >
              Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
