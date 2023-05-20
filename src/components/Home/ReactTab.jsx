import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
const ReactTab = () => {
  const [dataList, setDataList] = useState([]);
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    fetch(
      `https://assingment-eleven-server.vercel.app/all-datas/${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => setDataList(data));
  }, [subCategory, dataList]);

  const handleClick = () => {
    alert("Please Login  now ");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold px-5 mt-5 "> Sub Category</h1>
      <Tabs className="px-5 m-4 ">
        <TabList
          // onChange={handleSubCategoryChange}
          className="text-xl font-bold text-emerald-900 hover:text-sky-800"
        >
          <Tab onClick={() => setSubCategory("DisneyPrincess")}>
            Disney princess
          </Tab>
          <Tab onClick={() => setSubCategory("FrozenDolls")}>frozen dolls</Tab>
          <Tab onClick={() => setSubCategory("AnimationCharacters")}>
            animation characters
          </Tab>
        </TabList>

        {dataList.length > 0 ? (
          dataList.map((data) => (
            <TabPanel key={data._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={data.photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <h2 className="card-title">Price : ${data.price}</h2>

                  <p className="py-4">
                    <Rating
                      placeholderRating={data.rating}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar />}
                      fullSymbol={<FaStar />}
                      className="p-1"
                    />
                    {data.rating}
                    <div className="card-actions justify-end">
                      <Link
                        onClick={handleClick}
                        to={"/login"}
                        className="btn btn-primary"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </p>
                </div>
              </div>
            </TabPanel>
          ))
        ) : (
          <TabPanel>
            <h2>No data available</h2>
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
};

export default ReactTab;
