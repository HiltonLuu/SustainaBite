import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Home = () => {
  const { setCurrentUser } = useContext(UserContext);

  const setOrg = (org) => {
    setCurrentUser(org);
  };

  return (
    <div className="flex justify-center space-x-4 w-full">
      <Link to="/business">
        <button
          className="btn btn-secondary"
          onClick={() => setOrg("business")}
        >
          Business
        </button>
      </Link>

      <Link to="/not-for-profit" onClick={() => setOrg("not-for-profit")}>
        <button className="btn btn-accent">Not for Profit</button>
      </Link>
    </div>
  );
};

export default Home;
