const dataUpdate = ({ pd, handleDelete }) => {
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
        <td>{pd.category}</td>
        <td>{pd.description}</td>
        <th className="">
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

export default dataUpdate;
