import styled from "styled-components";
const SkillComp = styled.section`
  height: 100vh;
  background-color: ${(props) =>
    props.active ? "transparent" : "var(--BLUE)"};
`;
const Skill = ({ active }) => {
  return (
    <>
      <SkillComp id="skill" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="textBox">
              <h4> 스킬 </h4>
            </div>
          </div>
        </div>
      </SkillComp>
    </>
  );
};
export default Skill;
