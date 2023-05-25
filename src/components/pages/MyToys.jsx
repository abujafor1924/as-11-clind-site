import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import UpdateData from "./UpdateData";
import useTitle from "../../hook/useTitle";
import { useNavigate } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [id, setId] = useState({});
  useTitle("My-Toys");
  const [myProduct, setMyProduct] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [sorting, setSorting] = useState("asc");

  useEffect(() => {
    fetch(
      // `https://assingment-eleven-server.vercel.app/some-data?email=${user?.email}`,
      `http://localhost:4000/some-data?sort=${sorting}&email=${user?.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "iyad-shop-access-token"
          )}`,
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMyProduct(data);
        } else {
          navigate("/");
        }
      });
  }, [sorting, user, navigate]);

  const handleDelete = (id) => {
    const proside = confirm("Are You Sure Delete?");
    if (proside) {
      fetch(`https://assingment-eleven-server.vercel.app/delete-data/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Youre Data Is Deleted");

            const remaining = myProduct.filter((book) => book._id !== id);
            setMyProduct(remaining);
          }
        });
    }
  };

  // console.log(sorted);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSorting(event.target.value);
    // console.log(event);
    // console.log(selectedOption);
  };
  return (
    <div>
      <div className="form-control w-48 ml-20 mt-10">
        <label className="input-group input-group-vertical">
          <select
            className="select select-bordered w-full text-2xl font-semibold ml-3 "
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option selected>sort by price</option>
            <option value={"desc"}> Accending</option>
            <option value={"asc"}> Dissending</option>
          </select>
        </label>
      </div>
      {/* <h1>My Toyes : {myProduct.length}</h1> */}
      <div className="overflow-x-auto w-full p-4 ">
        <table className="table w-full ml-8 p-4">
          {/* head */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Sub Categtory</th>

              <th>Delet&Update</th>
              <th></th>
            </tr>
          </thead>

          {myProduct.map((pd) => (
            <UpdateData
              key={pd._id}
              pd={pd}
              handleDelete={handleDelete}
              setId={setId}
              id={id}
            ></UpdateData>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
