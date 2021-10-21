import styled from "styled-components";
import { Settings } from "@styled-icons/evaicons-solid/Settings2";
import { Arrowleft } from "@styled-icons/material-rounded/KeyboardArrowLeft";
import { Switch } from "@styled-icons/icomoon/Switch";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { Grid } from "@styled-icons/bootstrap/Grid";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { PermMedia } from "@styled-icons/material-sharp/PermMedia";
import { CommentDots } from "@styled-icons/boxicons-regular/CommentDots";
import { Notifications } from "@styled-icons/ionicons-sharp/Notifications";
import {Zap} from '@styled-icons/Adobe'


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
  background-color: whitesmoke;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
`;


export const IconContainer = styled.div`
  width: 100%;
  padding: 20px;

`;

export const Icon = styled.div`
  
`;

Icon.Arrow = styled(Arrowleft)`
color: black;
width: 30px;
height: 30px;
cursor: pointer;
`  