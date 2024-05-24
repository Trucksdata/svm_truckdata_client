import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/footer";
import SearchFilter from "../../components/Filter/SearchFilter";
import PopularTrucks from "../../components/home/PopularTrucks";
import Faq from "../../components/faq/Faq";
import AppBanner from "../../components/home/AppBanner";
import Blog from "../../components/home/Blog";
import TopBrands from "../../components/top-brands/TopBrands";
import UpcomingTrucks from "../../components/trucks/UpcomingTrucks";
import CompareVehicles from "../../components/compare/CompareVehicles";
import MainHeader from "../../components/header/main-header";
import TopFilter from "../../components/top-brands/TopFilter";
import useManufactures from "../../services/useManufactures";
import useVehicleTypes from "../../services/useVehicleTypes";
import { useDispatch, useSelector } from "react-redux";
import { setManufacturer } from "../../features/manufacturer/manufacturerSlice";
import useGetArticles from "../../services/articles/useGetArticles";
import { useEffect } from "react";
import { setArticleDetails } from "../../features/articles/articleSlice";
import useGetComparisons from "../../services/compare/useGetComparisons";
import useAllVehicles from "../../services/vehicles/useAllVehicles";
import ModelSlides from "../../components/models/ModelSlides";
import useVehicle from "../../services/useVehicle";
import Link from "next/link";

const Home = () => {
  const dispach = useDispatch();
  const filterOptions = [
    { label: "Trucks", value: "trucks" },
    { label: "Tippers", value: "tippers" },
    { label: "Pick-ups", value: "pick_ups" },
    { label: "Trailers", value: "trailers" },
    { label: "3-Wheelers", value: "three_wheelers" },
  ];
  const popularFilterId = useSelector((store) => store.topfilter["popular"]?.id);
  const upcomingFilterId = useSelector((store) => store.topfilter["upcoming"]?.id);
  const { data: manufacturer } = useManufactures();
  const { data: articles, isFetched } = useGetArticles();
  const { data: popularVehicels } = useVehicle(popularFilterId);
  const {data: upcomingVehicles } = useVehicle(upcomingFilterId);
  const blogs = articles?.data?.data

  const popularModels = popularVehicels?.data?.data.filter((item)=> item['is_popular'] === 1 && item['is_visible'] === 1);

  const upcomingModels = upcomingVehicles?.data?.data.filter((item)=> item['is_upcoming'] === 1 && item['is_visible'] === 1);

  const popularNavigations = {prev:"js-popular-car-prev",next:"js-popular-car-next"};

  const upcomingNavigations = {prev:"upcoming-prev-navigation",next:"upcoming-next-navigation"}

  const compareNavigations = {prev:"compare-prev-navigation",next:"compare-next-navigation"}


  dispach(setManufacturer(manufacturer?.data["data"]));

  const generalData = localStorage.getItem("general-data");
  const general = JSON.parse(generalData);
  const { heading, subheading, logo, faq, email, banners, contact_number } =
    general || {};
  const contactDetails = { email, contact_number };

  const vehicleData = useSelector((store) => store.vehicle.vehicleType);

  useEffect(() => {
    if (isFetched) {
      dispach(setArticleDetails(articles?.data["data"]));
    }
  }, [articles?.data, dispach, isFetched]);

  return (
    <>
    
      <Seo pageTitle="Home" />
      <MainHeader vehicleData={vehicleData} />
      <SearchFilter
        manufacturerData={manufacturer?.data["data"]}
        vehicleData={vehicleData}
        heading={heading}
        subHeading={subheading}
        banners={banners}
      />

      <section className="layout-pt-md pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Models</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Explore the top-rated models
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-5 sm:pt-20 item_gap-x30">
            <div className="tabs -pills-2 pt-12">
              <TopFilter vehicleData={vehicleData} flag="popular" />
            </div>
            <ModelSlides vehicleDetails={popularModels} navigations={popularNavigations} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Car Hire Sections */}

      <section className="pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Brands</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Explore top brands for diversity
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-5 item_gap-x30  ">
            <div className="tabs -pills-2 pt-12 ">
              <TopFilter vehicleData={vehicleData} flag="brands" />
            </div>
            <TopBrands topBrandDetails={vehicleData} />
          </div>
        </div>
      </section>

      <section className="pb-30">

      <CompareVehicles
        filterOptions={filterOptions}
        vehicleData={vehicleData}
        
        />
        </section>

      <section className="pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Upcoming Models</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore the upcoming models
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-5 sm:pt-20 item_gap-x30">
            <div className="tabs -pills-2 pt-12">
              <TopFilter vehicleData={vehicleData} flag="upcoming" />
            </div>
            <ModelSlides vehicleDetails={upcomingModels} className='mt-10' navigations={upcomingNavigations}/>

          </div>
        </div>
      </section>

      <section className="pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get to know the latest information
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Read articles
                </p>
              </div>

              
            </div>
            {/* End .col */}

            {/* <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1 bg-light-2">
                        <i className="icon-share mr-10" />
                        Share
                      </button>
                    </div>
                  </div>
                </div> */}


                <div className="col-auto">
              <Link
                href='/blogs'
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Blogs
                <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>

            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Blog blogs={blogs || []} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Sections */}

      <AppBanner />
      {/* End AppBanner section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">Explore FAQs</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq faq={faq} />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <Footer className="bg-dark-1 text-white"/>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
