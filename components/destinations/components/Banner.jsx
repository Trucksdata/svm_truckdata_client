const Banner = ({bannerDetails}) => {
  return (
    <div className="col-12">
      <div className="relative d-flex brandBanners">
        <img
          src={bannerDetails?.banners && bannerDetails?.banners[0].original}
          alt="image"
          className="col-12 rounded-4"
          style={{ minHeight: " 300px" }}
          height={300}
          width={300}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 lg:text-40 md:text-30 text-warning">
            {bannerDetails.title}
          </h1>
          {/* <div className="text-white">
            {bannerDetails.description}
          </div> */}
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
