import { FC } from "react";
import { ThemeContextProvider } from "@context/theme/Theme";
import { AppContextProvider } from "@context/state/Global";
import { Router } from "./routes/Router";

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
