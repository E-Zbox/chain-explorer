"use client";
import { MouseEventHandler, useEffect, useState } from "react";
// api
import { getTokenMetadata } from "@/api";
// store
import { useExplorerStore } from "@/store";
// styles
import { FlexContainer } from "../styles/shared/Container.styles";
import {
  HoverArrow,
  MainTokenRow,
  Row,
  TokenIcon,
  TokenName,
  TokenSymbol,
  TokenText,
} from "../styles/TokenRow.styles";
// utils
import { screens } from "@/utils/data";
import { BASE_HREF } from "@/utils/explorer";

interface ITokenRowProps {
  address: string;
  decimals: number;
  icon?: string;
  name: string;
  symbol: string;
  type: string;
}

const TokenRow = ({
  address,
  decimals,
  icon,
  name,
  symbol,
  type,
}: ITokenRowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    explorer: {
      assets: { hoverArrowImg, unknownTokenLogo },
    },
  } = screens;

  const { supportedBlockchainState } = useExplorerStore(
    ({ supportedBlockchainState }) => ({ supportedBlockchainState })
  );

  const { href: selectedNetwork } = supportedBlockchainState.find(
    (item) => item.selected
  )!;

  const handleHover: MouseEventHandler<HTMLDivElement> = ({ type }) => {
    if (type === "mouseover") {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    if (selectedNetwork !== BASE_HREF) {
      getTokenMetadata(selectedNetwork, address)
        .then(({ data, error, success }) => {
          if (!success) {
            throw error;
          }

          const { logo } = data;

          console.log({ selectedNetwork, address, data });

          if (logo !== null) {
            icon = logo;
          }
        })
        .catch((err) => console.log(err));
    }
  }, [selectedNetwork]);

  return (
    <MainTokenRow onMouseOver={handleHover} onMouseLeave={handleHover}>
      <HoverArrow $hover={isHovered} src={hoverArrowImg.src} />
      <Row>
        <FlexContainer
          $height="100%"
          $flexDirection="row"
          $alignItems="center"
          $justifyContent="flex-start"
        >
          <TokenIcon $bgImg={icon || unknownTokenLogo.src} />
          <TokenName>{name}</TokenName>
          <TokenSymbol>{symbol}</TokenSymbol>
        </FlexContainer>
        <TokenText>{decimals}</TokenText>
        <TokenText>{type}</TokenText>
      </Row>
    </MainTokenRow>
  );
};

export default TokenRow;
