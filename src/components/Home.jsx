import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="banner min-h-screen flex flex-col items-center md:gap-16">
      <div className="text-center ship pt-2 md:p-6 md:pt-16 text-[#ffffff] flex flex-col md:w-[90%] items-center justify-center text-2xl md:text-4xl">
        <h1 className="text-[#eae5e5]">Accredian</h1>
        <p>
          Accredian offers industry-leading programs from top global institutes.
          Master your future!
        </p>
      </div>
      <div className={`grid md:grid-cols-2 grid-cols-1 px-6 gap-6`}>
        <div className="w-full fadeLeftMini flex items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center rounded-3xl p-6 shadow-2xl">
            <h1 className="text-3xl">Login</h1>
            <div className="flex flex-col items-center justify-center gap-2 text-[#b8b8b8]">
              <Link className="hover:text-blue-800" to="/login">
                already have an account Login
              </Link>
              <Link className="hover:text-blue-800" to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full fadeLeftMini flex items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center rounded-3xl p-6 shadow-2xl">
            <h1 className="text-3xl">Signup</h1>
            <div className="flex flex-col items-center justify-center gap-2 text-[#b8b8b8]">
              <Link className="hover:text-blue-800" to="/signup">
                dont have an account signup
              </Link>
              <Link className="hover:text-blue-800" to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
