import { useState } from "react";
import "./auth.css";
import AuthInput from "./authInput/authInput";

const Auth = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const input = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      lable: "Name",
      errorMessage: "Please enter you name",
      pattern: "^[A-Za-z0-9]{3,15}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      lable: "Email",
      errorMessage: "It should be a valid email",

      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      lable: "Password",
      errorMessage:
        "password should be between 8-16 character and it should include a one letter , one special character and one number number",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[!@#$%^&*()-_+=?])(?=.*[^wds]).{8,16}$",
      required: true,
    },

    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      lable: "Confirm Password",
      errorMessage: "Password don't match",
      pattern: value.password,
      required: true,
    },
  ];
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(value);

  return (
    <div className="authentication">
      <form onSubmit={handleSubmit}>
        {input.map((input) => (
          <AuthInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={handleChange}
          ></AuthInput>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Auth;
