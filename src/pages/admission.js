import { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/configs/firebase";
import { BiSleepy } from "react-icons/bi";
function Onboarding() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name || !dateOfBirth || !bloodGroup || !contactNumber || !address) {
    if (!name) {
      toast("Please fill in all the fields");
    } else {
      toast("Patient registered successfully");
    }
    
  };
  const usersRef = collection(db, "patients");

  const uploadFireBase = async () => {
    addDoc(usersRef, {
      PatientName: name,
      dateOfBirth: dateOfBirth,
      bloodGroup: bloodGroup,
      contactNumber: contactNumber,
      address: address,
      email:email,
    });
    //sleep(1000);
  };
  const handleUpload2 = async () => {
    const myJson = {
      patientName: patientName,
      dateOfBirth: dateOfBirth,
      bloodGroup: bloodGroup,
      contactNumber: contactNumber,
      address: address,
    };
    const jsonString = JSON.stringify(myJson);
    const blob = new Blob([jsonString], { type: "application/json" });
    const fileName = name + ".json";
    const cid = await client.put([blob], {
      wrapWithDirectory: false,
      name: fileName,
    });
    console.log(`File uploaded: https://web3.storage/ipfs/${cid}`);
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FBFAF5]">
      <div
        className="flex flex-col  rounded-lg  shadow-md p-10 bg-[#FBFAF5]"
        // onSubmit={uploadFireBase}
      >
        <h1 className="text-3xl font-semibold mb-5">Patient Admission</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg py-2 px-3 text-gray-700"
            placeholder="Enter patient name"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="dateOfBirth"
            className="mb-2 font-semibold text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border rounded-lg py-2 px-3 text-gray-700"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="bloodGroup"
            className="mb-2 font-semibold text-gray-700"
          >
            Blood Group
          </label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="border rounded-lg py-2 px-3 text-gray-700"
            placeholder="Enter blood group"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor='email'
            className='mb-2 font-semibold text-gray-700'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border rounded-lg py-2 px-3 text-gray-700'
            placeholder='Enter email'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='contactNumber'
            className='mb-2 font-semibold text-gray-700'
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="border rounded-lg py-2 px-3 text-gray-700"
            placeholder="Enter contact number"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="address" className="mb-2 font-semibold text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded-lg py-2 px-3 text-gray-700"
            placeholder="Enter address"
          ></textarea>
        </div>
        <button
          onClick={uploadFireBase}
          className="bg-blue-500 rounded-md py-3"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
