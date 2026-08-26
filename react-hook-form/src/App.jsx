import React,{useState} from 'react'
import RegisterUser from './components/RegisterUser'
import UserCard from './components/UserCard'
import Navbar from './components/Navbar'

const App = () => {

  let [users,setUsers] = useState([])
  let [toggle,setToggle] = useState(true)
  console.log(users)
  return (
    <div>
      <Navbar setToggle={setToggle}/>

      {toggle
  ? <RegisterUser setUsers={setUsers}/>
  : (
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.length === 0
            ? <p className="col-span-full text-sm text-gray-500 text-center">No users registered yet.</p>
            : users.map((elem,index) => <UserCard key={index} user={elem}/>)}
        </div>
      </div>
    )}
      

    </div>
  )
}

export default App
