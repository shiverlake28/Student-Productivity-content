import Navbar from "./assets/components/Navbar";
import Profile from "./assets/components/profile";
import Login from "./assets/AuthFront-tsx/login";
import SignUp from "./assets/AuthFront-tsx/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <SignUp />
      <Profile />
    </div>
  );
}

export default App;
