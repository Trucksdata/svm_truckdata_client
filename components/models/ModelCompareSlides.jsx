import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import numeral from "numeral";

function ModelCompareSlides({ vehicleDetails, navigations }) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${navigations.next}`,
          prevEl: `.${navigations.prev}`,
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
            slidesPerView: 3,
          },
        }}
      >
        {vehicleDetails
          //?.slice(0, 8)
          ?.reverse()
          .map((item, i) => (
            <SwiperSlide key={item.id}>
              <Link
                href={`/details/${item.id}?vehicle_name=${item?.slug}&type=${item?.vehicle_type?.name}`}
                className="carCard -type-1 d-block rounded-4 hover-inside-slider"
                data-aos="fade"
                data-aos-delay={i * 100}
              >
                <div
                  key={item?.id}
                  data-aos="fade"
                  data-aos-delay={i * 100}
                  className="truck-card"
                >
                  <div className="truck-card__image">
                    {/* <Swiper
                      className="mySwiper"
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    > */}
                    <div>
                      <div style={{ display: "flex" }}>
                        <div>
                          <div className="truck-card-zoom">
                            <img
                              // width={300}
                              // height={300}
                              className="rounded-4 col-12 js-lazy"
                              src={item?.images && item?.images?.[0]?.thumbnail}
                              alt="image"
                            />
                          </div>

                          <div className="truck-card__content">
                            <div className="truck-card__details">
                              <div className="truck-card__type">
                                {item?.vehicle_type?.name}
                              </div>
                            </div>
                            <div className="card-contents">
                              <h4 className="truck-card__title ">
                                {item?.title}
                              </h4>
                            </div>

                            <div className="truck-card__price-range">
                              <span className="truck-card__price text-blue-1">
                                ₹{" "}
                                {numeral(
                                  item?.min_price.split(".")[0] / 100000
                                ).format("0,0.00") + " lakh"}{" "}
                              </span>
                              <span className="truck-card__price-label text-13 text-secondary ">
                                Onwards
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-auto ">
                          <button
                            className={`d-flex items-center text-24 arrow-right-hover ${navigations?.next}`}
                          >
                            <i className="icon icon-" />
                          </button>
                        </div> */}
                        <div>
                          <div className="truck-card-zoom">
                            <img
                              // width={300}
                              // height={300}
                              className="rounded-4 col-12 js-lazy"
                              src={item?.images && item?.images?.[0]?.thumbnail}
                              alt="image"
                            />
                          </div>

                          <div className="truck-card__content">
                            <div className="truck-card__details">
                              <div className="truck-card__type">
                                {item?.vehicle_type?.name}
                              </div>
                            </div>
                            <div className="card-contents">
                              <h4 className="truck-card__title ">
                                {item?.title}
                              </h4>
                            </div>

                            <div className="truck-card__price-range">
                              <span className="truck-card__price text-blue-1">
                                ₹{" "}
                                {numeral(
                                  item?.min_price.split(".")[0] / 100000
                                ).format("0,0.00") + " lakh"}{" "}
                              </span>
                              <span className="truck-card__price-label text-13 text-secondary ">
                                Onwards
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex w-auto mt-5 pl-20 pb-20 pr-20">
                        <button className=" btn btn-primary  bg-blue-1 d-flex justify-content-center   flex-grow-1 text-center  ">
                          Compare
                        </button>
                      </div>
                    </div>
                    {/* </Swiper> */}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="d-flex x-gap-15 items-center justify-center pt-20 sm:pt-20">
        <div className="col-auto">
          <button
            className={`d-flex items-center text-24 arrow-left-hover ${navigations?.prev}`}
          >
            <i className="icon icon-arrow-left" />
          </button>
        </div>

        {/* <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div> */}

        <div className="col-auto ">
          <button
            className={`d-flex items-center text-24 arrow-right-hover ${navigations?.next}`}
          >
            <i className="icon icon-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModelCompareSlides;
