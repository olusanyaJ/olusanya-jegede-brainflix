import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="brand">
          <img className="brand__logo" src={logo} alt="" />
        </div>

        <div className="user">
          <div className="user__wrapper">
            <div className="user__search">
              <div className="user__search-tab">
                <svg
                  className="user__search-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z"
                    fill="#323232"
                  />
                </svg>
                <input
                  className="user__search-input"
                  type="text"
                  placeholder=" Search"
                />
              </div>

              <img
                className="user__image user__image--mobile"
                src={userAvatar}
                alt="Mohan-muruge"
              />
            </div>

            <Link to="/upload" className="user__upload">
              <p className="user__upload-text">UPLOAD</p>
            </Link>

            <img
              className="user__image user__image--tablet"
              src={userAvatar}
              alt="Mohan-muruge"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
