import styled from "styled-components";
const MyInfoComp = styled.section`
  height: 100vh;
  background-color: ${(props) => (props.active ? "transparent" : "#fffff4")};
`;
const MyInfo = ({ active }) => {
  return (
    <>
      <MyInfoComp id="myInfo" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="textBox">
              <h4>프론트엔드 개발자를 꿈꾸는 박소현입니다.</h4>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};
export default MyInfo;
