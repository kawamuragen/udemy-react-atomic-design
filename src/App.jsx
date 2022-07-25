import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
