import React, {useEffect} from 'react'
import logo from "../../assets/Logo.png";
import { FcOk } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';



const Success = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/'); 
      }, 5000);
  
      return () => clearTimeout(timer); 
    }, [navigate]);
  return (
    <>
    <div>
      <nav className="flex justify-between  items-center mb-8 rounded-full p-2 px-8  ">
      <div> <img className="w-auto h-20" src={logo} alt="" /> </div> </nav>
    </div>

    <section>
       <div>
        <div className='flex justify-center'><FcOk className='w-20 h-20 m-8' /></div>
        <span className="shadow-font tracking-widest ">Success Submitted</span>
        <div className="font-semibold text-5xl mx-1  grid gap-y-6">
          <h1 className='m-3'>Congratulations </h1>
          <h5 className='text-xl font-medium text-gray-500   '>Your request has been successfully submitted to us. We <br />  will validate your information and react out to <br /> you shortly with updates</h5>
          <h6 className='text-lg font-normal relative top-40'>Redirecting you to Homepage in <strong>5 seconds 💚</strong></h6>
        </div>
      </div>
       </section>


       
      

    </>

    
  )
}

export default Success
