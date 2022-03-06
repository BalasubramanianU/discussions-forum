import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../api/api";
import { updateComment } from "../store/actions";

function AddComment(props) {
  const dispatch = useDispatch();

  const { auth, currentDiscussion } = useSelector((state) => state);
  const [formData, setFormData] = React.useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleClick = () => {
    if (formData && formData.trim()) {
      postComment({
        userName: auth.userName,
        password: auth.password,
        topic: currentDiscussion.topic,
        comment: formData,
      })
        .then(() => {
          dispatch(
            updateComment({
              topic: currentDiscussion.topic,
              comment: formData,
            })
          );
          setFormData("");
          props.updateComments([...props.comments, formData]);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div
      className="commentCardContainer"
      style={{ marginBottom: "3vh", backgroundColor: "#eeeed2" }}
    >
      <div className="cardStyle">
        <div>
          <b>Add Comment: </b>
        </div>
        <textarea
          className="textAreaStyle"
          type="text"
          minLength="1"
          maxLength="1024"
          required
          name="comment"
          value={formData}
          onChange={handleChange}
        ></textarea>
        <div>
          <button className="commentButtonStyle" onClick={handleClick}>
            <b>Post comment</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
