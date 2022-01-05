import React from "react";
import BlogFilterContainer from "./BlogFilterContainer";
import { useState, useEffect } from "react";

const Blog = () => {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@donovanodom";

  const axios = require("axios").default;

  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    axios
      .get(mediumURL)
      .then((info) => {
        const blogs = info.data.items;
        const posts = blogs.filter((post) => post.categories.length > 0);
        setBlog({ item: posts, isLoading: false });
      })
      .catch((err) => setBlog({ error: err.message }));
  }, [axios]);

  const [activeLang, setActiveLang] = useState("All");
  const langs = ["All", "JS", "React", "Redux", "Ruby", "Rails", "AWS", "SQL"];
  console.log(blog.item[0]);

  const stripHtml = (html) => {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const filteredBlogs = blog.item.filter((i) =>
    i.categories.includes(activeLang.toLowerCase())
  );

  return (
    <div classname="blog">
      <BlogFilterContainer
        langs={langs}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <div className="crdcnt">
        {activeLang === "All"
          ? blog.item.map((post) => (
              <div className="blgcrd">
                <div className="crdbdy">
                  <a href={post.link}>
                    <div className="crdttl">{post.title}</div>
                  </a>
                  <div className="crdtxt">{stripHtml(post.description)}</div>
                </div>
              </div>
            ))
          : filteredBlogs.map((post) => (
              <div className="blgcrd">
                <div className="crdbdy">
                  <a href={post.link}>
                    <div className="crdttl">{post.title}</div>
                  </a>
                  <div className="crdtxt">{stripHtml(post.description)}</div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
