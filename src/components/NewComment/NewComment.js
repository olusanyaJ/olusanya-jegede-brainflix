import "./NewComment.scss";
import commentAvatar from "../../assets/images/Mohan-muruge.jpg";

const NewComment = () => {
  return (
    <section className="comments">
      <div className="comments__container">
        <h2 className="comments__count">3 Comments</h2>
        <h3 className="comments__title">JOIN THE CONVERSATION</h3>
        <div className="comments__subcontainer">
          <img
            className="comments__image"
            src={commentAvatar}
            alt="Mohan-muruge"
          />

          <form className="form">
            <div className="form__group">
              <textarea
                name="comment"
                id="comment"
                className="form__area"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <button className="form__button" type="submit">
              <svg
                className="form__comment-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-6 7h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" />
              </svg>
              <span className="form__text">COMMENT</span>
            </button>
          </form>
        </div>

        {/* <div class="comments__display">
          <article class="comments__wrapper"></article>
        </div> */}
      </div>
    </section>
  );
};

export default NewComment;
