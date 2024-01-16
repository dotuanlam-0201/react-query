import { Route, Routes } from "react-router-dom";
import './App.css';
import PostComponent from './post/PostComponent';
import UserComponent from './user/UserComponent';
import { Result } from "antd";
import PhotoComponent from "./photo/PhotoComponent";

function App() {

  return (
    <Routes>
      <Route path="/users" element={<UserComponent />} />
      <Route path="/posts" element={<PostComponent />} />
      <Route path="/photos" element={<PhotoComponent />} />
      <Route path="/*" element={<Result status={'404'} />} />
    </Routes>
  )
}

export default App
