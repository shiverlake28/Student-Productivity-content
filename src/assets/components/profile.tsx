import { useState } from "react";
import { PencilIcon } from "lucide-react";
export default function Profile() {
  const [name, Setname] = useState("Aditya pasari");
  const [Uname, SetUname] = useState("Shiver_lake");
  const [Bio, SetBio] = useState("web developer");
  const [Email, SetEmail] = useState("Aditya126@.com");
  const [Region, SetRegion] = useState("India");
  const [Contact, SetContact] = useState("7879649689");
  const [Password, SetPassword] = useState("Shiver_lake");

  return (
    <div className="flex h-screen w-screen bg-blue-300/35">
      {/* profile content  */}
      <div className="flex flex-col border-black w-full overflow-y-auto">
        <div className="relative bg-[url('public/background_img.avif')] bg-cover h-70 w-full border-b-2 border-gray-500 shrink-0">
          <img
            src="profile_img_2.webp"
            alt="pfps.img"
            className="absolute h-30 w-30 top-55 left-15"
          />
        </div>

        <div className="flex w-full">
          <div className=" flex flex-col items-center w-60 h-full text-4xl pt-30 gap-10 font-extralight  font-serif border-r-2 border-gray-500 ">
            <span className="italic font-bold">Skills</span>
            <ul className="space-y-10">
              <li>Java</li>
              <li>C++</li>
              <li>Python</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="flex flex-col text-3xl gap-17 pt-5 pl-5 font-serif w-full">
            <span>Username</span>
            <span className="flex gap-5 border-b border-gray-400 w-full">
              {Uname}
              <button>
                <PencilIcon className="h-5 w-5 cursor-pointer" />
              </button>
            </span>
            <span>Name</span>
            <span className="flex gap-5 border-b border-gray-400 w-full">
              {name}
              <button>
                <PencilIcon className="h-5 w-5 cursor-pointer" />
              </button>
            </span>
            <span>Bio</span>
            <span className="flex gap-5 border-b border-gray-400 w-full">
              {Bio}
              <button>
                <PencilIcon className="h-5 w-5 cursor-pointer" />
              </button>
            </span>
            <span>Email</span>
            <span className="flex gap-5 border-b border-gray-400 w-full ">
              {Email}
              <button>
                <PencilIcon className="h-5 w-5 cursor-pointer" />
              </button>
            </span>
            <span>Region</span>
            <span className="flex gap-5 border-b border-gray-400 w-full">
              {Region}
              <button>
                <PencilIcon className="h-5 w-5 cursor-pointer" />
              </button>
            </span>
            <span>Contact</span>
            <span className="flex gap-5 border-b border-gray-400 w-full ">
              {Contact}
              <button>
                <PencilIcon className="h-5 w-5 cursor-pointer" />
              </button>
            </span>
            <span>Password</span>
            <span>{Password}</span>
            <button
              className="w-70 h-15 p-4 border-2 mb-5 rounded-2xl text-black/70 cursor-pointer hover:border-gray-400 hover:text-gray-500"
              onClick={function () {
                SetPassword("adi");
              }}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="flex flex-col border-l-2 border-gray-500 h-screen w-72">
        <div className="flex h-20 text-3xl pt-5 border-b-2 border-gray-500">
          <img src="public/toggle.png" alt="toggle.img" className="h-15 w-15" />
          <span className="pt-3 pl-4">Navigation</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
