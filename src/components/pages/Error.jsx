import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold p-4">404 error?</h1>
      <Link to={"/"} className="btn btn-secondary">
        Home
      </Link>
    </div>
  );
};

export default Error;
