import "react-tabs/style/react-tabs.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
const ReactTab = () => {
  const [dataList, setDataList] = useState([]);
  const [subCategory, setSubCategory] = useState(true);

  useEffect(() => {
    fetch(
      `https://assingment-eleven-server.vercel.app/getcategory?cat=${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((pd) => pd.subCategory == subCategory);
        setDataList(filter);
      });
  }, [subCategory]);

  const handleClick = () => {
    alert("Please login First");
  };
  // console.log(dataList);
  return (
    <div className=" px-8 py-4">
      <h1 className="text-3xl font-bold px-5  mt-5 text-center  ">
        {" "}
        Sub Category
      </h1>
      <Tabs className="md:px-5 md:m-4 ">
        <TabList className="text-xl font-bold text-emerald-900 hover:text-sky-800 m-8">
          <Tab onClick={() => setSubCategory("DisneyPrincess")}>
            Disney Princess
          </Tab>
          <Tab onClick={() => setSubCategory("FrozenDolls")}>Frozen Dolls</Tab>
          <Tab onClick={() => setSubCategory("DonaldDuck")}>Donald Duck</Tab>
        </TabList>
        <TabPanel>
          <div className="flex gap-4">
            {dataList.map((pd) => (
              <div className="card w-96 bg-base-100 shadow-xl " key={pd._id}>
                <figure className="px-10 pt-10">
                  <img src={pd.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{pd.name}</h2>
                  <p>Price : ${pd.price}</p>
                  <p>
                    <Rating
                      placeholderRating={pd.rating}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar />}
                      fullSymbol={<FaStar />}
                      className="p-1"
                    />
                  </p>
                  <div className="card-actions">
                    <Link
                      onClick={handleClick}
                      to={"/login"}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:flex gap-4">
            {dataList.map((pd) => (
              <div className="card w-96 bg-base-100 shadow-xl " key={pd._id}>
                <figure className="px-10 pt-10">
                  <img src={pd.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{pd.name}</h2>
                  <p>Price : ${pd.price}</p>
                  <p>
                    <Rating
                      placeholderRating={pd.rating}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar />}
                      fullSymbol={<FaStar />}
                      className="p-1"
                    />
                  </p>
                  <div className="card-actions">
                    <Link
                      onClick={handleClick}
                      to={"/login"}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-4">
            {dataList.map((pd) => (
              <div className="card w-96 bg-base-100 shadow-xl " key={pd._id}>
                <figure className="px-10 pt-10">
                  <img src={pd.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{pd.name}</h2>
                  <p>Price : ${pd.price}</p>
                  <p>
                    <Rating
                      placeholderRating={pd.rating}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar />}
                      fullSymbol={<FaStar />}
                      className="p-1"
                    />
                  </p>
                  <div className="card-actions">
                    <Link
                      onClick={handleClick}
                      to={"/login"}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;
