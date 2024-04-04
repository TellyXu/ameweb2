import { useRef } from "react";
import { useGsapNotFoundHeadline, useGsapNotFoundImg } from "../hooks/gsap";
import photo5 from "../images/5.png";
import photo6 from "../images/6.png";
const NotFound = () => {
  const leftHeadlineRef = useRef(null);
  const rightHeadlineRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef);
  useGsapNotFoundHeadline(rightHeadlineRef, "100vw");
  useGsapNotFoundImg(leftImgRef);
  useGsapNotFoundImg(rightImgRef);

  return (
    <div className="not-found wrapper">
      <div className="headline-1" ref={leftHeadlineRef}>
        Sorry, we couldn't
      </div>
      <div className="img-1" ref={rightImgRef}>
        <img
          src={photo5}
          alt="ethanel5"
        />
      </div>
      <div className="img-2" ref={leftImgRef}>
        <img
          src={photo6}
          alt="ethanel6"
        />
      </div>
      <div className="headline-2" ref={rightHeadlineRef}>
        Find that page
      </div>
    </div>
  );
};

export default NotFound;
