import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

import "../styles/styles.css";
import { getDiscussionsList } from "../api/api";
import {
  initializeDiscussionsList,
  storeAuthInfo,
  storeCurrentDiscussion,
  updateComment,
  updateComments,
  updateDiscussionsList,
} from "../store/actions";
import Card from "../components/ListCard";
import ListCard from "../components/ListCard";
import DiscussionCard from "../components/DiscussionCard";

const DiscussionsList = () => {
  const dispatch = useDispatch();
  const { discussionsList, auth } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    getDiscussionsList()
      .then((data) => {
        dispatch(initializeDiscussionsList(data));
      })
      .catch((error) => console.log(error));
  }, []);

  const renderListItems = React.useCallback(() => {
    return (
      <ul>
        {discussionsList.map((item) => (
          <button key={item.topic} onClick={() => handleClick(item)}>
            <ListCard listItem={item} />
          </button>
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
            <button title="Login" onClick={() => navigate("/add-discussion")}>
              Create Discussion
            </button>
          ) : (
            <>
              <button title="Login" onClick={() => navigate("/login")}>
                Login
              </button>
              <button title="Sign Up" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      <div className="contentStyle">
        <div className="listStyle">{renderListItems()}</div>
        <div className="listDetailStyle">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DiscussionsList;
