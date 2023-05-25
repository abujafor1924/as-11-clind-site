const UpdateData = ({ pd, handleDelete, id, setId }) => {
  // console.log(pd._id);
  const handleUpdate = (e) => {
    console.log(id);
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const update = { price, description, quantity };
    console.log(pd._id);
    fetch(`http://localhost:4000/update-data/${id._id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(update),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Product updated");
      });
  };

  return (
    <tbody key={pd._id}>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img
                  src={pd.photo}
                  alt="Avatar Tailwind CSS Component"
                  className="w-24 h-24"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{pd.name}</div>
              <div className="font-bold">Rating: {pd.rating}</div>
              <div className="text-sm opacity-50">
                {" "}
                Quantity : {pd.quantity}
              </div>
              <div className="font-bold">Price: {pd.price}</div>
            </div>
          </div>
        </td>
        <td>
          {pd.displayName}
          <br />
          <span className="badge badge-ghost badge-sm">{pd.email}</span>
        </td>
        <td>{pd.subCategory}</td>

        <th className="">
          {/* updated start */}
          <div>
            <label
              onClick={() => setId(pd)}
              htmlFor="my-modal-6"
              className="btn btn-accent"
            >
              Edit
            </label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                {/* up date toy star */}
                <form onSubmit={handleUpdate} className="p-8">
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
                    <div className="form-control flex">
                      <div className="modal-action mx-auto bg-green-400 p-4 rounded">
                        <input type="submit" value="update Button" />
                      </div>
                      <div className="modal-action mx-auto ">
                        <label htmlFor="my-modal-6" className="btn btn-info">
                          <button type="submit" value="X" />x
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                {/* up date toy End */}
              </div>
            </div>
          </div>
          {/* updated end */}
          <br />
          <button
            onClick={() => handleDelete(pd._id)}
            className="btn btn-warning"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default UpdateData;
