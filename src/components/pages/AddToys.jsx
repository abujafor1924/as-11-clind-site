import { useContext, useState } from "react";

import { AuthContext } from "./../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");
  useTitle("Add-Toys");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const price = parseInt(form.price.value);
    const subCategory = selectedOption;
    const rating = parseInt(form.rating.value);
    const quantity = form.quantity.value;
    const email = form.email.value;
    const displayName = form.displayName.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const uplodData = {
      name,
      price,
      subCategory,
      rating,
      photo,
      description,
      quantity,
      displayName,
      email,
    };
    // console.log(uplodData);

    fetch("https://assingment-eleven-server.vercel.app/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uplodData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("added your product");
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-center p-4 text-3xl font-bold">Add toy Product</h1>
      <form onSubmit={handleSubmite}>
        <div className="flex mx-8">
          <div className="form-control mr-4 w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control mr-4 w-1/2">
            <label className="label">
              <span className="label-text">Photo Url </span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="url"
                placeholder="Photo "
                name="photo"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <div className="flex mx-8">
          <div className="form-control mr-4 w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="email"
                value={user?.email}
                name="email"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">saler Name</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                value={user?.displayName}
                name="displayName"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <div className="flex mx-8">
          <div className="form-control mr-4 w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <label className="input-group input-group-vertical">
              <select
                className="select select-bordered w-full "
                onChange={handleSelectChange}
                value={selectedOption}
              >
                <option selected>select sub category</option>
                <option value={"DisneyPrincess"}> Disney Princess</option>
                <option value={"FrozenDolls"}> Frozen dolls</option>
                <option value={"DonaldDuck"}>Donald Duck</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex mx-8">
          <div className="form-control mr-4 w-1/2">
            <label className="label">
              <span className="label-text">Rating </span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="number"
                placeholder="Rating "
                name="rating"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <div className=" mx-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group input-group-vertical">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Bio"
                name="description"
              ></textarea>
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical py-4">
              <input className="btn bg-sky-800" type="submit" value="submit" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
