import React, { useState, useContext } from "react";
import {
  Container,
  IconContainer,
  MobileContainer,
  Icon,
  CatImg,
  ImgDiv,
  TitleImg,
  Desc,
  Item,
  Title,
  Line,
  ToggleMode,
} from "./AppStyle";
import Cat from "./cat.jpg";
import { ModeContext } from "./context";

const App = () => {
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ModeContext);
  const dark = {
    icon: "black",
    title: "black",
    background: "white",
  };

  const light ={
    icon: 'white',
    title:'white',
    background: 'black',
  }

  const setIsDarkMode = () => {
    setMode(!mode);
    setTheme(mode? dark: light)
  };
  return (
    <Container >
      <MobileContainer color={theme.background}>
        <IconContainer>
          <Icon.Arrow color={theme.icon}/>
          <Icon.Switch color={theme.icon}/>
        </IconContainer>
        <ImgDiv>
          <CatImg src={Cat} alt="cat" />
          <TitleImg color={theme.title}>Catty</TitleImg>
          <Desc color={theme.title}>CatLover</Desc>
        </ImgDiv>
        {/* darkMode */}
        <Item>
          <Icon.Moon color={theme.icon}/>
          <Title color={theme.title}>Dark Mode</Title>
          <ToggleMode onChange={setIsDarkMode} checked={mode} size={40} />
        </Item>
        {/* Grid */}
        <Item>
          <Icon.Grid color={theme.icon}/>
          <Title color={theme.title}>Story</Title>
        </Item>
        {/* Chat */}
        <Item>
          <Icon.User color={theme.icon}/>
          <Title color={theme.title}>Chat heads</Title>
        </Item>
        {/* Groups */}
        <Item>
          <Icon.Userplus color={theme.icon}/>
          <Title color={theme.title}>Groups</Title>
        </Item>
        <Line></Line>
        {/* Media */}
        <Item>
          <Icon.Media color={theme.icon}/>
          <Title color={theme.title}>Media and photos</Title>
        </Item>
        {/* Settings */}
        <Item>
          <Icon.Setting color={theme.icon}/>
          <Title color={theme.title}>Settings and Privacy</Title>
        </Item>
        {/* Comments */}
        <Item>
          <Icon.Comments color={theme.icon} />
          <Title color={theme.title}>Help Centre</Title>
        </Item>
        {/* Notifications */}
        <Item>
          <Icon.Notification color={theme.icon} />
          <Title color={theme.title}>Notifications</Title>
        </Item>
      </MobileContainer>
    </Container>
  );
};

export default App;
