import React, { useEffect } from "react";
import { db } from "@/configs/firebase";
import { collection, getDocs,query,where } from "firebase/firestore";

const getPatients = () => {
    const patientRef=collection(db,"patients");
    const q=query(patientRef,where("Patient","==","Ra"));
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
