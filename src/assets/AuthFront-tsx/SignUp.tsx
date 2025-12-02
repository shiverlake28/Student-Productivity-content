import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
// bg-linear-to-b from-blue-200 via-blue-300 to-blue-400
function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen  bg-[url('public/pexels-padrinan-19670.jpg')] bg-cover bg-center font-mono">
      <div className=" flex flex-col gap-5 items-center justify-start h-[530px] w-[380px] border-2 border-gray-300 rounded-4xl bg-linear-to-r from-[rgb(232,240,244)]  to-[rgba(233,232,222,0.9)]">
        <button className="flex items-center gap-5 mt-4 bg-[rgb(210,238,235)] cursor-pointer border border-gray-200 rounded-2xl">
          <div className="w-12 h-12 rounded-full bg-transparent  flex items-center justify-center cursor-pointer">
            <FaGoogle className="text-orange-500 text-xl" />
          </div>
          <span className="bg-transparent cursor-pointer text-[20px] pr-4">
            Continue with Google
          </span>
        </button>
        <h1 className="mt-7 text-3xl font-extrabold font-serif">SignUp</h1>
        <h1 className="text-xl bg-linear-to-r from-purple-500  to-purple-700 font-bold bg-clip-text text-transparent">
          🤖 Welcome 🤖
        </h1>
        <form action="" className="flex flex-col gap-2 items-center">
          <input
            type="email"
            placeholder="  Email"
            required
            className="bg-gray-200 border h-10 w-65 rounded-[10px] opacity-80"
          />
          <a
            href="https://accounts.google.com/signin/v2/usernamerecovery?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dchrome-profile-chooser%26pli%3D1&dsh=S1543657271%3A1764662549848428&ec=GAlAwAE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en_GB&service=accountsettings"
            className="ml-38"
          >
            <p className="text-[12px] ">Forget Email?</p>
          </a>
          <input
            type="text"
            placeholder="  Password"
            required
            className="bg-gray-200 border h-10 w-65 rounded-[10px] opacity-80"
          />
          <a
            href="https://myaccount.google.com/intro/signinoptions/password"
            className="ml-38"
          >
            <p className="text-[12px] ">Forget Password?</p>
          </a>
          <button className="text-black cursor-pointer bg-lime-50 rounded-md h-8 w-65 text-center border border-gray-400">
            SignUp
          </button>
          <p className="text-[16px] mt-4 text-gray-700">
            −−−−−−−− <span className="text-[14px]">Or SignUp with </span>
            −−−−−−−−
          </p>
        </form>
        <div className="flex flex-row justify-center gap-5">
          {/* ✅ GOOGLE BUTTON */}
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer border ">
            <FaGoogle className="text-orange-500 text-md" />
          </button>

          {/* ✅ FACEBOOK BUTTON */}
          <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer border">
            <FaFacebook className="text-white-600 text-lg " />
          </button>
          {/* APPL BUTTON */}
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer border ">
            <FaApple className="text-black text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
