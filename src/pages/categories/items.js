const productArray = [
  {
    image: "../../a1.png",
    title: "Dresses",
    link: "/categories/dresses",
  },
  {
    image: "../../a1.png",
    title: "Swimsuits",
    link: "/categories/swimsuits",
  },
  {
    image: "../../a1.png",
    title: "Accessories",
    link: "/categories/accessories",
  },
  {
    image: "../../a1.png",
    title: "Shoes",
    link: "/categories/shoes",
  },
  {
    image: "../../a1.png",
    title: "Tops",
    link: "/categories/tops",
  },
  {
    image: "../../a1.png",
    title: "Bottoms",
    link: "/categories/bottoms",
  },
  {
    image: "../../a1.png",
    title: "Jackets",
    link: "/categories/jackets",
  },
  {
    image: "../../a1.png",
    title: "Jackets",
    link: "/categories/jackets",
  },
  {
    image: "../../a1.png",
    title: "Jackets",
    link: "/categories/jackets",
  },
  {
    image: "../../a1.png",
    title: "Jackets",
    link: "/categories/jackets",
  },
  {
    image: "a1.png",
    title: "Jackets",
    link: "/categories/jackets",
  },
];

//maps through the array and gets all the unique categories
const uniqueCategories = productArray.map((product) => product.title);
//filters out the duplicates
const uniqueCategoriesFiltered = uniqueCategories.filter(
  (category, index) => uniqueCategories.indexOf(category) === index
);
console.log(uniqueCategoriesFiltered);

export default productArray;
