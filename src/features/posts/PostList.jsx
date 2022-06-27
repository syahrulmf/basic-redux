import { useSelector } from "react-redux";
import React from "react";
import { sellectAllPosts } from "./postsSclice";

const PostList = () => {
  const posts = useSelector(sellectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article className="p-3 shadow rounded-lg mt-5 w-4/12" key={post.id}>
      <h3 className="text-xl font-semibold text-slate-700">{post.title}</h3>
      <p className="text-lg font-normal text-slate-500">
        {post.content.substring(0, 100)}
      </p>
    </article>
  ));

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-slate-800">Posts</h2>
      <div className="flex justify-center gap-4">{renderedPosts}</div>
    </div>
  );
};

export default PostList;
