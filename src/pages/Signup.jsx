import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"

const Signup = () => {

  // state for input fields

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  console.log("username", username)
    console.log("email", email)
      console.log("password", password)

  // function to signup user

  const handleSignup = async(e) => {

    // prevent the normal behavior of fomms -> to refresh the page unnecessarily on the click of button
    e.preventDefault()

    try{
      const res = await axios.post("http://localhost:4000/api/register", 
        // state variables(req.body)
        {
          username, email, password
        }
      );

      // check resposne from backend
      console.log(res.data)
    }catch(err){
      console.log("err", err)
    }
  }

  return (
    <div className="flex justify-center gap-30 items-center min-h-screen">
      {/* Signup Form */}
      <div>
        <form onSubmit={handleSignup} className="flex flex-col gap-3 border-2 border-black p-16 rounded-lg">
          <h1 className="text-xl font-semibold text-center">Signup</h1>

        {/* username */}
          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // e.target.value = whatever you enter inside of input
            placeholder="username"
          />

          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center p-2">
            <button type="submit" className="bg-blue-500 w-30 text-xl p-2 rounded-lg cursor-pointer text-white">
              Signup
            </button>
          </div>

          {/*  */}

          <p className="text-md text-gray-500">
            Already have an account?{" "}
            <NavLink to={"/signin"}><span className="text-blue-600">Sign In</span></NavLink>
          </p>
          
        </form>
      </div>

      {/* LinkedIn Logo */}
      <div>
        <img
          className="w-96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd59I5VJJPg2VoucJNvnuqK2-_gmUVqIzvdA&s"
          alt="linkedin_logo"
        />
      </div>
    </div>
  );
};

export default Signup;

// rfce - react fuunctional component
