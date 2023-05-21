const pic4 =
  "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6001040901706-5?fmt=webp&qlt=70&wid=608&hei=608";
const pic3 =
  "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6001040901694-5?fmt=webp&qlt=70&wid=608&hei=608";
const pic2 =
  "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6001040901703-5?fmt=webp&qlt=70&wid=608&hei=608";
const pic1 =
  "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002059731814-3?fmt=webp&qlt=70&wid=608&hei=608";
const NewAdd = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Top Categories</h1>
      <div className="grid md:grid-cols-3 gap-2 w-10/12 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={pic1} alt="Shoes" className="rounded-xl w-full" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={pic2} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={pic3} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={pic4} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={pic3} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={pic2} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default NewAdd;
