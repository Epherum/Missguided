import { BsArrowRight, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      origin += deg;
    });
  };

  useEffect(() => {
    circularText("How to Make an Effort  How to Make an Effort  ", 230);
    //230
    //150
    //100
  }, []);

  const linksAnimate = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const headline1Animate = {
    hidden: { y: 200, rotate: 30, opacity: 0 },
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "circOut" },
    },
  };
  const headline2Animate = {
    hidden: { y: -200, x: 100, rotate: 30, opacity: 0 },
    visible: {
      y: 0,
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "circOut" },
    },
  };
  const image1Animate = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      scale: 1.5,
      rotate: 20,
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      rotate: 0,

      scale: 1,
      transition: {
        duration: 1.4,
        ease: "easeInOut",
      },
    },
  };

  //this shit is bugged for some reason but image1Animate isn't, fuck me
  //had to go the css route
  const image2Animate = {
    hidden: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      scale: 1.2,
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="container home-grid">
      <motion.ul
        initial={"hidden"}
        animate={"visible"}
        transition={{ delayChildren: 1, staggerChildren: 0.07 }}
        className="links"
      >
        <motion.li variants={linksAnimate}>New In</motion.li>
        <motion.li variants={linksAnimate}>Dresses</motion.li>
        <motion.li variants={linksAnimate}>Tops</motion.li>
        <motion.li variants={linksAnimate}>Clothing</motion.li>
        <motion.li variants={linksAnimate}>Shoes</motion.li>
        <motion.li variants={linksAnimate}>Accessories</motion.li>
        <motion.li variants={linksAnimate}>Sale</motion.li>
      </motion.ul>

      <motion.div className="image-first">
        <motion.div
          variants={image1Animate}
          initial={"hidden"}
          animate={"visible"}
        ></motion.div>
      </motion.div>
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
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 2 }}
        transition={{ duration: 1.5 }}
        className="circle"
      ></motion.div>
      <motion.div className="headline">
        <motion.h1>
          <motion.div
            variants={headline1Animate}
            initial={"hidden"}
            animate={"visible"}
          >
            BA
          </motion.div>
          <motion.div
            variants={headline2Animate}
            initial={"hidden"}
            animate={"visible"}
          >
            BES{" "}
          </motion.div>
          <span className="who-brunch">
            <span className="who">WHO</span>BRUNCH
          </span>
        </motion.h1>
      </motion.div>
      <p className="circle-text" ref={classIndex}></p>
      <motion.div
        // variants={image2Animate}
        // initial={"hidden"}
        // animate={"visible"}
        className="image-second"
      ></motion.div>
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
