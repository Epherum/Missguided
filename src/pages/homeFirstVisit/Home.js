import { BsArrowRight } from "react-icons/bs";
import { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.scss";
import animations from "./animations";
import facebookIcon from "../../images/facebook-footer.png";
import twitterIcon from "../../images/twitter-footer.png";
import instagramIcon from "../../images/instagram-footer.png";
import { NavContext } from "../../contexts/NavContext";
import Dim from "../../components/dim/Dim";

//homeFirstVisit is a quick and dirty solution to play
//a different animation on first visit
//this might be the reason why i wont go to heaven

//changes from home:
// - removed cricleEnterAnimate
// - replaced with a loader
//added outline to Shop Now button to make
//traversing the site easier for newcomers

//the css class names are the same,
//i didint change them so i wouldnt have to
//redo the same changes twice in 2 files
//if you wanna change the css, change it here and not in home.js
//and if you wanna make it look different, add a -first-visit to
//the class to decouple it from home.js

function Home() {
  const { isNavOpen } = useContext(NavContext);
  const { isCartOpen } = useContext(NavContext);

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
    circleColorAnimate,
    circleLoader1Animate,
    circleLoader2Animate,
    mDAnimate,
    sDAnimate,
    gDAnimate,
    iDAnimate,
    eDAnimate,
    iAnimate,
    dAnimate,
    dDAnimate,
    uAnimate,
    sAnimate,
    logoAnimate,
  } = animations;

  const links = [
    "Swimwear",
    "Dresses",
    "Tops",
    "Skirts",
    "Leggings",
    "Athleisure",
    "Sale",
  ];

  return (
    <div className="big-container">
      <motion.div className="loader">
        <motion.div
          variants={circleLoader1Animate}
          initial="hidden"
          animate="visible"
          className="circle1"
        />
        <motion.div
          variants={circleLoader2Animate}
          initial="hidden"
          animate="visible"
          className="circle2"
        />
        <motion.div className="clipPathContainer">
          <motion.h1 variants={logoAnimate} initial="hidden" animate="visible">
            {/* spans dont work in framer whyyy */}
            <motion.div variants={mDAnimate} initial="hidden" animate="visible">
              m
            </motion.div>
            <motion.div variants={iAnimate} initial="hidden" animate="visible">
              i
            </motion.div>
            <motion.div variants={sDAnimate} initial="hidden" animate="visible">
              s
            </motion.div>
            <motion.div variants={sAnimate} initial="hidden" animate="visible">
              s
            </motion.div>
            <motion.div variants={gDAnimate} initial="hidden" animate="visible">
              g
            </motion.div>
            <motion.div variants={uAnimate} initial="hidden" animate="visible">
              u
            </motion.div>
            <motion.div variants={iDAnimate} initial="hidden" animate="visible">
              {" "}
              i
            </motion.div>
            <motion.div variants={dDAnimate} initial="hidden" animate="visible">
              d
            </motion.div>
            <motion.div variants={eDAnimate} initial="hidden" animate="visible">
              e
            </motion.div>
            <motion.div variants={dAnimate} initial="hidden" animate="visible">
              d
            </motion.div>
          </motion.h1>
        </motion.div>
      </motion.div>

      <motion.div
        variants={circleExitAnimate}
        initial="hidden"
        exit="visible"
        className="fullscreen-circle-exit"
      />

      <main
        className="container home"
        style={{
          transform: isNavOpen ? "translateY(25rem)" : "translateY(0px)",
          translate: isCartOpen ? "-28rem 0rem" : "0rem 0rem",
        }}
      >
        <Dim />
        <motion.ul
          variants={linksAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="links"
        >
          {links.map((link, index) => (
            <motion.li variants={linksAnimate} key={index}>
              <Link to={`/categories/${link}`}>{link}</Link>
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
          <motion.img src={facebookIcon} variants={socialsAnimate} />
          <motion.img src={twitterIcon} variants={socialsAnimate} />
          <motion.img src={instagramIcon} variants={socialsAnimate} />
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
