"use client";
import { useEffect } from "react";
// components
import Searchbar from "../components/Searchbar";
import TokenRow from "../components/TokenRow";
// store
import { IBlockchainToken, useExplorerStore } from "@/store";
// styles
import {
  FlexContainer,
  PositionContainer,
} from "../styles/shared/Container.styles";
import {
  AddressBalanceResult,
  AddressBalanceTitle,
  BlockchainItem,
  BlockchainItemIcon,
  BlockchainItemSelect,
  BlockchainItemSubText,
  BlockchainItemText,
  ColumnTitle,
  GasPriceIcon,
  GasPriceText,
  MainAddressBalance,
  MainBlockchain,
  MainBlockchainItemIcon,
  MainBlockchainItemText,
  MainExplorer,
  MainGasPrice,
  MainTitle,
  MainTokenDashboard,
  RowContainer,
  RowScroller,
  TableHeader,
} from "../styles/ExplorerScreen.styles";
// utils
import { screens } from "@/utils/data";
import { expressInThousands } from "@/utils/transformers";
import { ARBITRUM_HREF, BASE_HREF, ETHEREUM_HREF } from "@/utils/explorer";
import { getArbitrumERCxTokens, getBaseERCxTokens } from "@/api";
import { IERCxToken } from "@/api/interface";

const ExplorerScreen = () => {
  const {
    default: {
      href: { explorerHREF },
    },
    explorer: {
      assets: { gasStationImg, patternBgImg },
    },
  } = screens;

  const {
    blockchainTokenLoading,
    setBlockchainTokenLoading,
    blockchainTokenState,
    setBlockchainTokenState,
    searchLoading,
    searchResult,
    selectedBlockchainGasPrice,
    supportedBlockchainState,
    updateSupportedBlockchainState,
  } = useExplorerStore(
    ({
      blockchainTokenLoading,
      setBlockchainTokenLoading,
      blockchainTokenState,
      setBlockchainTokenState,
      searchLoading,
      searchResult,
      selectedBlockchainGasPrice,
      supportedBlockchainState,
      updateSupportedBlockchainState,
    }) => ({
      blockchainTokenLoading,
      setBlockchainTokenLoading,
      blockchainTokenState,
      setBlockchainTokenState,
      searchLoading,
      searchResult,
      selectedBlockchainGasPrice,
      supportedBlockchainState,
      updateSupportedBlockchainState,
    })
  );

  const { href: selectedNetwork } = supportedBlockchainState.find(
    (item) => item.selected
  )!;

  const gasPriceInGwei = (selectedBlockchainGasPrice / 1e9).toFixed(3);

  const selectedBlockchainTokens: IERCxToken[] = [];

  const selectedNetworkTokenAddresses = Object.getOwnPropertyNames(
    blockchainTokenState[selectedNetwork] || {}
  );

  selectedNetworkTokenAddresses.map((tokenAddress) =>
    selectedBlockchainTokens.push(
      blockchainTokenState[selectedNetwork][tokenAddress]
    )
  );

  useEffect(() => {
    setBlockchainTokenLoading(true);
    switch (selectedNetwork) {
      case ARBITRUM_HREF:
        const arbitrumTokens = blockchainTokenState[ARBITRUM_HREF];
        if (Object.getOwnPropertyNames(arbitrumTokens).length == 0) {
          getArbitrumERCxTokens()
            .then(({ data, error, success }) => {
              if (!success) {
                throw error;
              }

              const addressToToken: IBlockchainToken = {};

              data.forEach((item) => {
                addressToToken[item.address] = item;
              });

              setBlockchainTokenState(ARBITRUM_HREF, addressToToken);
            })
            .catch((err) => console.log(err));
        }
        break;
      case BASE_HREF:
        const baseTokens = blockchainTokenState[BASE_HREF];
        if (Object.getOwnPropertyNames(baseTokens).length == 0) {
          getBaseERCxTokens()
            .then(({ data, error, success }) => {
              if (!success) {
                throw error;
              }

              const addressToToken: IBlockchainToken = {};

              data.forEach((item) => {
                addressToToken[item.address] = item;
              });

              setBlockchainTokenState(BASE_HREF, addressToToken);
            })
            .catch((err) => console.log(err));
        }
        break;
      case ETHEREUM_HREF:
        const ethereumTokens = blockchainTokenState[ETHEREUM_HREF];
        if (Object.getOwnPropertyNames(ethereumTokens).length == 0) {
          getArbitrumERCxTokens()
            .then(({ data, error, success }) => {
              if (!success) {
                throw error;
              }

              const addressToToken: IBlockchainToken = {};

              data.forEach((item) => {
                addressToToken[item.address] = item;
              });

              setBlockchainTokenState(ETHEREUM_HREF, addressToToken);
            })
            .catch((err) => console.log(err));
        }
        break;
      default:
        break;
    }

    setBlockchainTokenLoading(false);
  }, [selectedNetwork]);

  useEffect(() => {
    console.log(blockchainTokenState);
  }, [blockchainTokenState]);

  return (
    <MainExplorer id={explorerHREF} $bgImg={patternBgImg.src}>
      <PositionContainer $miscellaneous="min-height: 100%;">
        <MainTitle>Supported Blockchains</MainTitle>
        <MainBlockchain>
          {supportedBlockchainState.map(
            ({ href, image, selected, title }, index) => (
              <BlockchainItem
                key={index}
                $selected={selected}
                onClick={() => updateSupportedBlockchainState(href)}
              >
                <MainBlockchainItemIcon>
                  <BlockchainItemIcon src={image.src} />
                </MainBlockchainItemIcon>
                <MainBlockchainItemText>
                  <BlockchainItemText>{title}</BlockchainItemText>
                  <BlockchainItemSubText>Network</BlockchainItemSubText>
                </MainBlockchainItemText>
                <BlockchainItemSelect />
              </BlockchainItem>
            )
          )}
          <PositionContainer
            $flexDirection="row"
            $justifyContent="flex-end"
            $position="absolute"
            $right="0px"
            $top="50%"
            $width="fit-content"
            $bgColor="#de23431a"
            $padding="5px"
            $miscellaneous="border-radius: 3px; transform: translateY(-50%);"
          >
            <MainGasPrice>
              <GasPriceIcon src={gasStationImg.src} />
              <GasPriceText>
                Gas Price: <span>{gasPriceInGwei} GWEI</span>
              </GasPriceText>
            </MainGasPrice>
          </PositionContainer>
        </MainBlockchain>
        <MainAddressBalance>
          <AddressBalanceTitle>
            Lookup native chain crypto balance
          </AddressBalanceTitle>
          <Searchbar />
          {searchResult.length > 0 ? (
            <AddressBalanceResult>
              Balance: <span>{searchResult} ETH</span>
            </AddressBalanceResult>
          ) : (
            <></>
          )}
        </MainAddressBalance>
        <MainTokenDashboard>
          <TableHeader>
            <ColumnTitle $textAlign="left">Name</ColumnTitle>
            <ColumnTitle $textAlign="center">Decimals</ColumnTitle>
            <ColumnTitle $textAlign="center">Type</ColumnTitle>
          </TableHeader>
          <RowScroller>
            <RowContainer>
              {selectedBlockchainTokens.map(
                ({ address, decimals, icon, name, symbol, type }, key) => (
                  <TokenRow
                    key={key}
                    address={address}
                    decimals={Number(decimals)}
                    icon={icon}
                    name={name}
                    symbol={symbol}
                    type={type}
                  />
                )
              )}
              {/* <TokenRow
                address={""}
                decimals={18}
                icon="https://assets.coingecko.com/coins/images/31059/small/MOG_LOGO_200x200.png?1696529893"
                name="Mog Coin"
                symbol="Mog"
                type="ERC-20"
              />
              <TokenRow
                address={""}
                decimals={18}
                icon="https://assets.coingecko.com/coins/images/31059/small/MOG_LOGO_200x200.png?1696529893"
                name="Mog Coin"
                symbol="Mog"
                type="ERC-20"
              />
              <TokenRow
                address={""}
                decimals={18}
                icon="https://assets.coingecko.com/coins/images/31745/small/token.png?1696530564"
                name="Aerodrome"
                symbol="Aero"
                type="ERC-20"
              />
              <TokenRow
                address={""}
                decimals={18}
                // icon="https://assets.coingecko.com/coins/images/31745/small/token.png?1696530564"
                name="Graph Token"
                symbol="GRT"
                type="ERC-20"
              /> */}
            </RowContainer>
          </RowScroller>
        </MainTokenDashboard>
      </PositionContainer>
    </MainExplorer>
  );
};

export default ExplorerScreen;

const _ = {
  blockNumber: "2792",
  timeStamp: "1623877280",
  hash: "0x91c99c2b8ba0885c0bbcd966583adaeff7fbd77130c015622977e7ce6e1e928e",
  nonce: "0",
  blockHash:
    "0xfab3512eba854478d28a6738d2d3fe629e319f24658f39f8c03b4e229d06868e",
  from: "0x0000000000000000000000000000000000000000",
  contractAddress: "0xf4d48ce3ee1ac3651998971541badbb9a14d7234",
  to: "0xa4b1838cb086dddafa655f247716b502e87a0672",
  value: "1000000000000000",
  tokenName: "Cream",
  tokenSymbol: "CREAM",
  tokenDecimal: "18",
  transactionIndex: "1",
  gas: "2669670",
  gasPrice: "136357472",
  gasUsed: "0",
  cumulativeGasUsed: "0",
  input: "deprecated",
  confirmations: "245852117",
};
