import React, { useState } from "react";
import { Container, IconContainer, MobileContainer,Icon } from "./AppStyle";

const App =()=>{

  return(
    <Container>
       <MobileContainer>
         <IconContainer>
          <Icon.Arrow /> 
         </IconContainer>
       </MobileContainer>
    </Container>

  )
}


export default App;
