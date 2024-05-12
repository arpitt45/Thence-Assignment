import React from 'react'

const Footer = () => {
  return (
    <div style={{background:"#f5f5f5"}} className='flex justify-between  items-center mb-8  rounded-xl p-6 px-8 w-lvw md:w-full'>
       <div>
        <h5>&#169; Talup 2023. All right reserved</h5>
       </div>

       <div className='flex gap-6 underline'>
        <a href="/">Terms & Conditions</a>
        <a href="/">Privacy Policy</a>
       </div>

    </div>
  ) 
}

export default Footer
