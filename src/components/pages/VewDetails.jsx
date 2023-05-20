import { useLoaderData } from "react-router-dom";

const VewDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    photo,
    name,
    displayName,
    email,
    price,
    quantity,
    description,
    rating,
  } = details;
  return (
    <div className="card card-side bg-base-100 shadow-xl m-6">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name : {name}</h2>
        <h2 className="card-title">seller name : {displayName}</h2>
        <h2 className="card-title">Email : {email}</h2>
        <h2 className="card-title">Price : {price}</h2>
        <h2 className="card-title">Quantity : {quantity}</h2>
        <h2 className="card-title">Rating : {rating}</h2>
        <p>DetailsProduct : {description}</p>
      </div>
    </div>
  );
};

export default VewDetails;
