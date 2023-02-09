import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import CreateContainer from "./containers/CreateContainer";
import InqueryContainer from "./containers/InqueryContainer";
import UpdateContainer from "./containers/UpdateContainer";
import DeleteContainer from "./containers/DeleteContainer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/create">추가</Link>
        </li>
        <li>
          <Link to="/inquery">유저 확인</Link>
        </li>
        <li>
          <Link to="/update">유저 수정</Link>
        </li>
        <li>
          <Link to="/delete">유저 삭제</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateContainer />} />
        <Route path="/inquery" element={<InqueryContainer />} />
        <Route path="/update" element={<UpdateContainer />} />
        <Route path="/delete" element={<DeleteContainer />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
