const Tabular = ({ pd }) => {
  // const { photo, name, quantity, rating, displayName, email, category } = pd;
  return (
    <div className="overflow-x-auto w-full p-4 ">
      <table className="table w-full ml-8 p-4">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Categtory</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Tabular;
