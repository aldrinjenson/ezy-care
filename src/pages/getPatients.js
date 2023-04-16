import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/configs/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const getPatients = () => {
  const [patient, setPatient] = useState("");
  const patientRef = collection(db, "patients");
  const q = query(patientRef, where("p_id", "==", 432));
  console.log("HIII", q.data);

  const getPatients = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(
        `${doc.id}  ${doc.data().PatientName} ${doc.data().dateOfBirth}`
      );
      setPatient({
        id: doc.id,
        PatientName: doc.data().PatientName,
        dateOfBirth: doc.data().dateOfBirth,
        bloodGroup: doc.data().bloodGroup,
        contactNumber: doc.data().contactNumber,
        address: doc.data().address,
        email: doc.data().email,
        cid: doc.data().cid,
      });
    });
  };
  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-16 shadow">
      <h1>Patients</h1>
      <img src="https://placehold.co/400" width={100} height={100} />
      <table class="text-xs my-3">
        <tbody>
          <tr>
            <td class="px-2 py-2 text-gray-500  text-xl font-semibold">Name</td>
            <td class="px-2 py-2 text-xl ">{patient.PatientName}</td>
          </tr>
          <tr>
            <td class="px-2 py-2 text-gray-500  text-xl font-semibold">
              Date of Birth
            </td>
            <td class="px-2 py-2 text-xl ">{patient.dateOfBirth}</td>
          </tr>
          <tr>
            <td class="px-2 py-2 text-gray-500  text-xl font-semibold">
              Address
            </td>
            <td class="px-2 py-2 text-xl ">{patient.address}</td>
          </tr>
          <tr>
            <td class="px-2 py-2 text-gray-500  text-xl font-semibold">
              Phone
            </td>
            <td class="px-2 py-2 text-xl ">{patient.contactNumber}</td>
          </tr>
          <tr>
            <td class="px-2 py-2 text-gray-500  text-xl font-semibold">
              Email
            </td>
            <td class="px-2 py-2 text-xl ">{patient.email}</td>
          </tr>
        </tbody>
      </table>

      {/* <p>{patient.PatientName}</p>
      <p>{patient.dateOfBirth}</p>
      <p>{patient.bloodGroup}</p>
      <p>{patient.contactNumber}</p>
      <p>{patient.address}</p>
      <p>{patient.email}</p> */}
    </div>
  );
};

export default getPatients;
