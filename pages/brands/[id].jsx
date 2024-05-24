import dynamic from "next/dynamic";
import Link from "next/link";
import Seo from "../../components/common/Seo";
import Banner from "../../components/destinations/components/Banner";
import BrandIntro from "../../components/destinations/components/BrandIntro";
import Categories from "../../components/destinations/components/Categories";
import Faq from "../../components/faq/Faq";
import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import UpcomingTrucks from "../../components/trucks/UpcomingTrucks";
import MainHeader from "../../components/header/main-header";
import { useRouter } from "next/router";
import useBrand from "../../services/useBrands";
import useManufactures from "../../services/useManufactures";
import useVehicleTypes from "../../services/useVehicleTypes";
import BrandModels from "../../components/trucks/BrandModels";
import { useSelector } from "react-redux";
import useVehicle from "../../services/useVehicle";
import Footer from "../../components/footer/footer";
import ModelSlides from "../../components/models/ModelSlides";
import Spinner from "../../components/loading/Spinner";

const SingleBrand = () => {
  const router = useRouter();
  const brandId = router.query.id;
  const { data: brandDetails, isLoading } = useBrand(brandId);
  const filterId = useSelector((store) => store.topfilter["brands"]?.id);
  const { data: vehicleDetails } = useVehicle(filterId);
  const { data: vehicleTypes } = useVehicleTypes();
  const vehicleCategory = vehicleTypes?.data?.data.find(
    (item) => item.id === filterId
  );

  const filteredVehicles = vehicleDetails?.data?.data?.filter(
    (item) => item?.manufacturer?.name === brandDetails?.data?.name
  );

  const bannerDetails = {
    title: brandDetails?.data?.name,
    banners: brandDetails?.data?.banners,
  };

  const faq = brandDetails?.data?.faq;

  const mostPopularVehicles = filteredVehicles?.filter(
    (item) => item.is_popular === 1
  );
  const latestVehicles = filteredVehicles?.filter(
    (item) => item.is_latest === 1
  );
  const upcomingVehicles = filteredVehicles?.filter(
    (item) => item.is_upcoming === 1
  );

  const popularbrandNavigations = {prev:"popularbrand-prev-navigation",next:"popularbrand-next-navigation"}
  const latestNavigations = {prev:"latest-prev-navigation",next:"latest-next-navigation"}
  const brandUpcoming = {prev:"brand-upcoming-prev-navigation",next:"brand-upcoming-next-navigation"}



  if (isLoading) {
    return (
      <div className="d-flex justify-content-center  align-items-center vh-100  ">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Seo pageTitle="Brands" />
      <div className="header-margin"></div>

      <MainHeader />
      <section
        data-aos="fade"
        className="d-flex items-center py-15 border-top-light"
      >
        <div className="container">
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
                <div className="col-auto">
                  <div>Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-sm">
        <div className="container">
          <div className="row">
            <Banner bannerDetails={bannerDetails} />
          </div>

          <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10 layout-pb-sm">
            <Categories category={brandDetails?.data?.vehicle_types} />
          </div>

          <div className="container view_bordershadow bg-white p-4">
            <div className="row y-gap-20 px-10 pt-5">
              <div className="col-auto">
                <h2>About {brandDetails?.data?.name}</h2>
              </div>
            </div>
            <div className="row y-gap-20 px-10">
              <BrandIntro description={brandDetails?.data.description} />
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-sm">
        <div className="container view_bordershadow bg-white p-4">
          <div className="row y-gap-22 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Most Popular {vehicleCategory?.name} By {bannerDetails.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            {/* <BrandModels vehicleDetails={filteredVehicles} flag="is_popular" /> */}
            <ModelSlides vehicleDetails={mostPopularVehicles} navigations={popularbrandNavigations}/>
          </div>
        </div>
      </section>

      <section className="layout-pb-sm layout-pt-sm">
        <div className="container view_bordershadow bg-white p-4 ">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Latest {vehicleCategory?.name} By {bannerDetails.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="row pt-40 sm:pt-20 item_gap-x30">
            <ModelSlides vehicleDetails={latestVehicles} navigations={latestNavigations}/>
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-sm">
        <div className="container view_bordershadow bg-white p-4">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Upcoming {vehicleCategory?.name} By {bannerDetails.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            {/* <BrandModels vehicleDetails={filteredVehicles} flag="is_upcoming" /> */}
            <ModelSlides vehicleDetails={upcomingVehicles} navigations={brandUpcoming}/>
          </div>
        </div>
      </section>

      {faq ? (
        <section className="layout-pt-sm layout-pb-sm">
          <div className="container">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-30 fw-500">
                  FAQs about
                  <br />
                  {brandDetails?.data?.name}
                </h2>
              </div>

              <div className="col-lg-8">
                <div className="accordion -simple row y-gap-20 js-accordion">
                  <Faq faq={faq} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <CallToActions />

      <Footer className="text-dark" type={'white'} />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleBrand), {
  ssr: false,
});
