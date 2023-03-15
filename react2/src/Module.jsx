import React from "react";
import "../src/Module.scss";
const Module = (probs) => {

    const blogs = probs.blogs
  return (
    <div className="container mt-5">
      <div className="row g-3 blogs">
        {blogs.map((el) => (
          <div key={el.id} className="col-lg-4">
            <img src={el.imgscript} alt="" />
            <h4>{el.descr}</h4>
            <p>{el.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module;
