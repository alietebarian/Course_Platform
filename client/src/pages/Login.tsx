import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [userInput, setUserInput] = useState({ userName: "", password: "" });
  const [message, setMessage] = useState<null | string>(null)
  const navigate = useNavigate()

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post("http://localhost:5126/api/Auth/Login", {
        userName: userInput.userName,
        password: userInput.password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);

      const { fullName, id, email, role } = jwtDecode(res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({ fullName, id, email, role })
      );
    },
    onSuccess: () => {
      Swal.fire({
        title: "Good job!",
        text: "ورود با موفقیت انجام شد",
        icon: "success",
      });
      navigate("/");
    },
    onError: (error: any) => {
      const errMsg = error?.response?.data;
      setMessage(typeof errMsg === "string" ? errMsg : "خطا در ورود");
      Swal.fire({
        title: "Oops!",
        text: "Username or password is incorrect !",
        icon: "error",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null)
    loginMutation.mutate()
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={userInput.userName}
              onChange={handleUserInput}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userInput.password}
              onChange={handleUserInput}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
