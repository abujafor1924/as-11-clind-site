import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/pages/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
