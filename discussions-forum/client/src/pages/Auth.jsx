import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser, signUpUser } from "../api/api";
import { storeAuthInfo } from "../store/actions";

const Auth = (props) => {
  const { title } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    userName: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    if (
      formData.userName &&
      formData.password &&
      formData.userName.trim() &&
      formData.password.trim()
    ) {
      title === "Login"
        ? loginUser({
            userName: formData.userName,
            password: formData.password,
          })
            .then((data) => {
              dispatch(
                storeAuthInfo({
                  userName: formData.userName,
                  password: formData.password,
                })
              );
              navigate("/discussions-list");
            })
            .catch((error) => {
              const parsedErrMsg = error
                .split(":")[1]
                .replace(/"}/, "")
                .replace('"', "");
              setError(parsedErrMsg);
            })
        : signUpUser({
            userName: formData.userName,
            password: formData.password,
          })
            .then(() => {
              dispatch(
                storeAuthInfo({
                  userName: formData.userName,
                  password: formData.password,
                })
              );
              navigate("/discussions-list");
            })
            .catch((error) => {
              setError(error);
            });
    }
  };

  return (
    <div className="container">
      <div className="authContainer">
        <div className="authStyle">
          <h2>{title}</h2>
          <input
            type="text"
            minLength="1"
            maxLength="255"
            required
            placeholder="User Name"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="password"
            minLength="1"
            maxLength="1024"
            required
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error && typeof error === "string" ? (
            <p className="errorText">{error}</p>
          ) : (
            <br></br>
          )}
          <button className="buttonStyle" onClick={handleClick}>
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
