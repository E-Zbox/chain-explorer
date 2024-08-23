"use client";
import { ChangeEvent, FocusEventHandler, useEffect, useState } from "react";
// api
import { getAddressBalance, getNetworkGasPrice } from "@/api";
// store
import { useExplorerStore } from "@/store";
// styles
import {
  MainSearch,
  SearchIcon,
  SearchInput,
} from "../styles/Searchbar.styles";
// utils
import { screens } from "@/utils/data";

const Searchbar = () => {
  const {
    search: {
      assets: { searchLogo },
    },
  } = screens;
  const {
    searchLoading,
    setSearchLoading,
    searchText,
    setSearchText,
    searchResult,
    setSearchResult,
    supportedBlockchainState,
    setSelectedBlockchainGasPrice,
  } = useExplorerStore(
    ({
      searchLoading,
      setSearchLoading,
      searchText,
      setSearchText,
      searchResult,
      setSearchResult,
      supportedBlockchainState,
      setSelectedBlockchainGasPrice,
    }) => ({
      searchLoading,
      setSearchLoading,
      searchText,
      setSearchText,
      searchResult,
      setSearchResult,
      supportedBlockchainState,
      setSelectedBlockchainGasPrice,
    })
  );

  const { href: selectedNetwork } = supportedBlockchainState.find(
    (item) => item.selected
  )!;

  const [isFocused, setIsFocused] = useState(false);

  const handleClick = async () => {
    if (searchText.length == 0) {
      return;
    }

    const regex = /^0x[a-fA-F0-9]{40}$/;

    if (!regex.test(searchText)) {
      return alert(
        `Enter a valid ${
          selectedNetwork.substring(0, 1) +
          selectedNetwork.substring(1).toLowerCase()
        } address!`
      );
    }

    setSearchLoading(true);

    const { data, error, success } = await getAddressBalance(
      selectedNetwork,
      searchText
    );

    if (!success) {
      console.log(error);
    } else {
      setSearchResult(`${data}`);
    }

    setSearchLoading(false);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = ({ type }) => {
    if (type === "focus") {
      setIsFocused(true);
    } else if (type === "blur") {
      setIsFocused(false);
    }
  };

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchText(value);
  };

  useEffect(() => {
    const { href: selectedNetwork } = supportedBlockchainState.find(
      (item) => item.selected
    )!;

    getNetworkGasPrice(selectedNetwork)
      .then(({ data, error, success }) => {
        if (!success) {
          throw error;
        }

        setSelectedBlockchainGasPrice(data);
      })
      .catch((err) => console.log(err));
  }, [supportedBlockchainState]);

  return (
    <MainSearch $inputFocused={isFocused}>
      <SearchIcon src={searchLogo.src} onClick={handleClick} />
      <SearchInput
        id="input_search"
        name="input_search"
        value={searchText}
        placeholder={"Type an address to get balance.."}
        onBlur={handleFocus}
        onChange={handleInputChange}
        onFocus={handleFocus}
      />
    </MainSearch>
  );
};

export default Searchbar;
