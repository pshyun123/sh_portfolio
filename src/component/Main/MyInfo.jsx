import styled from "styled-components";
import profile from "../../images/1.standing.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import github from "../../images/1.github icon.png";
import notion from "../../images/1. notion logo.png";
const MyInfoComp = styled.section`
  background-color: ${(props) =>
    props.active ? "transparent" : "var(--DARKBLUE)"};
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .profileBox {
      padding: 40px;
      margin: 200px 0;
      width: 90%;
      background-color: white;
      border-radius: 10px;
      display: flex;
      .profile {
        background-image: url(${profile});
        background-size: cover;
        width: 300px;
        height: 450px;
        border-radius: 10px;
      }
      .infoBox {
        padding: 0 20px;
        margin-left: 30px;
        .textBox {
          h2 {
            font-weight: 600;
            color: var(--DARKBLUE);
            margin-bottom: 10px;
          }
          .keywords {
            display: flex;
            h3 {
              padding: 5px;
              color: var(--BLUE);
            }
          }
        }
        .contact {
          background-color: var(--IVORY);
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
          h3 {
            font-size: 1.3em;
            margin-bottom: 20px;
            font-weight: 600;
            color: var(--DARKGREY);
          }
          p {
            font-size: 1.2em;
          }
          .tel {
            display: flex;
            margin-bottom: 10px;

            .telIcon {
              margin-right: 10px;
              font-size: 1.3em;
              color: var(--DARKGREY);
            }
          }
          .mail {
            display: flex;

            .mailIcon {
              margin-right: 10px;
              font-size: 1.3em;
              color: var(--DARKGREY);
            }
          }
        }
        .linkBox {
          padding: 20px;
          h3 {
            font-size: 1.3em;
            margin-bottom: 20px;
            font-weight: 600;
            color: var(--DARKGREY);
          }
          .iconBox {
            display: flex;
            .notion {
              width: 20%;
              padding-bottom: 20%;
              position: relative;
              margin-right: 20px;
              img {
                position: absolute;
                width: 100%;
              }
            }
            .github {
              width: 20%;
              padding-bottom: 20%;
              position: relative;

              img {
                position: absolute;
                width: 100%;
              }
            }
          }
        }
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
              <div className="profile"></div>
              <div className="infoBox">
                <div className="textBox">
                  <h2>박소현</h2>
                  <div className="keywords">
                    <h3>#Communicate</h3>
                    <h3>#Efficient</h3>
                    <h3>#Challenging</h3>
                  </div>
                </div>
                <div className="contact">
                  <h3>CONTACT</h3>
                  <div className="tel">
                    <FontAwesomeIcon className="telIcon" icon={faPhone} />
                    <p>010-7177-07030000</p>
                  </div>
                  <div className="mail">
                    <FontAwesomeIcon className="mailIcon" icon={faEnvelope} />
                    <p>thgus1204@naver.com</p>
                  </div>
                </div>
                <div className="linkBox">
                  <h3>Link</h3>
                  <div className="iconBox">
                    <div className="notion">
                      <a
                        href="https://lucky-sohyun-park.notion.site/Front-end-af53e38b98664d6dacc6eed0f9bad661"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={notion} alt="notion link" />
                      </a>
                    </div>
                    <div className="github">
                      <a href="https://github.com/pshyun123" target="_blank">
                        <img src={github} alt="github link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};
export default MyInfo;
