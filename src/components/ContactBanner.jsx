import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";


const ContactBanner = () => {
  return (
   <>
   <div className="new-banner w-full bg-[#2f3747] mt-20 flex  item-center md: ">
    <div className="banner px-10 sm:px-o grid grid-cols-1  sm:grid-cols-3 gap-5 sm:gap-10 py-4 ">
      <div className="Phonenumbeer  ">
        <div className="text-icon flex items-center justify-center gap-3  ">
      <FaPhoneAlt  /> <h3 className='text-2xl font-bold font-mono ' >Phone <span className='text-[#32eedb]  ' >Number</span> </h3></div>
        <span className='' >+977 9804395755</span>
      </div>
      <div className="Phonenumber"><div className="gmail-icon flex items-center  gap-3  ">
      <MdOutgoingMail className='text-2xl' />
      <h3 className='text-2xl font-bold font-mono ' >Gmail</h3>
        </div> 
        <span className='font-EB Garamond' >Abuzerkzak41@gmail.com</span></div>
      <div className="Address">
        <div className="gmail-icon flex items-center  gap-3  ">
      <FaAddressBook className='text-2xl' />
      <h3 className='text-2xl font-bold font-mono ' >Address</h3>
        </div> 
        <span>Biratnagr 06 ,Nepal</span>
      </div>
    </div>
   </div>
   </>
  )
}

export default ContactBanner
