import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";

const ProtectRout = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loding) {
    return (
      <div className="  mt-20 md:w-96 mx-auto ">
        <button className="btn btn-square text-cyan-500 loading mx-auto"></button>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default ProtectRout;
