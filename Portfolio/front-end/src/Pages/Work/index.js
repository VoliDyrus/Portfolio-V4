/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

function Work() {
  const [previousWorkList, setPreviousWorkList] = useState([]);

  const getWork = async () => {
    const work = await axios.get("http://localhost:4000/api/projects");
    setPreviousWorkList(work.data);
    console.log(work.data);
  };

  useEffect(() => {
    getWork();
  }, []);

  return (
    <div className="wrapper-work" id="work">
      <div className="work-container">
        {previousWorkList.map((projects) => {
          return (
            <div className="work-holder">
              <div className="gallery-item">
                <div className="image">
                  <img src={projects.image} alt="image" />
                </div>
                <div className="text">{projects.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
