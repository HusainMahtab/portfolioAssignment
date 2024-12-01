import React, { useState } from 'react'
import axios from 'axios'
import {Toaster,toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ContactMe() {
  const initialData={
    name:"",
    email:"",
    message:""
  }
  const navigate=useNavigate()
  const [messageData,setMessageData]=useState(initialData)
  const [loader,setLoader]=useState(false)  
  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setMessageData((prev)=>{
      return {
         ...prev,
         [name]:value
      } 
    })
    //console.log(value) 
  }
  const handleSubmit=async(e)=>{
     e.preventDefault()
     setLoader(true)
     try {
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/message/send_message`,messageData)
      setLoader(false)
      toast.success(response?.data?.message)
      navigate("/")
      console.log(response)
     } catch (error) {
       console.error("error while send message to developer",error)
       toast.error("message not sent to developer")
       setLoader(false)
     }
  }
  return (
    <div className='w-full flex justify-center items-center p-14 md:p-8'>
        <div className='bg-white h-[400px] w-[400px] grid place-content-center items-center rounded shadow-lg'>
            <h1 className='p-4 text-center text-[#1a1a1a] font-bold text-xl'>Contact Me</h1>
            <form action="submit" className='w-[350px] grid gap-2 justify-center place-content-center p-2' onSubmit={handleSubmit}>
                <div className='grid gap-2 w-full'>
                  <label htmlFor="name" className='text-[#1a1a1a]'>Name</label>
                  <input type="text" id='name' name='name' value={messageData.name} placeholder='Enter Your Name' required className='p-2 text-[#1a1a1a] outline-none border-b' onChange={handleOnChange}/>
                </div>
                <div className='grid gap-2 w-full'>
                  <label htmlFor="email" className='text-[#1a1a1a]'>Email</label>
                  <input type="email" id='email' name='email' value={messageData.email} placeholder='Enter Your Email' required className='p-2 border-b text-[#1a1a1a] outline-none' onChange={handleOnChange}/>
                </div>
                <div className='grid gap-2 w-full'>
                  <label htmlFor="message" className='text-[#1a1a1a]'>message</label>
                  <textarea type="text" id='message' name='message' value={messageData.message} placeholder='Enter Your Message' required className='p-2 border-b text-[#1a1a1a] outline-none' onChange={handleOnChange}/>
                  
                </div>
                <div className='w-full h-12 flex justify-center items-center'>
                {
                 loader ? (
                 <div className='bg-[#9933ff] flex justify-center items-center rounded p-2 w-[200px] m-2 ml-4 '>
                   <div className='w-[10px] p-2 text-white  border-4 border-b-[#9933ff] rounded-full animate-spin'></div>
                 </div>
                ) : (
                   <button className='w-[200px] md:w-[200px] ml-4 p-2 bg-[#9933ff] font-bold text-white rounded hover:scale-110 duration-300' >Send</button> 
                )
               }
                  <Toaster/>
                </div>
            </form>
          
        </div>
    </div>
  )
}

export default ContactMe