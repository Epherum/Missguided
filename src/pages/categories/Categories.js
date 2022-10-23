import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./categories.scss";
import animations from "./animations";
import { useState, useEffect, useContext } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { storage } from "../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import { NavContext } from "../../contexts/NavContext";
import Dim from "../../components/dim/Dim";

//TODO: try using clippath for images instead of opacity

function Categories() {
  const [categories, setCategories] = useState([]);
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  const {
    circleEnterAnimate,
    circleExitAnimate,
    headline1Animate,
    headline2Animate,
    slidesAnimate,
    breadcrumbsAnimate,
    circleColorAnimate,
  } = animations;

  SwiperCore.use([Navigation]);

  const getAllCategories = async () => {
    const productsCollectionRef = collection(db, "categories");
    const querySnapshot = await getDocs(productsCollectionRef);
    const products = querySnapshot.docs.map((doc) => doc.data());
    //reverse products
    //to make it prettier
    //i really like the smile of the first category girl lol (nah it's for the swimwear )
    products.reverse();
    setCategories(products);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const slides = [];

  //animationStartDelay
  const ASD = 1;

  //individualSlideDelay
  const ISD = 0.3;

  //individualh3Delay
  const IHD = 0.2;

  //individualparagraphDelay
  const IPD = 0.3;

  //individualSlideReverseDelay
  //reverse delay is to start a slide before the previous one finishes
  const ISRD = 0.2;

  categories?.forEach((item, i) => {
    const { category, image2, image } = item;
    slides.push(
      <SwiperSlide key={i} tag={"li"}>
        <motion.div
          variants={slidesAnimate}
          initial="hidden"
          animate="visible"
          transition={{ delay: i * ISD - i * ISRD + ASD, ease: "easeOut" }}
        >
          <Link to={`${category}`}>
            <img src={image2} alt={image} />

            <motion.h3
              variants={slidesAnimate}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * IHD + ASD, ease: "easeOut" }}
            >
              {category}
            </motion.h3>
            <motion.p
              variants={slidesAnimate}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * IPD + ASD, ease: "easeOut" }}
            >
              Explore Now
            </motion.p>
          </Link>
        </motion.div>
      </SwiperSlide>
    );
  });

  return (
    <div className="big-container-categories">
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
      <div
        className="container categories"
        style={{
          transform: isNavOpen ? "translateY(25rem)" : "translateY(0px)",
        }}
      >
        <Dim />
        <motion.div
          variants={circleColorAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="circle"
        />
        <motion.div
          variants={breadcrumbsAnimate}
          initial="hidden"
          animate="visible"
          className="breadcrumbs"
        >
          {"<  "}
          <Link to="/home">Home</Link>
          {"  /  "}
          <p>Categories</p>
        </motion.div>
        <div className="headline">
          <motion.h1>
            <motion.div
              variants={headline1Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              CATEG
            </motion.div>
            <motion.div
              variants={headline2Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              ORIES
            </motion.div>
          </motion.h1>
        </div>
        <div className="carousel">
          <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            slidesPerView={3}
            slidesPerGroup={2}
            draggable={false}
            grabCursor={true}
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

        <div className="products">
          {categories.map((item, i) => {
            const { category, image, image2 } = item;
            return (
              <motion.div
                key={i}
                variants={slidesAnimate}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: i * ISD - i * ISRD + ASD,
                  ease: "easeOut",
                }}
              >
                <Link to={`${category}`}>
                  <img src={image2} alt={image} />

                  <motion.h3
                    variants={slidesAnimate}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * IHD + ASD, ease: "easeOut" }}
                  >
                    {category}
                  </motion.h3>
                  <motion.p
                    variants={slidesAnimate}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * IPD + ASD, ease: "easeOut" }}
                  >
                    Explore Now
                  </motion.p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
