import styled from "styled-components";
import backImg from "../../images/sea2.jpg";
const IntroComp = styled.section`
  height: 1000px;

  background-image: url(${backImg});
  background-size: cover;
  .container {
    height: 1000px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    text-align: left;
    .textBox {
      line-height: 1.4;
      h2 {
        color: var(--IVORY);
        font-weight: 600;
        font-size: 2rem;
      }
      h3 {
        color: var(--GREY);
        font-size: 1.3em;
      }
    }
  }
`;
const Intro = ({ active }) => {
  return (
    <>
      <IntroComp id="intro" active={active}>
        <div className="wrapper">
          <div className="container">
            <div className="textBox">
              <h3>최적의 효율을 찾아내는</h3>
              <h2>프론트엔드 개발자</h2>
              <h2>PARK SOHYUN</h2>
            </div>
          </div>
        </div>
      </IntroComp>
    </>
  );
};
export default Intro;
