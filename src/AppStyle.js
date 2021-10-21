import styled from "styled-components";
import { Settings2 } from "@styled-icons/evaicons-solid/Settings2";
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { Switch } from "@styled-icons/icomoon/Switch";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { Grid } from "@styled-icons/bootstrap/Grid";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { PermMedia } from "@styled-icons/material-sharp/PermMedia";
import { CommentDots } from "@styled-icons/boxicons-regular/CommentDots";
import { Notifications } from "@styled-icons/ionicons-sharp/Notifications";

import Toggle from 'react-dark-mode-toggle'

export const ToggleMode = styled(Toggle)`
  margin-left: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: fit-content;
  padding: 100px 300px;
`;

export const MobileContainer = styled.div`
  width: 400px;
  height: 600px;
  min-width: 400px;
  min-height: 600px;
  background-color: ${({color})=> color};
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
`;

export const IconContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

export const Icon = styled.div``;

Icon.Arrow = styled(KeyboardArrowLeft)`
  color: ${({color})=> color};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

Icon.Switch = styled(Switch)`
  color: ${({color})=> color};
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-left: auto;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const CatImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid lightgrey;
`;

export const TitleImg = styled.div`
  color: ${({color})=> color};
  font-size: 22px;
  font-weight: bold;
  font-family: SF Pro Display;
`;

export const Desc = styled.div`
  color: ${({color})=> color};
  font-size: 14px;
  font-weight: normal;
  font-family: SF Pro Display;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
`;

export const Title = styled.div`
  color: ${({color})=> color};
  font-size: 16px;
  font-weight: normal;
  font-family: SF Pro Display;
  padding-left: 15px;
`;

export const Line = styled.div`
  width: 75%;
  height: 2px;
  background-color: #e9e9e9;
  margin: 10px;
  box-sizing: border-box;
  /* padding: 10px 0; */
`;

Icon.Moon = styled(Moon)`
  width: 20px;
  height: 20px;
  color: ${({color})=> color};
`;

Icon.Grid = styled(Grid)`
  width: 20px;
  height: 20px;
  color: #fbb65c;
`;

Icon.User = styled(UserCheck)`
  width: 20px;
  height: 20px;
  color: #fbb65c;
`;

Icon.Userplus = styled(UserPlus)`
  width: 20px;
  height: 20px;
  color: #36e3ff;
`;

Icon.Userplus = styled(UserPlus)`
  width: 20px;
  height: 20px;
  color: #36e3ff;
`;

Icon.Media = styled(PermMedia)`
  width: 20px;
  height: 20px;
  color: #5476ff;
`;

Icon.Setting = styled(Settings2)`
  width: 20px;
  height: 20px;
  color: #5476ff;
`;

Icon.Comments = styled(CommentDots)`
  width: 20px;
  height: 20px;
  color: #0bc630;
`;

Icon.Notification = styled(Notifications)`
  width: 20px;
  height: 20px;
  color: #a394c2 ;
`;