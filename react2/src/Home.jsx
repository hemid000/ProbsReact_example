import React from "react";
import { useState } from "react";

import Module from "./Module";
const Home = () => {
  const [blogs, useBlogss] = useState([
    {
      id: 1,
      imgscript:
        "https://plus.unsplash.com/premium_photo-1664278686142-15b6ee0c0b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      descr: "img1",
      info: "lorem ipsum nutrion",
    },
    {
      id: 2,
      imgscript:
        "https://images.unsplash.com/photo-1678729465458-cf54e1b4647e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      descr: "img2",
      info: "lorem ipsum nutrion",
    },
    {
      id: 3,
      imgscript:
        "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      descr: "img3",
      info: "lorem ipsum nutrion",
    },
    {
      id: 4,
      imgscript:
        "https://plus.unsplash.com/premium_photo-1664278686142-15b6ee0c0b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      descr: "img1",
      info: "lorem ipsum nutrion",
    },
    {
      id: 5,
      imgscript:
        "https://images.unsplash.com/photo-1678729465458-cf54e1b4647e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      descr: "img2",
      info: "lorem ipsum nutrion",
    },
    {
      id: 6,
      imgscript:
        "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      descr: "img3",
      info: "lorem ipsum nutrion",
    },
  ]);

  return (
    <section id="blogs">
        <Module blogs = {blogs}/>
    </section>
  );
};

export default Home;
