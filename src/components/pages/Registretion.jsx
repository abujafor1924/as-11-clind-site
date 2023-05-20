import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Registretion = () => {
  const [error, setError] = useState(" ");
  const [sucsess, setSuccess] = useState(" ");

  const { createUser, updateUser, logdOut } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // const userData = {
    //   name,
    //   email,
    //   photo,
    //   password,
    // };
    // console.log(userData);

    createUser(email, password)
      .then((result) => {
        const logeduser = result.user;
        console.log(logeduser);
        setSuccess("sing up success");
        form.reset();
        updateUser(name, photo)
          .then((result) => {
            console.log(result);
            logdOut()
              .then(() => {})
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-100 w-10/12 mx-auto">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registretion</h1>
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <p>{sucsess}</p>
            <p>{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                className="btn  btn-warning"
                type="submit"
                value="Registretion"
              />
            </div>
            <p>
              Alredy have a account?{" "}
              <Link to={"/login"} className="text-red-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registretion;
