export const getDiscussionsList = () => {
  return new Promise(async (resolve, reject) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "https://discussions-forum.onrender.com/discussions-list/",
        // "http://localhost:5000/discussions-list/",
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        return resolve(data);
      }
      const errorMessage = await response.text();
      reject(errorMessage);
    } catch (error) {
      reject(error);
    }
  });
};

export const loginUser = (props) => {
  const { userName, password } = props;
  return new Promise(async (resolve, reject) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    };
    try {
      const response = await fetch(
        "https://discussions-forum.onrender.com/user/login",
        // "http://localhost:5000/user/login",
        requestOptions
      );
      if (response.ok) {
        const data = await response.text();
        return resolve(data);
      }
      const errorMessage = await response.text();
      reject(errorMessage);
    } catch (error) {
      reject(error);
    }
  });
};

export const signUpUser = (props) => {
  const { userName, password } = props;
  return new Promise(async (resolve, reject) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    };
    try {
      const response = await fetch(
        "https://discussions-forum.onrender.com/user/signup",
        // "http://localhost:5000/user/signup",
        requestOptions
      );
      if (response.ok) {
        return resolve();
      }
      const errorMessage = await response.text();
      reject(errorMessage);
    } catch (error) {
      reject(error);
    }
  });
};

export const postDiscussion = (props) => {
  const { userName, password, discussion } = props;
  return new Promise(async (resolve, reject) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
        discussion,
      }),
    };
    try {
      const response = await fetch(
        "https://discussions-forum.onrender.com/discussions-list/",
        // "http://localhost:5000/discussions-list/",
        requestOptions
      );
      if (response.ok) {
        return resolve();
      }
      const errorMessage = await response.text();
      reject(errorMessage);
    } catch (error) {
      reject(error);
    }
  });
};

export const postComment = (props) => {
  const { userName, password, topic, comment } = props;
  return new Promise(async (resolve, reject) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
        topic,
        comment,
      }),
    };
    try {
      const response = await fetch(
        "https://discussions-forum.onrender.com/discussions-list/:topic",
        // "http://localhost:5000/discussions-list/:topic",
        requestOptions
      );
      if (response.ok) {
        return resolve();
      }
      const errorMessage = await response.text();
      reject(errorMessage);
    } catch (error) {
      reject(error);
    }
  });
};
