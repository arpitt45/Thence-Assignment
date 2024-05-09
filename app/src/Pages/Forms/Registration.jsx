import React from 'react'
import logo from "../../assets/Logo.png";
import { RxCross1 } from "react-icons/rx";
import Form from '../../Components/Form';

const Registration = () => {
  return (
    <div>
       <nav className="flex justify-between  items-center mb-8 rounded-full p-2 px-8  ">
      <div> <img className="w-auto h-20" src={logo} alt="" /> </div>

      <div>
        <div className='w-12 h-12  border border-black rounded-full flex items-center justify-center hover:bg-gray-200'>
            <a href="/"><RxCross1 className='w-6 h-6' /></a>
        </div>
      </div>

       </nav>

       <section>
       <div>
        <span className="shadow-font tracking-widest ">Registration form</span>
        <div className="font-semibold text-5xl mx-1  grid gap-y-2">
          <h1>Start your success </h1>
          <h1>journey here!</h1>
        </div>
      </div>
       </section>

       <section>
        <Form/>
       </section>
    </div>
  )
}

export default Registration
