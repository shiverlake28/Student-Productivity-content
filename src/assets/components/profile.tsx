import { useState } from "react";
import ProNav from "./profilenav";
function Profile() {
  const [profile] = useState({
    name: "Aditya pasari",
    Username: "shiverlake",
    Gender: "Male",
    Address: "Narshingpur madhya pradesh",
    Country: "India",
    Email: "xyz@gmail.com",
    Contact_number: 7879649689,
    language: "hindi",
  });
  const [skill1] = useState("Python");
  const [skill2] = useState("Java");
  const [skill3] = useState("C++");
  const [skill4] = useState("OS");
  const [skill5] = useState("web");

  return (
    <div className="flex">
      <div className="flex flex-col bg-[rgba(238,237,233,0.63)] overflow-x-hidden overflow-y-auto">
        <div className=" flex flex-col justify-end bg-[url('/profile_background.webp')] bg-cover h-72 w-310 bg-center">
          <div className="flex flex-col mb-[-100px] w-60 text-3xl">
            {/*profile img and name */}
            <img
              src="profile_img_2.webp"
              alt="pfps.img"
              className="h-30 w-30  ml-20 border-2 rounded-full"
            />
            <h1 className="ml-15">{profile.name}</h1>
          </div>
        </div>
        <div className=" h-120 w-80 mt-40 ml-2 text-3xl">
          <div className="flex w-screen">
            <div className="flex flex-col gap-10 ml-10">
              <h1 className="ml-14">Skills</h1>
              <p>• {skill1}</p>
              <p>• {skill2}</p>
              <p>• {skill3}</p>
              <p>• {skill4}</p>
              <p>• {skill5}</p>
            </div>
            <div className="flex flex-col gap-10 ml-30 border-l text-2xl -mt-40">
              <h1 className="ml-5 mt-16 text-gray-600">Username</h1>
              <p className="ml-5">{profile.Username}</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>
              <h1 className="ml-5  text-gray-600">Gender</h1>
              <p className="ml-5">{profile.Gender}</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>
              <h1 className="ml-5  text-gray-600">Address</h1>
              <p className="ml-5">{profile.Address}</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>
              <h1 className="ml-5  text-gray-600">Country</h1>
              <p className="ml-5">{profile.Country}</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>
              <h1 className="ml-5  text-gray-600">Email</h1>
              <p className="ml-5">{profile.Email}</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>
              <h1 className="ml-5  text-gray-600">Contact Number</h1>
              <p className="ml-5">{profile.Contact_number}</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>
              <h1 className="ml-5  text-gray-600">Language</h1>
              <p className="ml-5">{profile.language}</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>

              <div className="ml-4 flex gap-15">
                <a href="https://google.com">
                  <span>
                    <button className="border-2 border-white  bg-black text-white w-30 h-15 rounded-4xl">
                      Dark
                    </button>
                  </span>
                </a>
                <h1 className=" text-gray-700 mt-3">)-- Theme --(</h1>
                <a href="https://google.com">
                  <span>
                    <button className=" border-2 border-black bg-white text-black w-30 h-15 rounded-4xl">
                      light
                    </button>
                  </span>
                </a>
              </div>
              <p className="border border-gray-400 w-239 -mt-6"></p>
              <h1 className="ml-5  text-gray-600">Change Password</h1>
              <p className="ml-5">button</p>
              <p className="border border-gray-400 w-239 -mt-6"></p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProNav />
      </div>
    </div>
  );
}
export default Profile;
