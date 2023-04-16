import React, { useEffect } from "react";
import { db } from "@/configs/firebase";
import { collection, getDocs } from "firebase/firestore";

const getPatients = () => {
  const getPatients = async () => {
    const querySnapshot = await getDocs(collection(db, "patients"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id}  ${doc.data().PatientName} ${doc.data().dateOfBirth}`);
    });
  };
  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div>
      <h1>Patients</h1>
    </div>
  );
};

export default getPatients;
