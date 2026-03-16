import React from "react";
import { useForm } from "react-hook-form";

function Registration() {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input
        type="text"
        placeholder="FULL NAME"
        {...register("name", { required: true })}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password", { required: true })}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email", { required: true })}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter Your Number"
        {...register("number", { required: true })}
      />
      <br /><br />

      <button type="submit">Register</button>

    </form>
  );
}

export default Registration;