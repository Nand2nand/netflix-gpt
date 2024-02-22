import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              navigate("/browse");
          } else {
              dispatch(removeUser());
              navigate("/");
          }   
        });
        return () => unSubscribe();
  },[])
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate('/error')
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
     {user && (<div className="flex p-2">
        <img
          className="w-12 h-12"
          alt="usericon"
          src={user?.photoURL}
        //   src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        />
        <button onClick={handleSignout} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>)}
    </div>
  );
};

export default Header;
