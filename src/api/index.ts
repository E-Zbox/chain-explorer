import { Network, Alchemy } from "alchemy-sdk";
// ./interface
import {
  INumberResponse,
  IGetTokenMetadataResponse,
  IERCxTokenResponse,
  IERCxToken,
} from "./interface";
// @/utils/explorer
import { ARBITRUM_HREF, BASE_HREF, ETHEREUM_HREF } from "@/utils/explorer";

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const ARBISCAN_API_KEY = process.env.NEXT_PUBLIC_ARBISCAN_API_KEY;
const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;

const getAlchemy = (networkHref: string) => {
  try {
    if (!ALCHEMY_API_KEY) {
      throw new Error(`'ALCHEMY_API_KEY' missing in environment`);
    }

    let settings = {
      apiKey: "",
      network: Network.ETH_MAINNET,
    };

    switch (networkHref) {
      case ARBITRUM_HREF:
        settings = {
          apiKey: ALCHEMY_API_KEY,
          network: Network.ARB_MAINNET,
        };
        break;
      case BASE_HREF:
        settings = {
          apiKey: ALCHEMY_API_KEY,
          network: Network.BASE_MAINNET,
        };
        break;
      case ETHEREUM_HREF:
        settings = {
          apiKey: ALCHEMY_API_KEY,
          network: Network.ETH_MAINNET,
        };
        break;
      default:
        throw new Error("Unknown network passed!");
    }

    const alchemy = new Alchemy(settings);

    return alchemy;
  } catch (error) {
    throw error;
  }
};

export const getAddressBalance = async (
  networkHref: string,
  contractAddress: string
): Promise<INumberResponse> => {
  let response: INumberResponse = {
    data: 0,
    error: "",
    success: false,
  };

  try {
    const alchemy = getAlchemy(networkHref);

    const balanceBN = await alchemy.core.getBalance(contractAddress);

    response = {
      data: Number(balanceBN),
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getNetworkGasPrice = async (
  networkHref: string
): Promise<INumberResponse> => {
  let response: INumberResponse = {
    data: 0,
    error: "",
    success: false,
  };
  try {
    const alchemy = getAlchemy(networkHref);

    const gasPriceBN = await alchemy.core.getGasPrice();

    response = {
      data: Number(gasPriceBN),
      error: "",
      success: true,
    };
  } catch (error) {
    console.log(error);
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokenMetadata = async (
  networkHref: string,
  contractAddress: string
): Promise<IGetTokenMetadataResponse> => {
  let response: IGetTokenMetadataResponse = {
    data: {
      decimals: null,
      logo: null,
      name: null,
      symbol: null,
    },
    error: "",
    success: false,
  };

  try {
    const alchemy = getAlchemy(networkHref);

    const data = await alchemy.core.getTokenMetadata(contractAddress);

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    console.log(error);
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getArbitrumERCxTokens = async (): Promise<IERCxTokenResponse> => {
  let response: IERCxTokenResponse = {
    data: [],
    error: "",
    success: false,
  };

  try {
    if (!ARBISCAN_API_KEY) {
      throw new Error(`'ARBISCAN_API_KEY' missing in environment`);
    }

    const result = await fetch(
      `https://api.arbiscan.io/api?module=account&action=tokentx&address=0x0000000000000000000000000000000000000000&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${ARBISCAN_API_KEY}`
    );

    const { result: _data }: { result: any[] } = await result.json();

    const data = _data.map(
      ({
        contractAddress: address,
        tokenDecimal: decimals,
        tokenName: name,
        tokenSymbol: symbol,
      }) => ({ address, decimals, name, symbol, type: "ERC-20" })
    );

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getBaseERCxTokens = async (): Promise<IERCxTokenResponse> => {
  let response: IERCxTokenResponse = {
    data: [],
    error: "",
    success: false,
  };
  try {
    const result = await fetch(
      "https://base.blockscout.com/api/v2/tokens?type=ERC-20,ERC-721,ERC-1155"
    );

    const { items } = await result.json();

    const _data: any[] = items;

    const data = _data.map(
      ({ address, decimals, icon_url: icon, name, symbol, type }) => ({
        address,
        decimals,
        icon,
        name,
        symbol,
        type,
      })
    );

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getEthereumERCxTokens = async (): Promise<IERCxTokenResponse> => {
  let response: IERCxTokenResponse = {
    data: [],
    error: "",
    success: false,
  };

  try {
    if (!ETHERSCAN_API_KEY) {
      throw new Error(`'ETHERSCAN_API_KEY' missing in environment`);
    }

    const result = await fetch(
      `https://api.arbiscan.io/api?module=account&action=tokentx&address=0x0000000000000000000000000000000000000000&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );

    const { result: _data }: { result: any[] } = await result.json();

    const data = _data.map(
      ({
        contractAddress: address,
        tokenDecimal: decimals,
        tokenName: name,
        tokenSymbol: symbol,
      }) => ({ address, decimals, name, symbol, type: "ERC-20" })
    );

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};
