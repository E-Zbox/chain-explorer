import styled, { css, keyframes } from "styled-components";
// ./ExplorerScreen
import { TableHeader } from "./ExplorerScreen.styles";

interface IHoverArrow {
  $hover: boolean;
}

const growWidth = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 24px;
  }
`;

const shrinkWidth = keyframes`
    0% {
        width: 24px;
    }
    100% {
        width: 0px;
    }
`;

const growWidthAnimation = (props) => {
  if (props.$hover) {
    return css<IHoverArrow>`
      ${growWidth} 350ms forwards linear
    `;
  } else {
    return css<IHoverArrow>`
      ${shrinkWidth} 350ms forwards linear
    `;
  }
};

interface ITokenIcon {
  $bgImg: string;
}

export const MainTokenRow = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 250ms ease-in;
  padding-left: calc(var(--seven-px) * 2);
  background: ${({
    theme: {
      color: { green02 },
    },
  }) =>
    `radial-gradient(ellipse at left, ${green02}44, ${green02}89, ${green02}62)`};

  &:hover {
    background: ${({
      theme: {
        color: { green02 },
      },
    }) => `linear-gradient(to right, ${green02}a3, ${green02}53)`};

    &::before {
      background: linear-gradient(to right, #1d1c1b06, #1d1c1b06);
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
    transition: 350ms ease-in-out;
    background: linear-gradient(to right, #1d1c1b36, #1d1c1b36);
  }
`;

export const HoverArrow = styled.img<IHoverArrow>`
  height: 24px;
  width: 0px;
  animation: ${growWidthAnimation};
`;

export const Row = styled(TableHeader)`
  place-items: center;
  grid-row-gap: 1px;
  border-radius: 0px;
  background: transparent;
`;

export const TokenName = styled.h4`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${({
    theme: {
      color: { green03 },
    },
  }) => `${green03}`};
`;

export const TokenSymbol = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1rem;
  font-weight: 900;
  color: ${({
    theme: {
      color: { white01 },
    },
  }) => `${white01}45`};
  opacity: 0.76;
  text-transform: uppercase;
  margin: 0px calc(var(--seven-px) * 1.5);
`;

export const TokenText = styled.h4`
  font-family: "Source Sans Pro";
  font-size: 1.15rem;
  text-align: center;
  color: ${({
    theme: {
      color: { white01 },
    },
  }) => `${white01}79`};
`;

export const TokenIcon = styled.div<ITokenIcon>`
  --size: 32px;
  height: var(--size);
  width: var(--size);
  background: ${({ $bgImg }) => `url(${$bgImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px calc(var(--ten-px) * 1.5);
`;
