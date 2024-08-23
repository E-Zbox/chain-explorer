import { create } from "zustand";
// api
import { IERCxToken } from "@/api/interface";
// utils
import {
  ARBITRUM_HREF,
  BASE_HREF,
  ETHEREUM_HREF,
  ISupportedBlockchain,
  supportedBlockchains,
} from "@/utils/explorer";

export interface IBlockchainToken {
  [tokenAddress: string]: IERCxToken;
}

interface IBlockchainERCxToken {
  [blockchain: string]: IBlockchainToken;
}

interface IExplorerStore {
  blockchainTokenLoading: boolean;
  setBlockchainTokenLoading: (newState: boolean) => void;
  blockchainTokenState: IBlockchainERCxToken;
  setBlockchainTokenState: (
    blockchain: string,
    tokens: IBlockchainToken
  ) => void;
  updateBlockchainTokenIcon: (
    blockchain: string,
    tokenAddress: string,
    newState: string
  ) => void;
  searchLoading: boolean;
  setSearchLoading: (newState: boolean) => void;
  searchText: string;
  setSearchText: (newState: string) => void;
  searchResult: string;
  setSearchResult: (newState: string) => void;
  selectedBlockchainGasPrice: number;
  setSelectedBlockchainGasPrice: (newState: number) => void;
  supportedBlockchainState: ISupportedBlockchain[];
  updateSupportedBlockchainState: (href: string) => void;
}

export const useExplorerStore = create<IExplorerStore>((set) => ({
  blockchainTokenLoading: false,
  setBlockchainTokenLoading: (newState: boolean) =>
    set({ blockchainTokenLoading: newState }),
  blockchainTokenState: {
    [ARBITRUM_HREF]: {},
    [BASE_HREF]: {},
    [ETHEREUM_HREF]: {},
  },
  setBlockchainTokenState: (blockchain: string, tokens: IBlockchainToken) =>
    set((store) => {
      return {
        blockchainTokenState: {
          ...store.blockchainTokenState,
          [blockchain]: tokens,
        },
      };
    }),
  updateBlockchainTokenIcon: (
    blockchain: string,
    tokenAddress: string,
    newState: string
  ) =>
    set((store) => {
      const token = store.blockchainTokenState[blockchain][tokenAddress];

      if (token) {
        return {
          blockchainTokenState: {
            ...store.blockchainTokenState,
            [blockchain]: {
              ...store.blockchainTokenState[blockchain],
              [tokenAddress]: {
                ...store.blockchainTokenState[blockchain][tokenAddress],
                icon: newState,
              },
            },
          },
        };
      }

      return store;
    }),
  searchLoading: false,
  setSearchLoading: (newState: boolean) => set({ searchLoading: newState }),
  searchText: "",
  setSearchText: (newState: string) => set({ searchText: newState }),
  searchResult: "",
  setSearchResult: (newState: string) => set({ searchResult: newState }),
  selectedBlockchainGasPrice: 0,
  setSelectedBlockchainGasPrice: (newState: number) =>
    set({ selectedBlockchainGasPrice: newState }),
  supportedBlockchainState: supportedBlockchains,
  updateSupportedBlockchainState: (href: string) =>
    set((store) => {
      const updatedState = store.supportedBlockchainState.map((item) => ({
        ...item,
        selected: item.href === href,
      }));

      return {
        supportedBlockchainState: updatedState,
      };
    }),
}));
