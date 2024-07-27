import "./footer.css";

import { ReactComponent as FB } from "../../assets/svg/icons8-facebook (1).svg";

import { ReactComponent as X } from "../../assets/svg/icons8-twitter.svg";

import { ReactComponent as Lin } from "../../assets/svg/icons8-linked-in.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logoAndSloganFooter">
        <div>EFFICIO</div>
        <div>Efficient productivity effortlessly </div>
        <div> © EFFICIO 2024</div>
      </div>

      <div className="footerSocial">
        <FB></FB>
        <X></X>
        <Lin></Lin>
      </div>

      <div>Privacy Policy | Terms of use</div>
    </div>
  );
};

export default Footer;
