import axios from "axios";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Create from "../components/Create";

const CreateContainer = () => {
  const url = "http://localhost:3001/users";
  const [form, setForm] = useState({
    name: "",
    userID: "",
    userPWD: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onChange = useCallback(
    (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );

  const onPost = useCallback(async () => {
    try {
      await axios({
        url: url,
        method: "post",
        data: form,
      }).then((res) => {
        /**
         * config 내부 data에 입력된 정보 전달
         */
        console.log(res);
        if (res.status) {
          setMessage("Success Register");
        } else {
          setMessage("Fail Register");
        }
      });

      setForm({
        name: "",
        userID: "",
        userPWD: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }, [form, navigate]);

  return (
    <Create form={form} onChange={onChange} onPost={onPost} message={message} />
  );
};

export default CreateContainer;
