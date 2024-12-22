import { Link } from "react-router-dom";
import "./StartupPage.css";
function StartupPage() {
  return (
    <div>
      <div className="container">
        <header>
          <img src="\public\CoverTitle.png" alt="Loope-Market Place" />
          <p>BUY BETTER - BUY PRELOVED</p>
        </header>

        <section className="btns">
          <Link
            to="/signup"
            role="button"
            className="text-black w-full m-auto hover:bg-green-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 focus:ring-4 mb-2 bg-[#C3E6C3]"
          >
            SIGN UP
          </Link>
          <Link
            to="/home"
            role="button"
            className="text-white m-auto w-full hover:text-white-900 border border-white hover:bg-gray-500 focus:ring-4 focus:outline-none  font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 border-gray-600 hover:text-gray-900  hover:bg-gray-600 "
          >
            BROWSE AS A GUEST
          </Link>
          <span className="grid gap-2">
            <p className="text-[#C3E6C3]">ALREADY HAVE AN ACCOUNT?</p>
            <Link
              to="/signin"
              role="button"
              className="text-white w-full hover:text-white-900 border border-none hover:outline-white focus:ring-4 font-medium rounded-3xl text-sm px-20  py-2.5 text-center me-2 mb-2 border-gray-600 hover:text-gray-900  hover:bg-gray-500 "
            >
              SIGN IN
            </Link>
          </span>
        </section>
      </div>
    </div>
  );
}

export default StartupPage;
