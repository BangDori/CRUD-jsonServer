import Inquery from "../components/Inquery";
import axios from "axios";
import { useState, useEffect } from "react";

const InqueryContainer = () => {
  const url = "http://localhost:3001/users";
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fn = async () => {
      try {
        await axios({
          method: "get",
          url: url,
          responseType: "json",
        }).then((res) => {
          setUsers(res.data);
        });
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, []);

  return <Inquery users={users} />;
};

export default InqueryContainer;
