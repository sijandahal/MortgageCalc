import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth,db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
export const SignupForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e)=> {
    e.preventDefault();
    try {
     await createUserWithEmailAndPassword(auth, email, password)
     const user=auth.currentUser;
     console.log(user);
     if(user) {
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
      });
     } //making sure to sav the user id
     toast.success("User Registered Successfully", {
      position: "top-center"
     })
     window.location.href = "/MortgageCalculator";

     console.log("User Registered Successfuly");
    }
    catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center", 
      })
    }
  }
  return (
    <div className="selection:bg-[#124E66]  selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-[#124E66] ">
                Create account
              </h1>

              <form className="mt-12" onSubmit={handleRegister}>
                <div className="relative">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#124E66] "
                    placeholder="First Name" value={fname} onChange={(e)=> setFname(e.target.value)}
                  />
                  <label
                    htmlFor="fname"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>

                <div className="mt-10 relative">
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#124E66] "
                    placeholder="Last Name"  value={lname} onChange={(e)=> setLname(e.target.value)}
                  />
                  <label
                    htmlFor="lname"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Last Name
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#124E66] "
                    placeholder="john@doe.com" value={email} onChange={(e)=> setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#124E66] "
                    placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                <input
                  type="submit"
                  value="Sign up"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-[#124E66]  text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#124E66]  focus:ring-opacity-80 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
