// assets
import appLogo from "../../public/chain-explorer-logo.png";
import searchLogo from "../../public/search-logo.png";
// .
import explorer from "./explorer";
import home from "./home";

export const devices = {};

export const screens = {
  default: {
    assets: {
      appLogo,
    },
    href: {
      explorerHREF: "EXPLORER_HREF",
    },
  },
  explorer,
  home,
  search: {
    assets: {
      searchLogo,
    },
  },
};

export const theme = {
  color: {
    blue01: "#168BB2",
    green01: "#24343c",
    green02: "#3c4c4e",
    green03: "#546465",
    white01: "#d2d5d6",
  },
};
