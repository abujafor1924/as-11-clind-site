import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const Login = () => {
  const { singIn, googleLoge } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  useTitle("Login");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSinging = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
      .then((result) => {
        const userLogin = result.user;

        console.log(userLogin);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(`email or password dos'nt match`);
      });
  };

  const handleGoogle = () => {
    googleLoge()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSinging} className="card-body">
            <p className="text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-warning" type="submit" value="Login" />
            </div>
            <button onClick={handleGoogle} className="btn btn-circle mx-auto">
              G
            </button>
            <p>
              have no Account?{" "}
              <Link className="text-amber-500" to={"/registretion"}>
                sing up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
