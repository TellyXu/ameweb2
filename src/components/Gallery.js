import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";

import John2 from "../images/John2.jpg";
import James from "../images/Jim-1-2.jpg";
import Andrey from "../images/Andrey-Kunatbaev-300x300.png";

const images = [
  {
    id: 1,
    src: John2,
    title: "John Houghtaling II",
    category: "CEO",
  },
  {
    id: 2,
    src: James,
    title: "James Glickenhaus",
    category: "Shareholder",
  },
  {
    id: 3,
    src: Andrey,
    title: "Andrey-Kunatbaev",
    category: "Shareholder",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle title="Gallery" needMargin={true} />
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};


export default Gallery;
