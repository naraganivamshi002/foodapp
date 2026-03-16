import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

    if (validUser) {
      alert("Login Successful");
      navigate("/Veg");
    } else {
      alert("Login Failed");
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email", { required: true })}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password", { required: true })}
      />
      <br /><br />

      <button type="submit">Login</button>

    </form>
  );
}

export default Login;