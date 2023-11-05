import "./UploadPage.scss";
import { Link, useNavigate } from "react-router-dom";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import axios from "axios";

const UploadPage = ({ fetchData }) => {
  const goHome = useNavigate();
  const [uploadFormTitle, setUploadFormTitle] = useState("");
  const [uploadFormDescription, setUploadFormDescription] = useState("");

  const handleUploadFormTitleInput = (event) => {
    setUploadFormTitle(event.target.value);
  };

  const handleUploadFormDescriptionInput = (event) => {
    setUploadFormDescription(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();

    const newVideoUpload = {
      title: uploadFormTitle,
      description: uploadFormDescription,
      image: uploadImage,
    };

    if (!uploadFormTitle) {
      alert("You must enter a title for your video");
      return;
    }
    if (!uploadFormDescription) {
      alert("You must enter a description for your video");
      return;
    }
    alert(
      "Upload succesful, you are now being redirected back to the Home Page!"
    );

    try {
      await axios.post(process.env.REACT_APP_BASE_URL, newVideoUpload);
    } catch (error) {
      console.error(error);
    }

    fetchData();

    goHome("/");
  };

  return (
    <section className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <div className="upload__container">
        <div className="upload__subcontainer">
          <div className="upload__inner">
            <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3>
            <img
              src={uploadImage}
              alt="Bicycle with blue grip on handle bars"
              className="upload__video"
            />
          </div>

          <div className="upload__form">
            <form className="form">
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  TITLE YOUR VIDEO
                </label>
                <input
                  onChange={handleUploadFormTitleInput}
                  type="text"
                  id="name"
                  className="form__input"
                  name="name"
                  placeholder="Add a title to your video"
                  autoComplete="name"
                />
              </div>
              <div className="form__group">
                <label htmlFor="comment" className="form__label">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  onChange={handleUploadFormDescriptionInput}
                  name="comment"
                  id="comment"
                  className="form__area"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="upload__wrapper">
          <button
            onClick={handleClick}
            type="submit"
            className="upload__button"
          >
            PUBLISH
          </button>
          <Link to="/" className="upload__link">
            <p className="upload__cancel">CANCEL</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UploadPage;
