import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoScroller,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

import photo1 from "../images/1.jpeg";
import photo2 from "../images/2.jpeg";
import photo3 from "../images/3.jpg";
import photo4 from "../images/4.jpg";
import photo5 from "../images/5.png";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapPhotoScroller(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        American <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
          Ethane <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage: `url(${photo1})`,
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage: `url(${photo5})`,
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage:
                `url(${photo3})`,
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage:
                `url(${photo2})`,
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage:
                `url(${photo4})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
