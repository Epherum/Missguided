import { BsArrowRight, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.scss";
import animations from "./animations";

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
    console.log(classIndex.current);
    //230
    //150
    //100
  }, []);

  //destrucure animations
  const {
    circleTextInsideAnimate,
    image1Animate,
    image1ContainerAnimate,
    image2Animate,
    image2ContainerAnimate,
    whoBrunchAnimate,
    headline1Animate,
    headline2Animate,
    headlineLettersAnimate,
    linksAnimate,
    Deals_deal1headline1Animate,
    Deals_deal1headline2Animate,
    Deals_deal1paragraphAnimate,
    Deals_deal2headline1Animate,
    Deals_deal2headline2Animate,
    Deals_deal2paragraphAnimate,
    Deals_deal3headline1Animate,
    Deals_deal3paragraphAnimate,
    buttonAnimate,
    buttonTextAnimate,
    socialsAnimate,
    circleTextAnimate,
    circleExitAnimate,
    circleEnterAnimate,
    circleColorAnimate,
  } = animations;
  const links = [
    "New In",
    "Dresses",
    "Tops",
    "Skirts",
    "Shoes",
    "Accessories",
    "Sale",
  ];

  return (
    <div className="big-container">
      <motion.div
        variants={circleEnterAnimate}
        initial="hidden"
        animate="visible"
        className="fullscreen-circle-enter"
      />

      <motion.div
        variants={circleExitAnimate}
        initial="hidden"
        exit="visible"
        className="fullscreen-circle-exit"
      />
      <main className="container home">
        <motion.ul
          variants={linksAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="links"
        >
          {links.map((link, index) => (
            <motion.li variants={linksAnimate} key={index}>
              <Link to={"/"}>{link}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={image1ContainerAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="image-first"
        >
          <motion.div
            variants={image1Animate}
            initial={"hidden"}
            animate={"visible"}
          ></motion.div>
        </motion.div>
        <div className="deals">
          <div className="deal1">
            {/* all these divs are necessary for the animation
           because the designer rivaled hitler's meth usage when he made this */}
            <h5>
              <motion.div className="deal1-why-did-i">
                <motion.div
                  variants={Deals_deal1headline1Animate}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  Unlimited Next
                </motion.div>
              </motion.div>
              <motion.div className="deal1-pick-this-design">
                <motion.div
                  variants={Deals_deal1headline2Animate}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  Day Delivery
                </motion.div>
              </motion.div>
            </h5>
            <motion.p
              variants={Deals_deal1paragraphAnimate}
              initial={"hidden"}
              animate={"visible"}
            >
              for a year--$9.99
            </motion.p>
          </div>
          <div className="deal2">
            <h5>
              <motion.div className="deal1-why-did-i">
                <motion.div
                  variants={Deals_deal2headline1Animate}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  20% off for First
                </motion.div>
              </motion.div>
              <motion.div className="deal1-pick-this-design">
                <motion.div
                  variants={Deals_deal2headline2Animate}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  App Order
                </motion.div>
              </motion.div>
            </h5>
            <motion.p
              variants={Deals_deal2paragraphAnimate}
              initial={"hidden"}
              animate={"visible"}
            >
              Shop Now
            </motion.p>
          </div>
          <div className="deal3">
            <h5>
              <motion.div className="deal1-why-did-i">
                <motion.div
                  variants={Deals_deal3headline1Animate}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  New In from $8
                </motion.div>
              </motion.div>
            </h5>
            <motion.p
              variants={Deals_deal3paragraphAnimate}
              initial={"hidden"}
              animate={"visible"}
            >
              Click Here
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={circleColorAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="circle"
        ></motion.div>

        <motion.div className="headline">
          {/* can be automated with a custom hook but
         im not gonna spend 10 hours to automate 10m of work
          (again) */}
          <motion.h1>
            <motion.div
              variants={headline1Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              <motion.div variants={headlineLettersAnimate}>B</motion.div>
              <motion.div variants={headlineLettersAnimate}>A</motion.div>
            </motion.div>
            <motion.div
              variants={headline2Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              <motion.div variants={headlineLettersAnimate}>B</motion.div>
              <motion.div variants={headlineLettersAnimate}>E</motion.div>
              <motion.div variants={headlineLettersAnimate}>S</motion.div>
            </motion.div>
            <span className="who-brunch">
              <motion.div
                variants={whoBrunchAnimate}
                initial={"hidden"}
                animate={"visible"}
                className="who"
              >
                {/* spans are not supported by framer motion for rotation
               so i have to use inline-block divs
               which makes me looks stupid af */}

                <motion.div variants={whoBrunchAnimate}>W</motion.div>
                <motion.div variants={whoBrunchAnimate}>H</motion.div>
                <motion.div variants={whoBrunchAnimate}>O</motion.div>
              </motion.div>
              <motion.div
                variants={whoBrunchAnimate}
                initial={"hidden"}
                animate={"visible"}
              >
                <motion.div variants={whoBrunchAnimate}>B</motion.div>
                <motion.div variants={whoBrunchAnimate}>R</motion.div>
                <motion.div variants={whoBrunchAnimate}>U</motion.div>
                <motion.div variants={whoBrunchAnimate}>N</motion.div>
                <motion.div variants={whoBrunchAnimate}>C</motion.div>
                <motion.div variants={whoBrunchAnimate}>H</motion.div>
              </motion.div>
            </span>
          </motion.h1>
        </motion.div>
        <motion.p
          variants={circleTextAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="circle-text"
          ref={classIndex}
        ></motion.p>
        <motion.div
          variants={image2ContainerAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="image-second"
        >
          <motion.div
            variants={image2Animate}
            initial={"hidden"}
            animate={"visible"}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={socialsAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="socials"
        >
          <motion.p variants={socialsAnimate}>
            <BsFacebook />
          </motion.p>
          <motion.p variants={socialsAnimate}>
            <AiFillTwitterCircle />
          </motion.p>
          <motion.p variants={socialsAnimate}>
            <RiInstagramFill />
          </motion.p>
        </motion.div>
        <motion.div
          variants={buttonAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="button"
        >
          <Link to="/categories">
            <motion.p
              variants={buttonTextAnimate}
              initial={"hidden"}
              animate={"visible"}
            >
              Shop Now <BsArrowRight />
            </motion.p>
          </Link>
        </motion.div>
        <motion.p
          variants={circleTextInsideAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="circle-text-inside"
        >
          We're Always keen To Hear From Other Creative Minds
        </motion.p>
      </main>
    </div>
  );
}

export default Home;
