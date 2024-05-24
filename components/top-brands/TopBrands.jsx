import Slider from "react-slick";
import Link from "next/link";
import { useSelector } from "react-redux";
import useVehicleTypes from "../../services/useVehicleTypes";

const TopBrands = () => {
  const topBrandFilterId = useSelector(
    (store) => store.topfilter.brands.id
  );

  const { data: vehicle } = useVehicleTypes();

  const brandDetails = vehicle?.data?.data?.find(
    (item) => item.id === topBrandFilterId
  );

  const manufacturerLength = brandDetails?.manufacturers.length;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: manufacturerLength >= 5 ? 5 : manufacturerLength,
    slidesToScroll: 1,
    // centerMode: manufacturerLength >= 5 ? false : false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: manufacturerLength >= 3 ? 3 : manufacturerLength,
          centerMode: false,
          variableWidth: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
          infinite:false
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {brandDetails?.manufacturers?.slice(0, 8).map((item, i) => (
        <div
          className="tobrandCard col-xl-2  col-lg-3 col-sm-8 border-2 truck-card p-2 rounded-3 d-flex justify-content-center"
          key={i}
          data-aos="fade"
          data-aos-delay={i * 100}
        >

          <Link
            href={`/brands/${item.id}?brand_name=${item.slug}`}
            className="citiesCard -type-3 d-block text-center "
          >
            <div className="citiesCard__image size-120 rounded-full mx-auto brandCardImage">
              <img
                className="object-cover js-lazy"
                src={item?.logo[0]?.thumbnail}
                alt="image"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
      ))}
    </Slider>

    // <>
    //   <Swiper

    //     spaceBetween={20}
    //     modules={[Navigation, Pagination]}
    //     navigation={{
    //       nextEl: ".js-popular-brand-next",
    //       prevEl: ".js-popular-brand-prev",
    //     }}
    //     pagination={{
    //       el: ".js-brand-pag_active",
    //       clickable: true,
    //     }}
    //     breakpoints={{
    //       500: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //       },
    //       768: {
    //         slidesPerView: 2,
    //         spaceBetween: 22,
    //       },
    //       1024: {
    //         slidesPerView: 3,
    //       },
    //       1200: {
    //         slidesPerView: 4,
    //       },
    //     }}
    //   >
    //     {brandDetails?.manufacturers?.slice(0, 8).map((item) => (
    //       <SwiperSlide key={item.id + item.name}>
    //         <Link
    //           href={`/brands/${item.id}`}
    //           // className="carCard -type-1 d-block rounded-4 hover-inside-slider"
    //           className="citiesCard -type-3 d-block text-center"
    //           data-aos="fade"
    //           // data-aos-delay={item.delayAnimation}
    //         >
    //           <div
    //             key={item.id + item.name}
    //             data-aos="fade"
    //             // data-aos-delay={item?.delayAnimation}
    //             className="brand-card"
    //           >
    //             <div
    //               //  className="carCard__image truck-card-zoom"
    //               className="brand-card__image rounded-full mx-auto"
    //             >
    //               <img
    //                 width={300}
    //                 height={300}
    //                 className="js-lazy"
    //                 src={item.logo[0].thumbnail}
    //                 alt="image"
    //               />
    //             </div>
    //           </div>
    //         </Link>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

    //   <div className="d-flex x-gap-15 items-center justify-center pt-20 sm:pt-20">
    //     <div className="col-auto">
    //       <button className="d-flex items-center text-24 arrow-left-hover js-popular-brand-prev">
    //         <i className="icon icon-arrow-left" />
    //       </button>
    //     </div>
    //     {/* End arrow prev */}

    //     <div className="col-auto">
    //       <div className="pagination -dots text-border js-brand-pag_active" />
    //     </div>
    //     {/* End arrow pagination */}

    //     <div className="col-auto">
    //       <button className="d-flex items-center text-24 arrow-right-hover js-popular-brand-next">
    //         <i className="icon icon-arrow-right" />
    //       </button>
    //     </div>
    //     {/* End arrow next */}
    //   </div>
    // </>
  );
};

export default TopBrands;
