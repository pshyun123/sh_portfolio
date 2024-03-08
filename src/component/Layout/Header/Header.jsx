import React from "react";
import styled from "styled-components";
import { useState } from "react";

const HeaderComp = styled.section`
  width: 100vw;
  height: 60px;
  backdrop-filter: blur(40px);
  background-color: rgba(32, 63, 136, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 888;
  border-bottom: 1px solid rgba(204, 204, 204, 0.1);
  .container {
    .menu {
      width: 60%;
      margin: 0 auto;
      margin-top: 10px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      li {
        text-align: center;
        button {
          background-color: transparent;
          border: transparent;
          font-weight: 300;
          font-size: 1.1em;
          color: white;
        }
      }
    }
  }
`;

const Header = () => {
  const scrollToRef = (sectionId) => {
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
            <li>
              <button onClick={() => scrollToRef("downloads")}>
                Downloads
              </button>
            </li>
          </ul>
        </div>
      </HeaderComp>
    </>
  );
};
export default Header;
