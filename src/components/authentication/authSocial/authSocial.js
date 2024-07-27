import "./authSocial.css";
import { ReactComponent as Googl } from "../../../assets/svg/icons8-google.svg";

const AuthSocial = () => {
  return (
    <div className="authSocial">
      <button>
        <Googl className="googleIcon"></Googl>
        <span style={{ "padding-left": "10%" }}></span> CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default AuthSocial;
