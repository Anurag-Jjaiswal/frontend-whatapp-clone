import { Box, Dialog } from "@mui/material";
import React from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import styled from "@emotion/styled";
const dialogstyle = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  bodShadwo: "none",
  overflow: "hidden",
  margin: "20px",
  borderRadius: 0,
};
const Compoent = styled(Box)`
  display: flex;
`;
const LeftComponet = styled(Box)`
  min-width: 450px;
`;
const RightComponent = styled(Box)`
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
  width: 73%;
`;
const ChatDailog = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogstyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Compoent>
        <LeftComponet>
          <Menu />
        </LeftComponet>
        <RightComponent>
          <EmptyChat />
        </RightComponent>
      </Compoent>
    </Dialog>
  );
};

export default ChatDailog;
