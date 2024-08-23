import styled from "styled-components";

export const MainNav = styled.main`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: calc(var(--three-px) * 3);
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
  ${({
    theme: {
      color: { green01, green03 },
    },
  }) => `
    background-color: ${green01};
    border-bottom: 1px solid ${green03};

    &::before {
        content: "";
        top: 0px;
        left: 0px;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: ${green01}24;
    }
  `};
`;

export const NavLogo = styled.img`
  --size: 60px;
  height: var(--size);
  width: var(--size);
  border-radius: 3px;
`;

export const MainTitle = styled.h4`
  font-family: Foldit;
  font-size: 2.05rem;
  font-weight: 700;
  color: ${({
    theme: {
      color: { white01 },
    },
  }) => white01};
  text-transform: uppercase;
`;

export const SubTitle = styled.h4`
  font-family: Comfortaa;
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({
    theme: {
      color: { white01 },
    },
  }) => white01};
  text-transform: uppercase;
`;
