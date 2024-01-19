import { Route, Routes } from "react-router-dom";
import './App.css';
import PostComponent from './post/PostComponent';
import UserComponent from './user/UserComponent';
import { Result } from "antd";
import PhotoComponent from "./photo/PhotoComponent";
import UsersComponent from "./user/UsersComponent";
import RetryComponent from "./retry/RetryComponent";

function App() {

  return (
    <Routes>
      <Route path="/user" element={<UserComponent />} />
      <Route path="/users" element={<UsersComponent />} />
      <Route path="/post" element={<PostComponent />} />
      <Route path="/photo" element={<PhotoComponent />} />
      <Route path="/retry" element={<RetryComponent />} />
      <Route path="/*" element={<Result status={'404'} />} />
    </Routes>
  )
}

export default App
