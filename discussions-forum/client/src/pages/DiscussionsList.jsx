import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

import "../styles/styles.css";
import { getDiscussionsList } from "../api/api";
import {
  initializeDiscussionsList,
  storeCurrentDiscussion,
} from "../store/actions";
import ListCard from "../components/ListCard";

const DiscussionsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { discussionsList, auth } = useSelector((state) => state);
  const [error, setError] = React.useState("");

  useEffect(() => {
    getDiscussionsList()
      .then((data) => {
        Array.isArray(data) && data.length !== 0
          ? dispatch(initializeDiscussionsList(data))
          : setError("No records found. Create a new discussion.");
      })
      .catch((error) => setError(error));
  }, []);

  const renderListItems = React.useCallback(() => {
    return (
      <ul>
        {discussionsList.map((item) => (
          <div
            className="innerCard"
            key={item.topic}
            onClick={() => handleClick(item)}
          >
            <ListCard listItem={item} />
          </div>
        ))}
      </ul>
    );
  }, [discussionsList]);

  const handleClick = (listItem) => {
    dispatch(storeCurrentDiscussion(listItem));
    navigate(`/discussions-list/${listItem.topic}`);
  };

  return (
    <div className="container">
      <div className="navBar">
        <div className="header">
          <h1>Discussions List</h1>
        </div>
        <div className="buttonContainer">
          {auth.userName && auth.password ? (
            <button
              className="homePageDiscussionButton"
              title="Create Discussion"
              onClick={() => navigate("/add-discussion")}
            >
              Create Discussion
            </button>
          ) : (
            <>
              <button
                className="homePageAuthButton"
                title="Login"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="homePageAuthButton"
                title="Sign Up"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
      <div className="contentStyle">
        <div className="listStyle">
          {error && typeof error === "string" ? (
            <p className="errorText">{error}</p>
          ) : (
            renderListItems()
          )}
        </div>
        <div className="listDetailStyle">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DiscussionsList;
