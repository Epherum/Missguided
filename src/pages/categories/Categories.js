import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./categories.scss";
import animations from "./animations";
import productArray from "./items";

//TODO: try using clippath for images instead of opacity

function Categories() {
  const {
    circleEnterAnimate,
    circleExitAnimate,
    headline1Animate,
    headline2Animate,
    headlineLettersAnimate,
    slidesAnimate,
  } = animations;

  SwiperCore.use([Navigation]);

  const slides = [];

  //animationStartDelay
  const ASD = 2;

  //individualSlideDelay
  const ISD = 0.3;

  //individualSlideReverseDelay
  //reverse delay is to start a slide before the previous one finishes
  const ISRD = 0.2;

  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag={"li"}>
        <motion.div
          variants={slidesAnimate}
          initial="hidden"
          animate="visible"
          transition={{ delay: i * ISD - i * ISRD + ASD }}
        >
          <Link to="/categories/dresses">
            <img src="../../a1.png" alt="category" />
          </Link>
          <motion.h3
            variants={slidesAnimate}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * ISD - i * ISRD + ASD }}
          >
            Dresses
          </motion.h3>
          <motion.p
            variants={slidesAnimate}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * ISD - i * ISRD + ASD }}
          >
            Explore Now
          </motion.p>
        </motion.div>
      </SwiperSlide>
    );
  }

  return (
    <div className="container categories">
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
      <motion.div className="circle" />
      <div className="categories-breadcrumbs">
        {" "}
        {"<  "}Home{"  /  "}Categories
      </div>
      <div className="categories-headline">
        <motion.h1>
          <motion.div
            variants={headline1Animate}
            initial={"hidden"}
            animate={"visible"}
          >
            <motion.div variants={headlineLettersAnimate}>C</motion.div>
            <motion.div variants={headlineLettersAnimate}>A</motion.div>
            <motion.div variants={headlineLettersAnimate}>T</motion.div>
            <motion.div variants={headlineLettersAnimate}>E</motion.div>
            <motion.div variants={headlineLettersAnimate}>G</motion.div>
          </motion.div>
          <motion.div
            variants={headline2Animate}
            initial={"hidden"}
            animate={"visible"}
          >
            <motion.div variants={headlineLettersAnimate}>O</motion.div>
            <motion.div variants={headlineLettersAnimate}>R</motion.div>
            <motion.div variants={headlineLettersAnimate}>I</motion.div>
            <motion.div variants={headlineLettersAnimate}>E</motion.div>
            <motion.div variants={headlineLettersAnimate}>S</motion.div>
          </motion.div>
        </motion.h1>
      </div>
      <div className="categories-carousel">
        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          slidesPerView={3}
          slidesPerGroup={2}
          draggable={false}
          navigation
          breakpoints={{
            1250: {
              slidesPerView: 4,
            },
          }}
        >
          {slides}
        </Swiper>
      </div>

      <div className="categories-grid">
        {productArray.map((item, i) => (
          <motion.div
            variants={slidesAnimate}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * ISD - i * ISRD + ASD }}
            className="categories-grid-item"
            key={i}
          >
            <Link to={item.link}>
              <img src={item.image} alt="category" />
            </Link>
            <motion.h3
              variants={slidesAnimate}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * ISD - i * ISRD + ASD }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              variants={slidesAnimate}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * ISD - i * ISRD + ASD }}
            >
              Explore Now
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
