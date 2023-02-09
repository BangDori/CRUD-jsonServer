import React, { useState, useCallback } from "react";

const Delete = ({ message, onClick }) => {
  const [ID, setID] = useState("");

  const onChange = useCallback((e) => {
    setID(e.target.value);
  }, []);

  return (
    <div>
      id:
      <input type="text" name="ID" value={ID} onChange={onChange} />
      <button onClick={() => onClick(ID)}>삭제</button>
      {message !== null ? <h3>{message}</h3> : null}
    </div>
  );
};

export default Delete;
