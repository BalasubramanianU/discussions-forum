import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { getDiscussionsList, signUpUser } from "../api/api";
import {
  initializeDiscussionsList,
  storeAuthInfo,
  updateComment,
  updateComments,
  updateDiscussionsList,
} from "../store/actions";

const DiscussionsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    signUpUser({ userName: "test2", password: "12" })
      .then(() =>
        dispatch(storeAuthInfo({ userName: "test2", password: "12" }))
      )
      .catch((error) => console.log(error));
    // getDiscussionsList()
    //   .then((data) => {
    //     dispatch(initializeDiscussionsList(data));
    // dispatch(
    //   updateDiscussionsList({
    //     topic: "hello",
    //     description: "this is an example",
    //   })
    // );
    // dispatch(
    //   updateComment({
    //     topic: "dummy",
    //     comment: "this is second comment example",
    //   })
    // );
    // dispatch(storeAuthInfo({ userName: "bala", password: "123" }));
    // })
    // .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      discussions-list<Outlet></Outlet>
    </div>
  );
};

export default DiscussionsList;
