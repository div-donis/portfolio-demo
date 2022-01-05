import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
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

  const Lang = ({ lang, active, onClick }) => (
    <div className="lcs" onClick={onClick} id={active ? "alcs" : null}>
      {lang}
    </div>
  );

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

  console.log(filteredBlogs);

  return (
    <div className="home">
      <div className="lvlb">
        {langs.map((lang) => (
          <Lang
            key={lang}
            lang={lang}
            active={activeLang === lang}
            onClick={() => setActiveLang(lang)}
          />
        ))}
      </div>
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

export default Home;
