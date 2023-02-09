const Create = ({ form, onChange, onPost, message }) => {
  const { name, userID, userPWD } = form;

  return (
    <div>
      <h2>Register</h2>
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
        <button type="button" onClick={onPost}>
          회원가입
        </button>
      </form>
      {message !== null ? <h3>{message}</h3> : null}
    </div>
  );
};

export default Create;
