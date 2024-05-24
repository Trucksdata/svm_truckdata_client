import Seo from "../../components/common/Seo";
import MainFilterSearchBox from "../../components/Filter/SearchFilter/MainFilterSearchBox";
import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import Sidebar from "../../components/search-results/sidebar/Sidebar";
import TopHeaderFilter from "../../components/search-results/header/TopHeaderFilter";
import SearchResults from "../../components/search-results/results/SearchResults";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import CompareBar from "../../components/compare-bar/CompareBar";
import { useDispatch } from "react-redux";
import { clearAllCompare } from "../../features/compare/compareSlice";
import SearchResultsMobile from "../../components/search-results/results/SearchResultsMobile";
import MainHeader from "../../components/header/main-header/index";
import useVehicleTypes from "../../services/useVehicleTypes";
import useGetVehicles, {
  useGetVehiclesInfinite,
} from "../../services/vehicles/useGetVehicles";
import { useRouter } from "next/router";
import getFlatData from "../../utils/getFlatData";
import { useInView } from "react-intersection-observer";
import { useReloadOnPageScroll } from "../../hooks/useReloadOnPageScroll";
import { getSearchParams } from "../../functions/params/getSearchParams";
import useGetSpecification from "../../services/useGetSpecification";
import getAdvancedSearchParams from "../../functions/params/getAdvancedSearchParams";
import Footer from "../../components/footer/footer/";
import Spinner from "../../components/loading/Spinner";
const toastStyles = {
  icon: "🚚",
  position: "top-right",
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

const SearchResultsPage = () => {
  const [show, setShow] = useState(false);
  const [sideParams, setSideParams] = useState({});

  function handleCompareExceed() {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      toast.error("Maximum of three vehicles selected", {
        ...toastStyles,
      });
    }
    if (typeof window !== "undefined" && window.innerWidth < 992) {
      toast.error("Maximum of two vehicles selected", {
        ...toastStyles,
      });
    }
  }

  const router = useRouter();

  const vehicle = useVehicleTypes();
  const vehicleData = vehicle?.data?.data?.data;

  const { data: specifications } = useGetSpecification();
  const specs = specifications?.data?.data;

  // For Vehicles
  const queryParams = router?.query;
  const { option1, option2, option3, tab } = queryParams || {};
  const opt1 = option1 ? JSON.parse(option1) : null;
  const opt2 = option2 ? JSON.parse(option2) : null;
  const opt3 = option3 ? JSON.parse(option3) : null;
  const tabs = tab ? JSON.parse(tab) : null;

  const { params } = getSearchParams(tabs, opt1, opt2, opt3);

  const advancedParams = getAdvancedSearchParams(sideParams);
  const {
    data: results,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useGetVehiclesInfinite({ ...params, ...advancedParams });
  const vehicles = getFlatData(results || []);

  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  useReloadOnPageScroll({
    fetchNextPage,
    inView,
    isFetchingNextPage,
    hasNextPage,
  });

  useReloadOnPageScroll({
    fetchNextPage,
    inView: inView1,
    isFetchingNextPage,
    hasNextPage,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearAllCompare());
    };
  }, [dispatch]);

  const isClient = typeof window !== "undefined";

  const generalData = isClient ? localStorage.getItem("general-data") : null;
  const general = isClient ? JSON.parse(generalData) : {};
  const { email, contact_number } = general || {};
  const contactDetails = { email, contact_number };

  const count = results?.pages?.[0]?.data?.total ?? 0;

  return (
    <>
      <Seo pageTitle="Search Results" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <MainHeader />
      {/* End Header 1 */}

      <section className="pb-15 sm:pb-0 pt-0 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center"></div>
              {/* End text-center */}
              <div className="pt-3">
                <MainFilterSearchBox vehicleData={vehicleData} />
              </div>
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg ">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none ">
                <Sidebar
                  sideParams={sideParams}
                  setSideParams={setSideParams}
                  specifications={specs ?? []}
                />
              </aside>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title " id="offcanvasLabel">
                    Filter out the Truck of your need!
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body ">
                  <aside className="sidebar y-gap-40   xl:d-block">
                    <Sidebar
                      sideParams={sideParams}
                      setSideParams={setSideParams}
                      specifications={specs ?? []}
                    />
                  </aside>
                </div>
                <div class="offcanvas-footer mt-3 p-2 border-light  d-flex justify-content-end gap-3 sticky-bottom    sticky-bottom   ">
                  <button
                    type="button"
                    className="btn btn-primary w-25 "
                    data-bs-dismiss="offcanvas"
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary w-25"
                    data-bs-dismiss="offcanvas"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <CompareBar />

            <div className="col-xl-9 ">
              <TopHeaderFilter count={count} />
              <div className="mt-20"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30 sm:d-none md:d-none">
                <SearchResults
                  showError={handleCompareExceed}
                  setShow={setShow}
                  vehicles={vehicles}
                  isLoading={isLoading}
                  // refItem={ref}
                />
                <div ref={ref}></div>
              </div>

              <div className="row y-gap-2  sm:d-flex md:d-flex justify-content-center d-none">
                <SearchResultsMobile
                  setShow={setShow}
                  showError={handleCompareExceed}
                  vehicles={vehicles}
                  // refItem={ref}
                  isLoading={isLoading}
                />
                <div ref={ref1}></div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter contact={contactDetails} /> */}
      <Footer className="text-dark" type={'white'}  />
    </>
  );
};

export default SearchResultsPage;
