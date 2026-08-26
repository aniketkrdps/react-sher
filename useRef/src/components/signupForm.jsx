import { useRef, useState } from 'react'

const SignupForm = () => {

 
    let formRef = useRef({})
    console.log(formRef)
    
    let [products,setProducts] = useState();

    console.log(products)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formRef.current.name.value);
        console.log(formRef.current.email.value);
        console.log(formRef.current.phone.value);
        console.log(formRef.current.password.value);
        console.log(formRef.current.course.value);

        let obj = {
            productName:formRef.current.name.value,
            email:formRef.current.email.value,
            phone:formRef.current.phone.value,
            password:formRef.current.password.value,
            course:formRef.current.course.value
        }
        setProducts(obj)
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-6">

        <h2 className="text-xl font-semibold text-gray-800">Create account</h2>
        <p className="text-sm text-gray-500 mt-1">Fill in your details to get started.</p>

        <form 
        onSubmit={handleSubmit}
         className="mt-6 space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
            <input
              ref={(e) => formRef.current.name=e}
              type="text"
              name="name"
              placeholder="Aniket Kumar"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              ref={(e) => formRef.current.email=e}
              type="email"
              name="email"
              
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
            <input
              ref={(e) => formRef.current.phone=e}
              type="tel"
              name="phone"
              
              placeholder="9876543210"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              ref={(e) => formRef.current.password=e}
              type="password"
              name="password"
              
              placeholder="At least 8 characters"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
            <select
            ref={(e) => formRef.current.course=e}
              name="course"
              
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none focus:border-gray-800"
            >
              <option value="">Choose a course</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack</option>
            </select>
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

export default SignupForm