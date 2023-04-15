import { useState } from "react";

function Onboarding() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add validation here
    if (!name || !dateOfBirth || !bloodGroup || !contactNumber || !address) {
      alert("Please fill in all the fields");
    } else {
      alert("Patient registered successfully");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <form
        className='flex flex-col bg-white rounded-lg shadow-md p-10'
        onSubmit={handleSubmit}
      >
        <h1 className='text-3xl font-semibold mb-5'>Patient Admission</h1>
        <div className='flex flex-col mb-4'>
          <label htmlFor='name' className='mb-2 font-semibold text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border rounded-lg py-2 px-3 text-gray-700'
            placeholder='Enter patient name'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='dateOfBirth'
            className='mb-2 font-semibold text-gray-700'
          >
            Date of Birth
          </label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className='border rounded-lg py-2 px-3 text-gray-700'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='bloodGroup'
            className='mb-2 font-semibold text-gray-700'
          >
            Blood Group
          </label>
          <input
            type='text'
            id='bloodGroup'
            name='bloodGroup'
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className='border rounded-lg py-2 px-3 text-gray-700'
            placeholder='Enter blood group'
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
            type='tel'
            id='contactNumber'
            name='contactNumber'
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className='border rounded-lg py-2 px-3 text-gray-700'
            placeholder='Enter contact number'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='address' className='mb-2 font-semibold text-gray-700'>
            Address
          </label>
          <textarea
            id='address'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='border rounded-lg py-2 px-3 text-gray-700'
            placeholder='Enter address'
          ></textarea>
        </div>
        <button className="bg-blue-500 rounded-md py-3">Register</button>
      </form>
    </div>
  );
}


export default Onboarding