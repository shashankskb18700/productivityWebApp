import { useState, useEffect } from "react";
import "./auth.css";
import AuthInput from "./authInput/authInput";
import AuthSocial from "./authSocial/authSocial";
import axios from "axios";
import { ReactComponent as Logo } from "../../assets/svg/logoIcon.svg";

import { ReactComponent as Slogan } from "../../assets/svg/slogan.svg";

const Auth = () => {
  const [value, setValue] = useState({
    name: "",
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
      lable: "Email",
      errorMessage: "It should be a valid email",

      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      lable: "Password",
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
    const cookie = await axios.post("/login", { ...value });
    console.log(cookie);
  };

  return (
    <div className="authentication">
      <div className="info">
        <Logo className="logo"></Logo>
        {/* <Slogan className="logo slogan"></Slogan> */}
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
              {userType ? "Login" : "Sign up"}
            </button>
            <p
              style={{
                paddingTop: "1em",
                paddingBottom: "1em",
                fontWeight: "bold",
              }}
            >
              {" "}
              Or continue with:
            </p>
            <AuthSocial></AuthSocial>
            {userType ? (
              <span>
                New to Efficio ?{" "}
                <span
                  style={{ color: "var(--background)" }}
                  onClick={() => setUserType(!userType)}
                >
                  Get started!
                </span>
              </span>
            ) : (
              <span>
                Already a member ?{" "}
                <span
                  style={{ color: "#F6F4F3" }}
                  onClick={() => setUserType(!userType)}
                >
                  Log in to Efficio.
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="authFooter">company info</div>
    </div>
  );
};

export default Auth;
