import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import React from "react";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext } from "react";

import { addUser } from "../../service/api";

// style
const dialogstyle = {
  height: "95%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  bodShadwo: "none",
  overflow: "none",
};
// box is a replacment of div in material ui

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Qrcode = styled("img")({
  height: 260,
  width: 260,
  margin: "50px 25px 0 40px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyleList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 20px;
    color: #4a4a4a;
  }
`;
const LoginDialogg = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };
  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      <Component>
        <Container>
          {/*typography is a replacement of p tag  */}
          <Title>To use Whatapp on your PC</Title>
          {/* use order list */}
          <StyleList>
            <ListItem>1. Open Whatapp on your PC</ListItem>
            <ListItem>2. Tap Menu : OR ⚙️ and Select Linked Devices</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyleList>
        </Container>
        <Box fontStyle={{ position: "relative" }}>
          <Qrcode src={qrCodeImage} alt="qr code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translatex(25%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialogg;
