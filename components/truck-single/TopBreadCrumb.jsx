const TopBreadCrumb = ({brand, type, vehicle}) => {
  return (
    <section className="py-10 d-flex items-center bg-light-2">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
              <div className="col-auto">Home</div>
              {/* End .col-auto */}
              <div className="col-auto">&gt;</div>
              {/* End .col-auto */}
              <div className="col-auto">{type}</div>
              {/* End .col-auto */}
              <div className="col-auto">&gt;</div>
              {/* End .col-auto */}
              <div className="col-auto">{brand}</div>
              {/* End .col-auto */}
              <div className="col-auto">&gt;</div>
              <div className="col-auto">{vehicle}</div>
              {/* <div className="col-auto  ">
                <div className="text-dark-1">
                  {data?.title}
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="col-auto">
            <a href="#" className="text-14 text-blue-1 underline">
              View all {data?.type}s
            </a>
          </div> */}
          {/* End col-auto */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default TopBreadCrumb;
