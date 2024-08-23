import styled from "styled-components";

export const MainApp = styled.main`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({
    theme: {
      color: { green01 },
    },
  }) => green01};
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: #0d0a0c95;
    visibility: none;
  }
`;
