import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import UpdateData from "./UpdateData";
import useTitle from "../../hook/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [id, setId] = useState({});
  // const [sort, setSort] = useState("accend");
  useTitle("My-Toys");

  const [myProduct, setMyProduct] = useState([]);

  useEffect(() => {
    fetch(
      `https://assingment-eleven-server.vercel.app/some-data?email=${user?.email}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setMyProduct(result);
      });
  }, [user, myProduct]);

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

  // useEffect(() => {
  //   fetch(`https://assingment-eleven-server.vercel.app/sortData?sort=${sort}`)
  //     .then((res) => res.json())
  //     .then((data) => setSort(data));
  // }, [sort]);
  // console.log(sort);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
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
            <option value={1}> Accending</option>
            <option value={-1}> Dissending</option>
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
