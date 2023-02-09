import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import Update from "../components/Update";
import axios from "axios";

const UpdateContainer = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    userID: "",
    userPWD: "",
  });
  const [message, setMessage] = useState("");

  const onChange = useCallback(
    (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    },
    [user]
  );

  const onQuery = (id) => {
    const res = async () => {
      try {
        await axios({
          method: "get",
          url: `http://localhost:3001/users/${id}`,
          responseType: "json",
        }).then((response) => {
          if (message !== "") setMessage("");
          setUser(response.data);
        });
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    res();
  };

  const onUpdate = useCallback(
    async (id) => {
      await axios({
        method: "put",
        url: `http://localhost:3001/users/${id}`,
        data: user,
      }).then((res) => {
        console.log(res);
      });

      setMessage("Success!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    [navigate, user]
  );

  return (
    <Update
      user={user}
      message={message}
      onChange={onChange}
      onQuery={onQuery}
      onUpdate={onUpdate}
    />
  );
};

export default UpdateContainer;
