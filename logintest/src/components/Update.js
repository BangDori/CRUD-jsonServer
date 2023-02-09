import { useCallback, useState } from "react";

const Update = ({ user, message, onChange, onQuery, onUpdate }) => {
  const [ID, setID] = useState("");
  const { name, userID, userPWD } = user;

  const onSearch = useCallback((e) => {
    setID(e.target.value);
  }, []);

  return (
    <>
      id:
      <input type="text" name="ID" value={ID} onChange={onSearch} />
      <button onClick={() => onQuery(ID)}>조회</button>
      <br />
      {user.name !== "" ? (
        <div>
          <form action="" method="post">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              style={{
                marginLeft: "3px",
              }}
            />
            <br />
            ID:
            <input
              type="text"
              name="userID"
              value={userID}
              onChange={onChange}
              style={{
                marginLeft: "30px",
              }}
            />
            <br />
            PWD:
            <input
              type="text"
              name="userPWD"
              value={userPWD}
              onChange={onChange}
              style={{
                marginLeft: "10px",
              }}
            />
            <br /> <br />
            <button type="button" onClick={() => onUpdate(ID)}>
              수정
            </button>
          </form>
          {message !== null ? <h3>{message}</h3> : null}
        </div>
      ) : null}
    </>
  );
};

export default Update;
