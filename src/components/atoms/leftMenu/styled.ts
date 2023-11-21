import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
`;

export const LeftMenu = styled.div<{ $isOpen: boolean }>`
  width: 300px;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  z-index: 9999;

  left: ${(props) => (props.$isOpen ? "0" : "-300px")};

  box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 4px 0px 10px 1px rgba(0, 0, 0, 0.58);
  transition: all 0.3s ease-out;
`;

export const WrapperIcons = styled.div`
  box-shadow: 10.5px 0px 10px 0px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 8px 0px 10px 0px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 10.5px 0px 10px 0px rgba(0, 0, 0, 0.58);

  position: absolute;
  width: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -40px;
  top: 10px;
  background-color: #fff;
  z-index: 10;

  svg {
    cursor: pointer;
  }
`;

export const Input = styled.input``;
