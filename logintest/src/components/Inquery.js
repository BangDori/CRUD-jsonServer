const Inquery = ({ users }) => {
  if (users === null || users === undefined) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <ul>
              <li>번호: {user.id}</li>
              <li>ID: {user.userID}</li>
              <li>PWD: {user.userPWD}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Inquery;
