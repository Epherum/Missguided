import { useState, useEffect } from "react";
import { db, storage } from "../firebase-config";
import {
  limit,
  query,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";

function Test() {
  const storage = getStorage();
  const [data, setData] = useState([]);

  const productsCollectionRef = collection(db, "products");

  // function addAllProducts() {
  //   products.forEach(async (product) => {
  //     addDoc(productsCollectionRef, {
  //       name: product.name,
  //       price: product.price,
  //       description: product.description,
  //       color: product.color,
  //       category: product.category,
  //       type: product.type,
  //       images: [
  //         product.image1,
  //         product.image2,
  //         product.image3,
  //         product.image4,
  //       ],
  //     });
  //   });
  // }

  useEffect(() => {
    // updateAllProducts();
  }, []);

  // update all documents by adding an id field
  function updateAllProducts() {
    getDocs(productsCollectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {
          id: doc.id,
        });
      });
    });
  }

  return <div className="App"></div>;
}
export default Test;
