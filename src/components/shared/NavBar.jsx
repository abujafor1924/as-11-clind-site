import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logdOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logdOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-sky-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/all-toys"}>All Toys</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to={"/my-toys"}>My Toys</Link>
                </li>
                <li>
                  <Link to={"/add-toys"}>Add A Toy</Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
              <Link to={"/blog"}> Blogs</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-4xl font-semibold text-white">
          Iyad Shop
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/all-toys"}>All Toys</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to={"/my-toys"}>My Toys</Link>
              </li>
              <li>
                <Link to={"/add-toys"}>Add A Toy</Link>
              </li>
            </>
          ) : (
            ""
          )}
          <li>
            <Link to={"/blog"}> Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              className="w-16 h-16 rounded-full p-2"
              src={user.photoURL}
              alt=""
              title={user?.displayName}
            />
            <button onClick={handleLogOut} className="btn  btn-warning">
              Log Out
            </button>
          </>
        ) : (
          <Link to={"/login"} className="btn  btn-warning">
            Loging
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
