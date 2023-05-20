import useTitle from "../../hook/useTitle";
import NewAdd from "./NewAdd";

import ReactTab from "./ReactTab";
import ReleventPic from "./ReleventPic";
import Shoptoy from "./Shoptoy";

import Slidebar from "./Slidebar";
import Sub from "./Sub";

const Home = () => {
  useTitle("Home");
  return (
    // data-aos="slide-up"
    <div>
      <Slidebar></Slidebar>
      <NewAdd></NewAdd>
      <Sub></Sub>
      <ReleventPic></ReleventPic>
      <ReactTab></ReactTab>
      <Shoptoy></Shoptoy>
      <Sub></Sub>
    </div>
  );
};

export default Home;
