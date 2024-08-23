import { StaticImageData } from "next/image";
// assets
import blockchain01 from "../../public/blockchain-01.webp";
import blockchain02 from "../../public/blockchain-02.webp";
import blockchain03 from "../../public/blockchain-03.webp";
import launchAppArrow from "../../public/icons8-arrow-60.png";

interface IContent {
  body: string;
  image: StaticImageData;
  title: string;
}

const contents: IContent[] = [
  {
    body: "Track gas costs and token details across multiple chains to make informed trading decisions.",
    image: blockchain01,
    title: "ChainMetrics",
  },
  {
    body: "Monitor real-time gas prices across Ethereum, Base, and Arbitrum to optimize your transaction fees.",
    image: blockchain02,
    title: "GasGuru",
  },
  {
    body: "Get a closer look at tokens’ market data and metadata across leading blockchains in one place.",
    image: blockchain03,
    title: "TokenLens",
  },
  {
    body: "",
    image: blockchain01,
    title: "",
  },
];

export default {
  assets: {
    launchAppArrow,
  },
  contents,
};
