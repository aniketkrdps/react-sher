import React from 'react'

const UserCard = ({setToggle,user}) => {

    let {imageURL,name,email,mobile} = user;

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Page level - sits outside the card */}
    

      {/* Card */}
      <div className="border border-gray-300 rounded p-6">
        {/* Photo */}
        <img
  src={imageURL}
  alt={name}
  className="w-24 h-24 rounded-full bg-gray-200 border border-gray-300 mx-auto object-cover"
/>

        {/* Name */}
        <h2 className="text-lg font-semibold text-center mt-3">{name}</h2>

        {/* Details */}
        <div className="mt-5 text-sm">
          <div className="flex justify-between py-2 border-t border-gray-200">
            <span className="text-gray-500">Email</span>
            <span>{email}</span>
          </div>

          <div className="flex justify-between py-2 border-t border-gray-200">
            <span className="text-gray-500">Mobile no.</span>
            <span>{mobile}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard