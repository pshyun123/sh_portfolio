import styled from "styled-components";
const FooterComp = styled.footer`
  width: 100%;
  background-color: var(--BLACK);
  .container {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;

    p,
    div {
      color: white;
      line-height: 1.5;
    }
    .info {
    }
    .copyright {
    }
  }
`;
const Footer = () => {
  return (
    <>
      <FooterComp>
        <div className="container">
          <div className="info">
            <p>Front-end Developer Portflio By Sohyun Park</p>
            <p>Email: thgus1204@naver.com</p>
            <p>Tel : 010-7177-0703 </p>
          </div>
          <div className="copyright">
            <p>CopyRight © 2024 PARK SOHYUN All Rights Reserved.</p>
          </div>
        </div>
      </FooterComp>
    </>
  );
};
export default Footer;
