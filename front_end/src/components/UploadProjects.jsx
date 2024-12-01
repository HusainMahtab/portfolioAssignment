import React, { useState,useRef} from 'react'
import { IoCloudUpload } from 'react-icons/io5'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function UploadProjects() {
  const [uploadData,setuploadData]=useState({
     projectName:"",
     projectLink:"",
     descriptions:"",
     techName:"",
     projectPic:""

  })
  const navigate=useNavigate()
  const [loader,setLoader]=useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target
    setuploadData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log("fromdata",value)
  }
  const fileInputRef = useRef(null);

const handleUploadImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setuploadData((prev) => ({
          ...prev,
          projectPic: reader.result, // Set profile pic preview
        }));
      };
      reader.readAsDataURL(file);
    } else {
      toast.error('Please upload a valid image file');
    }
  }
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('projectName', uploadData.projectName);
    formData.append('projectLink', uploadData.projectLink);
    formData.append('descriptions', uploadData.descriptions);
    formData.append('techName',uploadData.techName);
    // Use the ref to get the file
    if (fileInputRef.current.files[0]) {
      formData.append('projectPic', fileInputRef.current.files[0]); // Append the actual file
    }
    setLoader(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/projects/createProject`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials:true
      },);
      setLoader(false)
      toast.success(response.data?.message);
      setTimeout(() => {
        navigate("/projects");
      },1000);
    } catch (error) {
      console.error('User not signed up', error);
      toast.error(error?.message);
      setLoader(false)
    }
  };

  return (
    <div className='flex justify-center items-center mt-10'>
       <form action="submit" onSubmit={handleSubmit} className='border border-[#9933ff] min-w-[500px] rounded p-6'>
          <div className='w-full flex justify-center items-center gap-1 text-center font-bold text-xl'>
           <h1 className='font-bold text-xl'>Upload Project</h1>
           <IoCloudUpload/>
          </div>
          <div className='grid gap-2 p-2'>
            <label htmlFor="projectName">ProjectName:</label>
            <input type="text" id='projectName' name="projectName" value={uploadData.projectName} onChange={handleChange} placeholder='Enter project Name' className='p-2 bg-slate-200 text-[#1a1a1a] font-semibold text-lg'/>
          </div>
          <div className='grid gap-2 p-2'>
            <label htmlFor="projectLink">ProjectLink:</label>
            <input type="text" id='projectLink' name="projectLink" value={uploadData.projectLink} onChange={handleChange} placeholder='Enter project Link' className='p-2 bg-slate-200 text-[#1a1a1a] font-semibold text-lg'/>
          </div>
          <div className='grid gap-2 p-2'>
            <label htmlFor="descriptions">Descriptions:</label>
            <textarea name="descriptions" id="descriptions" placeholder='Enter project Descriptions' value={uploadData.descriptions} onChange={handleChange} className='p-2 bg-slate-200 text-[#1a1a1a] font-semibold text-lg'>Descriptions</textarea>
          </div>
          <div className='grid gap-2 p-2'>
            <label htmlFor="techName">TechName:</label>
            <input type="text" id='techName' name="techName" value={uploadData.techName} onChange={handleChange} placeholder='Enter Technology' className='p-2 bg-slate-200 text-[#1a1a1a] font-semibold text-lg'/>
          </div>
        <div className="w-full h-[250px] p-2 mx-auto overflow-hidden m-2">
          <label htmlFor="">Project Image:</label>
           <div className='text-center'>
            <img src={uploadData?.projectPic} alt="upload-image" className='w-[450px] h-[180px] p-2' />
           </div>
           <form>
            <label>
             <div className="bg-opacity-80 w-full bg-gray-300 py-2 pt-2 cursor-pointer text-center">
              <IoCloudUpload className="w-full text-3xl" />
             </div>
             <input type="file" className="hidden" onChange={handleUploadImage} ref={fileInputRef} />
            </label>
           </form>
          </div>
            {
              loader ? (
                 <div className='bg-[#9933ff] flex justify-center items-center rounded p-2 md:w-[450px] md:ml-2 w-[200px] m-2 ml-4 '>
                   <div className='w-[10px] p-2 text-white  border-4 border-b-[#9933ff] rounded-full animate-spin'></div>
                </div>
              ) : (
                   <button className='w-[200px] md:w-[450px] md:ml-2 p-2 bg-[#9933ff] font-bold text-white rounded' >Create Project</button> 
              )
             }
       </form>
    </div>
  )
}

export default UploadProjects