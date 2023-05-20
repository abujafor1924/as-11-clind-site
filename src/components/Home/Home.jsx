import useTitle from "../../hook/useTitle";

import ReactTab from "./ReactTab";
import ReleventPic from "./ReleventPic";

import Slidebar from "./Slidebar";

const Home = () => {
  useTitle("Home");
  return (
    // data-aos="slide-up"
    <div>
      <Slidebar></Slidebar>
      <ReleventPic></ReleventPic>
      <ReactTab></ReactTab>
    </div>
  );
};

export default Home;
