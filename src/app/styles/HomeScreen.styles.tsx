import styled from "styled-components";

interface IQuote {
  $rotate: boolean;
}

export const MainHome = styled.main`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const MainContent = styled.main`
  height: calc(100% - calc(var(--ten-px) * 10));
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px calc(var(--ten-px) * 6);
`;

export const TextContainer = styled.div`
  height: 300px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const HeaderScroller = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = styled.h4`
  font-family: Roboto;
  font-size: 2.4rem;
`;

export const BodyScroller = styled(HeaderScroller)`
  height: 120px;
  width: fit-content;
  position: relative;
  padding-left: var(--seven-px);
  // border: 1px solid red;
`;

export const BodyContainer = styled(HeaderContainer)`
  height: fit-content;
  width: fit-content;
`;

export const Body = styled.h4`
  position: relative;
  width: 600px;
  font-family: "Nunito Sans";
  font-size: 1.7rem;
  font-weight: 200;
  letter-spacing: 1px;
  color: ${({
    theme: {
      color: { white01 },
    },
  }) => `${white01}CA`};
  padding: var(--seven-px) calc(var(--ten-px) * 2);
`;

export const Quote = styled.span<IQuote>`
  font-family: "Secular One";
  font-size: 2.5rem;
  position: absolute;
  ${({ $rotate }) =>
    $rotate
      ? `
    rotate: 180deg;
    transform: translate(30%, 40%);
    top: 0px;
    z-index: -1;
  `
      : `
      transform: translate(20%, -10%);
    `}
`;

export const ImageScroller = styled.div`
  height: 100%;
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  // border: 1px solid green;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  // border: 1px solid #66ccee;
`;

export const ContentImage = styled.img`
  height: auto;
  width: 600px;
  border-radius: 5px;
`;

export const MainLaunchApp = styled.a`
  --color: #eee9;
  --height: 52px;
  --beforePosition: 4px;
  --beforeSize: calc(var(--height) - calc(var(--beforePosition) * 2));
  position: relative;
  height: var(--height);
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
  transition: 350ms ease-in;
  transform: translateY(-20px);
  text-decoration: none;
  background: linear-gradient(to right, var(--color), var(--color));
  box-shadow: 0px 0px 3px #0006, 0px 0px 3px #fff4;

  & > button {
    content: "";
    position: absolute;
    top: 50%;
    right: var(--beforePosition);
    height: var(--beforeSize);
    width: var(--beforeSize);
    transform: translate(0%, -50%);
    background: var(--color);
  }

  h4 {
    color: ${({
      theme: {
        color: { green01 },
      },
    }) => green01};
    transition: 250ms ease-in;
    margin-right: calc(var(--beforeSize) * 0.7);
  }

  &:hover {
    background: ${({
      theme: {
        color: { green03 },
      },
    }) => `linear-gradient(to right, ${green03}, #9996, ${green03})`};

    h4 {
      color: var(--color);
    }
  }
`;

export const LaunchAppText = styled.h4`
  font-family: "Open Sans";
  font-size: 1.1rem;
  font-weight: 400;
`;

export const LaunchAppButton = styled.button`
  outline: none;
  border: none;
  border-radius: 30px;
  display: grid;
  place-content: center;
`;

export const LaunchAppButtonImg = styled.img`
  --size: 24px;
  height: var(--size);
  width: var(--size);
`;
