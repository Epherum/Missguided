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

function Test() {
  const fakeData = [{ name: "bruh", age: "abc" }];
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [products, setProducts] = useState({});

  const addPeople = async () => {
    fakeData.forEach(async (person) => {
      await writeToDatabase(person.age, person.name);
    }, []);
  };

  const writeToDatabase = async (productId, productName) => {
    const db = getDatabase();
    const reference = ref(db, "products/" + productId);
    await set(reference, productName);
  };

  const getPeople = async () => {
    if (value.length > 0) {
      let searchQuery = value.toLowerCase();
      for (const key in products) {
        let fruit = products[key].toLowerCase();
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
    getPeople();
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
        return <p>{item}</p>;
      })}
    </div>
  );
}

export default Test;
