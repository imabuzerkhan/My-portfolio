import { FaPhoneAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";

const Cntact_details = () => {
  return (
    <>
        {/*------------------ First details---------------------------------- */}

    <div className="Contact-number flex items-center justify-center gap-3 ">
<FaPhoneAlt  className="bg-white px-8 py-8 text-black rounded-full text-6xl  "  />
<div className="Contact-text flex items-center flex-col ">
  <h3 className="text-2xl font-mono font-medium " >Phone Number</h3>
  <h5 className="text-lg text-[#4FD1C5] " >+977 9804395755</h5>
</div>
    </div>

    {/*------------------ Second details---------------------------------- */}
    
    </>
  )
}

export default Cntact_details
