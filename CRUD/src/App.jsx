import React, { useState } from 'react'
import Navbar from './components/Navbar'
import RegisterUser from './components/RegisterUser'
import UserCard from './components/UserCard'

const App = () => {

  let [toggle,setToggle] = useState(true)
let [users,setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || [])

  console.log(users)

  let deleteUser = (id) => {
    let current = users.filter((val) => val.id !== id)
    setUsers(current)
    localStorage.setItem("users",JSON.stringify(current))
  }

  let [updateUser,setUpdateUser] = useState(null)

  return (
    <div>
      <Navbar setToggle={setToggle}/>

      {toggle
  ? <RegisterUser setUsers={setUsers} users={users} updateUser={updateUser}/>
  : (
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.length === 0
            ? <p className="col-span-full text-sm text-gray-500 text-center">No users registered yet.</p>
            : users.map((elem) => <UserCard key={elem.id} user={elem} deleteUser={deleteUser} setUpdateUser={setUpdateUser} setToggle={setToggle}/>)}
        </div>
      </div>
    )}
      

    </div>
  )
}

export default App
