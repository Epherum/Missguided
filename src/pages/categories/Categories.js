import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./categories.scss";
import animations from "./animations";
function Categories() {
  SwiperCore.use([Navigation]);
  const slides = [];
  const linksAnimate = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide
        as="motion.div"
        variants={linksAnimate}
        initial="hidden"
        animate="visible"
        key={`slide-${i}`}
        tag="li"
      >
        <Link to="/categories/dresses">
          <motion.img src="../a2.png" alt="category" />
        </Link>
        <motion.h3 variants={linksAnimate} initial="hidden" animate="visible">
          Dresses
        </motion.h3>
        <p>Explore Now</p>
      </SwiperSlide>
    );
  }
  const { circleEnterAnimate, circleExitAnimate } = animations;

  const headline1Animate = {
    hidden: { y: 250, rotate: 40 },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };
  const headline2Animate = {
    hidden: { x: 100, y: -300, rotate: 40 },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const headlineLettersAnimate = {
    hidden: { rotateY: 620 },
    visible: {
      rotateY: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

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
      <div className="categories-bruh" />
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
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a1.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
        <div className="categories-grid-item">
          <Link to="/categories/dresses">
            <motion.img src="../a2.png" alt="category" />
          </Link>
          <h3>Dresses</h3>
          <p>Explore Now</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
