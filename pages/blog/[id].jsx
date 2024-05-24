import React, { useEffect, useState } from "react";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/default";
import RelatedBlog from "../../components/blog/blog-details/RelatedBlog";
import blogsData from "../../data/blogs";
import { useRouter } from "next/router";
import DetailsContent from "../../components/blog/blog-details/DetailsContent";
import BlogNavigator from "../../components/blog/blog-details/BlogNavigator";
import MainHeader from "../../components/header/main-header";
import { useSelector } from "react-redux";
import Spinner from "../../components/loading/Spinner";
import formattedDate from "../../utils/formattedDate";
import useGetArticles from "../../services/articles/useGetArticles";
import Footer from "../../components/footer/footer"

const BlogSingleDynamic = () => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const id = router.query.id;
  const {data, isLoading} = useGetArticles()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const blogList = data?.data?.data || []

  useEffect(() => {
    if (blogList) {
      const currentBlog = blogList.find(
        (blogItem) => blogItem.id === Number(id)
      );

      setBlogItem(currentBlog);
    } else {
      return <Spinner />;
    }
  }, [blogList, id]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center  align-items-center vh-100  ">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Seo pageTitle={blog?.heading || "Blog Single"} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <MainHeader />
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-12">
              <img
                src={blog?.thumbnail?.[0]?.thumbnail}
                alt={blog?.title}
                className="col-12 rounded-8 w-100 img_"
              />
            </div>
          </div>
          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <h1 className="text-30 fw-600">{blog?.heading}</h1>
              <div className="text-15 text-light-1 mt-10">
                {formattedDate(blog?.created_at)}
              </div>
            </div>
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <div dangerouslySetInnerHTML={{ __html: blog?.html_content }} />
              <div className="mt-5">
                <BlogNavigator blogs={blogList} id={id} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Details Blog Details Content */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container ">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Read More From Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore other related articles
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <RelatedBlog blogs={blogList} id={id}  />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Related Content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer className="text-dark" type={'white'} />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogSingleDynamic;
