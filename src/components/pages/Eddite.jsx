const Eddite = () => {
  return (
    <div>
      <h1 className="text-center p-4 text-3xl font-bold">Update product</h1>
      <form>
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
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                placeholder="Category"
                name="category"
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
                //  value={user?.email}
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
                //  value={user?.displayName}
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
              <input
                type="text"
                placeholder="Sub-category"
                name="subcategory"
                className="input input-bordered"
              />
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
                type="text"
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
          <div className="form-control mr-4 w-full">
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

export default Eddite;
