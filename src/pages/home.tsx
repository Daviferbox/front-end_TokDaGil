import Header from "../components/header";
import "../styles/home.css";
import { useState } from "react";

export default function Home() {
  const images = [
    "/images/decoração1.webp",
    "/images/decoração2.jpg",
    "/images/decoração3.jpg",
    "/images/decoração4.jpg",
    "/images/decoração5.jpg",
  ];

  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function getImage(pos: number) {
    return images[(index + pos + images.length) % images.length];
  }

  return (
    <div>
      <Header />

      <div className="fundo">
       
        <div className="carousel-3">
          <button className="btn left" onClick={prev}>‹</button>
          <div className="carousel-track">
            <img src={getImage(-1)} className="img side" />
            <img src={getImage(0)} className="img center" />
            <img src={getImage(1)} className="img side" />
          </div>
          <button className="btn right" onClick={next}>›</button>
        </div>

        <div className="">

        </div>
      </div>
    </div>
  );
}
