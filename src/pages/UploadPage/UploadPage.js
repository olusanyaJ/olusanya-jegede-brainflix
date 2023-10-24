import "./UploadPage.scss";
import { Link } from "react-router-dom";

const UploadPage = () => {
  return (
    <section className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <div className="upload__container">
        <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3>
        <video
          className="upload__video"
          width=""
          height=""
          controls
          type="video/mp4"
          poster="{videosData.image}"
        />
        <div className="upload__form">
          <form className="form">
            <div className="form__group">
              <label htmlFor="name" className="form__label">
                TITLE YOUR VIDEO
              </label>
              <input
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
        <button type="submit" className="upload__button">
          PUBLISH
        </button>
        <Link to="/" className="upload__link">
          <p className="upload__cancel">CANCEL</p>
        </Link>
      </div>
    </section>
  );
};

export default UploadPage;
