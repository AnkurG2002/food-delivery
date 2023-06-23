import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    // let uid = "";
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response);
        // uid = response.user.uid;
        // sessionStorage.setItem("User Id", uid);
        // sessionStorage.setItem(
        //   "Auth token",
        //   response._tokenResponse.refreshToken
        // );
        // window.dispatchEvent(new Event("storage"));
        setLoading(false);
        toast.success("Successful Login!🎉", {
          autoClose: 3000,
        });
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Wrong Password", {
            autoClose: 3000,
          });
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Email not found, please register", {
            autoClose: 3000,
          });
        }
        setLoading(false);
      });
  };
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full">
          <h5 className="text-3xl">Login</h5>
          <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                id="email"
                type="email"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {errors.email && (
                <span className="text-black">This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-200"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                id="password"
                type="password"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {errors.password && (
                <span className="text-black">This field is required</span>
              )}
            </div>
            <Button size="large">{loading ? "loading" : "Login"}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
