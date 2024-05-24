import Categories from "./components/Categories";
import RecentPost from "./components/RecentPost";
import SearchBox from "./components/SearchBox";
import Tags from "./components/Tags";

const index = () => {
  return (
    <div className="sidebar -blog">
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mt-10 mb-10">Recent Posts</h5>
        <div className="row y-gap-20 pt-10">
          <RecentPost />
        </div>
      </div>
      {/* End RecentPost */}

      <div className="sidebar__item"></div>
    </div>
  );
};

export default index;
