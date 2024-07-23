import { Link } from "react-router-dom";
import logo from "../assets/PostSnap Logo-small.png";

const NavBar = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full bg-gray-100">
        <img src={logo} alt="postsnap logo" className="w-[130px] "/>
        <div>
          <ul className="flex mx-10 text-2xl">
            <Link to="/home"><li className="mx-10">Home</li></Link>
            <Link to="/profile"><li className="mx-10">Profile</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
