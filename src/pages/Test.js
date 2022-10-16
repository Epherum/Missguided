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
// import dresses from "../csvjson";

function Test() {
  const storage = getStorage();
  const [data, setData] = useState([]);

  const productsCollectionRef = collection(db, "products");

  // function addAllProducts() {
  //   dresses.forEach(async (product) => {
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
  //update all documents by adding an id field
  // function updateAllProducts() {
  //   getDocs(productsCollectionRef).then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       updateDoc(doc.ref, {
  //         id: doc.id,
  //       });
  //     });
  //   });
  // }
  // const updateAllProducts = async () => {
  //   const q = query(productsCollectionRef);
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     updateDocument(doc.id);
  //   });
  // };

  // const updateDocument = async (id) => {
  //   let newImagesArray = [];
  //   const docRef = doc(db, "products", id);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     const images = docSnap.data().images;
  //     images
  //       .forEach(async (image) => {
  //         const storageRef = ref(storage, `productImages/${image}`);
  //         const url = await getDownloadURL(storageRef);
  //         newImagesArray.push(url);
  //       })
  //       .then(() => {
  //         console.log(newImagesArray);
  //         updateDoc(docRef, {
  //           images: newImagesArray,
  //         });
  //       });
  //   }
  // };

  useEffect(() => {
    // updateAllProducts();
  }, []);

  // const get20Products = async () => {
  //   const productsCollectionRef = collection(db, "products");
  //   const q = query(productsCollectionRef, limit(2));
  //   const querySnapshot = await getDocs(q);
  //   const products = querySnapshot.docs.map((doc) => doc.data());
  //   setData(products);
  // };

  // function useFirestoreImageUrl(imagePath) {
  //   const [url, setUrl] = useState("");
  //   useEffect(() => {
  //     getDownloadURL(ref(storage, `productImages/${imagePath}`)).then((url) =>
  //       setUrl(url)
  //     );
  //   }, [imagePath]);
  //   return url;
  // }

  // function FirestoreImage({ imagePath }) {
  //   const url = useFirestoreImageUrl(imagePath);
  //   return <img style={{ width: "100px" }} key={imagePath} src={url} />;
  // }

  return (
    <div className="App">
      {/* {data.map((item) => (
        <div key={item.name}>
          <h1>{item?.name}</h1>
          <h2>{item?.price}</h2>
          <h3>{item?.description}</h3>
          {item.images?.map((path) => (
            <FirestoreImage imagePath={path} />
          ))}
        </div>
      ))} */}
    </div>
  );
}
export default Test;
