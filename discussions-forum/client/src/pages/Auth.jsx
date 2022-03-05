import React, { useEffect } from "react";
import { loginUser, signUpUser } from "../api/api";

const Auth = (props) => {
  const { title } = props;
  useEffect(() => {
    // loginUser({ userName: "test", password: "1" })
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
    // signUpUser({ userName: "test2", password: "12" })
    //   .then(() => console.log("success"))
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* based on title from props should show login or signup */}
      {title}
    </div>
  );
};

export default Auth;
