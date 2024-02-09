import Intro from "../component/Main/Intro";
import MyInfo from "../component/Main/MyInfo";
import Skill from "../component/Main/Skill";
import Project from "../component/Main/Project";
import styled from "styled-components";
const MainComp = styled.section``;

const MainPage = () => {
  return (
    <>
      <MainComp>
        <Intro />
        <MyInfo />
        <Skill />
        <Project />
      </MainComp>
    </>
  );
};
export default MainPage;
