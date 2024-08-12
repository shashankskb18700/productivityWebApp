import { useState, useEffect } from "react";
import "./auth.css";
import AuthInput from "./authInput/authInput";
import AuthSocial from "./authSocial/authSocial";
import Footer from "../footer/footer";
import axios from "axios";
import { ReactComponent as Logo } from "../../assets/svg/logoIcon.svg";

import { ReactComponent as Slogan } from "../../assets/svg/slogan.svg";

import { ReactComponent as Uth } from "../../assets/svg/Time management-cuate (1).svg";

const Auth = () => {
  const [value, setValue] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userType, setUserType] = useState(true);
  const [passwordVerification, setPasswordVerification] = useState(false);

  useEffect(() => {
    var minMaxLength = /^[\s\S]{8,32}$/,
      upper = /[A-Z]/,
      lower = /[a-z]/,
      number = /[0-9]/,
      special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

    if (
      minMaxLength.test(value["password"]) &&
      upper.test(value["password"]) &&
      lower.test(value["password"]) &&
      number.test(value["password"]) &&
      special.test(value["password"])
    ) {
      setPasswordVerification(false);
    } else {
      if (value["password"].length != 0) setPasswordVerification(true);
    }
  }, [value["password"]]);
  console.log(passwordVerification);

  const signup = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      lable: "Username",
      errorMessage: "Your username should contain whitespace.",
      pattern: "^[A-Za-z0-9]{1,15}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      lable: "Email",
      errorMessage: "An email address must contain a single @.",

      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      lable: "Password",
      errorMessage:
        "password should be between 8-32 character and it should include a one letter , one special character and one number number",

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

  const login = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      lable: "EMAIL",
      errorMessage: "It should be a valid email",

      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      lable: "PASSWORD",
      errorMessage: "Password",
      pattern: "(?m)^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W]).{8,})$",
      required: true,
    },
  ];
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookie = await axios.post(userType == false ? "/signup" : "/login", {
      ...value,
    });
    console.log(cookie);
  };

  return (
    <div className="authentication">
      <div className="info">
        {/* <Logo className="logo"></Logo> */}
        {/* <Slogan className="logo slogan"></Slogan> */}
        <span>EFFICIO</span>

        {userType ? (
          <div onClick={() => setUserType(!userType)}>CREATE ACCOUNT</div>
        ) : (
          <div onClick={() => setUserType(!userType)}>LOGIN</div>
        )}
      </div>
      {/* <div className="backgroundGraphics"></div> */}
      <div className="authSection">
        <div className="authForm">
          <form
            onSubmit={handleSubmit}
            className={passwordVerification ? "passError" : ""}
          >
            {userType
              ? login.map((input) => (
                  <AuthInput
                    key={input.id}
                    {...input}
                    value={value[input.name]}
                    onChange={handleChange}
                  ></AuthInput>
                ))
              : signup.map((input) => (
                  <AuthInput
                    key={input.id}
                    {...input}
                    value={value[input.name]}
                    onChange={handleChange}
                  ></AuthInput>
                ))}
          </form>

          <div className="callToAction">
            <button onClick={handleSubmit}>
              {userType ? "LOGIN" : "SIGN UP"}
            </button>
          </div>
        </div>
        <div className="or">
          <span className="or1"></span>
          OR
          <span className="or2"></span>
        </div>

        <AuthSocial></AuthSocial>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Auth;
