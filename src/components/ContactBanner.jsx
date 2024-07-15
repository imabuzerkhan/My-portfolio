import React from 'react'
import Cntact_details from './Cntact-details'



const ContactBanner = () => {
  return (
   <>
   <div className="new-banner w-full bg-[#2f3747] mt-20 flex items-center">
  <div className="banner w-full px-8 sm:px-2 lg:px-32 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 xl:gap-36 py-4">
    <Cntact_details />
  </div>
</div>
   </>
  )
}

export default ContactBanner
