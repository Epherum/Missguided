// const updateAllProducts = async () => {
//   const q = query(productsCollectionRef, limit(10));
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
//     images.forEach(async (image) => {
//       const storageRef = ref(storage, image);
//       const url = await getDownloadURL(storageRef);
//       newImagesArray.push(url);
//     }).then(() => {
//     console.log(newImagesArray);
//      updateDoc(docRef, {
//       images: newImagesArray,
//     });
//     });
//   }
// };
