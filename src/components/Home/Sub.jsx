import Carousel from "better-react-carousel";
const ReleventPic = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-5"> Frozen Dolls</h1>
      <div className="bg-slate-300  border-solid border-2 border-indigo-300 ">
        <Carousel cols={4} rows={1} gap={10} loop>
          <Carousel.Item></Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ReleventPic;
