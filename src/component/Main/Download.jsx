import styled from "styled-components";
const DownloadComp = styled.section`
  height: 100vh;
  background-color: ${(props) =>
    props.active ? "transparent" : "var(--DARKGREY)"};
`;
const Download = ({ active }) => {
  return (
    <>
      <DownloadComp id="project" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="textBox">
              <h4> 다운로드 영역 </h4>
            </div>
          </div>
        </div>
      </DownloadComp>
    </>
  );
};
export default Download;
