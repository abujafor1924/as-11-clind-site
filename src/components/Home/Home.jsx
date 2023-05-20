import useTitle from "../../hook/useTitle";

import ReactTab from "./ReactTab";

import Slidebar from "./Slidebar";

const Home = () => {
  useTitle("Home");
  return (
    // data-aos="slide-up"
    <div>
      <Slidebar></Slidebar>

      <ReactTab></ReactTab>
    </div>
  );
};

export default Home;
