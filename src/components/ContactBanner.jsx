import React from 'react'
import Cntact_details from './Cntact-details'



const ContactBanner = () => {
  return (
   <>
   <div className="new-banner w-full bg-[#2f3747] mt-20 flex  item-center  ">
    <div className="banner px-10 sm:px-36 grid grid-cols-1   sm:grid-cols-3 gap-5 sm:gap-40 py-4 ">
   <Cntact_details/>
  
    </div>
   </div>
   </>
  )
}

export default ContactBanner
