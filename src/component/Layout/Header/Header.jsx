import React from "react";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const HeaderComp = styled.section`
  .container {
    .menu {
      display: flex;
      li {
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
