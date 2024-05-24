import Slider from "react-slick";

const Categories = ({category}) => {
  const catContent = [
    { id: 1, icon: "/icons/tipper.png", catName: "Tippers" },
    { id: 2, icon: "/icons/truck-wheel.svg", catName: "Trucks" },
    { id: 4, icon: "/icons/pick-up-truck.png", catName: "Pick-ups" },
    { id: 5, icon: "/icons/trailer.png", catName: "Trailers" },
  ];
  const categoryIcons ={
    "Trucks":"/icons/trailer.png",
    "Truck":"/icons/trailer.png",
    "Tippers":"/icons/tipper.png",
    "Tipper":"/icons/tipper.png",
    "Pick-ups":"/icons/pick-up-truck.png",
    "Pick-up":"/icons/pick-up-truck.png",
    "Trailers":"/icons/trailer.png",
    "Trailer":"/icons/trailer.png",
    "Pick Ups":"/icons/pick-up-truck.png",
    "Pick Up":"/icons/pick-up-truck.png",
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: catContent.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: catContent.length,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {category?.map((item) => (
        <div className="col" key={item.id}>
          <button className="bg-white d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
            <div className="pb-20 w-25">
              <img src={categoryIcons[item.name] ? categoryIcons[item.name] : '/icons/truck-wheel.svg' } />
            </div>
            {item.name}
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default Categories;
