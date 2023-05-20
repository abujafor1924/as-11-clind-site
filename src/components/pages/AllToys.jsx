import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitle";

const AllToys = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  useTitle("All-Toys");
  useEffect(() => {
    fetch("http://localhost:4000/all-data", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:4000/getText/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };
  return (
    <div>
      {/* <h1>All toyes : {product.length}</h1> */}
      <div className="p-6 ml-[38%]">
        <div className="form-control mx-auto">
          <div className="input-group">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto px-4">
        <table className="table table-compact w-full ">
          <thead>
            <tr>
              <th>#</th>
              <th>Saler</th>
              <th>Product Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="mx-4">
            {product.map((li, index) => (
              <tr key={li._id}>
                <th>{index + 1}</th>
                <td>{li.displayName}</td>
                <td>{li.name}</td>
                <td>{li.subCategory}</td>
                <td>Price : ${li.price}</td>
                <td>Quantity : {li.quantity}</td>
                <td>
                  <button className="btn btn-accent">
                    <Link to={`/vew/${li._id}`}>Vew Details</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
