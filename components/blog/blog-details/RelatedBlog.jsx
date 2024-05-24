import Image from "next/image";
import blogsData from "../../../data/blogs";
import formattedDate from "../../../utils/formattedDate";

const RelatedBlog = ({ blogs, id }) => {
  const notCurrentBlogs = blogs?.filter((blog) => blog.id !== Number(id));

  return (
    <>
      {notCurrentBlogs.slice(0, 4).map((item) => (
        <div className="col-lg-3 col-sm-6 " key={item.id}>
          <a
            href={`/blog/${item.id}`}
            className="blogCard customBlog -type-2 d-block bg-white rounded-4 custom-shadow "
          >
            <div className="blogCard__image blogcardView">
              <div className="rounded-4">
                <img
                  width={300}
                  height={300}
                  // className="cover w-100 img-fluid"
                  src={item?.thumbnail?.[0]?.thumbnail}
                  alt="image"
                />
              </div>
            </div>
            <div className="px-20 py-20">
              <div>
                <div className="blogHeadingContainer">
                  <h4 className="text-dark-1 text-18 fw-500">{item.heading}</h4>
                </div>
              </div>
              <div className="text-light-1 text-15 lh-14 mt-10">
                {formattedDate(item?.created_at)}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default RelatedBlog;
