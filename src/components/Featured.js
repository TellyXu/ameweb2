import { useRef } from "react";
import {
  useGsapFeaturedLeftShutter,
  useGsapFeaturedRightShutter,
} from "../hooks/gsap";

import photo1 from "../images/John-Houghtaling.jpg";
import photo2 from "../images/Capture16-4-696x496.png";
import SectionTitle from "./SectionTitle";

const Featured = ({ minHeight = false }) => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapFeaturedLeftShutter(featuredLeftShutter, featuredRef);
  useGsapFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    <section
      className="featured wrapper"
      ref={featuredRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Lastest News" />
      <div className="featured-wrapper">
        <div className="featured-left">
          <span>ABS & AEC COLLABORATING</span>
          <img
            src={photo1}
            alt="John-Houghtaling"
          />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="featured-right">
          <span>US/China ethane export project</span>
          <img
            src={photo2}
            alt="US/China ethane export project could lead to a job explosion in Southeast Texas"
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
