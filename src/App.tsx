import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartupPage from "./Startup/StartupPage";
import SignUp from "./authentication/SignUp/SignUp";
import HomePage from "./HomePage/HomePage";
import SignIpPage from "./authentication/SignIn/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartupPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import SignUp from "./authentication/SignUp/SignUp";
// import Home from "./home/home";

// function App() {
//   return (
//     // <div className="bg-[#18403C] flex justify-center items-center h-screen">
//     //   <SignUp />
//     // </div>
//     <div className="min-h-screen">
//       <Home />
//     </div>
//   );
// }

// export default App;
