function ProNav() {
  return (
    <div className="flex flex-col items-center justify-start h-full w-72 text-[rgb(80,75,59)] border-l bg-linear-to-r to-blue-100  from-[rgba(244,243,243,0.9)] overflow-auto">
      <div className="text-3xl font-semibold mb-8 mt-8 text-right w-full">
        <img
          src="public/toggle.png"
          alt="toggle.jpg"
          className="scale-120 w-10 ml-20 -mb-10 "
        />
        <span>Navigation</span>
      </div>
      <p className="w-full border-b-2  "></p>
      <div className="text-2xl flex flex-col   items-end w-full ">
        <ul className="flex flex-col  items-end  text-right tracking-widest font-semibold leading-40">
          <a href="https://www.google.com">
            <li className="border border-gray-300 w-72 h-25 ">
              <span>Profile</span>
            </li>
          </a>
          <a href="https://www.google.com">
            <li className="border border-gray-300 w-72 h-25">Stats</li>
          </a>
          <a href="https://www.google.com">
            <li className="border border-gray-300 w-72 h-25">Contest</li>
          </a>
          <a href="https://www.google.com">
            <li className="border border-gray-300 w-72 h-25">Settings</li>
          </a>  
          <a href="https://www.google.com">
            <li className="border-t  border-gray-300 w-72 h-25">About</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default ProNav;
