import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";

const Menuoption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;
const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);
  const handleClose = () => {
    setOpen(null);
  };
  const handleClik = (e) => {
    setOpen(e.currentTarget);
  };
  return (
    <>
      <MoreVertIcon onClick={handleClik} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Menuoption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </Menuoption>
        <Menuoption onClick={handleClose}>My account</Menuoption>
        <Menuoption onClick={handleClose}>Logout</Menuoption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
