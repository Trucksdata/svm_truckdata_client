import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import isTextMatched from "../../utils/isTextMatched";
import { useRouter } from "next/router";

const CompareTwoVehicleBoxIndividual = ({ item }) => {
  const vehicleOne = item?.id;
  const vehicleTwo = item?.compare_vehicle?.[0]?.id;
  const vehicleNames = item?.slug + "_vs_" + item?.compare_vehicle?.[0]?.slug;
  const routeToRedirect = `/compare?vehicle_one=${vehicleOne}&vehicle_two=${vehicleTwo}&comparison=${vehicleNames}`;
  const router = useRouter();
  function handleRoute() {
    router.push(routeToRedirect);
  }
  debugger;

  return (
    <div className="truck-card-compare">
      <Link
        href={routeToRedirect}
        className="cruiseCard -type-1 d-flex compare-card-link w-100"
        // className="d-flex"
      >
        <div key={item?.id} className="rounded-0 w-50">
          <div className="cruiseCard__image">
            <div className="cardImage ratio  ratio-6:5">
              <div className="cardImage__content custom_inside-slider">
                {/* <div className="truck-card__image"> */}
                <Swiper
                  className="mySwiper"
                  modules={[Pagination, Navigation]}
                  slidesPerView={1}
                  allowSlidePrev={false}
                  allowSlideNext={false}
                >
                  {/* <div style={{ minWidth: "500px" }}> */}
                  {item?.images?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <div className="compare-image">
                        <img
                          width={300}
                          height={300}
                          className="rounded-0"
                          src={slide?.thumbnail}
                          alt="image"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  {/* </div> */}
                </Swiper>
              </div>
            </div>
          </div>
          {/* End .tourCard__image */}

          <div className="cruiseCard__content ps-3 pe-2 py-2 compareContents">
            <div>
              <h4 className="w-100 text-dark-1 text-14 lh-14 fw-500">
                {item?.title}
              </h4>
            </div>
            {/* <p className="text-light-1 lh-14 text-14 mt-5" /> */}

            {/* End .row */}
            {/* <div
              className="d-flex flex-column align-content-center align-items-center justify-content-between  "
              // className="d-block"
            >
              <div>
                <div
                // className="text-light-1 text-14 "
                >
                  <div className="fw-600 text-15 text-blue-1">
                    ₹ {item?.min_price.split(".")[0]}
                  </div>{" "}
                  <div className="text-light-1 text-14">onwards</div>
                </div>
              </div>
            </div> */}

            <div
              className="d-flex flex-column  justify-content-end"
              // className="d-block"
            >
              <div>
                <div>
                  <div className="fw-600 text-15 text-blue-1">
                    ₹ {item?.min_price?.split(".")[0]}
                  </div>{" "}
                  <div className="text-light-1 text-14 compare_onwards">
                    onwards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-35">
          <Image
            width={30}
            height={30}
            className="compare-vs"
            src="/icons/vs.png"
            alt="image"
          />
        </div>
        {/* Next Card  */}
        <div className="w-50">
          {item?.compare_vehicle?.map((vehicle, i) => {
            return (
              <div key={vehicle?.id} data-aos="fade" data-aos-delay={i * 100}>
                <div className="cruiseCard__image">
                  <div className="cardImage ratio  ratio-6:5">
                    <div className="cardImage__content custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        slidesPerView={1}
                        allowSlidePrev={false}
                        allowSlideNext={false}
                      >
                        <SwiperSlide>
                          <div className="compare-image">
                            <img
                              width={300}
                              height={300}
                              className="rounded-0"
                              src={vehicle?.images?.[0]?.thumbnail}
                              alt="image"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>

                  <div className="cruiseCard__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${
                        isTextMatched(vehicle?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : ""
                      }`}
                    >
                      {vehicle?.tag}
                    </div>
                  </div>
                </div>
                {/* End .tourCard__image */}

                <div className="cruiseCard__content ps-3 pe-2 py-2 compareContents compare_card_2">
                  <div>
                    <h4 className="text-dark-1 text-14 lh-14 fw-500">
                      {vehicle?.title}
                    </h4>
                    {/* <p className="text-light-1 lh-14 text-14 mt-5" /> */}
                  </div>
                  {/* End .row */}
                  <div
                    className="d-flex flex-column  justify-content-end"
                    // className="d-block"
                  >
                    <div>
                      <div
                        // className="text-light-1 text-14 "
                        className="text-start "
                      >
                        {/* <span className="fw-600 text-15 text-blue-1">
                        ₹ {vehicle?.min_price.split('.')[0]}
                      </span>{" "}
                      onwards */}
                        <div className="fw-600 text-15 text-blue-1">
                          ₹ {vehicle?.min_price?.split(".")[0]}
                        </div>{" "}
                        <div className="text-light-1 text-14 compare_onwards">
                          onwards
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
      <div className="d-flex justify-content-lg-center pb-3 px-3">
        <button
          onClick={handleRoute}
          className="btn bg-blue-1 flex-fill btn-primary text-center"
        >
          Compare Now
        </button>
      </div>
    </div>
  );
};

export default CompareTwoVehicleBoxIndividual;
