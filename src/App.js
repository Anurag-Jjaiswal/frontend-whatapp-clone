import Messenger from "./Components/Messenger";
// GoogleOAuthProvider is use to login form google page
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";
function App() {
  const clientId =
    "350113293395-tl1tio65u68b49hmthumfaqou4remqkg.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}
export default App;
