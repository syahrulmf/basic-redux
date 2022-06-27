import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <PostList />
      </div>
    </>
  );
}

export default App;
