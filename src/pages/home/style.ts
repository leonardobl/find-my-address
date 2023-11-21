import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
`;

export const LeftMenu = styled.div<{ $isOpen: boolean }>`
  width: 300px;
  height: 100vh;
  position: fixed;
  padding: 10px;
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

export const WrapperMap = styled.div`
  max-width: 100vw;
  overflow: hidden;
  min-height: 100vh;
`;

export const ButtonRemove = styled.button`
  display: block;
  margin: auto;
  padding: 6px;
  cursor: pointer;
`;

export const PopUpTextContent = styled.div`
  margin-bottom: 10px;
`;

export const WrapperCoordenadasContent = styled.div`
  margin-top: 20px;
  max-height: 100%;
  overflow-y: auto;

  h2 {
    font-size: 16px;
    margin: 20px 0;
  }
`;
export const CoordenadasContent = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  position: relative;

  &:hover {
    background-color: #eee;
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  p {
    font-size: 14px;
    cursor: pointer;
  }
`;
