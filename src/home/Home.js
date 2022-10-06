import { BsArrowRight, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.scss";

function Home() {
  let classIndex = useRef();
  const circularText = (txt, radius) => {
    txt = txt.split("");

    var deg = 360 / txt.length,
      origin = 0;

    txt.forEach((ea) => {
      ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.current.innerHTML += ea;
      console.log(classIndex);
      origin += deg;
    });
  };

  useEffect(() => {
    circularText("How to Make an Effort  How to Make an Effort  ", 230);
    //230
    //150
    //100
  }, []);

  return (
    <main className="container home-grid">
      <ul className="links">
        <li>New In</li>
        <li>Dresses</li>
        <li>Tops</li>
        <li>Clothing</li>
        <li>Shoes</li>
        <li>Accessories</li>
        <li>Sale</li>
      </ul>
      <div className="image-first"></div>
      <div className="deals">
        <div className="deal1">
          <h5>
            Unlimited Next <br /> Day Delivery
          </h5>
          <p>for a year--$9.99</p>
        </div>
        <div className="deal2">
          <h5>
            20% off for the First <br /> App Order
          </h5>
          <p>Click Here</p>
        </div>
        <div className="deal3">
          <h5>New In from $8</h5>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="circle"></div>
      <div className="headline">
        <h1>
          BABES{" "}
          <span className="who-brunch">
            <span className="who">WHO</span>BRUNCH
          </span>
        </h1>
      </div>
      <p className="circle-text" ref={classIndex}></p>

      <div className="image-second"></div>
      <div className="socials">
        <p>
          <BsFacebook />
        </p>
        <p>
          <AiFillTwitterCircle />
        </p>
        <p>
          <RiInstagramFill />
        </p>
      </div>
      <div className="button">
        <Link to="/categories">
          Shop Now <BsArrowRight />
        </Link>
      </div>
      <p className="circle-text-inside">
        We're Always keen To Hear From Other Creative Minds
      </p>
    </main>
  );
}

export default Home;
