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
  return <div className="App"></div>;
}

export default Test;
