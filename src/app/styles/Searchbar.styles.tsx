import styled from "styled-components";

interface IMainSearch {
  $inputFocused: boolean;
}

export const MainSearch = styled.main<IMainSearch>`
  --padding: calc(var(--seven-px) * 1.4);
  position: relative;
  height: 50px;
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: calc(var(--padding) * 0.37);
  place-items: center;
  border-radius: 10px;
  padding: 0px 0px 0px var(--padding);
  box-sizing: content-box;

  ${({
    $inputFocused,
    theme: {
      color: { green03, white01 },
    },
  }) => `
        background: linear-gradient(to right, ${green03}, #9996, ${green03});

        &::after {
            --sizeDelta: calc(var(--ten-px) * 2);
            content: "";
            left: 0px;
            top: 0px;
            ${
              $inputFocused
                ? `
                height: calc(100% + var(--sizeDelta));
                width: calc(100% + var(--sizeDelta));
            `
                : `
                height: 100%;
                width: 100%;
                `
            }
            left: 50%;
            top: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            background: linear-gradient(to bottom right, ${white01}0b, #66ccee1a, ${white01}0a);
            border-radius: 15px;
            z-index: -1;
            transition: 350ms ease-in-out;
        }
        
    `}

  & > input {
    padding: 0px calc(var(--padding) * 0.7);
  }
`;

export const SearchIcon = styled.img`
  --size: 24px;
  height: var(--size);
  widith: var(--size);
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: ${({
    theme: {
      color: { white01 },
    },
  }) => `${white01}ca`};
  font-size: 1.2rem;
  font-weight: 200;
  border-radius: 0px 10px 10px 0px;

  &:focus {
    box-shadow: 2px 2px 10px #eeeeee1c inset;
  }

  &::placeholder {
    font-size: 1.1rem;
    opacity: 0.99;
    color: ${({
      theme: {
        color: { white01 },
      },
    }) => `${white01}3a`};
  }
`;
