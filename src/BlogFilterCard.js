import React from "react";

const BlogFilterCard = ({ lang, active, onClick }) => {
  return (
    <div
      className="blog-filter-card"
      onClick={onClick}
      id={active ? "blog-filter-card-select" : null}
    >
      {lang}
    </div>
  );
};

export default BlogFilterCard;
