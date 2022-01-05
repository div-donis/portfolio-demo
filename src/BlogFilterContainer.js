import React from "react";
import BlogFilterCard from "./BlogFilterCard";

const BlogFilterContainer = ({ langs, activeLang, setActiveLang }) => {
  return (
    <div className="lvlb">
      {langs?.map((lang) => (
        <BlogFilterCard
          key={lang}
          lang={lang}
          active={activeLang === lang}
          onClick={() => setActiveLang(lang)}
        />
      ))}
    </div>
  );
};

export default BlogFilterContainer;
