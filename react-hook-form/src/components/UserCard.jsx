import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="h-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">

      <div className="h-16 bg-gray-900" />

      <div className="px-5 pb-5">

        <img
          src={user.ImageURL}
          alt={user.Name}
          className="w-16 h-16 -mt-8 rounded-full object-cover border-4 border-white bg-gray-200"
        />

        <h2 className="mt-2 text-base font-semibold text-gray-800 truncate">{user.Name}</h2>
        <p className="text-xs text-gray-500">Registered user</p>

        <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">

          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-gray-500 shrink-0">Email</span>
            <span className="text-xs text-gray-800 truncate text-right" title={user.Email}>{user.Email}</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-gray-500 shrink-0">Phone</span>
            <span className="text-xs text-gray-800 truncate text-right">{user.Mobile}</span>
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default UserCard