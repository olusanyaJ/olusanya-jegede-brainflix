import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

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
                  class="user__search-icon"
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

            <button className="user__button" type="user__upload">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="user__upload-icon"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M7.4,10h1.59v5c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-5h1.59c0.89,0,1.34-1.08,0.71-1.71L12.7,3.7 c-0.39-0.39-1.02-0.39-1.41,0L6.7,8.29C6.07,8.92,6.51,10,7.4,10z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z" />
                </g>
              </svg>
              <span className="user__button-text">UPLOAD</span>
            </button>

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
