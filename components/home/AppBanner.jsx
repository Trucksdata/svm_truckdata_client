import AppBlock from "../block/AppBlock";

const AppBanner = () => {
  return (
    <section
      className="section-bg pt-80 pb-80 md:pt-40 md:pb-40"
      data-aos="fade-up"
    >
      <div className="section-bg__item -w-1500 rounded-4 bg-yellow-1"></div>
      <div className="container">
        <div className="row y-gap-30 items-center justify-between">
          <div className="col-xl-5 col-lg-6">
            <AppBlock />
          </div>

          <div 
          className="col-lg-7"
          >
            <img src="/img/mockup/mockup.svg" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
