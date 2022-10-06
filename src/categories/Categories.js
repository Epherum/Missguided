import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./categories.scss";
function Categories() {
  SwiperCore.use([Navigation]);
  const slides = [];
  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <Link to="/categories/dresses">
          <motion.img src="../a2.png" alt="category" />
        </Link>
        <h3>Dresses</h3>
        <p>Explore Now</p>
      </SwiperSlide>
    );
  }
  return (
    <div className="container categories">
      <div className="categories-bruh" />
      <div className="categories-breadcrumbs">
        {" "}
        {"<  "}Home{"  /  "}Categories
      </div>
      <h1 className="categories-headline">CATEGORIES</h1>
      <div className="categories-carousel">
        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          slidesPerView={3}
          slidesPerGroup={2}
          grabCursor={true}
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
