import React, { useState } from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import image from "../assets/profileImage.png"
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
function Home() {
  
  return (
    <div name="Home" className='w-full md:flex justify-between gap-20 items-center pb-2 p-8'>
       <div className="w-full flex justify-center items-center md:hidden">
  <img 
    src={image} 
    alt="profile-image" 
    className="rounded-full w-[400px] h-[300px] animate-profile-image" 
  />
  <style jsx>{`
    @keyframes profileImageAnimation {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    .animate-profile-image {
      animation: profileImageAnimation 2s ease-in-out;
    }
  `}</style>
</div>

        <div className="w-full grid gap-3">
            <p className='font-semibold'>Welcome in My Feed</p>
            <p className='text-md font-bold'>Hello,I'm 
            <TypeAnimation
               sequence={[
             "MERN Developer",
             1000, 
             "Programmer",
             1000,
             "Back_end Developer",
             1000,
             ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: '1.2em', display: 'inline-block',color:'#9933ff' }}
            repeat={Infinity}
          />
            </p>
            <div className="w-full">
              <p className='text-md font-semibold p-1 md:text-lg'>I am a MERN Stack Developer seeking an internship to enhance my skills and gain practical industry experience. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I am passionate about building efficient, responsive, and user-centric web applications. I have experience developing projects like eCommerce platforms, healthcare management systems, and classroom management tools, showcasing my ability to handle both frontend and backend development. I am eager to contribute my expertise in a dynamic environment while learning from experienced professionals to further refine my development skills.</p>   
            </div>
            <div className='w-full grid md:flex justify-between items-center p-2 gap-3 md:gap-8'>
  <div>
    <p className='font-semibold font-sans p-2 text-xl md:text-lg text-center'>Available on</p>
    <div className='w-full flex justify-center gap-4 items-center text-4xl md:text-2xl'>
      <Link onClick={() => window.open("https://github.com/PandeyNimesh", "_blank", 'noopener,noreferrer')}>
        <FaSquareGithub className='cursor-pointer hover:scale-125 hover:rotate-6 duration-500' />
      </Link>
      <Link onClick={() => window.open("https://www.linkedin.com/in/nimeshpandey2002/", "_blank", 'noopener,noreferrer')}>
        <FaLinkedin className='cursor-pointer hover:scale-125 hover:rotate-6 duration-500' />
      </Link>
      <Link onClick={() => window.open("https://www.instagram.com/nimeshpandey143/", "_blank", 'noopener,noreferrer')}>
        <FaInstagramSquare className='cursor-pointer hover:scale-125 hover:rotate-6 duration-500' />
      </Link>
      <Link onClick={() => window.open("https://www.facebook.com/nimesh.panday.16", "_blank", 'noopener,noreferrer')}>
        <FaFacebookSquare className='cursor-pointer hover:scale-125 hover:rotate-6 duration-500' />
      </Link>
    </div>
  </div>
  
  <div>
    <p className='font-semibold font-sans p-2 text-xl md:text-lg text-center'>Currently working on</p>
    <div className='w-full flex justify-between items-center gap-2 md:gap-2 text-4xl md:text-2xl'>
      <SiExpress className='motion-float font-bold hover:scale-110 hover:text-green-700 duration-500' />
      <SiMongodb className='motion-rotate hover:scale-110 hover:text-green-500 duration-500' />
      <FaReact className='motion-pulse hover:scale-110 hover:text-cyan-500 duration-500' />
      <FaNodeJs className='motion-wobble hover:scale-110 hover:text-blue-700 duration-500' />
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
    }
    @keyframes wobble {
      0%, 100% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-15deg);
      }
      75% {
        transform: rotate(15deg);
      }
    }
    .motion-float {
      animation: float 3s ease-in-out infinite;
    }
    .motion-rotate {
      animation: rotate 2.5s ease-in-out infinite;
    }
    .motion-pulse {
      animation: pulse 2s ease-in-out infinite;
    }
    .motion-wobble {
      animation: wobble 3s ease-in-out infinite;
    }
  `}</style>
</div>

   
</div>
 <div className="w-full rounded-full hidden md:block">
  <img 
    src={image} 
    alt="profile-image" 
    className="rounded-full w-[400px] h-[450px] animate-profile-image" 
  />
  <style jsx>{`
    @keyframes profileImageAnimation {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    .animate-profile-image {
      animation: profileImageAnimation 2s ease-in-out;
    }
  `}</style>
 </div>

</div>
  )
}

export default Home