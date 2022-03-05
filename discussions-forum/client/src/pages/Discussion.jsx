import React, { useEffect } from "react";
import { postComment, postDiscussion } from "../api/api";

const Discussion = () => {
  useEffect(() => {
    // postDiscussion({
    //   userName: "test2",
    //   password: "12",
    //   discussion: { topic: "dummy", description: "this is a dummy desc." },
    // })
    //   .then(() => console.log("success"))
    //   .catch((error) => console.log(error));
    // postComment({
    //   userName: "test2",
    //   password: "12",
    //   topic: "dummy",
    //   comment: "first comment",
    // })
    //   .then(() => console.log("success"))
    //   .catch((error) => console.log(error));
  }, []);

  return <div>discussion</div>;
};

export default Discussion;
