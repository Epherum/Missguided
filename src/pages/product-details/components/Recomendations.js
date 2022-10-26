import { db } from "../../../firebase-config";
import { limit, query, collection, getDocs, where } from "firebase/firestore";
import "./Recomendations.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import Recomendation from "./Recommendation";
import { useNavContext } from "../../../contexts/NavContext";

function Recomendations({ category, color, id }) {
  //get 5 products from firebase
  const [products, setProducts] = useState([]);
  const { isRecommendationsOpen } = useNavContext();

  const getAllProducts = async () => {
    const productsCollectionRef = collection(db, "products");
    const q = query(
      productsCollectionRef,
      where("category", "==", category),
      where("color", "==", color),
      limit(10)
    );

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    //remove the current product from the data
    const filteredData = data.filter((product) => product.id !== id);

    setProducts([...filteredData]);
  };
  useEffect(() => {
    window.scroll(0, 0);
    if (category && color && id) {
      getAllProducts();
    }
  }, [category, color]);

  let slides = [];

  products?.forEach((item, i) => {
    slides.push(
      <SwiperSlide key={i} tag={"li"}>
        <Recomendation
          key={item.id}
          id={item.id}
          category={item.category}
          title={item.name}
          image={item.images[0]}
          price={item.price}
        />
      </SwiperSlide>
    );
  });
  return (
    <div className="recomendations-overlay">
      <div className="recomendations">
        <h2 className="headline">Recommended for You</h2>
        <div className="carousel">
          <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            slidesPerView={3}
            slidesPerGroup={2}
            draggable={false}
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
      </div>
    </div>
  );
}

export default Recomendations;
