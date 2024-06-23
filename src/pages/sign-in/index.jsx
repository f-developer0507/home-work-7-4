import { NavLink } from "react-router-dom";
import "./index.css";

const Index = () => {
  const passwordEye = () => {
    const eye = document.getElementById("password-eye");
    const password = document.getElementById("password");

    if (password.type === "password") {
      eye.classList.add("active");
      password.type = "string";
    } else if ((password.type = "string")) {
      password.type = "password";
      eye.classList.remove("active");
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full sm:w-[450px] h-[500px] p-[50px] flex justify-center bg-[#fff] rounded-[6px]">
        <div className="w-[300px]">
          <ul className="flex justify-center items-center gap-x-[12px] leading-[16px] mb-[40px]">
            <li>
              <NavLink
                to="/"
                className="text-[#3D3D3D] text-[20px] font-medium"
              >
                Register
              </NavLink>
            </li>
            <li className="flex justify-center items-center">
              <span className="h-[16px] bg-[#3D3D3D] w-[1px] inline-block text-[18px]"></span>
            </li>
            <li>
              <NavLink
                to="sign-in"
                className="text-[#46A358] text-[20px] font-medium"
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div>
            <p className="mb-[14px] text-[13px] leading-[16px] text-[#3D3D3D]">
              Enter your email and password to login.
            </p>
            <form className="w-full flex flex-col gap-y-4">
              <input
                className="w-full h-[40px] pt-3 pb-3 pl-[14px] text-[15px] leading-[16px] rounded-[6px] border-[1px] border-[#EAEAEA] text-black placeholder:text-[#A5A5A5] focus:border-[#46A358] outline-0"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                autoComplete="off"
              />
              <div className="relative ">
                <input
                  className="w-full h-[40px] pt-3 pb-3 pl-[14px] text-[15px] leading-[16px] rounded-[6px] border-[1px] border-[#EAEAEA] text-black placeholder:text-[#A5A5A5] focus:border-[#46A358] outline-0"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  autoComplete="off"
                />
                <button
                  type="button"
                  id="password-eye"
                  onClick={() => passwordEye()}
                  className="absolute top-[50%] translate-y-[-50%] right-3 w-[15px] h-[15px] flex justify-center items-center before:content-['\f06e'] before:absolute before:w-full before:h-full before:font-[fontAwesome] before:flex before:justify-center before:items-center"
                ></button>
              </div>
              <button
                type="submit"
                className="h-[45px] font-medium bg-[#46A358] border-[transparent] border-[1px] text-[#fff] rounded-[5px] hover:bg-[transparent] hover:border-[#46A358] hover:text-[#46A358] active:relative active:top-[1px]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
