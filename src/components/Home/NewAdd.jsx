import Carousel from "better-react-carousel";

const NewAdd = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-5 mt-6">Action Toy</h1>
      <div className="bg-slate-300  border-solid border-2 border-indigo-300 ">
        <Carousel cols={4} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901941?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901948-3?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901941?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901948-3?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901941?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901948-3?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901941?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="20%"
              src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901948-3?fmt=webp&qlt=70&wid=608&hei=608"
            />
          </Carousel.Item>

          <Carousel.Item>
            {/* anything you want to show in the grid */}
          </Carousel.Item>
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
};

export default NewAdd;
