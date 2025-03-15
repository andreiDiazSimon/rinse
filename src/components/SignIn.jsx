import { NavLink } from "react-router";
function SignIn() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-xl p-[5rem] text-white rounded-[3rem] flex flex-col items-center gap-[2rem]">
      <div className="text-[3rem] text-[white] font-bold">SIGN IN</div>
      <div className="flex flex-col gap-[1rem]">
        <input
          type="text"
          placeholder="Username"
          className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
        />
      </div>
      <input
        className="bg-[black] text-[white] px-[3rem] py-[1rem] hover:bg-[white] hover:text-[black]"
        type="button"
        value="SIGN IN"
      />
      <NavLink to="/sign/up" end>
        <div className="font-mono">Don't have an account?</div>
      </NavLink>
    </div>
  );
}

export default SignIn;
