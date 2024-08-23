"use client";
// styles
import { MainNav, MainTitle, NavLogo, SubTitle } from "../styles/Navbar.styles";
import { FlexContainer } from "../styles/shared/Container.styles";
// utils
import { screens } from "@/utils/data";

const Navbar = () => {
  const {
    default: {
      assets: { appLogo },
    },
  } = screens;
  return (
    <MainNav>
      <NavLogo src={appLogo.src} />
      <FlexContainer
        $alignItems="flex-start"
        $width="fit-content"
        $miscellaneous="margin-left: 10px;"
      >
        <MainTitle>CHAIN</MainTitle>
        <SubTitle>Explorer</SubTitle>
      </FlexContainer>
    </MainNav>
  );
};

export default Navbar;
