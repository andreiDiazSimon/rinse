import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "@tanstack/react-form";
import { useEffect } from "react";

function SignIn() {
  const navigate = useNavigate();
  const signinMutation = useMutation({
    mutationKey: ["signinMutation"],
    mutationFn: async (data) => {
      return await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        return res.json();
      });
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!form.state.values.name) return alert("Name is required!");
    if (!form.state.values.password) return alert("Password is required!");

    signinMutation.mutate({
      name: form.state.values.name,
      password: form.state.values.password,
    });
    return;
  }

  useEffect(() => {
    if (signinMutation.isSuccess) {
      console.log(signinMutation.data);
      if (signinMutation.data.message == "user not found")
        alert("incorrect credentials");
      if (signinMutation.data.signinStatus) {
        navigate("/home");
      }
    }
  }, [signinMutation.isSuccess]);

  return (
    <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-xl p-[5rem] text-white rounded-[3rem] flex flex-col items-center gap-[2rem]">
      <div className="text-[3rem] text-[white] font-bold">SIGN IN</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
        <form.Field name="name">
          {(field) => (
            <input
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Name"
              className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
            />
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <input
              type="password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Password"
              className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
            />
          )}
        </form.Field>

        <div className="flex flex-col gap-[0.5rem] items-center w-full">
          <button
            type="submit"
            className="w-full bg-[darkblue] text-[white] cursor-pointer p-[1rem] rounded-md"
          >
            Sign In
          </button>
          <NavLink to="/sign/up" end>
            <div className="font-Poppins text-[0.9rem]">
              Don't have an account?
            </div>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
