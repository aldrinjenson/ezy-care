import { generatePdf } from "@/utils/generateReport";
import { useEffect } from "react";

const PatientDetails = () => {
  useEffect(() => {
    generatePdf({
      name: "Johhny Doe",
      bloodGroup: "B -ve",
      contactNumber: "99876335",
      address: "sdfdsfdsf,ds,fds,fds,f,dsf",
      dateOfBirth: "16/3/2332",
      imgUrl: "sdf",
    });
  });
  return <div>PatientDetails</div>;
};

export default PatientDetails;
