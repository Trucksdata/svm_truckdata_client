import rentalssData from "../../../data/rentals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import CompareAddButton from "./compare/CompareAddButton";
import Spinner from "../../loading/Spinner";
import numeral from "numeral";

const SearchResults = ({
  showError,
  setShow,
  vehicles,
  refItem,
  isLoading,
}) => {
  return (
    <>
      {vehicles
        ?.filter((item) => item?.is_visible)
        ?.map((item) => {
          const minPrice = Math.floor(item?.min_price ?? 0);
          const maxPrice = Math.floor(item?.max_price ?? 0);
          const payloads = item?.payload_spec?.values?.map((value) => {
            return value?.value;
          });
          const payloadValues =
            payloads?.length > 0 ? payloads?.join(", ") : "-";

          return (
            <div className="col-4" key={item?.id}>
              <div className="border-top-light pt-30">
                <div className="custom-shadow p-1 x-gap-20 y-gap-20">
                  <div className="col-md-auto ">
                    <div className="cardImage cardSliderContainer md:w-1/1 rounded-4">
                      <div className="cardImage-slider rounded-4  custom_inside-slider">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          // pagination={{
                          //   clickable: true,
                          // }}
                          navigation={true}
                        >
                          {item?.images?.map((slide, i) => (
                            <SwiperSlide key={i}>
                              <div className=" ratio ratio-1:1">
                                <div className="cardImage__content searchResultCard">
                                  <Image
                                    width={300}
                                    height={300}
                                    className="rounded-4 col-12 js-lazy"
                                    src={slide?.thumbnail}
                                    alt={"Image"}
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      {/* End image */}
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-md customCardContainer">
                    <div className="d-flex flex-column h-full justify-start">
                      <div>
                        <div className="row x-gap-5 items-center ">
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              {item?.vehicle_type?.name ?? ""}
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="size-3 rounded-full bg-light-1" />
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              {item?.manufacturer?.name ?? ""}
                            </div>
                          </div>
                        </div>
                        <div className="searchResultContainer">
                          <h3 className="text-18 lh-sm fw-500">
                            {item?.title}
                          </h3>
                        </div>
                        <div className="truck-card__price-range">
                          <span className="truck-card__price text-blue-1">
                            ₹
                            {numeral(minPrice / 100000).format("0,0.00") +
                              " lakh"}{" "}
                            - ₹
                            {numeral(maxPrice / 100000).format("0,0.00") +
                              " lakh"}
                          </span>
                          <span className="truck-card__price-label text-13 text-secondary "></span>
                        </div>

                        <div className="row y-gap-30 justify-between pt-5 indivitualCardGrid ">
                          <div className="col-md-auto col-2">
                            <div className="d-block text-start">
                              <div className="text-15 lh-15">
                                <span className=" fw-semibold ">Category</span>
                                <br /> {item?.category_name}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-auto col-2">
                            <div className="d-block text-start">
                              <div className="text-15 lh-15">
                                <span className=" fw-semibold ">Power</span>
                                <br /> {item?.energy_source?.name}
                              </div>
                            </div>
                          </div>

                          <div
                            className="col-md-auto col-2"
                            style={{ overflow: "hidden" }}
                          >
                            <div className="d-block text-start">
                              <div
                                className="text-15 lh-15"
                                style={{
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                <span className="fw-semibold">Payload</span>
                                <br />
                                {payloadValues}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div></div>
                  </div>
                  {/* End col-md */}

                  <div className="col-md-auto d-flex flex-column justify-content-between  text-right md:text-left">
                    <CompareAddButton
                      vehicle={item}
                      showError={showError}
                      setShow={setShow}
                    />
                    <div>
                      <Link
                        href={`/details/${item.id}`}
                        className="button -md -dark-1 bg-blue-1 text-white mt-2 "
                      >
                        View More <div className="icon-arrow-top-right ml-15" />
                      </Link>
                    </div>
                  </div>
                  {/* End col-md-auto */}
                </div>
                {/* End .row */}
              </div>
            </div>
          );
        })}
      {isLoading && (
        <div className="mt-20">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default SearchResults;
