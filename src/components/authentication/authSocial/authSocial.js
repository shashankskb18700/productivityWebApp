import "./authSocial.css";
import { ReactComponent as Googl } from "../../../assets/svg/icons8-google.svg";

const AuthSocial = () => {
  return (
    <form
      className="authSocial"
      method="get"
      action="http://localhost:5000/auth/google"
    >
      <button>
        <Googl className="googleIcon"></Googl>
        <span style={{ "padding-left": "10%" }}></span> CONTINUE WITH GOOGLE
      </button>
    </form>
  );
};

export default AuthSocial;
