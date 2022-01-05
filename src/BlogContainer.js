import React from "react";
import BlogCard from "./BlogCard";

const BlogContainer = ({ posts }) => {
  const stripHtml = (html) => {
    let tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div className="blog-container">
      {posts?.map((post, index) => (
        <BlogCard
          key={index}
          link={post.link}
          title={post.title}
          description={stripHtml(post.description)}
        />
      ))}
    </div>
  );
};

export default BlogContainer;
