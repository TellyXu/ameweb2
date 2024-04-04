import SectionTitle from "./SectionTitle";
import Blog from "./Blog";
import { blogsArr } from "../data/blogs";

const News = ({ minHeight }) => {
  return (
    <section
      className="favourites wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Lastest News" />
      <div className="blogs">
        {blogsArr.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default News;
