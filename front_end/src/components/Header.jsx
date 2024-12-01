import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdCancelPresentation } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {setUserDetails} from "../store/userSlice"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false); // Changed to toggle menu
  const toggleMenu = () => setMobileMenu(!mobileMenu); // Toggle function
  const offToggleMenu=()=>setMobileMenu(!mobileMenu)
  const navigate=useNavigate()
  const user=useSelector(state=>state?.user?.user)
  const dispatch=useDispatch()
  console.log("user",user)

  const handleLogout=async()=>{
      try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`,{},{withCredentials:true})   
        dispatch(setUserDetails(null))
        toast.success("log out successfully")
         setTimeout(()=>{
            navigate("/")
         },1000)
      } catch (error) {
        console.log("error while logout the user",error)
        toast.error(error?.message)
      }
  }


  return (
    <header className="bg-[#1a1a1a] text-white shadow-lg p-4 px-6 md:px-8 fixed z-20 w-full">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center text-lg font-serif font-bold">
        <Link to="/" className="flex justify-center gap-2 items-center">
          <div className="w-4 h-4 md:w-12 md:h-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWqE1uBiDzHDjPbROKyTQK4l-2viGz5r8Wg&s"
              alt="logo"
            />
          </div>
          <div className="grid px-2 animate-bounce">
            <p>
              Mahta<span className="text-[#9933ff]">b</span>
            </p>
            <p>
              We<span className="text-[#9933ff]">b</span> Develope
              <span className="text-[#9933ff]">r</span>
            </p>
          </div>
        </Link>
        <div className="flex gap-4 items-center">
           {
             user?._id ? (
               <div onClick={handleLogout} className='flex justify-center items-center gap-2 flex-row-reverse border-2 border-[#262626] p-2 font-bold bg-[#262626] hover:bg-[#1a1a1a] hover:text-white text-white rounded'>
                  <button className="">
                     LogOut
                 </button>
                 <TbLogout2 className='text-2xl'/>
               </div>
             ) : (
              <button className="border-2 border-[#262626] p-2 font-bold bg-[#262626] hover:bg-[#1a1a1a] hover:text-white text-white rounded" onClick={()=>navigate("/login")}>
                 Login
              </button>
             )
           }
          <button className="p-2 border-2 border-[#999999] text-[#999999] font-bold hover:bg-[#262626] hover:text-white" onClick={()=>navigate("/signup")}>
            SignUp
          </button>
          {
            user?.profilePic ? (
              <div className='grid place-content-center place-items-center'>
                 <img src={user.profilePic} alt="" className='w-10 h-10 rounded-full'/>
                {
                  user.role==="ADMIN" &&(
                   <p className='text-[#9933ff] text-sm cursor-pointer hover:underline p-1' onClick={()=>navigate("/admin_panel")}>AdminPanel</p>
                  )
                }
              </div>
            ) : (
              <FaUserCircle className="text-[#a6a6a6] text-4xl cursor-pointer" /> 
            )
          }
        </div>
        <nav className="flex gap-6">
          <Link className="hover:border-b hover:border-b-[#9933ff] duration-500 mx-3" to="/">Home</Link>
          <Link className="hover:border-b hover:border-b-[#9933ff] duration-500 mx-3" to="/about">AboutMe</Link>
          <Link className="hover:border-b hover:border-b-[#9933ff] duration-500 mx-3" to="/projects">Projects</Link>
          <Link className="hover:border-b hover:border-b-[#9933ff] duration-500 mx-3" to="/experiance">Experience</Link>
          <Link className="hover:border-b hover:border-b-[#9933ff] duration-500" to="/contact">Contact</Link>
        </nav>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden gap-2 justify-between items-center">
        <Link to="/" className="flex items-center animate-bounce">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWqE1uBiDzHDjPbROKyTQK4l-2viGz5r8Wg&s"
              alt="logo"
              
            />
        </Link>
        <div className="flex gap-2 justify-center items-center">
           {
             user?._id ? (
              <div onClick={handleLogout} className='flex justify-center items-center gap-2 flex-row-reverse border-2 border-[#262626] p-2 font-bold bg-[#262626] hover:bg-[#1a1a1a] hover:text-white text-white rounded'>
                  <button className="">
                     LogOut
                 </button>
                 <TbLogout2 className='text-2xl'/>
               </div>
             ) : (
              <button className="border-2 border-[#262626] p-2 font-bold bg-[#262626] hover:bg-[#1a1a1a] hover:text-white text-white rounded" onClick={()=>navigate("/login")}>
                 Login
              </button>
             )
           }
          <button className="p-2 border-2 border-[#999999] text-[#999999] font-bold hover:bg-[#262626] hover:text-white" onClick={()=>navigate("/signup")} >
            SignUp
          </button>
          {
            user?.profilePic ? (
              <div className=' grid place-content-center place-items-center w-10 h-14'>
                 <img src={user?.profilePic} alt="" className='w-10 h-10 rounded-full'/>
                 {
                  user.role==="ADMIN" &&(
                    <p className='text-[#9933ff] text-sm'>{user.role}</p>
                  )
                 }
              </div>
            ) : (
              <FaUserCircle className="text-[#9933ff] text-4xl cursor-pointer" />
            )

          }
          
        </div>
        
        {
          !mobileMenu&&(
            <div className="text-4xl cursor-pointer" onClick={toggleMenu}>
          <IoReorderThreeOutline className="text-white font-bold" />
        </div>
          )
        }
        {
          mobileMenu&&(
            <div className="text-4xl cursor-pointer" onClick={offToggleMenu}>
             <MdCancelPresentation className="text-white font-bold" />
           </div>
          )
        }

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <nav className="md:hidden h-[100vh] bg-[#262626] w-full text-white font-bold grid place-content-center gap-4">
          <ul className="flex flex-col justify-center items-center  gap-4">
            <Link className="" to="/" onClick={toggleMenu}>Home</Link>
            <Link className="" to="/about" onClick={toggleMenu}>AboutMe</Link>
            <Link className="" to="/projects" onClick={toggleMenu}>Projects</Link>
            <Link className="" to="/experiance" onClick={toggleMenu}>Experience</Link>
            <Link className="" to="/contact" onClick={toggleMenu}>Contact</Link>
          </ul>
        </nav>
      )}
      <Toaster/>
    </header>
  );
}

export default Header;