import React from "react";
import { Box, Drawer, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "@emotion/styled";
import Profile from "./Profile";

const Text = styled(Typography)`
  font-size: 18px;
`;

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  display: flex;
  color: #ffffff;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const DrawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "35%",
  boxShadow: "none",
};
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: DrawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBackIcon onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
