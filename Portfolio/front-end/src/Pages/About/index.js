import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function About() {
  const [previousTechnologieList, setPreviousTechnologieList] = useState([]);

  const getTechnologies = async () => {
    const tech = await axios.get("http://localhost:4000/api/technologies");
    setPreviousTechnologieList(tech.data);
    console.log(tech.data);
  };

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <div className="wrapper-about" id="about">
      <div className="info-wrapper">
        <h2 className="about-title">About</h2>
        <div className="description-holder">
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            consequat dolor. Maecenas vestibulum dui augue, imperdiet dictum
            nisl imperdiet eu. In hac habitasse platea dictumst. Maecenas
            consectetur posuere dictum. Nullam ornare eros ut mauris lobortis,
            sed rhoncus ligula facilisis. Suspendisse lorem massa, eleifend a
            dignissim nec, dignissim at magna. Nullam sit amet neque eget nisi
            facilisis sollicitudin. Pellentesque at dictum mauris. Donec nunc
            nunc, ultrices ac elementum id, pellentesque ac dolor.
          </p>
          <button className="resume-btn">Full Resume</button>
        </div>
        <div className="tech-list-wrapper">
          <h3 className="tech-title">Technologies</h3>
          {previousTechnologieList.map((tech) => {
            return (
              <div>
                <h1>{tech.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
