import {BrowserRouter,Routes,Route} from "react-router-dom";
import StartupPage from "./Startup/StartupPage";
import SignUp from "./authentication/SignUp/SignUp";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartupPage />} />
      <Route path="/signup" element={<SignUp />} />  
      <Route path="/home" element={<HomePage />} />  
    </Routes>
   </BrowserRouter>
  );
}

export default App;
