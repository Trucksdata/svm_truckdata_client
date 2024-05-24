import { useRouter } from "next/router";

const CallToActions = () => {
  const router = useRouter();
  function handleRoute() {
    router.push("/");
  }

  return (
    <section className="layout-pt-md layout-pb-md bg-dark-2">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <img src="/icons/Moresearch.svg" alt="moresearch" width={80} />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  Find the best truck for you.
                </h4>
                <div className="text-white">
                  Search for the best trucks of your need.
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <button
                  onClick={handleRoute}
                  className="button -md h-60 bg-blue-1 text-white"
                >
                  Go To Search
                </button>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
