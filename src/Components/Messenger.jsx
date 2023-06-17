import React, { useContext } from "react";
import LoginDialogg from "./Account/LoginDialogg";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { AccountContext } from "../Context/AccountProvider";
import ChatDailog from "../Chat/ChatDailog";
// use style components from material ui

const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 115px;
  background-color: #00a884;
  box-shadow: none;
`;
// use style for box components
const Components = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Components>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDailog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialogg />
        </>
      )}
    </Components>
  );
};

export default Messenger;
