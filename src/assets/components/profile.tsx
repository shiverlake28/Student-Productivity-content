export default function Profile() {
  return (
    <div className="flex h-screen w-screen bg-blue-300/35">
      {/* profile content  */}
      <div className="flex flex-col border-black w-full overflow-y-auto">
        <div className="relative bg-[url('background_img_pro.jpg')] bg-cover h-70 w-full border-b-2 border-gray-500 shrink-0">
          <img
            src="profile_img_2.webp"
            alt="pfps.img"
            className="absolute h-30 w-30 top-55 left-15"
          />
        </div>

        <div className="sticky flex w-full h-screen ">
          <div className="relative flex flex-col items-center w-60 h-250 text-4xl pt-30 gap-10 font-extralight  font-serif border-r-2 border-gray-500 ">
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
            <span className="border-b border-gray-400 w-full">Shiver_Lake</span>
            <span>xyz</span>
            <span className="border-b border-gray-400 w-full">sdf</span>
            <span>sdf</span>
            <span className="border-b border-gray-400 w-full">sdf</span>
            <span>sdf</span>
            <span className="border-b border-gray-400 w-full">sfs</span>
            <span>ssdfsfrw</span>
            <span className="border-b border-gray-400 w-full">ssdfsfrw</span>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="flex flex-col border-l-2 border-gray-500 h-screen w-72">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
