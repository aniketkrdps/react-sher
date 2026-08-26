import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterUser = ({setUsers}) => {

  let {register,
    handleSubmit,
    reset,
    formState:{errors}}  =useForm({
        mode:"onChange",
    })
  
    let formSubmit = (data) => {
        console.log(data)
        setUsers((prev)=> [...prev,data])
        reset()
    }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-6">

        <h2 className="text-xl font-semibold text-gray-800">Register user</h2>
        <p className="text-sm text-gray-500 mt-1">Enter the user's details below.</p>

        <form
        onSubmit={handleSubmit(formSubmit)}
         className="mt-6 space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
            {...register("Name",{
                required:"Name is required",
                pattern:{
                    value:/^\S.*$/,
                    message:"Blank spaces are not allowed."
                }
            })}
              type="text"
              
              placeholder="Aniket Kumar"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
             
            />
             {errors.Name && <p className='text-red-700'>{errors.Name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
            {...register("Email",{
                required:"Email is required.",
                pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Enter a valid email id"
                }
            })}
              type="email"
              
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.Email && <p className='text-red-700'>{errors.Email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
                {...register("Password",{
                    required:"Password is required.",
                    minLength:{
                        value:8,
                        message:"Minimum 8 characters are required."
                    },
                    maxLength:{
                        value:10,
                        message:"Maximum 10 characters are required."
                    }
                })}
              type="password"
              
              placeholder="At least 8 characters"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.Password && <p className='text-red-700'>{errors.Password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
            {...register("Mobile",{
                required:"Mobile number is required.",
                pattern:{
                    value: /^\+?(\d{1,3})?[-.\s]?(\(?\d{2,4}\)?)[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/,
                    message:"Enter a valid mobile number."
                }
            })}
              type="tel"
              
              placeholder="9876543210"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.Mobile && <p className='text-red-700'>{errors.Mobile.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
                 {...register("ImageURL",{
                required:"ImageURL is required.",
            })}
              type="url"
              
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.ImageURL && <p className='text-red-700'>{errors.ImageURL.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-md hover:bg-gray-700"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default RegisterUser