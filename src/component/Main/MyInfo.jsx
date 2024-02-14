import styled from "styled-components";
const MyInfoComp = styled.section`
  height: 100vh;
  background-color: ${(props) =>
    props.active ? "transparent" : "var(--BLUE)"};
`;
const MyInfo = ({ active }) => {
  return (
    <>
      <MyInfoComp id="myInfo" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="textBox">
              <h4>박소현</h4>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};
export default MyInfo;
