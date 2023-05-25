const Update = ({ pd }) => {
  // console.log(pd);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const update = { price, description, quantity };

    fetch(`http://localhost:4000/update-data/${pd._id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(update),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Product updated");
      });
  };
  return (
    <div>
      <label htmlFor="my-modal-6" className="btn btn-accent">
        Edit
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* up date toy star */}
          <form onSubmit={handleUpdate}>
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
              <div className="form-control">
                <div className="modal-action mx-auto">
                  <label htmlFor="my-modal-6" className="btn btn-info">
                    <input type="submit" value="Submit" />
                  </label>
                </div>
              </div>
            </div>
          </form>

          {/* up date toy End */}
        </div>
      </div>
    </div>
  );
};

export default Update;
