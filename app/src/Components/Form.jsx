import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
     

    <div>
        
            
 <form onSubmit={handleSubmit(onSubmit)} class="max-w-sm mx-auto m-12 flex flex-col justify-center items-center gap-5">
    <div className="form-control">
  <input style={{background:"#efefef"}} type="text"  class="w-80 h-16 border border-inherit border-white rounded-full p-6 bg-slate-600 text-xl" placeholder='Enter your name' />
  </div>

  <div className="form-control">
  <input style={{background:"#efefef"}} type="text"
            name="email" class=" w-80 h-16 border border-inherit border-white rounded-full p-6 bg-slate-600 text-xl"  placeholder='Enter your email' {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })} />

{errors.email && errors.email.type === "required" && (
            <p className="errorMsg text-red-600"> 📛Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg text-red-600">📛Email is not valid.</p>
          )}

</div>

  <button type='submit' className='w-80 h-16 border border-inherit border-white rounded-full p-6 bg-slate-900 text-xl text-white flex items-center justify-center'>Submit</button>
 </form>

        
    </div>
  )
}

export default Form