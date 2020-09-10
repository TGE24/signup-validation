import styled, { css } from "styled-components";

const ButtonBlock = styled.button`
  font-family: "GT Walsheim";
  background-color: #0daba8;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  width: fit-content !important;
  height: 50px;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  font-weight: 500;
  margin-right: 5px;
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}
  ${(props) =>
    props.round &&
    css`
      border-radius: 30px;
    `}
  ${(props) =>
    props.loading &&
    css`
      opacity: 0.5;
      cursor: wait;
    `}
  
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100% !important;
    `}
  ${(props) =>
    props.long &&
    css`
      min-width: 180px;
    `}  
  ${(props) =>
    props.small &&
    css`
      padding: 0 10px;
      font-size: 14px;
      min-width: 60px;
      height: 35px;
      ${(props) =>
        props.round &&
        css`
          border-radius: 30px;
        `}
    `}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #D3D3D3;
  }
  @media only screen and (max-width: 720px) {
    ${(props) =>
    props.largeMobile &&
    css`
        font-size: 15px;
        width: 100% !important;
      `}
  }
`;

export default ButtonBlock;
