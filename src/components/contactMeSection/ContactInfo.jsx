import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="NPQ.@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+0347220501" Image={FiPhone} />
      <SingleInfo text="HCM" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
