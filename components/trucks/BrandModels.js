import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";
import useVehicle from "../../services/useVehicle";
import useVehicleTypes from "../../services/useVehicleTypes";

function BrandModels({ vehicleDetails, flag }) {
  // const filterId = useSelector((store) => store.topfilter["upcoming"]?.id);
  // const { data: vehicleDetails } = useVehicle(filterId);
  // const {data: vehicleTypes} = useVehicleTypes();
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-car-next",
          prevEl: ".js-popular-car-prev",
        }}
        pagination={{
          el: ".js-car-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {vehicleDetails
          //?.slice(0, 8)
          ?.reverse()
          .map(
            (item, i) =>
              item[flag] === 1 && (
                <SwiperSlide key={item.id}>
                  <Link
                    href={`/details/${item.id}`}
                    className="carCard -type-1 d-block rounded-4 hover-inside-slider"
                  >
                    <div
                      key={item?.id}
                      data-aos="fade"
                      data-aos-delay={i * 100}
                      className="truck-card"
                    >
                      <div className="truck-card__image">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                        >
                          <SwiperSlide>
                            <div className="truck-card-zoom">
                              <img
                                width={300}
                                height={300}
                                className="rounded-4 col-12 js-lazy"
                                src={item?.images[0]?.thumbnail}
                                alt="image"
                              />
                            </div>
                          </SwiperSlide>
                          <div className="truck-card__content">
                            <div className="truck-card__details">
                              <div className="truck-card__type">
                                {item?.vehicle_type?.name}
                              </div>
                              {/* <div className="truck-card__location">
                            {item?.location}
                          </div> */}
                              {/* <div className="truck-card__divider" /> */}
                            </div>
                            <h4 className="truck-card__title ">
                              {item?.title}
                            </h4>

                            <div className="truck-card__price-range">
                              <span className="truck-card__price text-blue-1">
                                ₹ {item?.min_price.split(".")[0]}{" "}
                              </span>
                              <span className="truck-card__price-label text-13 text-secondary ">
                                Onwards
                              </span>
                            </div>
                            <div className="d-flex w-auto mt-5 ">
                              <button className=" btn btn-primary  bg-blue-1 d-flex justify-content-center   flex-grow-1 text-center  ">
                                View More
                              </button>
                            </div>
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              )
          )}
      </Swiper>
      <div className="d-flex x-gap-15 items-center justify-center pt-20 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-car-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>

        <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div>

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-car-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
      </div>
    </>
  );
}

export default BrandModels;
