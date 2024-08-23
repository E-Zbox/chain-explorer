import { StaticImageData } from "next/image";
// assets
import arbitrumLogo from "../../public/arbitrum-logo.svg";
import baseLogo from "../../public/base-logo.webp";
import ethereumLogo from "../../public/ethereum-logo.png";
import gasStationImg from "../../public/gas-station-logo.png";
import hoverArrowImg from "../../public/hover-arrow-logo.png";
import patternBgImg from "../../public/pattern-background.jpg";
import unknownTokenLogo from "../../public/unknown-token-logo.png";

export interface ISupportedBlockchain {
  href: string;
  image: StaticImageData;
  selected: boolean;
  title: string;
}

export const ARBITRUM_HREF = "ARBITRUM";

export const BASE_HREF = "BASE";

export const ETHEREUM_HREF = "ETHEREUM";

export const supportedBlockchains: ISupportedBlockchain[] = [
  {
    href: ARBITRUM_HREF,
    image: arbitrumLogo,
    selected: false,
    title: "Arbitrum",
  },
  {
    href: BASE_HREF,
    image: baseLogo,
    selected: true,
    title: "Base",
  },
  {
    href: ETHEREUM_HREF,
    image: ethereumLogo,
    selected: false,
    title: "Ethereum",
  },
];

export default {
  assets: {
    gasStationImg,
    hoverArrowImg,
    patternBgImg,
    unknownTokenLogo,
  },
  alchemyURL: {
    alchemyArbitrumUrl: "https://arb-mainnet.g.alchemy.com/v2",
    alchemyBaseUrl: "https://arb-mainnet.g.alchemy.com/v2",
    alchemyEthereumUrl: "https://eth-mainnet.g.alchemy.com/v2",
  },
};
