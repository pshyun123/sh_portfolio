import styled from "styled-components";
const IntroComp = styled.section`
  height: 100vh;
  background-color: ${(props) => (props.active ? "pink" : "#CCC")};
`;
const Intro = ({ active }) => {
  return (
    <>
      <IntroComp id="intro" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="textBox">
              <h4> 인트로 자리 </h4>
            </div>
          </div>
        </div>
      </IntroComp>
    </>
  );
};
export default Intro;
