import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { postDiscussion } from "../api/api";
import { updateDiscussionsList } from "../store/actions";

function AddDiscussion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state);

  const [formData, setFormData] = React.useState({
    topic: "",
    description: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    if (
      formData.topic &&
      formData.description &&
      formData.topic.trim() &&
      formData.description.trim()
    ) {
      postDiscussion({
        userName: auth.userName,
        password: auth.password,
        discussion: {
          topic: formData.topic,
          description: formData.description,
        },
      })
        .then(() => {
          dispatch(
            updateDiscussionsList({
              topic: formData.topic,
              description: formData.description,
            })
          );
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <div className="authContainer">
        <div className="addDiscussionStyle">
          <h2>Create a discussion</h2>
          <b>Topic</b>
          <input
            type="text"
            minLength="1"
            maxLength="1024"
            required
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          />
          <br></br>
          <b>Description</b>
          <textarea
            type="text"
            minLength="1"
            maxLength="1024"
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <br></br>
          <button className="addDiscussionButton" onClick={handleClick}>
            Create Discussion
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDiscussion;
