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

  const images2 = [
    "/images/chá1.webp",
    "/images/chá2.webp",
    "/images/chá3.webp",
    "/images/chá4.webp",
    "/images/chá5.webp",
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


  const [index2, setIndex2] = useState(0);

  function getImage2(pos: number) {
    return images2[(index2 + pos + images2.length) % images2.length];
  }

  function next2() {
    setIndex2((prev) => (prev + 1) % images2.length);
  }

  function prev2() {
    setIndex2((prev) =>
      prev === 0 ? images2.length - 1 : prev - 1
    );
  }

  return (

    <div>
      <Header />
      <div className="fundo">
        <div className="TExtoYYYYYYYYYYYYY">
          Festa Infantil <br /><br />
        </div>
        <div className="carousel-3">
          <button className="btn left" onClick={prev}>‹</button>
          <div className="carousel-track">
            <img src={getImage(-2)} className="img side 2" />
            <img src={getImage(-1)} className="img side" />
            <img src={getImage(0)} className="img center" />
            <img src={getImage(1)} className="img side" />
            <img src={getImage(2)} className="img side 2" />
          </div>
          <button className="btn right" onClick={next}>›</button>
        </div>

        <br /><br /><br />

        <div className="carousel-4 ">
          <button className="btn left2" onClick={prev2}>‹</button>
          <div className="carousel-track">
            <img src={getImage2(-2)} className="img side 2" />
            <img src={getImage2(-1)} className="img side" />
            <img src={getImage2(0)} className="img center" />
            <img src={getImage2(1)} className="img side" />
            <img src={getImage2(2)} className="img side 2" />
          </div>
          <button className="btn right2" onClick={next2}>›</button>
        </div>
      </div>
    </div>
  );
}
