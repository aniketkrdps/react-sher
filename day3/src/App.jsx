import React, { useState } from 'react'
import RegisterCard from './components/RegisterCard'
import UserCard from './components/UserCard'

const App = () => {

  let [toggle,setToggle] = useState(true)
  let [users,setUsers] = useState([])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {toggle ? (
        <RegisterCard setUsers={setUsers} users={users} setToggle={setToggle} />
      ) : (
        <div className="max-w-5xl mx-auto">

          {/* Header - one return button for the whole page */}
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-lg font-semibold">
              Registered users ({users.length})
            </h1>
            <button
              onClick={() => {setToggle((prev) => !prev)}}
              className="text-sm text-gray-600 hover:text-gray-900">
              &larr; Return to RegisterCard
            </button>
          </div>

          {/* Grid of cards */}
          {users.length === 0 ? (
            <p className="text-sm text-gray-500">No users registered yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((elem,index) => (
                <UserCard key={index} user={elem} setUsers={setUsers} users={users} setToggle={setToggle}  />
              ))}
            </div>
          )}

        </div>
      )}
    </div>
  )
}

export default App