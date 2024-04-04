import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

    const contactInfoStyle1 = {
        fontSize: '0.7em', // Adjust the font size as needed
        margin: '0 10px'   // Add some margin if needed
    };
    const contactInfoStyle2 = {
        fontSize: '1.2em', // Adjust the font size as needed
        margin: '0 10px'   // Add some margin if needed
    };

    useGsapFooterHeadline(footerHeadline, footerRef);

  return (
      <section className="footer wrapper" ref={footerRef}>

          <h1 ref={footerHeadline}>Contect Us Now</h1>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={contactInfoStyle1}>2323 South Shepherd Drive Suite 800, Houston, TX 77019</p>
              <p style={contactInfoStyle1}>Room 601, Dianke Binjiang Building, No. 647, Longhua East Road,
                  Shanghai, China</p>
              <p style={contactInfoStyle1}>Phone: (+86)-21-61837588,61837599</p>
              <p style={contactInfoStyle1}>contact@americanethane.com.cn</p>
          </div>

              <p  style={contactInfoStyle2}>
                  &copy; {new Date().getFullYear()} Tianli Xu.
              </p>
      </section>
);
};

export default Footer;
