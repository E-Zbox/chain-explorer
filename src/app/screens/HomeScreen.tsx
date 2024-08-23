"use client";
// styles
import {
  Body,
  BodyContainer,
  BodyScroller,
  ContentImage,
  Header,
  HeaderContainer,
  HeaderScroller,
  ImageContainer,
  ImageScroller,
  LaunchAppButton,
  LaunchAppButtonImg,
  LaunchAppText,
  MainContent,
  MainHome,
  MainLaunchApp,
  Quote,
  TextContainer,
} from "../styles/HomeScreen.styles";
// utils
import { screens } from "@/utils/data";

const HomeScreen = () => {
  const {
    default: {
      href: { explorerHREF },
    },
    home: {
      assets: { launchAppArrow },
      contents,
    },
  } = screens;

  const [_, { body, image, title }] = contents;

  return (
    <MainHome>
      <MainContent>
        <TextContainer>
          <HeaderScroller>
            <HeaderContainer>
              <Header>{title}</Header>
            </HeaderContainer>
          </HeaderScroller>
          <BodyScroller>
            <Quote $rotate={true}>"</Quote>
            <BodyContainer>
              <Body>
                {body}
                <Quote $rotate={false}>"</Quote>
              </Body>
            </BodyContainer>
          </BodyScroller>
        </TextContainer>
        <ImageScroller>
          <ImageContainer>
            <ContentImage src={image.src} />
          </ImageContainer>
        </ImageScroller>
      </MainContent>
      <MainLaunchApp href={`#${explorerHREF}`}>
        <LaunchAppText>Launch App</LaunchAppText>
        <LaunchAppButton>
          <LaunchAppButtonImg src={launchAppArrow.src} />
        </LaunchAppButton>
      </MainLaunchApp>
    </MainHome>
  );
};

export default HomeScreen;
