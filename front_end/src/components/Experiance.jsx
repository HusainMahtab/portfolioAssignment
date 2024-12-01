import React from 'react';

function Experiance() {
  const experianceArray = [
    {
      id: 1,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9NztYmPbCDtdQpt0oRtQb7dcajyMjSUyYA&s",
      name: "JavaScript"
    },
    {
      id: 2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAbKd_ctPjSVa-t7gtREo1YsShFc9OSySMg&s",
      name: "NodeJs"
    },
    {
      id: 3,
      imageUrl: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name: "ReactJs"
    },
    {
      id: 4,
      imageUrl: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
      name: "ExpressJs"
    },
    {
      id: 5,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTVjZgtLF2vqZV3Nh6VdLV5HEZ3xOyVCRuw&s",
      name: "HTML-5"
    },
    {
      id: 6,
      imageUrl: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      name: "CSS3"
    },
    {
      id: 7,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
      name: "Tailwind-CSS"
    },
    {
      id: 8,
      imageUrl: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
      name: "mongoDB"
    },
  ];

  return (
    <div name="Experience" className="p-4 border border-b-[#9933ff] mb-4">
      <h1 className="text-xl font-bold my-2">Experience</h1>
      <div>
        <p className="text-xl md:text-lg font-semibold">I've more than 1 year of experience in the below technologies.</p>
        <div className="w-full flex justify-evenly items-center flex-wrap gap-4 p-4">
          {experianceArray.map((item) => (
            <div key={item.id} className="animate-image">
              <div className="md:max-w-[250px] grid justify-center shadow shadow-[#9933ff] p-4 md:rounded-md rounded-t-3xl rounded-b-3xl">
                <img src={item.imageUrl} alt={item.name} className="md:w-[300px] md:h-[200px] w-64 h-52" />
                <p className="text-lg font-bold text-center text-slate-400 p-2">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateY(0);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .animate-image {
          animation: flip 5s ;
        }
      `}</style>
    </div>
  );
}

export default Experiance;
