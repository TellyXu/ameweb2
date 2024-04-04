import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import News from "./components/News";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  const minHeight = true;
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="featured" element={<Featured minHeight={minHeight} />} />
        <Route path="about" element={<About minHeight={minHeight} />} />
        <Route path="gallery" element={<Gallery />} />
        <Route
          path="News"
          element={<News minHeight={minHeight} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
