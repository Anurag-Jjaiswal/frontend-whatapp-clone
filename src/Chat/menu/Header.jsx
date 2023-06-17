import React, { useState } from "react";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import ChatIcon from "@mui/icons-material/Chat";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Components/Drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
  & first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
  & second-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;
const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        <Wrapper>
          <HistoryToggleOffIcon />
          <ChatIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
