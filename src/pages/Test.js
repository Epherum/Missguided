import { useState, useEffect } from "react";
import { db, storage } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function Test() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [imageList, setImageList] = useState([]);
  const [newAge, setNewAge] = useState(0);

  const usersCollectionRef = collection(db, "users");
  const imageListRef = ref(storage, "images/");
  console.log(imageListRef);
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateAge = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: Number(age + 1) };
    await updateDoc(userDoc, newFields);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={createUser}>create user</button>
      {users?.map((user) => {
        const { name, age, id } = user;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button onClick={() => updateAge(id, age)}>increase age</button>
            <button onClick={() => deleteUser(id)}>Delete user</button>
          </div>
        );
      })}
      {imageList?.map((image, index) => {
        return (
          <div key={index}>
            <img style={{ width: "100px" }} src={image} />
          </div>
        );
      })}
    </div>
  );
}
export default Test;
