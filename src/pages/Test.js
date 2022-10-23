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
import { getDatabase, ref, set, get, child } from "firebase/database";
import { Link } from "react-router-dom";

function Test() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [products, setProducts] = useState({});

  const searchProducts = async () => {
    if (value.length > 0) {
      setResult([]);
      let searchQuery = value.toLowerCase();
      for (const key in products) {
        let fruit = products[key].name.toLowerCase();
        if (fruit.slice(0, searchQuery.length).indexOf(searchQuery) != -1) {
          setResult((prevResult) => {
            return [...prevResult, products[key]];
          });
        }
      }
    } else {
      setResult([]);
    }
  };

  const getProducts = async () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "products/")).then((snapshot) => {
      setProducts(snapshot.val());
    });
  };

  useEffect(() => {
    searchProducts();
  }, [value]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <h1>wtf</h1>
      <h1>wtf</h1>
      <h1>wtf</h1>
      <h1>wtf</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {result.map((item) => {
        return (
          <Link to={`/categories/${item.category}/${item.name}/${item.id}`}>
            <p>{item.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Test;
