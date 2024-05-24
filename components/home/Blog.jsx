import Link from "next/link";
import blogs from "../../data/blogs";
import formattedDate from "../../utils/formattedDate";

const Blog = ({ blogs }) => {
  return (
    <>
      {blogs.slice(0, 2).reverse().map((item) => {
        const { thumbnail, heading, created_at } = item || {};
        const thumbImg = thumbnail?.[0]?.original;

        return (
          <div className="col-lg-4 col-sm-6 " key={item.id}>
            <Link
              href={`/blog/${item.id}`}
              className="blogCard -type-1 d-block "
            >
              <div className="blogCard__image">
                <div className="ratio ratio-4:3 rounded-4 rounded-8">
                  <img
                    className="img-ratio js-lazy"
                    src={thumbImg}
                    alt="image"
                  />
                </div>
              </div>
              <div className="mt-20">
                <h4 className="text-dark-1 text-18 fw-500">{heading}</h4>
                <div className="text-light-1 text-15 lh-14 mt-5">
                  {formattedDate(created_at)}
                </div>
              </div>
            </Link>
          </div>
        );
      })}

      <div className="col-lg-4">
        <div className="row y-gap-30">
          {blogs.slice(5, 8).map((item) => {
            const { thumbnail, heading, created_at } = item || {};
            const thumbImg = thumbnail?.[0]?.original;
            
            return (
            <div className="col-lg-12 col-md-6  " key={item.id}>
              <Link
                href={`/blog/${item.id}`}
                className="blogCard -type-1 d-flex items-center"
              >
                <div className="blogCard__image size-130 rounded-8">
                  <img
                    src={thumbImg}
                    alt="image"
                    className="object-cover size-130"
                  />
                </div>
                <div className="ml-24">
                  <h4 className="text-18 lh-14 fw-500 text-dark-1">
                    {heading}
                  </h4>
                  <p className="text-15">{formattedDate(created_at)}</p>
                </div>
              </Link>
            </div>
          )})}
        </div>
      </div>
    </>
  );
};

export default Blog;
