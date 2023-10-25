import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg";

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
                <img src={searchIcon} alt="" className="user__search-icon" />
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
