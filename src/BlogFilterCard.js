import React from "react";

const BlogFilterCard = ({ lang, active, onClick }) => {
  return (
    <div className="lcs" onClick={onClick} id={active ? "alcs" : null}>
      {lang}
    </div>
  );
};

export default BlogFilterCard;
