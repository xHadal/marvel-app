import { FC } from "react";
import { ThemeContextProvider } from "@context/Theme";
import { AppContextProvider } from "@context/Global";
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
