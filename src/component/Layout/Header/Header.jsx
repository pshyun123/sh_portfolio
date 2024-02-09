import React from "react";
import styled from "styled-components";
import { useState } from "react";

const HeaderComp = styled.section`
  .container {
    width: 100%;
    .menu {
      display: flex;
      justify-content: space-between;
      li {
        width: 80%;
        text-align: center;
        button {
          background-color: transparent;
          border: transparent;
          font-weight: 600;
          font-size: 1.4em;
        }
      }
    }
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToRef = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeaderComp>
        <div className="container">
          <ul className="menu">
            <li>
              <button onClick={() => scrollToRef("intro")}>Intro</button>
            </li>
            <li>
              <button onClick={() => scrollToRef("myInfo")}>My Info</button>
            </li>
            <li>
              <button onClick={() => scrollToRef("skill")}>Skill</button>
            </li>
            <li>
              <button onClick={() => scrollToRef("project")}>Project</button>
            </li>
          </ul>
        </div>
      </HeaderComp>
    </>
  );
};
export default Header;
