import { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null)
  const fetchUserData = async ()=> {
    auth.onAuthStateChanged(async(user)=> {
      console.log(user);
      const docRef = doc(db,"Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()){
        setUserDetails(docSnap.data() )
        // console.log(docSnap.data());
      }
      else {
        console.log("User not logged on");
      }
    })
  };
  useEffect(()=> {
    fetchUserData();
  }, [])

  const handlelogOut = async ()=> {
    try {
      await auth.signOut();
      window.location.href = "/LoginPage";
      console.log("User Logged Out Successfully");
      
    }
    catch(error) {
      console.log("Error Logging out", error);
    }
  }
  return (
    <div className="relative flex justify-end items-center">
      <img
        id="avatarButton"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User dropdown"
      />

      {
        userDetails ? (
          <div> Hey, {userDetails.firstName} Welcome </div>
        ) :  <div> Hey, Guest Welcome</div>
      }

      {isOpen && userDetails && (
        <div
          id="userDropdown"
          className="absolute  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 top-12 z-30"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Welcome {userDetails.firstName ? userDetails.firstName : "Guest"} {userDetails.lastName ? userDetails.lastName : ""}</div>
            <div className="font-medium truncate">{userDetails.email}</div>
          </div>
          <div className="py-1">
            <button onClick={handlelogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

