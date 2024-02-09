import styled from "styled-components";
const ProjectComp = styled.section`
  height: 100vh;
  background-color: ${(props) => (props.active ? "transparent" : "#7575ff")};
`;
const Project = ({ active }) => {
  return (
    <>
      <ProjectComp id="skill" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="textBox">
              <h4> 프로젝트 소개 자리 </h4>
            </div>
          </div>
        </div>
      </ProjectComp>
    </>
  );
};
export default Project;
