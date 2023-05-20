import { Carousel } from "react-carousel-minimal";
const Slidebar = () => {
  const data = [
    {
      image:
        "https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/mb_april-toys-dolls_20230410_2x?fit=constrain&cropN=0,0,1,1&fmt=webp&qlt=70&wid=1200",
      caption: "It's endless possibilities with these dolls.",
    },
    {
      image:
        "https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/MB_PLP-HP_ILYDoll-1_20230106_x2?fit=constrain&cropN=0,0,1,1&fmt=webp&qlt=70&wid=1200",
      caption: "It's endless possibilities with these dolls.",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App  w-full -mt-8  md:ml-1 ">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="1400px"
            height="500px"
            captionStyle={captionStyle}
            radius="2px"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1400px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Slidebar;
