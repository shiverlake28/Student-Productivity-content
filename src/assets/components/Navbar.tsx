function Navbar() {
  return (
    <div className="flex flex-col bg-teal-500 w-screen">
      <div className="flex flex-row ">
        {/* nav(top bar)- logo and name */}
        <div className="flex gap-5  border-r-2 border-gray-400 border-b-2 pt-4 pb-2  w-70">
          <img className="ml-5 h-15 " src="public/vite.svg" alt="Img.logo" />
          <h1 className="text-2xl font-bold font-serif mt-4">Study buddy</h1>
        </div>
        {/* nav(top bar)- toogle */}
        <div className="flex pl-10 pt-7  border-gray-400 border-b-2 ">
          <ul className="flex h-15 gap-25 text-lg pt-2">
            <a className="h-5" href="https://google.com">
              <li>Home</li>
            </a>
            <a className="h-5" href="https://google.com">
              <li>Study Material</li>
            </a>
            <a className="h-5" href="https://google.com">
              <li>Road Map</li>
            </a>
            <a className="h-5" href="https://google.com">
              <li>Practice</li>
            </a>
            <a className="h-5" href="https://google.com">
              <li>Contest</li>
            </a>
            <a className="h-5" href="https://google.com">
              <li>About</li>
            </a>
            <a className="h-8" href="https://google.com">
              <li className="flex">
                <img
                  src="pexels-padrinan-19670.jpg"
                  alt="profile.img"
                  className="rounded-4xl h-10 w-10 "
                />
                <span className="pl-2 w-24 pt-1">User name</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
