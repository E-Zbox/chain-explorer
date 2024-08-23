import styled, { keyframes } from "styled-components";

interface IMainExplorer {
  $bgImg: string;
}

interface IBlockchainItem {
  $selected: boolean;
}

interface IColumnTitle {
  $textAlign: string;
}

export const MainExplorer = styled.main<IMainExplorer>`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({
    $bgImg,
    theme: {
      color: { green01 },
    },
  }) =>
    `radial-gradient(ellipse at center, #000d, ${green01}d5), url(${$bgImg})`};
  background-attachment: fixed;
  background-repeat: repeat;
  background-position: top left;
  background-size: contain;
  z-index: 0;
  overflow-y: scroll;

  & > div {
    padding: calc(var(--ten-px) * 3);

    &::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      z-index: -1;
      background-color: #0008;
    }
  }
`;

export const MainTitle = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1.3rem;
  font-weight: 600;
`;

export const MainBlockchain = styled.main`
  position: relative;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: calc(var(--ten-px) * 3);
`;

export const BlockchainItem = styled.div<IBlockchainItem>`
  --margin: calc(var(--ten-px) * 2);
  --transparentColor: #fff2;
  --solidColor: ${({
    theme: {
      color: { green02 },
    },
  }) => green02};
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  cursor: pointer;
  transition: 350ms linear;
  margin-right: var(--margin);
  padding: calc(var(--three-px) * 1) calc(var(--ten-px) * 4);
  padding-left: calc(var(--three-px) * 1.5);
  ${({
    $selected,
    theme: {
      color: { green02 },
    },
  }) =>
    $selected
      ? `
    scale: 1;
    background: linear-gradient(to right, ${green02}64, ${green02}64);
    border: 2px solid var(--solidColor);

    & > h4 {
        opacity: 0.67;
        color: white;
    }

    & > div {
        background-color: var(--solidColor);

        &::after {
            --size: 12px;
            content: "";
            left: 50%;
            top: 50%;
            position: absolute;
            height: var(--size);
            width: var(--size);
            opacity: 0.67;
            background-color: white;
            border-radius: 30px;
            transform: translate(-50%, -50%);
        }
    }
  `
      : `
    scale: 0.95;
    border: 2px solid var(--transparentColor);

    &:hover {
        scale: 0.97;
        background: #dddddd0d;
    }

    &:active {
        scale: 0.93;
    }

    & > div {
        background-color: var(--transparentColor);

        &::after {
            --size: 0px;
            content: "";
            left: 50%;
            top: 50%;
            position: absolute;
            height: var(--size);
            width: var(--size);
            opacity: 0.67;
            background-color: white;
            border-radius: 30px;
            transform: translate(-50%, -50%);
        }
    }
    `}
`;

export const MainBlockchainItemText = styled.main`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const BlockchainItemText = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1.2rem;
  font-weight: bolder;
`;

export const BlockchainItemSubText = styled.h4`
  font-family: "Source Sans Pro";
  font-size: 0.95rem;
  font-weight: 200;
  opacity: 1;
`;

export const MainBlockchainItemIcon = styled.main`
  display: grid;
  place-content: center;
  background-color: #eee1;
  margin-right: 10px;
  padding: calc(var(--three-px) * 3);
  border-radius: 5px;
`;

export const BlockchainItemIcon = styled.img`
  --size: 32px;
  height: var(--size);
  width: var(--size);
  position: relative;
`;

export const BlockchainItemSelect = styled.div`
  --size: 20px;
  height: var(--size);
  width: var(--size);
  position: absolute;
  right: calc(var(--size) * 0.5);
  top: 50%;
  transform: translateY(-50%);
  border-radius: 30px;
`;

export const MainGasPrice = styled.main`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const GasPriceIcon = styled.img`
  --size: 24px;
  height: var(--size);
  width: var(--size);
  margin-right: calc(var(--ten-px));
`;

export const GasPriceText = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1.05rem;
  font-weight: 600;

  span {
    color: ${({
      theme: {
        color: { blue01 },
      },
    }) => blue01};
    font-size: 1.1rem;
    font-weight: 900;
  }
`;

export const MainAddressBalance = styled.main`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: calc(var(--ten-px) * 2);
  margin-top: calc(var(--ten-px) * 2);
`;

export const AddressBalanceTitle = styled.h4`
  font-family: "Source Sans Pro";
  font-size: 1.4rem;
  font-weight: bolder;
`;

export const AddressBalanceResult = styled.h4`
  font-family: "Source Sans Pro";
  font-size: 1.1rem;
  font-weight: thin;

  span {
    font-family: "Nunito Sans";
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({
      theme: {
        color: { white01 },
      },
    }) => `${white01}ac`};
  }
`;

export const MainTokenDashboard = styled.main`
  height: 80vh;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  margin-top: calc(var(--ten-px) * 3);
  padding: calc(var(--ten-px) * 2);
  background: ${({
    theme: {
      color: { white01 },
    },
  }) => `${white01}24`};
`;

export const TableHeader = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 0.5fr 0.5fr;
  background-color: ${({
    theme: {
      color: { green01 },
    },
  }) => `${green01}a2`};
  padding: calc(var(--seven-px) * 1.4);
  border-radius: 5px;
`;

export const RowScroller = styled.main`
  --spacing: calc(var(--ten-px) * 2);
  height: fit-content;
  max-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  margin-top: var(--spacing);
`;

export const RowContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2px;
`;

export const ColumnTitle = styled.h4<IColumnTitle>`
  font-family: "Nunito Sans";
  font-size: 1rem;
  font-weight: 600;
  text-align: ${({ $textAlign }) => $textAlign};
  text-transform: uppercase;
`;
