import React, { useEffect, useState } from "react";

const User = () => {
  function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");

      if (cookieName === name) {
        return JSON.parse(decodeURIComponent(cookieValue));
      }
    }

    return null;
  }

  // Usage
  const userInfo = getCookie("userData");
  console.log(userInfo);

  useEffect(() => {
    const userInfo = getCookie("userData");
    setUserData(userInfo);
    console.log(userData);
  }, []);

  const [userData, setUserData] = useState({});
  return (
    <div>
      <div>
        <p>fullname:{userData.fullname}</p>
        <p>email:{userData.email}</p>
      </div>
    </div>
  );
};

export default User;
