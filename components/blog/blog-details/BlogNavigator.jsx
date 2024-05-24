import { useRouter } from "next/router";
import getPrevNextFromArray from "../../../utils/getPrevNextFromArray";

const BlogNavigator = ({ blogs, id }) => {
  const { previous, next } = getPrevNextFromArray(blogs, Number(id));
  const router = useRouter();

  function routeToNext() {
    router.push(`/blog/${next?.id}`);
  }

  function routeToPrevious() {
    router.push(`/blog/${previous?.id}`);
  }

  return (
    <div className="row y-gap-30 justify-between mt-3">
      <div className="col-auto w-50">
        <div onClick={routeToPrevious} className="link-like-container">
          <div className="d-flex items-center">
            <div className="icon-arrow-left text-20 mr-20" />
            <div className="text-18 fw-500">Prev</div>
          </div>
          <div className="text-15 ml-40 w-auto hideMobile">
            {previous?.heading}
          </div>
        </div>
      </div>
      <div className="col-auto text-right pe-auto w-50">
        <div onClick={routeToNext} className="link-like-container">
          <div className="d-flex items-center justify-end">
            <div className="text-18 fw-500">Next</div>
            <div className="icon-arrow-right text-20 ml-20" />
          </div>
          <div className="text-15 mr-40 w-auto hideMobile">{next?.heading}</div>
        </div>
      </div>
      {/* <div className="col-auto">
        <img src="/img/general/menu.svg" alt="image" className="pt-20" />
      </div> */}
    </div>
  );
};

export default BlogNavigator;
