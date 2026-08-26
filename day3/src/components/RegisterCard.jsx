import React, { useState } from 'react'

const RegisterCard = ({setToggle,setUsers,users}) => {
    
    

    let [formData,setFormData] = useState({
        imageURL:"",
        name:"aniket",
        email:"aniketkr.dps@gmail.com",
        mobile:"6900181451"

    })
    let handleChange = (e) => {
        let {name ,value } = e.target;
        setFormData({...formData,[name]:value})
        console.log(formData)
       

    }
    let handleSubmit = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev,formData])
        setFormData({
            imageURL:"",
            name:"",
            email:"",
            mobile:""
        })
        setToggle((prev) => !prev)
         console.log(users)
        

    }

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* Form */}
      <div className="border border-gray-300 rounded p-4 space-y-3">
        <h2 className="text-lg font-semibold">User details</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
            
          <div>
            
            <label className="block text-sm mb-1">Image URL</label>
            <input
              required
            name='imageURL'
            onChange={handleChange}
            value={formData.imageURL}
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              required
            name='name'
            onChange={handleChange}
            value={formData.name}
              type="text"
              placeholder="Riya Sharma"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              required
            name='email'
            onChange={handleChange}
            value={formData.email}
              type="email"
              placeholder="riya@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone number</label>
            <input
              required
            name='mobile'
            onChange={handleChange}
            value={formData.mobile}
              type="tel"
              placeholder="9876543210"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-600"
            />
          </div>

          <div className="flex gap-2 pt-1">
            <button
            
            
             className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700">
              Show card
            </button>
            
          </div>
        </form>
      </div>

      {/* Card */}
      <div className="border border-gray-300 rounded p-4 flex gap-4 items-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 border border-gray-300" />

        <div className="text-sm space-y-1">
          <p className="font-semibold text-base">Riya Sharma</p>
          <p className="text-gray-600">riya@example.com</p>
          <p className="text-gray-600">9876543210</p>
        </div>
      </div>
    </div>
  )
}

export default RegisterCard