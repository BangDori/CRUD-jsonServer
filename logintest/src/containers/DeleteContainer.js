import Delete from "../components/Delete";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const DeleteContainer = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onClick = async (id) => {
    try {
      await axios({
        url: `http://localhost:3001/users/${id}`,
        method: "delete",
      }).then((res) => {
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }

    setMessage("Success!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return <Delete message={message} onClick={onClick} />;
};

export default DeleteContainer;
