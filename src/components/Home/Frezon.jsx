const Frezon = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8 ">Frozen Dolls</h1>
      <div className="grid md:grid-cols-3 gap-4 w-10/12 mx-auto m-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6001040901697-5?fmt=webp&qlt=70&wid=608&hei=608"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Belle Classic Doll Beauty and the Beast
            </h2>
            <p>price : $120</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6001040901698-5?fmt=webp&qlt=70&wid=608&hei=608"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Belle Classic Doll Beauty and the Beast
            </h2>
            <p>price : $120</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6001040901697-5?fmt=webp&qlt=70&wid=608&hei=608"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Belle Classic Doll Beauty and the Beast
            </h2>
            <p>price : $120</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frezon;
