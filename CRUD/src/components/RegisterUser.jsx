import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const RegisterUser = ({setUsers,users,updateUser}) => {
    let {handleSubmit,
        register,
        reset,
        formState:{errors}}=useForm({
        mode:"onChange",
        defaultValues:updateUser
    })
   

    let formSubmit = (data) => {
      let arr
        if(updateUser){
          arr = users.map((val) => val.id === updateUser.id ? {...data,id:updateUser.id}: val)
          
        }
        else{
          arr = [...users,{...data, id: nanoid()}]
        
        }
        setUsers(arr)
        localStorage.setItem("users",JSON.stringify(arr))
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
                {...register("name",{
                    required:"Name is required.",
                    pattern:{
                        value: /^\S+(\s+\S+)*$/,
                        message:"Blank spaces are not allowed."
                    }
                })}
              type="text"
             
              placeholder="Aniket Kumar"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.name &&  <p className='text-red-700'>{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
            {...register("email",{
                required:"Email is required.",
                    pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"Enter a valid email id."
                    }
                
            })}
              type="email"
              
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.email &&  <p className='text-red-700'>{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
            {...register("password",{
                required:"password is required.",
                minLength:{
                    value:8,
                    message:"minimum 8 characters are required."
                },
                maxLength:{
                    value:12,
                    message:"maximum 12 characters are required."
                }
            })}
              type="password"
              
              placeholder="At least 8 characters"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.password &&  <p className='text-red-700'>{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
            {...register("phone",{
                required:"phone is required.",
                pattern:{
                    value:/^\+?(\d{1,3})?[-.\s]?(\(?\d{2,4}\)?)[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/,
                    message:"Enter a valid mobile number."
                }
            })}
              type="tel"
              
              placeholder="9876543210"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.phone &&  <p className='text-red-700'>{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
            {...register("imageURL",{
                required:"imageURL is required.",
            })}
              type="url"
           
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
            {errors.imageURL &&  <p className='text-red-700'>{errors.imageURL.message}</p>}
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