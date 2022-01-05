import React from "react";

const BlogCard = ({ link, title, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-body">
        <a href={link}>
          <div className="blog-card-title">{title}</div>
        </a>
        <div className="blog-card-text">{description}</div>
      </div>
    </div>
  );
};

export default BlogCard;
