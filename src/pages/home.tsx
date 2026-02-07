import Header from "../components/header";
import "../styles/home.css";
import { useState } from "react";
import Footer from "../components/footer";


export default function Home() {
  const images = [
    "/images/decoração1.webp",
    "/images/decoração2.jpg",
    "/images/decoração3.jpg",
    "/images/decoração4.jpg",
    "/images/decoração5.jpg",
  ];

  const images2 = [
    "/images/chá1.jpg",
    "/images/chá2.jpg",
    "/images/chá3.jpg",
    "/images/chá4.jpg",
    "/images/chá5.jpg",
  ];

  const images3 = [
    "/images/revelação.jpg",
    "/images/revelação2.jpg",
    "/images/revelação3.jpg",
    "/images/revelação4.webp",
    "/images/revelação5.webp",
  ];

  // primeiro carrosel

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

  // segundo carrosel


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

  // terceiro carrosel


  const [index3, setIndex3] = useState(0);

  function getImage3(pos: number) {
    return images3[(index3 + pos + images3.length) % images3.length];
  }

  function next3() {
    setIndex3((prev) => (prev + 1) % images3.length);
  }

  function prev3() {
    setIndex3((prev) =>
      prev === 0 ? images3.length - 1 : prev - 1
    );
  }




  return (

    <div>
      <Header />
      <div className="fundo">
        <div className="Texto">
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

        <div className="Texto">
          Chá de Bebê <br /><br />
        </div>

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
          <br /><br /><br /><br />
          <div className="Texto">
            Chá de Revelação <br /><br />
          </div>
        <div className="carrousel-5">
          <button className="btn left3" onClick={prev3}>‹</button>
          <div className="carousel-track">
            <img src={getImage3(-2)} className="img side 2" />
            <img src={getImage3(-1)} className="img side" />
            <img src={getImage3(0)} className="img center" />
            <img src={getImage3(1)} className="img side" />
            <img src={getImage3(2)} className="img side 2" />
          </div>
          <button className="btn right3" onClick={next3}>›</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
