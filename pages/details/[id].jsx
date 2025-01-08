import dynamic from "next/dynamic";
import numeral from "numeral";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "photoswipe/dist/photoswipe.css";
import Seo from "../../components/common/Seo";
import TopBreadCrumb from "../../components/truck-single/TopBreadCrumb";
import carsData from "../../data/cars";
import SlideGallery from "../../components/details/gallery/SlideGallery";
import SpecHighlights from "../../components/details/card/SpecHighlights";
import Specifications from "../../components/details/card/Specifications";
import PopularModals from "../../components/details/card/PopularModals";
import VideoBanner from "../../components/details/video-player/VideoBanner";
import Faq from "../../components/faq/Faq";
import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import DetailBox from "../../components/details/card/DetailBox";
import SpecificationTable from "../../components/details/specification-table/SpecificationTable";
import SimilarTrucks from "../../components/similar-trucks/SimilarTrucks";
import MainHeader from "../../components/header/main-header";
import useViewVehicle from "../../services/useViewVehicle";
import Footer from "../../components/footer/footer";
import useVehicle from "../../services/useVehicle";
import { useSelector } from "react-redux";
import useManufactures from "../../services/useManufactures";
import useVehicleTypes from "../../services/useVehicleTypes";
import useAllVehicles from "../../services/vehicles/useAllVehicles";
import BrandIntro from "../../components/destinations/components/BrandIntro";
import ModelSlides from "../../components/models/ModelSlides";
import ModelCompareSlides from "../../components/models/ModelCompareSlides";
import Share from "../../components/share/Share";
import Spinner from "../../components/loading/Spinner";
import ButtonSwiperFilter from "../../components/Filter/SearchFilter/FilterButtonSwiper";
import DownloadForm from "../../components/details/card/DownloadForm";
import { downloadFile } from "../../functions/file-download/download";
import useGetComparisons from "../../services/compare/useGetComparisons";
import CompareTwoVehiclesCard from "../../components/compare/CompareTwoVehiclesCard";
import TopFilter from "../../components/top-brands/TopFilter";
import CompareTwoVehiclesCardIndividual from "../../components/compare/CompareTwoVehiclesCardIndividual";
import Test5 from "./test";

const highlights = [
  "Loading Span (ft) / Loading Capacity (Cu.M)",
  "Gross Vehicle Weight (Kg)",
  "Variant Options",
  "Emission Standard",
  "Maximum Power",
  "Maximum Torque",
];

const SinglePage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [expand, setExpand] = useState(false);
  const [click, setClick] = useState(false);
  const [showingOption, setShowingOption] = useState("option_1");
  const isClient = typeof window !== "undefined";
  const hasData = isClient ? localStorage.getItem("hasUserData") : false;

  const similarNavigations = {
    prev: "similar-prev-navigation",
    next: "similar-next-navigation",
  };

  const topSelected = useSelector((store) => store?.topfilter?.compare);
  const params = {
    vehicle_type: topSelected?.id ?? 1,
  };
  // const navigations = {
  //   prev: "swiper-button-prev",
  //   next: "swiper-button-next",
  // };

  const navigations = {
    prev: "brand-upcoming-prev-navigation",
    next: "brand-upcoming-next-navigation",
  };

  // useEffect(() => {
  //   if (!id) <h1>Loading...</h1>;
  //   else setVehicle(carsData.find((item) => item.id == id));
  //   return () => {};
  // }, [id]);
  const filterId = useSelector((store) => store.topfilter["brands"]?.id);
  const { data: vehicleDetails } = useVehicle(filterId);
  const { data: allVehicles } = useAllVehicles();
  const { data: vehicleData, isLoading } = useViewVehicle(id);
  const { data: vehicletypes } = useVehicleTypes();
  const { data: comparisons } = useGetComparisons(params);
  const comparisonData = comparisons?.data?.data;

  const vehicleTypeId = vehicleData?.data?.vehicle_type_id;
  const manufacturerId = vehicleData?.data?.manufacturer_id;

  const currentVehicleId = router?.query?.id;
  let gvwValues = vehicleData?.data?.vehicle_specs
    ?.find((x) => x.specification.name == "Gross Vehicle Weight (Kg)")
    ?.values?.map((x) => {
      return x.value;
    });
  let gvwMaxValue = gvwValues && Math.max(...gvwValues);
  let loadingSpanValues = vehicleData?.data?.vehicle_specs
    ?.find(
      (x) =>
        x.specification.name == "Loading Span (ft) / Loading Capacity (Cu.M)"
    )
    ?.values?.map((x) => {
      return x.value;
    });
  let loadingSpanMaxValue = loadingSpanValues && Math.max(...loadingSpanValues);
  console.log(gvwMaxValue);
  console.log(loadingSpanMaxValue);

  const similarVehicles = { ...allVehicles }?.data?.data
    ?.filter((item) => item?.vehicle_type_id === vehicleTypeId)
    ?.filter((item) => item?.manufacturer_id != manufacturerId)
    ?.filter((item) => item?.id !== Number(currentVehicleId))
    ?.filter((item) =>
      item?.vehicle_specs?.some(
        (spec) =>
          spec.specification.name === "Gross Vehicle Weight (Kg)" &&
          spec.values?.some(
            (x) => x.value >= gvwMaxValue - 500 && x.value <= gvwMaxValue + 500
          )
      )
    )
    ?.filter((item) =>
      item?.vehicle_specs?.some(
        (spec) =>
          spec.specification.name ===
            "Loading Span (ft) / Loading Capacity (Cu.M)" &&
          spec.values?.some(
            (x) =>
              x.value >= loadingSpanMaxValue - 0.5 &&
              x.value <= loadingSpanMaxValue + 0.5
          )
      )
    );

  debugger;
  const loadingSpans =
    vehicleData?.data?.vehicle_specs
      ?.find(
        (spec) =>
          spec.specification.name ===
          "Loading Span (ft) / Loading Capacity (Cu.M)"
      )
      ?.values?.map((value, index) => {
        let count = index + 1;
        return { value: value.value, option: "option_" + count };
      }) || [];
  const selectedSpan = 15;
  let noOfSpans = loadingSpans.length ?? 0;
  const keyspecs = vehicleData?.data?.vehicle_specs?.filter(
    (item) =>
      item?.specification?.is_key_feature &&
      highlights.includes(item?.specification?.name)
  );
  const sortedKeySpecs = keyspecs?.sort((a, b) => {
    return (
      highlights.indexOf(a.specification.name) -
      highlights.indexOf(b.specification.name)
    );
  });

  const popularModels = { ...allVehicles }?.data?.data?.filter(
    (item) =>
      item.is_popular === 1 &&
      item?.vehicle_type_id === vehicleTypeId &&
      item?.manufacturer_id === manufacturerId
  );

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - 150; // Adjust for the 200px offset
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  function handleClick() {
    if (hasData) {
      debugger;
      return downloadFile(vehicleData?.data?.brochure, handleClose);
    }
    setClick(!click);
  }

  function handleClose() {
    setClick(false);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log(isScrolled);
  }, [isScrolled]);

  useEffect(() => {
    // Handle scroll event to add/remove the fixed header class
    const handleScroll = () => {
      if (window.innerWidth <= 990) {
        if (window.scrollY >= 1150) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        if (window.scrollY >= 730) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center  align-items-center vh-100  ">
        <Spinner />
      </div>
    );
  }

  // const filteredVehicleSpecs =
  //   vehicleData?.data?.vehicle_specs?.filter((spec) => {
  //     if (
  //       spec.specification.name ===
  //       "Loading Span (ft) / Loading Capacity (Cu.M)"
  //     ) {
  //       // Keep only if it matches the selected span
  //       return spec.values?.some((value) => value.value === selectedSpan);
  //     }
  //     // Keep all other specs
  //     return true;
  //   }) || [];

  // // Create a new object with the filtered specs
  // const updatedVehicleData = {
  //   ...vehicleData,
  //   data: {
  //     ...vehicleData.data,
  //     vehicle_specs: filteredVehicleSpecs,
  //   },
  // };

  return (
    <>
      <Seo
        pageTitle={vehicleData?.data?.title ?? "Variant View Page"}
        pageImage={vehicleData?.data?.images?.[0]?.thumbnail}
      />
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}
      <MainHeader />
      {/* End Header 1 */}

      <TopBreadCrumb
        brand={vehicleData?.data?.manufacturer?.name}
        type={vehicleData?.data?.vehicle_type?.name}
        vehicle={vehicleData?.data?.title}
      />
      {/* End top breadcrumb */}
      {/* <Test5></Test5> */}

      <section className="pt-40" id="Highlights">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-24 fw-600">
                    {vehicleData?.data?.title}
                  </h1>
                  <div className="row x-gap-10 items-center pt-10">
                    <div className="row x-gap-5 items-center pt-5">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          {vehicleData?.data?.vehicle_type?.name}
                        </div>
                      </div>
                      {/* <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div> */}
                      {/* <div className="col-auto">
                        <div className="text-14 text-light-1">
                          Goods Carrier
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="button px-15 py-10 -blue-1 bg-light-2"
                      >
                        <i className="icon-share mr-10" />
                        Share
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content pb-2">
                            <div class="modal-header">
                              <h5 class="modal-title">Share</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            {/* <div className="d-flex justify-content-end">
                              <button
                                type="button"
                                class="btn-close px-2 py-2"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div> */}
                            <div className="modal-body">
                              <Share />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <SlideGallery
                  slides={vehicleData?.data?.images}
                  videos={vehicleData?.data?.video_links}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-end">
                <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
                  <div className="row y-gap-15 items-center justify-between">
                    <div className="col-auto">
                      <div className="text-14 text-light-1  md:mt-20">
                        Starting From
                      </div>
                      <div className="text-24 lh-12 fw-600 mt-5">
                        ₹
                        {numeral(
                          vehicleData?.data["min_price"]?.split(".")[0] / 100000
                        ).format("0,0.00") + " lakh"}{" "}
                      </div>
                      <div className="text-14 text-light-1 mt-5">
                        Ex-showroom
                      </div>
                    </div>
                  </div>

                  <div className="row y-gap-20 pt-20">
                    <DetailBox
                      vehicleDetails={{
                        ...vehicleData?.data,
                        available_spans: {},
                        gross_vehicle_weight: {},
                        maximum_Torque: 5,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End .row */}
        </div>
        {/* End .containar */}
      </section>
      {/* <section className="pt-40" id={"Highlights"}>
        <div className="container ">
          {/* <div className="row"> *
          <div className="md:col sm:col row">
            {/* <div className="d-flex justify-content-center"> 
            {/* <h3 className="text-22 fw-500">Property highlights</h3> 
            <div className="col-lg-8">
              {keyspecs?.length !== 0 ? (
                <div className="view_bordershadow ps-4 pe-4 pt-15 pb-15 bg-white ">
                  <h6 className="fw-500 text-22">Highlights</h6>
                  <SpecHighlights keyspecs={sortedKeySpecs} />
                </div>
              ) : null}
              {/* <div className="mt-30 view_bordershadow ps-4 pe-4 pt-15 pb-15 bg-white">
                <h6 className="fw-500 text-22">Key Specifications</h6>
                <Specifications />
              </div> *
            </div>
            {popularModels?.length !== 0 ? (
              <div className="col-lg-4 ms-10 d-flex  justify-content-end sm:mt-20 lg:mt-4 ">
                <PopularModals
                  popularModels={popularModels}
                  manufacturer={vehicleData?.data?.manufacturer?.name}
                  type={vehicleData?.data?.vehicle_type?.name}
                  vehicleDetails={vehicleData?.data}
                />
              </div>
            ) : null}
          </div>
        </div>
        {/* </div> *
      </section> */}

      <section
        className={
          isScrolled ? "fixed-header view_bordershadow" : "pt-40 container"
        }
        // style={{ position: "relative" }}
        // style={
        //   isScrolled
        //     ? {
        //         background: "#fff",
        //         zIndex: 9999,
        //         paddingTop: "0px !important",
        //         position: "fixed",
        //         top: "90px",
        //         left: "0px",
        //         width: "100%",
        //         borderTop: "1px solid #d3d3d366",
        //       }
        //     : {}
        // }
      >
        <div className="">
          <div className="container pt-20 pb-20 lg:px-30 sm:px-0">
            <div className="swiper-row">
              <div className="col-auto pt-10 mb-10">
                <button className="d-flex items-center text-24 js-prev">
                  <i className="icon icon-arrow-left" />
                </button>
              </div>
              <Swiper
                //width={}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".js-next",
                  prevEl: ".js-prev",
                }}
                pagination={{
                  el: ".js-car-pag_active",
                  clickable: true,
                }}
                breakpoints={{
                  300: {
                    slidesPerView: "1.4",
                  },
                  350: {
                    slidesPerView: "1.6",
                  },
                  390: {
                    slidesPerView: "1.8",
                  },
                  440: {
                    slidesPerView: "2.1",
                  },
                  500: {
                    slidesPerView: "2.5",
                  },
                  560: {
                    slidesPerView: "2.3",
                  },
                  760: {
                    slidesPerView: "3.2",
                  },
                  992: {
                    slidesPerView: "4",
                  },
                  992: {
                    slidesPerView: "5",
                  },
                  1200: {
                    slidesPerView: "6",
                  },
                  1400: {
                    slidesPerView: "7",
                  },
                }}
              >
                {[
                  { label: 2, value: "Highlights" },
                  { label: 1, value: "About" },
                  { label: 3, value: "Specification" },
                  { label: 4, value: "Similar" },
                  { label: 5, value: "Compare" },
                  { label: 6, value: "Faqs" },
                  { label: 7, value: "Brochure" },
                ].map((filter) => {
                  return (
                    <SwiperSlide
                      key={filter.label}
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    >
                      <button
                        onClick={() => scrollToSection(filter.value)}
                        //key={`refresh_${refresh}`}
                        className={`button -blue-1 bg-blue-1-05 text-blue-1 py-10 `}
                        style={{ width: "170px" }}
                        //  ${
                        //   activeRating?.includes(filter.value)
                        //     ? "active"
                        //     : activeRating === 0
                        //     ? "none"
                        //     : ""
                        // }`}
                        //onClick={() => handleRatingClick(filter.value)}
                      >
                        {filter.value}
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="d-flex x-gap-15 items-center justify-center sm">
                <div className="col-auto">
                  <button className="d-flex items-center text-24  js-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End arrow next */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isScrolled && <div style={{ height: "150px" }}></div>}
      {vehicleData?.data?.description ? (
        <section id={"About"} className="pt-40 container">
          <div className="container view_bordershadow bg-white ">
            <div className="row y-gap-20 px-10 pt-5">
              <div className="col-auto">
                <h2>About {vehicleData?.data?.title}</h2>
              </div>
            </div>
            <div className="row y-gap-20 px-10">
              <BrandIntro description={vehicleData?.data?.description} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="pt-40 mb-40 container" id={"Specification"}>
        <div className="view_bordershadow bg-white">
          <div className="container pt-20 pb-20 lg:px-30 sm:px-0">
            <div className="ms-3 d-flex justify-content-between  ">
              <h4 className="mb-10">Specifications</h4>
              <button
                className="bg-white text-black px-2  "
                onClick={() => setExpand(!expand)}
              >
                {!expand ? <u>Expand all</u> : <u>Collapse all</u>}
              </button>
            </div>
            <div className="swiper-row">
              <div className="col-auto pt-10 mb-10">
                <button className="d-flex items-center text-24  js-cars-prev">
                  <i className="icon icon-arrow-left" />
                </button>
              </div>
              <span className="pt-5 pl-7"> Variants:</span>
              <Swiper
                //width={}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".js-cars-next",
                  prevEl: ".js-cars-prev",
                }}
                pagination={{
                  el: ".js-car-pag_active",
                  clickable: true,
                }}
                breakpoints={{
                  500: {
                    slidesPerView: "auto",
                  },
                  768: {
                    slidesPerView: "auto",
                  },
                  1024: {
                    slidesPerView: "auto",
                  },
                  1200: {
                    slidesPerView: "auto",
                  },
                  100: {
                    slidesPerView: "auto",
                  },
                }}
              >
                {loadingSpans.map((filter) => {
                  return (
                    <SwiperSlide
                      key={filter.option}
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    >
                      <button
                        onClick={() => {
                          setShowingOption(filter.option);
                        }}
                        //key={`refresh_${refresh}`}
                        className={
                          showingOption == filter.option
                            ? "button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 active"
                            : "button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20"
                        }
                        //  ${
                        //   activeRating?.includes(filter.value)
                        //     ? "active"
                        //     : activeRating === 0
                        //     ? "none"
                        //     : ""
                        // }`}
                        //onClick={() => handleRatingClick(filter.value)}
                      >
                        {filter.value}
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="d-flex x-gap-15 items-center justify-center sm">
                <div className="col-auto">
                  <button className="d-flex items-center text-24  js-cars-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End arrow next */}
              </div>
            </div>

            <div className="w-100">
              <SpecificationTable
                vehicleData={vehicleData?.data}
                expand={expand}
                showingOption={showingOption}
              />
            </div>
          </div>
        </div>
      </section>

      {vehicleData?.data?.video_links?.length !== 0 ? (
        <section className="mt-40 pt-40">
          <div className="container">
            {/* <h3 className="text-22 fw-500 mb-20">Car Location</h3> */}
            <div className=" rounded-4 overflow-hidden map-500">
              <VideoBanner videos={vehicleData?.data?.video_links} />
            </div>
          </div>
        </section>
      ) : null}
      {/* End Map */}

      <section className="pt-40 mb-40" id={"Similar"}>
        <div className="container ">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-22 fw-500">
                Similar {vehicleData?.data?.vehicle_type?.name}
              </h2>
            </div>

            <div className="col-lg-8">
              {/* <SimilarTrucks similarVehicles={similarVehicles} /> */}
              <ModelSlides
                vehicleDetails={similarVehicles}
                navigations={similarNavigations}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 mb-40" id={"Compare"}>
        <div className="container ">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-22 fw-500">
                Compare {vehicleData?.data?.vehicle_type?.name}
              </h2>
            </div>

            <div className="col-lg-8">
              {/* <SimilarTrucks similarVehicles={similarVehicles} /> */}
              <div className="row y-gap-30 pt-5 sm:pt-20 item_gap-x30">
                {/* <div className="tabs -pills-2 pt-12">
                  <TopFilter vehicleData={vehicleData} flag="compare" />
                </div> */}

                <CompareTwoVehiclesCardIndividual
                  comparisonData={similarVehicles}
                  vehicleDetails={[vehicleData?.data]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {vehicleData?.data?.faqs?.length !== 0 && (
        <section className="pt-40 mb-40" id={"Faqs"}>
          <div className="container ">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-22 fw-500">
                  FAQs about
                  <br /> {vehicleData?.data?.title}
                </h2>
              </div>

              <div className="col-lg-8">
                <div
                  className="accordion -simple row y-gap-20 js-accordion"
                  id="Faq1"
                >
                  <Faq faq={vehicleData?.data?.faqs} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <>
        <section className="pt-40 mb-40" id={"Brochure"}>
          <div className="container ">
            <div className="row y-gap-20">
              <div className="col-lg-4"></div>{" "}
              <div className="col-lg-8">
                <div className="col-12 " style={{ width: "350px" }}>
                  <button
                    onClick={handleClick}
                    className="d-flex button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
                  >
                    <div>Download Brochure</div>
                  </button>
                </div>
                {vehicleData?.data?.brochure && (
                  <DownloadForm
                    handleClick={handleClose}
                    click={click}
                    url={vehicleData?.data?.brochure}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </>

      <CallToActions />

      <Footer className="text-dark" type={"white"} />
    </>
  );
};

export default dynamic(() => Promise.resolve(SinglePage), {
  ssr: false,
});
