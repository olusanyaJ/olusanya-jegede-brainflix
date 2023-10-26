import "./NewComment.scss";
import commentAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

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

          <form className="comment-form">
            <div className="comment-form__group">
              <textarea
                name="comment"
                id="comment"
                className="comment-form__area"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <button className="comment-form__button" type="submit">
              <img
                src={commentIcon}
                alt="comment icon"
                className="comment-form__comment-icon"
              />
              <span className="comment-form__text">COMMENT</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewComment;
