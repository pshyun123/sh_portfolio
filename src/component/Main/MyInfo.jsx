import styled from "styled-components";
import profile from "../../images/1.standing.jpeg";
const MyInfoComp = styled.section`
  background-color: ${(props) =>
    props.active ? "transparent" : "var(--DARKBLUE)"};
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .profileBox {
      padding: 10px;
      margin: 50px 0;
      width: 90%;
      background-color: var(--BLUE);
      border-radius: 10px;
      .proflie {
        background-image: url(${profile});
        background-size: cover;
        width: 400px;
        height: 600px;
        /* padding-bottom: 60%; */
      }
      .infoBox {
      }
    }
  }
`;
const MyInfo = ({ active }) => {
  return (
    <>
      <MyInfoComp id="myInfo" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="profileBox">
              <div className="proflie"></div>
              <div className="infoBox"></div>
              <h4>박소현</h4>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};
export default MyInfo;
